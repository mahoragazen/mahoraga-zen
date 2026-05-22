// privacy.jsx — Privacy Policy (PDPA Thailand)
//
// Generated using privacy-policy skill from Claude Skills Ultimate Bundle
// Adapted for PDPA (พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562)
// Legal review recommended before final publication

function Privacy() {
  return (
    <section id="privacy" className="pad m-pri">
      <div className="wrap m-pri-wrap">
        <div className="section-head reveal" style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="eyebrow">ความเป็นส่วนตัว · PDPA</span>
          <TripleDivider />
          <h2><em>นโยบายความเป็นส่วนตัว</em><br />Privacy Policy</h2>
          <p className="muted" style={{ fontSize: 14, marginTop: 16, fontStyle: "italic" }}>
            อัปเดตล่าสุด: ๒๒ พฤษภาคม ๒๕๖๙ · เวอร์ชัน ๑.๐
          </p>
          <p className="muted" style={{ fontSize: 13, marginTop: 8 }}>
            ภายใต้ พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. ๒๕๖๒ (PDPA)
          </p>
        </div>

        <div className="m-pri-content reveal">

          {/* 1. Introduction */}
          <article className="m-pri-block">
            <h3>๑. บทนำ</h3>
            <p>
              <strong>บริษัท มโหราคะเซน จำกัด</strong> ("เรา", "บริษัท", "Mahoraga ZEN")
              ผู้ให้บริการเว็บไซต์ mahoraga-zen.netlify.app และบริการที่เกี่ยวข้อง
              ตระหนักถึงความสำคัญของการคุ้มครองข้อมูลส่วนบุคคลของท่าน
              นโยบายฉบับนี้ <strong>อธิบายว่าเราเก็บ ใช้ และคุ้มครอง</strong>
              ข้อมูลของท่านอย่างไร
            </p>
            <p className="m-pri-plain">
              <em>ภาษาง่าย: เอกสารนี้บอกว่าเราเก็บข้อมูลอะไรของคุณ
              เพื่ออะไร และเราดูแลมันอย่างไร</em>
            </p>
          </article>

          {/* 2. Data Controller */}
          <article className="m-pri-block">
            <h3>๒. ผู้ควบคุมข้อมูลส่วนบุคคล</h3>
            <p>
              <strong>บริษัท มโหราคะเซน จำกัด</strong><br />
              ทะเบียนพาณิชย์เลขที่: [pending]<br />
              อีเมล: privacy@mahoragazen.co<br />
              LINE: @mahoragazen
            </p>
          </article>

          {/* 3. Data Collected */}
          <article className="m-pri-block">
            <h3>๓. ข้อมูลที่เราเก็บรวบรวม</h3>
            <p><strong>ข้อมูลที่ท่านให้กับเรา:</strong></p>
            <ul>
              <li><strong>อีเมล</strong> — เมื่อสมัครรับ Newsletter หรือสมาชิก</li>
              <li><strong>ชื่อ</strong> — เมื่อสมัครสมาชิก หรือซื้อสินค้า</li>
              <li><strong>ข้อมูลการชำระเงิน</strong> — หมายเลขบัตรประมวลผลผ่านผู้ให้บริการ Payment Gateway (เราไม่จัดเก็บหมายเลขเต็ม)</li>
              <li><strong>ข้อความที่ติดต่อเรา</strong> — เมื่อท่านส่งคำถามผ่านอีเมล / LINE</li>
            </ul>

            <p style={{ marginTop: 16 }}><strong>ข้อมูลที่เก็บโดยอัตโนมัติ:</strong></p>
            <ul>
              <li>ที่อยู่ IP</li>
              <li>ประเภทอุปกรณ์และเบราว์เซอร์</li>
              <li>หน้าที่เยี่ยมชม + ระยะเวลา</li>
              <li>Cookies (ดูส่วนที่ ๖)</li>
            </ul>

            <p className="m-pri-plain">
              <em>ภาษาง่าย: เราเก็บข้อมูลที่คุณกรอกเอง + ข้อมูลทางเทคนิคเกี่ยวกับ
              การใช้งานเว็บไซต์ ไม่เก็บข้อมูลที่ไม่จำเป็น</em>
            </p>
          </article>

          {/* 4. Purpose & Legal Basis */}
          <article className="m-pri-block">
            <h3>๔. วัตถุประสงค์และฐานทางกฎหมาย</h3>
            <table className="m-pri-table">
              <thead>
                <tr><th>วัตถุประสงค์</th><th>ข้อมูล</th><th>ฐานทางกฎหมาย</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>ส่งบทเรียน Newsletter</td>
                  <td>อีเมล</td>
                  <td>ความยินยอม</td>
                </tr>
                <tr>
                  <td>ให้บริการสมาชิก</td>
                  <td>ชื่อ + อีเมล + Payment</td>
                  <td>การปฏิบัติตามสัญญา</td>
                </tr>
                <tr>
                  <td>ประมวลผลการสั่งซื้อ</td>
                  <td>ชื่อ + อีเมล + Payment</td>
                  <td>การปฏิบัติตามสัญญา</td>
                </tr>
                <tr>
                  <td>ป้องกันการฉ้อโกง</td>
                  <td>IP + Browser info</td>
                  <td>ประโยชน์โดยชอบด้วยกฎหมาย</td>
                </tr>
                <tr>
                  <td>ปรับปรุงเว็บไซต์</td>
                  <td>Behavior + analytics</td>
                  <td>ประโยชน์โดยชอบด้วยกฎหมาย</td>
                </tr>
                <tr>
                  <td>เก็บข้อมูลภาษี</td>
                  <td>Payment records</td>
                  <td>หน้าที่ตามกฎหมาย</td>
                </tr>
              </tbody>
            </table>
          </article>

          {/* 5. Third-Party Sharing */}
          <article className="m-pri-block">
            <h3>๕. การส่งต่อข้อมูลให้บุคคลที่สาม</h3>
            <p>เราใช้บริการผู้ประมวลผลข้อมูล (Data Processors) ดังต่อไปนี้:</p>
            <ul>
              <li><strong>Netlify</strong> (สหรัฐอเมริกา) — Web hosting + CDN</li>
              <li><strong>Google Fonts</strong> (สหรัฐอเมริกา) — Font delivery</li>
              <li><strong>(อนาคต)</strong> Payment Gateway (Stripe / Omise) — ประมวลผลการชำระเงิน</li>
              <li><strong>(อนาคต)</strong> Email Service (Resend / Mailchimp) — ส่งอีเมล</li>
              <li><strong>(อนาคต)</strong> Google Analytics — สถิติเว็บไซต์</li>
            </ul>
            <p>
              <strong>การส่งข้อมูลข้ามประเทศ:</strong> ข้อมูลของท่านอาจถูกส่งไปยังเซิร์ฟเวอร์
              ในต่างประเทศ (สหรัฐอเมริกา, ยุโรป) ผู้ประมวลผลข้อมูลของเรา
              ปฏิบัติตามมาตรฐาน data protection ที่เทียบเท่าหรือสูงกว่า PDPA
            </p>
            <p className="m-pri-plain">
              <em>ภาษาง่าย: เราใช้เครื่องมือจากบริษัทอื่นเพื่อให้บริการ —
              เครื่องมือเหล่านี้อยู่ในต่างประเทศ และมีมาตรฐานความปลอดภัยเทียบเท่า PDPA</em>
            </p>
          </article>

          {/* 6. Cookies */}
          <article className="m-pri-block">
            <h3>๖. คุกกี้ (Cookies)</h3>
            <p>เราใช้ Cookies เพื่อ:</p>
            <ul>
              <li><strong>คุกกี้จำเป็น</strong> — รักษา session การใช้งาน + ตะกร้าสินค้า (ไม่ต้องขอความยินยอม)</li>
              <li><strong>คุกกี้สถิติ</strong> — วัด traffic + ปรับปรุงเว็บไซต์ (ขอความยินยอม)</li>
              <li><strong>คุกกี้การตลาด</strong> — (ยังไม่ใช้) จะแจ้งล่วงหน้าเมื่อเปิดใช้งาน</li>
            </ul>
            <p>
              ท่านสามารถปฏิเสธคุกกี้ในการตั้งค่าเบราว์เซอร์ของท่าน —
              แต่อาจส่งผลให้บางฟังก์ชันใช้งานไม่ได้
            </p>
          </article>

          {/* 7. Data Retention */}
          <article className="m-pri-block">
            <h3>๗. ระยะเวลาเก็บข้อมูล</h3>
            <table className="m-pri-table">
              <thead>
                <tr><th>ประเภทข้อมูล</th><th>ระยะเวลา</th><th>เหตุผล</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>ข้อมูลสมาชิก</td>
                  <td>ระยะเวลาเป็นสมาชิก + 30 วัน</td>
                  <td>เผื่อสมัครต่อ</td>
                </tr>
                <tr>
                  <td>อีเมล Newsletter</td>
                  <td>จนกว่าจะยกเลิก</td>
                  <td>ส่งบทเรียน</td>
                </tr>
                <tr>
                  <td>ข้อมูลการชำระเงิน</td>
                  <td>๗ ปีหลังธุรกรรม</td>
                  <td>กฎหมายภาษี</td>
                </tr>
                <tr>
                  <td>Cookies</td>
                  <td>30 วัน — 1 ปี</td>
                  <td>ขึ้นกับประเภท</td>
                </tr>
                <tr>
                  <td>Logs ของเซิร์ฟเวอร์</td>
                  <td>90 วัน</td>
                  <td>ความปลอดภัย</td>
                </tr>
              </tbody>
            </table>
          </article>

          {/* 8. Your Rights */}
          <article className="m-pri-block m-pri-emphasize">
            <h3>๘. สิทธิของท่านในฐานะเจ้าของข้อมูล</h3>
            <p>ภายใต้ PDPA ท่านมีสิทธิดังต่อไปนี้:</p>
            <ul>
              <li><strong>สิทธิเข้าถึง</strong> — ขอดูข้อมูลของท่านที่เราเก็บ</li>
              <li><strong>สิทธิแก้ไข</strong> — ขอแก้ไขข้อมูลที่ไม่ถูกต้อง</li>
              <li><strong>สิทธิลบ</strong> — ขอลบข้อมูล ("Right to be Forgotten")</li>
              <li><strong>สิทธิระงับ</strong> — ขอระงับการใช้ข้อมูลชั่วคราว</li>
              <li><strong>สิทธิคัดค้าน</strong> — คัดค้านการเก็บ/ใช้/ส่งต่อข้อมูล</li>
              <li><strong>สิทธิโอนย้าย</strong> — ขอรับข้อมูลในรูปแบบที่อ่านได้ + โอนไปยังผู้ให้บริการอื่น</li>
              <li><strong>สิทธิเพิกถอนความยินยอม</strong> — ถอนความยินยอมได้ทุกเมื่อ</li>
              <li><strong>สิทธิร้องเรียน</strong> — ร้องเรียนไปยังสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.)</li>
            </ul>
            <p>
              <strong>วิธีใช้สิทธิ:</strong> ส่งอีเมลไปที่ <a href="mailto:privacy@mahoragazen.co">privacy@mahoragazen.co</a>
              พร้อมระบุชื่อ-อีเมลที่ลงทะเบียน เราจะตอบกลับภายใน <strong>30 วัน</strong>
            </p>
          </article>

          {/* 9. Children's Data */}
          <article className="m-pri-block">
            <h3>๙. ข้อมูลของเด็ก</h3>
            <p>
              เว็บไซต์นี้ <strong>ไม่เหมาะสำหรับผู้ที่อายุต่ำกว่า ๒๐ ปี</strong>
              (ตามนิยามของ PDPA) เราไม่เก็บข้อมูลส่วนบุคคลของเด็กโดยเจตนา
            </p>
            <p>
              ผู้ที่อายุระหว่าง ๑๐-๒๐ ปี ต้องได้รับ
              <strong> ความยินยอมจากผู้ปกครอง</strong> ก่อนสมัครสมาชิก
              หากท่านพบว่าเด็กในความดูแลของท่านได้ให้ข้อมูลโดยไม่ได้รับอนุญาต
              กรุณาติดต่อเราเพื่อให้เราลบข้อมูลทันที
            </p>
          </article>

          {/* 10. Security */}
          <article className="m-pri-block">
            <h3>๑๐. การคุ้มครองความปลอดภัย</h3>
            <p>เราคุ้มครองข้อมูลของท่านด้วย:</p>
            <ul>
              <li>การเข้ารหัสข้อมูลระหว่างการรับส่ง (HTTPS / TLS 1.2+)</li>
              <li>การจำกัดการเข้าถึงข้อมูลของพนักงาน (Role-based access)</li>
              <li>การสำรองข้อมูล + ระบบ Disaster Recovery</li>
              <li>การตรวจสอบความปลอดภัยอย่างสม่ำเสมอ</li>
            </ul>
            <p>
              ไม่มีระบบใดที่ปลอดภัย 100% — หากเราพบเหตุการณ์ที่กระทบข้อมูลของท่าน
              เราจะ <strong>แจ้งให้ทราบภายใน 72 ชั่วโมง</strong> ตามที่ PDPA กำหนด
            </p>
          </article>

          {/* 11. Changes */}
          <article className="m-pri-block">
            <h3>๑๑. การเปลี่ยนแปลงนโยบาย</h3>
            <p>
              เราอาจปรับปรุงนโยบายฉบับนี้เป็นครั้งคราว เพื่อให้สอดคล้องกับ
              <strong> กฎหมายและบริการที่เปลี่ยนแปลง</strong> หากมีการเปลี่ยนแปลงสำคัญ
              เราจะแจ้งให้ท่านทราบผ่านอีเมล หรือประกาศบนเว็บไซต์
              อย่างน้อย <strong>30 วันก่อนมีผลบังคับใช้</strong>
            </p>
          </article>

          {/* 12. Contact */}
          <article className="m-pri-block m-pri-contact">
            <h3>๑๒. ติดต่อเรา</h3>
            <p>
              <strong>เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO)</strong><br />
              บริษัท มโหราคะเซน จำกัด<br />
              อีเมล: <a href="mailto:privacy@mahoragazen.co">privacy@mahoragazen.co</a><br />
              LINE: @mahoragazen<br />
            </p>
            <p>
              <strong>ร้องเรียนไปยังหน่วยงานกำกับ:</strong><br />
              สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.)<br />
              <a href="https://www.pdpc.or.th" target="_blank" rel="noopener noreferrer">pdpc.or.th</a>
            </p>
            <p className="muted" style={{ fontSize: 13, fontStyle: "italic", marginTop: 16 }}>
              * นโยบายฉบับนี้เป็นเอกสารเบื้องต้น แนะนำให้ปรึกษาทนายความผู้เชี่ยวชาญ
              เพื่อปรับให้เหมาะกับสถานการณ์เฉพาะของท่าน
            </p>
          </article>
        </div>
      </div>

      <style>{`
        .m-pri { background: var(--cream); }
        .m-pri-wrap { max-width: 820px; }

        .m-pri-content {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .m-pri-block {
          background: var(--cream-warm);
          padding: 32px;
          border: 1px solid var(--line);
          border-left: 3px solid var(--gold);
        }
        @media (max-width: 600px) {
          .m-pri-block { padding: 24px 20px; }
        }

        .m-pri-block h3 {
          font-family: var(--f-serif);
          font-size: 22px;
          font-weight: 500;
          margin-bottom: 16px;
          color: var(--ink);
        }

        .m-pri-block p {
          font-size: 15px;
          line-height: 1.8;
          color: var(--ink-soft);
          margin-bottom: 14px;
        }

        .m-pri-block p:last-child { margin-bottom: 0; }

        .m-pri-block ul {
          font-size: 15px;
          line-height: 1.8;
          color: var(--ink-soft);
          padding-left: 24px;
          margin-bottom: 14px;
        }

        .m-pri-block li { margin-bottom: 6px; }

        .m-pri-block strong {
          color: var(--ink);
          font-weight: 500;
        }

        .m-pri-block a {
          color: var(--gold-deep);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .m-pri-plain {
          padding: 12px 16px;
          background: rgba(232,211,138,.1);
          border-left: 2px solid var(--gold-soft);
          font-size: 14px !important;
          color: var(--ink) !important;
        }

        .m-pri-table {
          width: 100%;
          border-collapse: collapse;
          margin: 12px 0;
          font-size: 14px;
        }
        .m-pri-table th,
        .m-pri-table td {
          padding: 10px 12px;
          text-align: left;
          border: 1px solid var(--line);
        }
        .m-pri-table th {
          background: var(--cream);
          font-family: var(--f-serif);
          font-weight: 500;
          color: var(--ink);
        }
        .m-pri-table td {
          color: var(--ink-soft);
        }

        .m-pri-emphasize {
          border-left-color: #b85c2f;
          border-left-width: 4px;
          background: var(--cream);
        }
        .m-pri-emphasize h3 { color: #8a3a1a; }

        .m-pri-contact {
          background: var(--ink);
          color: var(--cream);
          border-left-color: var(--gold);
        }
        .m-pri-contact h3 { color: var(--gold-soft); }
        .m-pri-contact p { color: rgba(253,252,248,.85); }
        .m-pri-contact strong { color: var(--cream); }
        .m-pri-contact a { color: var(--gold-soft); }
      `}</style>
    </section>
  );
}

window.Privacy = Privacy;
