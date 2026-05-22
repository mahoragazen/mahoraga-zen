// fortune.jsx — Weekly fortune reading by Thai day-of-birth (7 days)

const { useState: useStateF } = React;

// Traditional Thai day-of-birth colors + planet rulerships
const DAYS = [
  { id: "sun",  name: "อาทิตย์",   color: "#D04A3C", planet: "อาทิตย์",  glyph: "☉", symbol: "ครุฑ" },
  { id: "mon",  name: "จันทร์",    color: "#E8C547", planet: "จันทร์",   glyph: "☽", symbol: "เสือ" },
  { id: "tue",  name: "อังคาร",    color: "#D87090", planet: "อังคาร",   glyph: "♂", symbol: "สิงห์" },
  { id: "wed",  name: "พุธ",       color: "#5CA86E", planet: "พุธ",      glyph: "☿", symbol: "ช้าง" },
  { id: "wed-eve", name: "พุธกลางคืน", color: "#9C7E2B", planet: "ราหู",     glyph: "☊", symbol: "หนู" },
  { id: "thu",  name: "พฤหัสบดี",  color: "#E89B40", planet: "พฤหัส",    glyph: "♃", symbol: "หนูแก้ว" },
  { id: "fri",  name: "ศุกร์",     color: "#5DA5D9", planet: "ศุกร์",    glyph: "♀", symbol: "วัว" },
  { id: "sat",  name: "เสาร์",     color: "#7858A8", planet: "เสาร์",    glyph: "♄", symbol: "นาค" },
];

