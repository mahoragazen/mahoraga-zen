// cookie.jsx — Cookie Policy (นโยบายคุกกี้)
// Follows same visual pattern as disclaimer.jsx + privacy.jsx

function Cookie() {
  return (
    <section id="cookie" className="pad m-dis">
      <div className="wrap m-dis-wrap">
        <div className="section-head reveal" style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="eyebrow">กฎหมาย · นโยบาย</span>
          <TripleDivider />
          <h2><em>นโยบายคุกกี้</em><br />Cookie Policy</h2>
          <p className="muted" style={{ fontSize: 14, marginTop: 16, fontStyle: "italic" }}>
            อัปเดตล่าสุด: ๒๒ พฤษภาคม ๒๕๖๙ · เวอร์ชัน ๑.๐
          </p>
        </div>

        <div className="m-dis-content reveal">

          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๑. คุกกี้คืออะไร?</h3>
            <p>
              คุกกี้ (Cookies) คือไฟล์ข้อมูลขนาดเล็กที่เว็บไซต์จัดเก็บไว้ในเบราว์เซอร์ของท่าน
              เพื่อจดจำการตั้งค่าและปรับปรุงประสบการณ์การใช้งาน
              คุกกี้<strong>ไม่ใช่ไวรัส</strong> และไม่สามารถเข้าถึงไฟล์อื่นในอุปกรณ์ได้
            </p>
          </article>

          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๒. คุกกี้ที่เราใช้</h3>

            <p><strong>ก. คุกกี้ที่จำเป็น (Essential Cookies)</strong> — ปิดไม่ได้</p>
            <ul>
              <li><code style={{ background: "var(--cream-warm)", padding: "2px 6px", fontSize: 13 }}>session_id</code> — จดจำสถานะการล็อกอินของสมาชิก</li>
              <li><code style={{ background: "var(--cream-warm)", padding: "2px 6px", fontSize: 13 }}>csrf_token</code> — ป้องกันการโจมตี Cross-Site Request Forgery</li>
              <li><code style={{ background: "var(--cream-warm)", padding: "2px 6px", fontSize: 13 }}>theme_prefs</code> — บันทึกการตั้งค่า interaction mode ของผู้ใช้</li>
            </ul>

            <p style={{ marginTop: 20 }}><strong>ข. คุกกี้วิเคราะห์ (Analytics Cookies)</strong> — ต้องการความยินยอม</p>
            <ul>
              <li><strong>Google Analytics 4</strong> — นับ pageviews ระยะเวลาเยี่ยมชม และหน้ายอดนิยม ข้อมูลเป็น anonymous</li>
              <li>ข้อมูลถูกส่งให้ Google LLC (สหรัฐอเมริกา) ภายใต้ Standard Contractual Clauses (SCCs)</li>
            </ul>

            <p style={{ marginTop: 20 }}><strong>ค. คุกกี้ฟังก์ชัน (Functional Cookies)</strong></p>
            <ul>
              <li><code style={{ background: "var(--cream-warm)", padding: "2px 6px", fontSize: 13 }}>cart_items</code> — จดจำสินค้าในตะกร้าในรอบ session</li>
              <li><code style={{ background: "var(--cream-warm)", padding: "2px 6px", fontSize: 13 }}>member_tier</code> — แสดงเนื้อหาตามระดับสมาชิก</li>
            </ul>
          </article>

          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๓. ระยะเวลาเก็บคุกกี้</h3>
            <ul>
              <li><strong>Session cookies:</strong> ลบอัตโนมัติเมื่อปิดเบราว์เซอร์</li>
              <li><strong>Analytics cookies:</strong> เก็บสูงสุด ๑๒ เดือน</li>
              <li><strong>Essential cookies:</strong> เก็บตามอายุ session ที่ล็อกอิน (สูงสุด ๓๐ วัน)</li>
            </ul>
          </article>

          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๔. วิธีจัดการหรือปิดคุกกี้</h3>
            <p>ท่านสามารถจัดการคุกกี้ได้ผ่านการตั้งค่าเบราว์เซอร์:</p>
            <ul>
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and site data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Firefox:</strong> Options → Privacy &amp; Security → Cookies and Site Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
            </ul>
            <p>
              <strong>หมายเหตุ:</strong> การปิด Essential Cookies อาจทำให้ระบบสมาชิก
              ตะกร้าสินค้า และการล็อกอินทำงานผิดปกติ
            </p>
            <p>
              สำหรับ Google Analytics โดยเฉพาะ ท่านสามารถติดตั้ง
              <strong> Google Analytics Opt-out Browser Add-on</strong> ได้ที่ tools.google.com/dlpage/gaoptout
            </p>
          </article>

          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๕. สิทธิ์ของท่านตาม PDPA</h3>
            <p>ภายใต้ พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. ๒๕๖๒ ท่านมีสิทธิ์:</p>
            <ul>
              <li>ถอนความยินยอมให้ใช้ Analytics Cookies ได้ทุกเมื่อ โดยไม่กระทบสิทธิ์อื่น</li>
              <li>ขอทราบว่าเราเก็บข้อมูลอะไรจากคุกกี้บ้าง</li>
              <li>ขอให้ลบข้อมูลที่เก็บจากคุกกี้ของท่าน</li>
            </ul>
            <p>ยื่นคำขอใช้สิทธิ์ได้ที่: <strong>privacy@mahoragazen.co</strong></p>
          </article>

          <article className="m-dis-block m-dis-contact">
            <h3>ติดต่อสอบถาม</h3>
            <p>
              <strong>บริษัท มโหราคะเซน จำกัด</strong><br />
              อีเมล: privacy@mahoragazen.co<br />
              LINE: @mahoragazen
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}

window.Cookie = Cookie;
