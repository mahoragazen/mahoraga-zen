// netlify/functions/charge.js
// รับ Omise token จาก frontend → สร้าง charge ผ่าน Omise API

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let token, amount, cycle, email;
  try {
    ({ token, amount, cycle, email } = JSON.parse(event.body || '{}'));
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  if (!token) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Payment token required' }) };
  }

  const secretKey = process.env.OMISE_SECRET_KEY;
  if (!secretKey) {
    console.error('OMISE_SECRET_KEY not set');
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Payment service not configured' }) };
  }

  // Omise ใช้ Basic Auth: base64(secretKey:)
  const authHeader = 'Basic ' + Buffer.from(secretKey + ':').toString('base64');

  // ── สร้าง Charge ───────────────────────────────────────────────
  const chargeAmount = amount * 100; // Omise ใช้ satang (1 บาท = 100 สตางค์)
  const description = cycle === 'yearly'
    ? 'Mahoraga ZEN — สมาชิกภาพรายปี'
    : 'Mahoraga ZEN — สมาชิกภาพรายเดือน';

  const res = await fetch('https://api.omise.co/charges', {
    method: 'POST',
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: chargeAmount,
      currency: 'thb',
      card: token,
      description,
      metadata: { email, cycle },
      capture: true,
    }),
  });

  const charge = await res.json();

  if (!res.ok || charge.object === 'error') {
    console.error('Omise charge error:', charge);
    const msg = charge.message || 'การชำระเงินไม่สำเร็จ';
    return { statusCode: 402, headers, body: JSON.stringify({ error: msg }) };
  }

  if (charge.status === 'failed') {
    return {
      statusCode: 402,
      headers,
      body: JSON.stringify({ error: 'บัตรถูกปฏิเสธ กรุณาตรวจสอบข้อมูลบัตรหรือลองบัตรใบอื่น' }),
    };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      success: true,
      chargeId: charge.id,
      status: charge.status,
      amount: charge.amount / 100,
    }),
  };
};