// Hand-crafted fortunes per day. Each: dimension → stars (1-5) + body
const FORTUNES = {
  sun: {
    overall: "สัปดาห์แห่งการเปล่งประกาย — สิ่งที่คุณเริ่มต้นในวันจันทร์ จะส่งผลใหญ่ในเดือนหน้า ระวังคำพูดที่ร้อนแรงในวันพุธ",
    work: { stars: 5, body: "งานเด่น มีผู้ใหญ่หนุนหลัง โอกาสเลื่อนตำแหน่งหรือได้รับงานสำคัญ" },
    money: { stars: 4, body: "การเงินคล่อง แต่อย่าผลีผลามลงทุนสิ่งใหม่ในวันอังคาร" },
    love: { stars: 3, body: "ความรักทรงตัว — ใส่ใจคนข้างกายให้มากขึ้น" },
    health: { stars: 3, body: "พักผ่อนให้พอ ระวังโรคเกี่ยวกับหัวใจและความดัน" },
    lucky: ["๗", "๒๓", "๙๐"],
    color: "ทอง · แดงเข้ม",
    direction: "ทิศตะวันออก",
    mantra: "โอม ราชา ราชา ภวันตุ เม",
  },
  mon: {
    overall: "สัปดาห์แห่งการไหลเวียน — ใจอ่อนไหวเป็นพิเศษ ใช้พลังนี้สร้างสรรค์งาน อย่าใช้ระบายอารมณ์",
    work: { stars: 4, body: "งานสร้างสรรค์ไปได้สวย ระวังคำพูดที่ไม่ชัดเจนในวันพฤหัส" },
    money: { stars: 3, body: "เงินเข้าจากแหล่งที่ไม่คาดคิด — เก็บส่วนหนึ่งไว้ก่อน" },
    love: { stars: 5, body: "ความรักเด่นมาก โสดมีลุ้น มีคู่จะหวานชื่นเป็นพิเศษ" },
    health: { stars: 4, body: "สุขภาพดี ดื่มน้ำมากๆ ระวังเรื่องท้องและกระเพาะ" },
    lucky: ["๒", "๑๘", "๖๔"],
    color: "ครีม · เงิน",
    direction: "ทิศตะวันตกเฉียงเหนือ",
    mantra: "โอม จันทรายะ นมะห์",
  },
  tue: {
    overall: "สัปดาห์แห่งการลงมือทำ — พลังเต็มเปี่ยม แต่ระงับความใจร้อน ๓ ครั้งก่อนพูด",
    work: { stars: 5, body: "พลังการทำงานสูง เหมาะเริ่มโปรเจกต์ใหญ่ การประชุมสำคัญในวันศุกร์" },
    money: { stars: 3, body: "ใช้จ่ายระมัดระวัง อาจมีค่าใช้จ่ายฉุกเฉินในวันพุธ" },
    love: { stars: 4, body: "ความรักร้อนแรง เคียงคู่ก้าวสู่ระดับใหม่ โสดเจอคนน่าสนใจ" },
    health: { stars: 4, body: "ออกกำลังกายสม่ำเสมอ ระวังอุบัติเหตุจากการเร่งรีบ" },
    lucky: ["๙", "๔๕", "๑๒๗"],
    color: "ชมพู · แดง",
    direction: "ทิศตะวันออกเฉียงเหนือ",
    mantra: "โอม อังคารายะ นมะห์",
  },
  wed: {
    overall: "สัปดาห์แห่งการสื่อสาร — คำพูดของคุณมีน้ำหนัก โอกาสทางธุรกิจมาจากการพูดคุย",
    work: { stars: 4, body: "ดีลงานสำเร็จ คุยลูกค้าได้ใจ ระวังเอกสารผิดพลาดในวันอาทิตย์" },
    money: { stars: 4, body: "การเงินมีเสน่ห์ เงินจากการเจรจา ค่าคอมมิชชั่น หรือค่าที่ปรึกษา" },
    love: { stars: 3, body: "คุยกันให้มากขึ้น การเงียบจะกลายเป็นความเข้าใจผิด" },
    health: { stars: 3, body: "ระบบประสาทอ่อนล้า ลดคาเฟอีน นั่งสมาธิเช้า-เย็น" },
    lucky: ["๕", "๓๒", "๒๑๘"],
    color: "เขียวอ่อน · เขียวมรกต",
    direction: "ทิศเหนือ",
    mantra: "โอม พุธายะ นมะห์",
  },
  "wed-eve": {
    overall: "สัปดาห์แห่งการเปลี่ยนแปลงลึก — สิ่งที่ซ่อนไว้จะเผยตัว ใช้ปัญญา ไม่ใช่อารมณ์",
    work: { stars: 3, body: "เผชิญหน้ากับปัญหาที่หลีกเลี่ยงมานาน — แก้ตอนนี้ดีกว่าปล่อยไว้" },
    money: { stars: 3, body: "ระวังการลงทุนที่ดูดีเกินจริง ตรวจสอบหลายๆ ชั้น" },
    love: { stars: 4, body: "ความสัมพันธ์ผ่านบททดสอบ ลึกซึ้งขึ้นหลังพ้นไป" },
    health: { stars: 3, body: "ฟังร่างกายให้มากกว่าเดิม นอนเร็วในวันเสาร์" },
    lucky: ["๔", "๒๗", "๕๔"],
    color: "ดำ · ม่วงเข้ม",
    direction: "ทิศตะวันตกเฉียงใต้",
    mantra: "โอม ราหเว นมะห์",
  },
  thu: {
    overall: "สัปดาห์แห่งโชคลาภและปัญญา — มีโอกาสพิเศษเข้ามาเงียบๆ — รับให้ทัน",
    work: { stars: 5, body: "งานก้าวกระโดด ผู้ใหญ่อุปถัมภ์ อาจมีโอกาสไปต่างประเทศหรือเรียนต่อ" },
    money: { stars: 5, body: "การเงินไหลเข้าจากหลายทาง โชคลาภ การได้รับมรดกหรือของขวัญ" },
    love: { stars: 3, body: "ความรักทรงตัว ความสัมพันธ์กับครอบครัวดีขึ้น" },
    health: { stars: 4, body: "สุขภาพดี เริ่มกิจกรรมใหม่ที่ดีต่อร่างกาย" },
    lucky: ["๓", "๒๑", "๑๘๙"],
    color: "ส้ม · ทอง",
    direction: "ทิศตะวันออกเฉียงเหนือ",
    mantra: "โอม คุรเว นมะห์",
  },
  fri: {
    overall: "สัปดาห์แห่งความงดงาม — เสน่ห์เปล่งประกาย การลงทุนกับตัวเองจะคุ้มค่าทุกบาท",
    work: { stars: 4, body: "งานที่เกี่ยวกับศิลปะ ดีไซน์ หรือการสื่อสารโดดเด่น คนเห็นค่าฝีมือคุณ" },
    money: { stars: 4, body: "เงินเข้าจากงานที่รัก ระวังการใช้จ่ายกับของฟุ่มเฟือยเกินไป" },
    love: { stars: 5, body: "เด่นที่สุดในสัปดาห์! เสน่ห์เต็มเปี่ยม โสดมีโอกาสพบเนื้อคู่" },
    health: { stars: 4, body: "ดูแลผิวพรรณ ทานอาหารสะอาด หลีกเลี่ยงของหวานจัด" },
    lucky: ["๖", "๑๕", "๗๕"],
    color: "ฟ้า · ขาวมุก",
    direction: "ทิศตะวันตก",
    mantra: "โอม ศุกรายะ นมะห์",
  },
  sat: {
    overall: "สัปดาห์แห่งความมั่นคง — สิ่งที่อดทนรอคอย เริ่มออกผล ทำงานหนักได้ ไม่ต้องรีบ",
    work: { stars: 5, body: "ผลงานเก่าเริ่มได้รับการยอมรับ ก้าวหน้าเป็นขั้นเป็นตอน อย่ารีบลัด" },
    money: { stars: 4, body: "การเงินมั่นคง เหมาะลงทุนระยะยาว เช่น อสังหาริมทรัพย์หรือพันธบัตร" },
    love: { stars: 3, body: "ความสัมพันธ์ผูกพันลึก แต่ขาดความหวือหวา — ลองทำสิ่งใหม่ๆ ด้วยกัน" },
    health: { stars: 3, body: "ระวังข้อกระดูก เข่า หลัง พักให้พอ ยืดเส้นยืดสายทุกวัน" },
    lucky: ["๘", "๓๖", "๒๔๓"],
    color: "ม่วงเข้ม · น้ำเงิน",
    direction: "ทิศใต้",
    mantra: "โอม ศนิ-เทวายะ นมะห์",
  },
};

