// terms.jsx — Terms of Service (ข้อตกลงการใช้บริการ)
// Follows same visual pattern as disclaimer.jsx + privacy.jsx

function Terms() {
  return (
    <section id="terms" className="pad m-dis">
      <div className="wrap m-dis-wrap">
        <div className="section-head reveal" style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="eyebrow">กฎหมาย · นโยบาย</span>
          <TripleDivider />
          <h2><em>ข้อตกลงการใช้บริการ</em><br />Terms of Service</h2>
          <p className="muted" style={{ fontSize: 14, marginTop: 16, fontStyle: "italic" }}>
            อัปเดตล่าสุด: ๒๒ พฤษภาคม ๒๕๖๙ · เวอร์ชัน ๑.๐
          </p>
        </div>

        <div className="m-dis-content reveal">

          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๑. การยอมรับข้อตกลง</h3>
            <p>
              การเข้าใช้งานเว็บไซต์ Mahoraga ZEN (mahoraga-zen.netlify.app) และบริการที่เกี่ยวข้อง
              ถือว่าท่านได้อ่าน ทำความเข้าใจ และ<strong>ยอมรับข้อตกลงนี้ทั้งหมด</strong>
              หากท่านไม่เห็นด้วยกับเงื่อนไขใด ๆ กรุณางดใช้บริการ
            </p>
            <p>
              ผู้ใช้งานต้องมีอายุ <strong>๑๘ ปีขึ้นไป</strong> หรือได้รับความยินยอมเป็นลายลักษณ์อักษรจากผู้ปกครอง
            </p>
          </article>

          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๒. สมาชิกภาพและบัญชีผู้ใช้</h3>
            <p><strong>แพ็กเกจที่ให้บริการ:</strong></p>
            <ul>
              <li><strong>รายเดือน:</strong> ฿๕๐ / เดือน (เรียกเก็บโดยอัตโนมัติทุกเดือน)</li>
              <li><strong>รายปี:</strong> ฿๕๐๐ / ปี (ประหยัด ๒ เดือน)</li>
              <li><strong>ทดลองใช้ฟรี:</strong> ๗ วัน — ไม่มีค่าใช้จ่าย หากยกเลิกก่อนสิ้นสุดช่วงทดลอง</li>
            </ul>
            <p>
              ท่านรับผิดชอบในการรักษาความลับของรหัสผ่านและบัญชีของตน
              กรุณาแจ้งเราทันทีหากพบการใช้งานที่ไม่ได้รับอนุญาต ที่ hello@mahoragazen.co
            </p>
          </article>

          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๓. การชำระเงินและนโยบายการคืนเงิน</h3>
            <p>
              ชำระเงินผ่าน<strong>ผู้ให้บริการ Payment Gateway ที่ได้มาตรฐาน PCI DSS</strong>
              เราไม่จัดเก็บข้อมูลบัตรเครดิตโดยตรง
            </p>
            <p><strong>นโยบายการคืนเงิน:</strong></p>
            <ul>
              <li>
                <strong>ค่าสมาชิก:</strong> ยกเลิกได้ทุกเมื่อ สิทธิ์คงอยู่ถึงสิ้นรอบที่ชำระแล้ว
                ไม่คืนเงินสำหรับรอบที่ผ่านมา
              </li>
              <li>
                <strong>สินค้าดิจิทัล (E-book, MP3, ไฟล์ดาวน์โหลด):</strong> ไม่คืนเงินหลังดาวน์โหลดแล้ว
                ยกเว้นพิสูจน์ได้ว่าไฟล์มีข้อผิดพลาดทางเทคนิคจากระบบของเรา
              </li>
              <li>
                <strong>ข้อผิดพลาดทางเทคนิคจากระบบของเรา:</strong> คืนเงินภายใน ๗ วันทำการ
              </li>
            </ul>
          </article>

          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๔. ทรัพย์สินทางปัญญา</h3>
            <p>
              เนื้อหาทั้งหมดบนเว็บไซต์ ได้แก่ บทความ บทสวด ไฟล์เสียง ภาพ วิดีโอ และโค้ด
              <strong>เป็นลิขสิทธิ์ของ บริษัท มโหราคะเซน จำกัด</strong>
              ห้ามทำซ้ำ ดัดแปลง จำหน่าย หรือเผยแพร่ต่อเพื่อการค้าโดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร
            </p>
            <p>
              สมาชิกสามารถใช้เนื้อหาเพื่อ<strong>การปฏิบัติส่วนตัว</strong>เท่านั้น
              บทสวดและคาถาที่เป็นสมบัติสาธารณะสามารถใช้เพื่อการปฏิบัติธรรมส่วนตัวได้อย่างอิสระ
            </p>
          </article>

          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๕. ข้อห้ามในการใช้งาน</h3>
            <p>ท่านตกลงที่จะ<strong>ไม่</strong>กระทำการดังต่อไปนี้:</p>
            <ul>
              <li>ละเมิดลิขสิทธิ์หรือทรัพย์สินทางปัญญาของเรา</li>
              <li>ใช้ระบบ scraping, bot หรือการดึงข้อมูลอัตโนมัติโดยไม่ได้รับอนุญาต</li>
              <li>เผยแพร่เนื้อหาที่ผิดกฎหมาย เป็นเท็จ หรือก่อให้เกิดความเสียหายแก่ผู้อื่น</li>
              <li>แอบอ้างเป็นบุคคลอื่นหรือแสดงตนเป็นตัวแทน Mahoraga ZEN โดยไม่ได้รับอนุญาต</li>
              <li>ใช้บริการเพื่อกิจกรรมทางการค้าโดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร</li>
            </ul>
          </article>

          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๖. การยกเลิกบัญชี</h3>
            <p>
              ท่านสามารถ<strong>ยกเลิกได้ทุกเมื่อ</strong> โดยส่งอีเมลถึง hello@mahoragazen.co
              หรือผ่านการตั้งค่าบัญชีของท่านในระบบ
            </p>
            <p>
              เมื่อยกเลิก สิทธิ์สมาชิกจะคงอยู่จนถึงสิ้นรอบการเรียกเก็บปัจจุบัน
              ข้อมูลส่วนบุคคลจะถูกลบภายใน ๓๐ วันหลังสิ้นสุดสมาชิก ตาม พ.ร.บ. PDPA
            </p>
            <p>
              เราสงวนสิทธิ์ในการ<strong>ระงับหรือยกเลิกบัญชี</strong>ที่ฝ่าฝืนข้อตกลงนี้
              โดยอาจไม่แจ้งล่วงหน้า กรณีละเมิดร้ายแรง
            </p>
          </article>

          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๗. ข้อจำกัดความรับผิด</h3>
            <p>
              บริการของเราให้ "ตามสภาพ" (as-is) โดยไม่มีการรับประกันใด ๆ
              ทั้งโดยชัดแจ้งหรือโดยนัย เราไม่รับผิดชอบต่อ:
            </p>
            <ul>
              <li>ความเสียหายทางอ้อม (indirect damages) ที่เกิดจากการใช้หรือไม่สามารถใช้บริการ</li>
              <li>การหยุดชะงักของบริการอันเนื่องมาจากเหตุสุดวิสัยหรือการบำรุงรักษาระบบ</li>
              <li>เนื้อหา คุณภาพ หรือบริการของบุคคลที่สาม (Affiliate Partners)</li>
            </ul>
          </article>

          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๘. กฎหมายที่ใช้บังคับและการระงับข้อพิพาท</h3>
            <p>
              ข้อตกลงนี้อยู่ภายใต้<strong>กฎหมายแห่งราชอาณาจักรไทย</strong>
              ข้อพิพาทใด ๆ ให้อยู่ในเขตอำนาจของ<strong>ศาลแพ่งกรุงเทพใต้</strong>
            </p>
            <p>
              เราสนับสนุนการเจรจาไกล่เกลี่ยก่อนดำเนินการทางกฎหมาย
              กรุณาติดต่อ legal@mahoragazen.co ก่อนเป็นลำดับแรก
            </p>
          </article>

          <article className="m-dis-block">
            <h3><Diamond size={8} filled color="var(--gold)" /> ๙. การแก้ไขข้อตกลง</h3>
            <p>
              เราสงวนสิทธิ์ในการ<strong>แก้ไขข้อตกลงนี้ได้ตลอดเวลา</strong>
              สำหรับการเปลี่ยนแปลงสำคัญ จะแจ้งผ่านอีเมลสมาชิกล่วงหน้า ๓๐ วัน
              การใช้บริการต่อเนื่องหลังวันที่มีผลบังคับใช้ถือว่าท่านยอมรับข้อตกลงใหม่
            </p>
          </article>

          <article className="m-dis-block m-dis-contact">
            <h3>ติดต่อฝ่ายกฎหมาย</h3>
            <p>
              <strong>บริษัท มโหราคะเซน จำกัด</strong><br />
              อีเมล: legal@mahoragazen.co<br />
              LINE: @mahoragazen<br />
              กรุงเทพมหานคร · ประเทศไทย
            </p>
            <p className="muted" style={{ fontSize: 13, fontStyle: "italic", marginTop: 16 }}>
              * แนะนำให้ปรึกษาทนายความเพื่อปรับข้อตกลงให้เหมาะกับสถานการณ์เฉพาะของท่าน
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}

window.Terms = Terms;
