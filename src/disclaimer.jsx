// disclaimer.jsx — Legal disclaimer page (per disclaimer-generator skill)
//
// Covers: Website general, Earnings, Professional advice, Affiliate,
// Testimonial, Health/wellness disclaimers — adapted for Thai market (PDPA)

function Disclaimer() {
  return (
    <section id="disclaimer" className="pad m-dis">
      <div className="wrap m-dis-wrap">
        <div className="section-head reveal" style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="eyebrow">กฎหมาย · นโยบาย</span>
          <TripleDivider />
          <h2><em>ข้อสงวนสิทธิ์</em><br />และ คำชี้แจงสำคัญ</h2>
          <p className="muted" style={{ fontSize: 14, marginTop: 16, fontStyle: "italic" }}>
            อัปเดตล่าสุด: ๒๒ พฤษภาคม ๒๕๖๙
          </p>
        </div>

        <div className="m-dis-content reveal">
          {/* 1. General Website Disclaimer */}
          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๑. ข้อสงวนสิทธิ์ทั่วไป (Website Disclaimer)</h3>
            <p>
              เว็บไซต์ Mahoraga ZEN (mahoraga-zen.netlify.app) เผยแพร่ข้อมูลเพื่อ
              <strong> วัตถุประสงค์ทางการศึกษาและบันเทิงเท่านั้น</strong>
              เราพยายามให้ข้อมูลที่ถูกต้องและเป็นปัจจุบัน แต่ไม่ขอรับประกัน
              ความสมบูรณ์ ความถูกต้อง หรือความเป็นปัจจุบันของข้อมูลใด ๆ
            </p>
            <p>
              บริษัท มโหราคะเซน จำกัด ไม่รับผิดชอบต่อความเสียหายใด ๆ ที่เกิดจาก
              การใช้งานเว็บไซต์ หรือการพึ่งพาข้อมูลในเว็บไซต์นี้ ผู้ใช้งานต้อง
              รับผิดชอบในการตัดสินใจของตนเอง
            </p>
          </article>

          {/* 2. NOT A DONATION PLATFORM */}
          <article className="m-dis-block m-dis-emphasize">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๒. เว็บไซต์บอกบุญ — ไม่ใช่เว็บรับบริจาค</h3>
            <p>
              <strong>Mahoraga ZEN เป็นเว็บไซต์ "บอกบุญ" (Informational Platform)</strong>
              ไม่ใช่ผู้รับบริจาคหรือเป็นตัวกลางในการรับเงินทำบุญใด ๆ ทั้งสิ้น
            </p>
            <p>รายได้ของเว็บไซต์มาจาก:</p>
            <ul>
              <li>ค่าสมาชิกรายเดือน / รายปี</li>
              <li>การขายสินค้าดิจิทัล (E-book, MP3, สมาธินำทาง)</li>
              <li>ค่าบริการ Premium Consultation</li>
              <li>ค่าคอมมิชชั่นจากสินค้า Affiliate</li>
            </ul>
            <p>
              <strong>ผู้ที่ประสงค์จะร่วมทำบุญในงานต่าง ๆ ที่เรานำเสนอ ต้องติดต่อวัด /
              องค์กรปลายทางโดยตรง</strong> เราเป็นเพียงผู้นำเสนอข้อมูลเท่านั้น
            </p>
          </article>

          {/* 3. Professional Advice Disclaimer */}
          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๓. ไม่ใช่คำแนะนำเชิงวิชาชีพ</h3>
            <p>
              เนื้อหาในเว็บไซต์ Mahoraga ZEN รวมถึงบทเรียน บทสวด สมาธินำทาง คำทำนาย
              เลขนำโชค และเนื้อหาอื่น ๆ <strong> เป็นเพียงข้อมูลเพื่อสร้างแรงบันดาลใจ
              ทางจิตวิญญาณและความคิดสร้างสรรค์</strong> ไม่ใช่คำแนะนำ:
            </p>
            <ul>
              <li><strong>ทางการแพทย์</strong> — กรุณาปรึกษาแพทย์ผู้เชี่ยวชาญ</li>
              <li><strong>ทางกฎหมาย</strong> — กรุณาปรึกษานักกฎหมาย</li>
              <li><strong>ทางการเงิน / การลงทุน</strong> — กรุณาปรึกษาที่ปรึกษาการเงิน</li>
              <li><strong>ทางจิตเวช</strong> — กรุณาปรึกษาจิตแพทย์</li>
            </ul>
            <p>
              คำทำนาย เลขนำโชค และเนื้อหาเชิงโหราศาสตร์ เป็นเพียง
              <strong> ความเชื่อส่วนบุคคล</strong> ไม่มีพื้นฐานทางวิทยาศาสตร์ ผู้ใช้ต้อง
              ใช้วิจารณญาณส่วนตัว
            </p>
          </article>

          {/* 4. Earnings Disclaimer */}
          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๔. ข้อสงวนสิทธิ์เรื่องผลลัพธ์</h3>
            <p>
              ผลลัพธ์จากการใช้บทเรียน workshop หรือ membership ของเรา
              <strong> ขึ้นอยู่กับปัจเจกบุคคล</strong> ไม่มีการรับประกันใด ๆ ว่า
              ผู้ใช้จะได้รับผลลัพธ์เช่นเดียวกับ testimonials ที่แสดงในเว็บไซต์
            </p>
            <p>
              ตัวเลขรายได้ จำนวนผู้ติดตาม หรือผลลัพธ์ทางธุรกิจที่อาจกล่าวถึง
              เป็นเพียงตัวอย่างที่อาจไม่ใช่ผลลัพธ์ปกติ
            </p>
          </article>

          {/* 5. Testimonial Disclaimer */}
          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๕. ข้อสงวนสิทธิ์เรื่องคำรับรอง (Testimonials)</h3>
            <p>
              คำรับรองในเว็บไซต์มาจากผู้ใช้บริการจริง โดย
              <strong> เปลี่ยนชื่อ-นามสกุลเป็นชื่อย่อ</strong> เพื่อรักษาความเป็นส่วนตัว
              ตาม พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. ๒๕๖๒ (PDPA)
            </p>
            <p>
              ผลลัพธ์ของแต่ละบุคคลแตกต่างกัน คำรับรองไม่ได้รับประกันว่าผู้ใช้รายอื่น
              จะได้รับผลลัพธ์เช่นเดียวกัน
            </p>
          </article>

          {/* 6. Affiliate Disclosure */}
          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๖. การเปิดเผยเรื่อง Affiliate</h3>
            <p>
              สินค้าในส่วน "ร้านค้า" (Shop) บางรายการ
              <strong> เป็นลิงก์ Affiliate</strong> หากท่านสั่งซื้อผ่านลิงก์
              เราจะได้รับค่าคอมมิชชั่นจากผู้ขาย <strong>โดยไม่กระทบราคาที่ท่านจ่าย</strong>
            </p>
            <p>
              เราคัดเลือกเฉพาะสินค้าที่เห็นว่ามีคุณค่าต่อผู้ใช้งาน
              และไม่รับผิดชอบต่อคุณภาพ การจัดส่ง หรือบริการหลังการขาย
              ของผู้ขายภายนอก
            </p>
          </article>

          {/* 7. PDPA / Privacy */}
          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๗. ความเป็นส่วนตัว (PDPA)</h3>
            <p>
              เราเก็บรวบรวมข้อมูลส่วนบุคคลตามที่จำเป็นต่อการให้บริการ ภายใต้
              <strong> พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. ๒๕๖๒</strong>
              ข้อมูลที่เก็บรวบรวม:
            </p>
            <ul>
              <li>อีเมล (สำหรับ newsletter + สมาชิก)</li>
              <li>ชื่อ (กรณีสมัครสมาชิก)</li>
              <li>ข้อมูลการใช้งานเว็บไซต์ (Cookies)</li>
            </ul>
            <p>
              ผู้ใช้มีสิทธิ์: <strong>เข้าถึง / แก้ไข / ลบ / ระงับ / โอนย้าย</strong>
              ข้อมูลของตน ติดต่อ: hello@mahoragazen.co
            </p>
          </article>

          {/* 8. Copyright */}
          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๘. ลิขสิทธิ์ (Copyright)</h3>
            <p>
              เนื้อหาทั้งหมดบนเว็บไซต์ Mahoraga ZEN รวมถึงบทความ ภาพ เสียง
              วิดีโอ และโค้ดต้นฉบับ <strong>เป็นลิขสิทธิ์ของ บริษัท มโหราคะเซน จำกัด</strong>
              ห้ามนำไปทำซ้ำ ดัดแปลง หรือเผยแพร่โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร
            </p>
            <p>
              บทสวด คาถา และเนื้อหาทางศาสนา ที่เป็นสมบัติสาธารณะ
              ผู้ใช้สามารถนำไปใช้เพื่อการปฏิบัติธรรมส่วนตัวได้
            </p>
          </article>

          {/* 9. Contact */}
          <article className="m-dis-block m-dis-contact">
            <h3>ติดต่อสอบถามด้านกฎหมาย</h3>
            <p>
              <strong>บริษัท มโหราคะเซน จำกัด</strong><br />
              อีเมล: legal@mahoragazen.co<br />
              LINE: @mahoragazen
            </p>
            <p className="muted" style={{ fontSize: 13, fontStyle: "italic", marginTop: 16 }}>
              * เอกสารนี้เป็นข้อสงวนสิทธิ์เบื้องต้น แนะนำให้ปรึกษาทนายความ
              เพื่อปรับให้เหมาะกับสถานการณ์เฉพาะของท่าน
            </p>
          </article>
        </div>
      </div>

      <style>{`
        .m-dis { background: var(--cream-warm); }
        .m-dis-wrap { max-width: 820px; }

        .m-dis-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .m-dis-block {
          background: var(--cream);
          padding: 32px;
          border: 1px solid var(--line);
          border-left: 3px solid var(--gold);
        }
        @media (max-width: 600px) {
          .m-dis-block { padding: 24px 20px; }
        }

        .m-dis-block h3 {
          font-family: var(--f-serif);
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--ink);
        }

        .m-dis-block p {
          font-size: 15px;
          line-height: 1.8;
          color: var(--ink-soft);
          margin-bottom: 14px;
        }

        .m-dis-block p:last-child { margin-bottom: 0; }

        .m-dis-block ul {
          font-size: 15px;
          line-height: 1.8;
          color: var(--ink-soft);
          padding-left: 24px;
          margin-bottom: 14px;
        }

        .m-dis-block li { margin-bottom: 6px; }

        .m-dis-block strong {
          color: var(--ink);
          font-weight: 500;
        }

        .m-dis-emphasize {
          background: var(--cream);
          border-left-color: #b85c2f;
          border-left-width: 4px;
        }
        .m-dis-emphasize h3 { color: #8a3a1a; }

        .m-dis-contact {
          text-align: center;
          background: var(--ink);
          color: var(--cream);
          border-left-color: var(--gold);
        }
        .m-dis-contact h3 { color: var(--gold-soft); justify-content: center; }
        .m-dis-contact p { color: rgba(253,252,248,.8); }
        .m-dis-contact strong { color: var(--cream); }
      `}</style>
    </section>
  );
}

window.Disclaimer = Disclaimer;
