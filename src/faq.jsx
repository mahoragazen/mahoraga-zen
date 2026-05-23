// faq.jsx — Frequently Asked Questions accordion

const { useState: useState_FAQ } = React;

const FAQ_ITEMS = [
  {
    cat: "สมาชิกภาพ",
    q: "สมาชิก ๕๐ บาท/เดือน ได้อะไรบ้าง?",
    a: "คุณเข้าถึงคลังบทสวดศักดิ์สิทธิ์ ๑๘๐+ บท คลังสมาธินำทาง (อัปเดตทุกสัปดาห์) Quote ประจำวัน บทเรียนจากปรมาจารย์ บทความเชิงลึกสำหรับสมาชิก Workshop ออนไลน์รายเดือน Private Group ชุมชนผู้นำ E-Book ทุกไตรมาส และ Wallpaper Pack มันดาลาทุกเดือน — ทั้งหมดในราคาเดียว",
  },
  {
    cat: "สมาชิกภาพ",
    q: "ยกเลิกได้ตอนไหน มีผูกมัดไหม?",
    a: "ยกเลิกได้ทุกเมื่อ ไม่มีสัญญาผูกมัด ไม่มีค่าปรับ เพียงแจ้งก่อนรอบบิลถัดไป สมาชิกภาพของคุณจะยังใช้ได้จนครบรอบที่ชำระไว้",
  },
  {
    cat: "สมาชิกภาพ",
    q: "สมัครแพ็กรายปี ประหยัดได้เท่าไหร่?",
    a: "แพ็กรายปี ๕๐๐ บาท เทียบเท่า ๒ เดือนฟรี (ประหยัด ๑๐๐ บาท) เหมาะสำหรับผู้ที่ตั้งใจฝึกฝนระยะยาว",
  },
  {
    cat: "เนื้อหาและการฝึก",
    q: "ไม่เคยฝึกสมาธิมาก่อน เริ่มได้เลยไหม?",
    a: "ได้เลย เนื้อหาทั้งหมดออกแบบมาให้เริ่มต้นได้ตั้งแต่วันแรก มีสมาธินำทางระดับผู้เริ่มต้นที่ใช้เวลาเพียง ๕–๑๕ นาทีต่อวัน และ Community ที่คอยช่วยเหลือตลอด",
  },
  {
    cat: "เนื้อหาและการฝึก",
    q: "บทสวดในคลังเป็นบทใดบ้าง ใช้ภาษาอะไร?",
    a: "คลังบทสวดครอบคลุมทั้งบทพุทธ บทพราหมณ์-ฮินดู และบทมนต์เซน มีทั้งภาษาบาลี สันสกฤต และไทย พร้อมคำแปลและคำอธิบายความหมายทุกบท",
  },
  {
    cat: "การทำนายและเลขนำโชค",
    q: "การทำนายโชคชะตารายสัปดาห์อ้างอิงจากอะไร?",
    a: "ใช้ตำราพยากรณ์โบราณตามวิถีพราหมณ์ผสมปรัชญาเซน จำแนกตามวันเกิด ๗ วัน ครอบคลุม ๔ มิติ ได้แก่ การงาน ความรัก การเงิน และสุขภาพ เป็นแนวทางสำหรับการพินิจพิเคราะห์ ไม่ใช่คำทำนายตายตัว",
  },
  {
    cat: "การทำนายและเลขนำโชค",
    q: "เลขนำโชครายวันคำนวณจากอะไร?",
    a: "คำนวณจากหลักเลขศาสตร์ตะวันออก (Numerology) ผสมกับปฏิทินจันทรคติ แสดงเลขมงคล สีนำโชค และทิศที่เป็นมงคลประจำวัน เพื่อใช้เป็นแรงบันดาลใจในการตัดสินใจ",
  },
  {
    cat: "ทั่วไป",
    q: "ชุมชน Private Group อยู่ที่ไหน ใช้แพลตฟอร์มอะไร?",
    a: "ชุมชนของเราอยู่บนกลุ่มปิดที่เฉพาะสมาชิกเท่านั้นเข้าได้ รายละเอียดและลิงก์เข้ากลุ่มจะส่งให้ทางอีเมลทันทีหลังสมัครสมาชิก",
  },
  {
    cat: "ทั่วไป",
    q: "ข้อมูลส่วนตัวและการชำระเงินปลอดภัยแค่ไหน?",
    a: "เราปฏิบัติตาม พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล (PDPA) พ.ศ. ๒๕๖๒ อย่างเคร่งครัด การชำระเงินผ่านช่องทางที่เข้ารหัส SSL ทุกครั้ง ไม่มีการเก็บข้อมูลบัตรเครดิตบนเซิร์ฟเวอร์ของเรา",
  },
];

const CATS = [...new Set(FAQ_ITEMS.map(f => f.cat))];

function FaqItem({ item, open, onToggle }) {
  return (
    <div className={`m-faq-item${open ? " m-faq-item--open" : ""}`}>
      <button className="m-faq-q" onClick={onToggle} aria-expanded={open}>
        <span>{item.q}</span>
        <span className="m-faq-icon" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div className="m-faq-a" aria-hidden={!open}>
        <p>{item.a}</p>
      </div>
    </div>
  );
}

function Faq() {
  const [openIdx, setOpenIdx] = useState_FAQ(null);
  const [activeCat, setActiveCat] = useState_FAQ("สมาชิกภาพ");

  const filtered = FAQ_ITEMS.filter(f => f.cat === activeCat);

  const toggle = (i) => setOpenIdx(prev => prev === i ? null : i);

  return (
    <section id="faq" className="pad m-faq">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">คำถามที่พบบ่อย · FAQ</span>
          <TripleDivider />
          <h2>มีข้อสงสัย?<br />เรามี<em>คำตอบ</em>ให้</h2>
        </div>

        <div className="m-faq-cats reveal">
          {CATS.map(cat => (
            <button
              key={cat}
              className={`m-faq-cat-btn${activeCat === cat ? " active" : ""}`}
              onClick={() => { setActiveCat(cat); setOpenIdx(null); }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="m-faq-list reveal">
          {filtered.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              open={openIdx === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        <div className="m-faq-footer reveal">
          <p>ยังมีข้อสงสัยเพิ่มเติม?</p>
          <a href="#newsletter" className="btn btn--ghost-gold btn--sm">ติดต่อเรา</a>
        </div>
      </div>
    </section>
  );
}

window.Faq = Faq;
