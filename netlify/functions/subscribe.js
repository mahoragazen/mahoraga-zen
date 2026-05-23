// netlify/functions/subscribe.js
// รับ email จาก newsletter form → ส่ง welcome email ผ่าน Resend API

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WELCOME_HTML = (email) => `
<!DOCTYPE html>
<html lang="th">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FDFCF8;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FDFCF8;padding:48px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #e8e0d0;max-width:560px;width:100%;">
        <!-- Header -->
        <tr>
          <td style="background:#2C1F06;padding:36px 40px;text-align:center;">
            <p style="margin:0;color:#C9A84C;font-size:11px;letter-spacing:.32em;text-transform:uppercase;font-style:italic;">
              M A H O R A G A &nbsp; Z E N
            </p>
            <p style="margin:8px 0 0;color:#E8D38A;font-size:22px;font-weight:300;letter-spacing:.04em;">
              ปัญญาแห่งการตื่นรู้
            </p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:48px 40px 36px;text-align:center;">
            <p style="margin:0 0 8px;color:#C9A84C;font-size:11px;letter-spacing:.24em;text-transform:uppercase;">
              ยินดีต้อนรับ
            </p>
            <h1 style="margin:0 0 24px;color:#2C1F06;font-size:28px;font-weight:400;line-height:1.3;">
              บทแรกของเส้นทาง<br>
              <em style="color:#9C7E2B;">เพิ่งเริ่มต้นแล้ว</em>
            </h1>
            <p style="color:#5C4A2E;font-size:16px;line-height:1.8;margin:0 0 28px;">
              ทุกเช้าวันจันทร์ คุณจะได้รับ<br>
              <strong style="color:#2C1F06;">บทสมาธินำทาง ๕ นาที</strong> · บทเรียนภาวะผู้นำ · และบทสวดคัดสรร<br>
              ตรงถึงกล่องจดหมายของคุณ
            </p>
            <p style="color:#8B7B5B;font-size:13px;margin:0 0 36px;">
              ส่งถึง: <strong style="color:#2C1F06;">${email}</strong>
            </p>
            <a href="https://mahoraga-zen.netlify.app/#membership"
               style="display:inline-block;background:#2C1F06;color:#C9A84C;text-decoration:none;
                      padding:14px 32px;font-size:14px;letter-spacing:.1em;border:1px solid #C9A84C;">
              สำรวจทั้งหมดที่ Mahoraga ZEN →
            </a>
          </td>
        </tr>
        <!-- Quote -->
        <tr>
          <td style="padding:24px 40px;border-top:1px solid #f0e8d8;text-align:center;">
            <p style="margin:0;color:#9C7E2B;font-style:italic;font-size:15px;line-height:1.7;">
              "พระอาทิตย์ขึ้นเสมอ — แม้ในวันที่เมฆครึ้ม"
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;background:#F6EFDF;text-align:center;">
            <p style="margin:0;color:#8B7B5B;font-size:12px;line-height:1.6;">
              คุณได้รับอีเมลนี้เพราะสมัครรับข้อมูลที่ mahoraga-zen.netlify.app<br>
              <a href="#" style="color:#9C7E2B;">ยกเลิกการรับข่าวสาร</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
`;

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

  let email;
  try {
    ({ email } = JSON.parse(event.body || '{}'));
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  if (!email || !EMAIL_RE.test(email)) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid email address' }) };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not set');
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Email service not configured' }) };
  }

  // ── ส่ง welcome email ──────────────────────────────────────────
  const fromEmail = process.env.FROM_EMAIL || 'Mahoraga ZEN <onboarding@resend.dev>';

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [email],
      subject: 'ยินดีต้อนรับสู่ Mahoraga ZEN 🌸 — บทสมาธิแรกรอคุณอยู่',
      html: WELCOME_HTML(email),
    }),
  });

  if (!resendRes.ok) {
    const errText = await resendRes.text();
    console.error('Resend error:', resendRes.status, errText);
    return { statusCode: 502, headers, body: JSON.stringify({ error: 'Failed to send email' }) };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ success: true, message: 'Subscribed successfully' }),
  };
};