const Stars = ({ n }) => (
  <span className="m-frt-stars" aria-label={`${n} จาก 5 ดาว`}>
    {[1,2,3,4,5].map(i => (
      <span key={i} className={i <= n ? "on" : ""}>✦</span>
    ))}
  </span>
);

function Fortune() {
  const [selected, setSelected] = useStateF("sun");
  const d = DAYS.find(x => x.id === selected);
  const f = FORTUNES[selected];

  return (
    <section id="fortune" className="pad m-frt">
      <div className="m-frt-bg" aria-hidden="true">
        <div className="m-frt-pos m-frt-pos-l">
          <div className="parallax-layer parallax-slow drift-slow">
            <SacredImage src="assets/ganesha-full.png" size={580} opacity={0.16} />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">ทำนายโชคชะตา · ประจำสัปดาห์</span>
          <TripleDivider />
          <h2>ดวงประจำ<em>วันเกิด</em><br />สัปดาห์ที่ ๒๑ · ปี ๒๕๖๗</h2>
          <p className="lede">
            ตำราโบราณตามวิถีพราหมณ์ผสานเซน
            อ่านดวงรายสัปดาห์ตามวันเกิดของคุณ
            แล้วประยุกต์ใช้เพื่อตัดสินใจในชีวิตจริง
          </p>
        </div>

        <div className="m-frt-week reveal">
          <span className="display gold-text" style={{ letterSpacing: ".22em", fontSize: 12 }}>
            ★ สัปดาห์ ๒๐ – ๒๖ พฤษภาคม ๒๕๖๗
          </span>
        </div>

        {/* Day picker */}
        <div className="m-frt-picker reveal" role="tablist" aria-label="เลือกวันเกิด">
          {DAYS.map(day => (
            <button
              key={day.id}
              role="tab"
              aria-selected={selected === day.id}
              className={`m-frt-day ${selected === day.id ? "active" : ""}`}
              onClick={() => setSelected(day.id)}
              style={{ "--day-color": day.color }}
            >
              <span className="m-frt-day-dot" aria-hidden="true"></span>
              <span className="m-frt-day-name">{day.name}</span>
              <span className="display m-frt-day-glyph" aria-hidden="true">{day.glyph}</span>
            </button>
          ))}
        </div>

        {/* Reading card */}
        <article className="m-frt-card reveal bracketed" style={{ "--day-color": d.color }}>
          <span className="br-bl"></span><span className="br-br"></span>

          <header className="m-frt-card-head">
            <div className="m-frt-day-circle" aria-hidden="true">
              <span className="display">{d.glyph}</span>
            </div>
            <div className="m-frt-card-meta">
              <span className="display m-frt-card-en">DAY OF · {d.name.toUpperCase()}</span>
              <h3>ผู้เกิดวัน{d.name}</h3>
              <p className="muted">ดาวประจำวัน: ดาว{d.planet} · สัญลักษณ์: {d.symbol}</p>
            </div>
            <div className="m-frt-card-week display">
              สัปดาห์<br />ที่ ๒๑
            </div>
          </header>

          <p className="m-frt-overall serif">
            <span className="display gold-text" style={{ fontSize: 28, lineHeight: 0.5, verticalAlign: "top" }}>“</span>
            {f.overall}
          </p>

          {/* 4 dimensions */}
          <div className="m-frt-dims">
            {[
              { k: "การงาน", v: f.work,   icon: "lotus" },
              { k: "การเงิน", v: f.money, icon: "diamond" },
              { k: "ความรัก", v: f.love,  icon: "om" },
              { k: "สุขภาพ", v: f.health, icon: "seed" },
            ].map((dim, i) => (
              <div key={i} className="m-frt-dim">
                <div className="m-frt-dim-head">
                  <span className="m-frt-dim-icon" aria-hidden="true">
                    {dim.icon === "lotus" && <Lotus size={20} />}
                    {dim.icon === "om" && <OmMark size={20} />}
                    {dim.icon === "seed" && <SeedOfLife size={20} />}
                    {dim.icon === "diamond" && <Diamond size={12} filled color="var(--gold)" />}
                  </span>
                  <h4>{dim.k}</h4>
                  <Stars n={dim.v.stars} />
                </div>
                <p>{dim.v.body}</p>
              </div>
            ))}
          </div>

          {/* Bottom meta */}
          <div className="m-frt-bottom">
            <div className="m-frt-meta-item">
              <span className="display">เลขนำโชค</span>
              <div className="m-frt-numbers">
                {f.lucky.map((n, i) => <span key={i} className="serif">{n}</span>)}
              </div>
            </div>
            <div className="m-frt-meta-item">
              <span className="display">สีมงคล</span>
              <div className="m-frt-text">{f.color}</div>
            </div>
            <div className="m-frt-meta-item">
              <span className="display">ทิศหันหน้า</span>
              <div className="m-frt-text">{f.direction}</div>
            </div>
            <div className="m-frt-meta-item full">
              <span className="display">มนต์ประจำสัปดาห์</span>
              <div className="m-frt-mantra serif">{f.mantra}</div>
            </div>
          </div>

          <footer className="m-frt-card-foot">
            <a href="#" className="m-frt-share">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                <path d="M8.6 13.5L15.4 17.5M15.4 6.5L8.6 10.5" />
              </svg>
              แชร์ดวงของคุณ
            </a>
            <a href="#membership" className="btn btn--ghost-gold btn--sm">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="5" y="11" width="14" height="10" rx="1" />
                <path d="M8 11V7a4 4 0 018 0v4" />
              </svg>
              ดูสัปดาห์ถัดไป (สมาชิก)
            </a>
          </footer>
        </article>
      </div>

      <style>{`
        .m-frt { background: var(--cream); overflow: hidden; }
        .m-frt-bg { position: absolute; inset: 0; pointer-events: none; }
        .m-frt-pos { position: absolute; }
        .m-frt-pos-l { left: -6%; top: 12%; }

        .m-frt-week {
          text-align: center;
          margin-bottom: 24px;
        }

        .m-frt-picker {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          max-width: 980px;
          margin: 0 auto 40px;
        }
        @media (min-width: 720px) {
          .m-frt-picker { grid-template-columns: repeat(8, 1fr); }
        }
        .m-frt-day {
          background: var(--cream);
          border: 1px solid var(--line);
          padding: 16px 8px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all .3s var(--ease-zen);
          position: relative;
        }
        .m-frt-day:hover {
          border-color: var(--day-color);
          transform: translateY(-2px);
        }
        .m-frt-day.active {
          background: var(--day-color);
          border-color: var(--day-color);
          color: var(--cream);
        }
        .m-frt-day-dot {
          width: 14px; height: 14px;
          border-radius: 50%;
          background: var(--day-color);
          border: 1px solid rgba(0,0,0,.1);
        }
        .m-frt-day.active .m-frt-day-dot {
          background: var(--cream);
          border-color: rgba(255,255,255,.4);
        }
        .m-frt-day-name {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: .02em;
        }
        .m-frt-day-glyph {
          font-size: 13px;
          opacity: 0.5;
          letter-spacing: 0;
        }
        .m-frt-day.active .m-frt-day-glyph { opacity: 0.9; }

        .m-frt-card {
          background: var(--cream-warm);
          border: 1px solid var(--line);
          padding: 40px 32px;
          max-width: 980px;
          margin: 0 auto;
          position: relative;
        }
        @media (min-width: 800px) { .m-frt-card { padding: 56px 56px; } }

        .m-frt-card-head {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 24px;
          align-items: center;
          padding-bottom: 28px;
          margin-bottom: 28px;
          border-bottom: 1px solid var(--line);
        }
        .m-frt-day-circle {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: var(--day-color);
          color: var(--cream);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 38px;
          line-height: 1;
        }
        .m-frt-card-en {
          font-size: 12px;
          letter-spacing: .22em;
          color: var(--gold-deep);
          font-style: italic;
        }
        .m-frt-card-meta h3 {
          font-size: clamp(26px, 3vw, 34px);
          margin-top: 6px;
          font-weight: 500;
        }
        .m-frt-card-meta p {
          font-size: 14px;
          margin-top: 8px;
        }
        .m-frt-card-week {
          font-size: 13px;
          color: var(--ink-mute);
          font-style: italic;
          letter-spacing: .14em;
          text-align: right;
          line-height: 1.4;
        }
        @media (max-width: 640px) {
          .m-frt-card-head { grid-template-columns: auto 1fr; }
          .m-frt-card-week { display: none; }
        }

        .m-frt-overall {
          font-size: clamp(17px, 1.6vw, 20px);
          line-height: 1.7;
          color: var(--ink);
          margin-bottom: 36px;
          padding-left: 18px;
          border-left: 1px solid var(--day-color);
        }

        .m-frt-dims {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 36px;
        }
        @media (min-width: 700px) { .m-frt-dims { grid-template-columns: 1fr 1fr; gap: 24px; } }
        .m-frt-dim {
          padding: 22px 20px;
          background: var(--cream);
          border: 1px solid var(--line);
        }
        .m-frt-dim-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .m-frt-dim-head h4 {
          font-size: 17px;
          font-weight: 500;
          margin-right: auto;
        }
        .m-frt-dim-icon {
          width: 30px; height: 30px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--day-color);
        }
        .m-frt-dim p {
          font-size: 14px;
          line-height: 1.7;
          color: var(--ink-soft);
        }
        .m-frt-stars {
          font-size: 13px;
          letter-spacing: .15em;
          color: var(--ink-mute);
        }
        .m-frt-stars span.on { color: var(--gold); }

        .m-frt-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 24px;
          background: var(--cream);
          border: 1px solid var(--line);
          margin-bottom: 28px;
        }
        @media (min-width: 700px) { .m-frt-bottom { grid-template-columns: repeat(3, 1fr); } }
        .m-frt-meta-item .display {
          display: block;
          font-size: 11px;
          letter-spacing: .14em;
          color: var(--gold-deep);
          font-style: italic;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .m-frt-meta-item.full {
          grid-column: 1 / -1;
          padding-top: 18px;
          margin-top: 6px;
          border-top: 1px solid var(--line);
        }
        .m-frt-numbers {
          display: flex;
          gap: 10px;
        }
        .m-frt-numbers span {
          font-size: 22px;
          font-weight: 500;
          color: var(--ink);
          padding: 4px 10px;
          background: var(--cream-warm);
          border: 1px solid var(--gold);
        }
        .m-frt-text { font-size: 15px; }
        .m-frt-mantra {
          font-size: 18px;
          color: var(--ink);
          font-style: italic;
          letter-spacing: .04em;
        }

        .m-frt-card-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding-top: 28px;
          border-top: 1px solid var(--line);
        }
        .m-frt-share {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--ink-soft);
          font-size: 13px;
          text-decoration: none;
          letter-spacing: .04em;
        }
        .m-frt-share:hover { color: var(--gold-deep); }
        .m-frt-share svg { color: var(--gold); }
      `}</style>
    </section>
  );
}

window.Fortune = Fortune;
