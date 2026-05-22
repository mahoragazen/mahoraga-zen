// news.jsx — Merit events feed (ข่าวสารงานบุญ)

const { useState: useStateNw } = React;

const TAGS = ["ทั้งหมด", "งานบุญ", "ปฏิบัติธรรม", "กฐิน-ผ้าป่า", "ใส่บาตร", "เทศน์"];

const EVENTS = [
  {
    tag: "ปฏิบัติธรรม",
    title: "ปฏิบัติธรรม ๓ คืน · กลับสู่ภายใน",
    place: "สวนโมกขพลาราม · สุราษฎร์ธานี",
    date: { d: 7, m: 6 },
    dateEnd: { d: 9, m: 6 },
    summary: "ค่ายปฏิบัติธรรมพร้อมพระอาจารย์ผู้เชี่ยวชาญ ในบรรยากาศป่าธรรมชาติ เหมาะสำหรับมือใหม่ — ที่พักและอาหารฟรี",
    spots: 8,
    spotsTotal: 30,
    fee: "ฟรี (รับบริจาคตามศรัทธา)",
    type: "register",
    href: "#",
    image: "buddha-sitting",
  },
  {
    tag: "กฐิน-ผ้าป่า",
    title: "งานทอดกฐินสามัคคี · วัดบวรนิเวศวิหาร",
    place: "วัดบวรนิเวศวิหาร · กรุงเทพมหานคร",
    date: { d: 19, m: 11 },
    dateEnd: null,
    summary: "งานทอดกฐินประจำปี ๒๕๖๗ ร่วมกันสร้างมหากุศล ผู้ใจบุญร่วมเป็นเจ้าภาพ ทำบุญด้วยใจอนุโมทนา",
    spots: null,
    fee: "ตามศรัทธา",
    type: "donate",
    href: "#",
    image: "ganesha-sitting",
  },
  {
    tag: "ใส่บาตร",
    title: "ใส่บาตรเทโวโรหณะ · ๒๕๖๗",
    place: "วัดสระเกศราชวรมหาวิหาร · กรุงเทพมหานคร",
    date: { d: 17, m: 10 },
    dateEnd: null,
    summary: "ใส่บาตรพระสงฆ์ ๕๐๐ รูป เนื่องในวันออกพรรษา ในประเพณีเทโวโรหณะ — รับชุดสังฆทานพร้อมที่งาน",
    spots: 240,
    spotsTotal: 500,
    fee: "ชุดบาตร ๓๙๙ บาท",
    type: "register",
    href: "#",
    image: "buddha-standing",
  },
  {
    tag: "งานบุญ",
    title: "พิธีเททองหล่อพระพุทธรูป · ครั้งที่ ๓",
    place: "วัดญาณเวศกวัน · จังหวัดนครปฐม",
    date: { d: 14, m: 7 },
    dateEnd: null,
    summary: "พิธีศักดิ์สิทธิ์ ๓ ทศวรรษพระอาจารย์ ผู้ร่วมพิธีจะได้รับเหรียญที่ระลึก พร้อมการบริจาคเพื่อสร้างศาลาปฏิบัติธรรม",
    spots: 80,
    spotsTotal: 300,
    fee: "เริ่ม ๑,๙๙๙ บาท",
    type: "register",
    href: "#",
    image: "hero-ganesh",
  },
  {
    tag: "เทศน์",
    title: "เทศน์มหาชาติ · ๑๓ กัณฑ์",
    place: "วัดพระเชตุพน (วัดโพธิ์) · กรุงเทพมหานคร",
    date: { d: 22, m: 9 },
    dateEnd: { d: 23, m: 9 },
    summary: "เทศน์มหาชาติประจำปี ฟังต่อเนื่อง ๒ วัน พร้อมพระอาจารย์ผู้ทรงคุณวุฒิ — เปิดให้ฟังฟรี อาหารกลางวันเลี้ยง",
    spots: null,
    fee: "ฟรี",
    type: "register",
    href: "#",
    image: "ganesha-full",
  },
  {
    tag: "ปฏิบัติธรรม",
    title: "Retreat ๗ วัน · ภาวนาพุทโธ",
    place: "วัดป่าบ้านตาด · จังหวัดอุดรธานี",
    date: { d: 12, m: 8 },
    dateEnd: { d: 18, m: 8 },
    summary: "เข้าปฏิบัติภาวนาตามแนวพระอาจารย์มั่น ๗ วันเงียบ ไม่มีโทรศัพท์ ไม่มีหนังสือ — เฉพาะใจกับลมหายใจ",
    spots: 4,
    spotsTotal: 20,
    fee: "ตามศรัทธา",
    type: "register",
    href: "#",
    image: "buddha-sitting",
  },
];

const THAI_MONTHS_NEWS = ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];
const toThaiN = (n) => String(n).replace(/\d/g, (d) => "๐๑๒๓๔๕๖๗๘๙"[Number(d)]);

const EventDate = ({ start, end }) => (
  <div className="m-nw-date">
    <span className="display m-nw-d">{toThaiN(start.d)}</span>
    <span className="display m-nw-m">{THAI_MONTHS_NEWS[start.m - 1]}</span>
    {end && (
      <>
        <span className="m-nw-arrow" aria-hidden="true">—</span>
        <span className="display m-nw-d">{toThaiN(end.d)}</span>
        <span className="display m-nw-m">{THAI_MONTHS_NEWS[end.m - 1]}</span>
      </>
    )}
  </div>
);

function News() {
  const [filter, setFilter] = useStateNw("ทั้งหมด");
  const list = filter === "ทั้งหมด" ? EVENTS : EVENTS.filter(e => e.tag === filter);

  return (
    <section id="news" className="pad m-nw">
      <div className="m-nw-bg" aria-hidden="true">
        <div className="m-nw-pos m-nw-pos-l">
          <div className="parallax-layer parallax-slow drift-sway">
            <SacredImage src="assets/buddha-standing.png" size={460} opacity={0.15} />
          </div>
        </div>
        <div className="m-nw-pos m-nw-pos-r">
          <div className="parallax-layer parallax-fast drift-fast">
            <SacredImage src="assets/ganesha-sitting.png" size={420} opacity={0.13} />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">ข่าวสาร · งานบุญ</span>
          <TripleDivider />
          <h2><em>วาระบุญ</em><br />ที่ใกล้คุณ ที่สุด</h2>
          <p className="lede">
            รวมข่าวงานบุญ ปฏิบัติธรรม กฐิน-ผ้าป่า จากวัดสำคัญทั่วประเทศ
            — เลือกงานที่ใจชอบ แล้วร่วมเป็นส่วนหนึ่งของบุญใหญ่
          </p>
        </div>

        <div className="m-nw-filters reveal" role="tablist">
          {TAGS.map((t, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={filter === t}
              className={`m-nw-filter ${filter === t ? "active" : ""}`}
              onClick={() => setFilter(t)}
            >
              {t}
              <span className="m-nw-filter-n display">
                ({toThaiN(t === "ทั้งหมด" ? EVENTS.length : EVENTS.filter(e => e.tag === t).length)})
              </span>
            </button>
          ))}
        </div>

        <div className="m-nw-grid">
          {list.map((e, i) => (
            <article key={`${filter}-${i}`} className="m-nw-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="m-nw-thumb">
                <div className="m-nw-thumb-orn parallax-layer parallax-fast">
                  <SacredImage src={`assets/${e.image}.png`} size={300} opacity={0.65} />
                </div>
                <EventDate start={e.date} end={e.dateEnd} />
                <span className="m-nw-tag display">{e.tag}</span>
              </div>

              <div className="m-nw-body">
                <h3>{e.title}</h3>
                <p className="m-nw-place">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 22s-8-7-8-13a8 8 0 1116 0c0 6-8 13-8 13z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  {e.place}
                </p>
                <p className="m-nw-summary">{e.summary}</p>

                <div className="m-nw-meta">
                  <div className="m-nw-meta-l">
                    <span className="display gold-text">ค่าใช้จ่าย</span>
                    <span className="serif">{e.fee}</span>
                  </div>
                  {e.spots !== null && (
                    <div className="m-nw-meta-r">
                      <span className="display gold-text">ที่นั่งเหลือ</span>
                      <div className="m-nw-spots">
                        <div className="m-nw-spots-bar" aria-hidden="true">
                          <span style={{ width: `${(e.spots / e.spotsTotal) * 100}%` }}></span>
                        </div>
                        <span className="serif" style={{ fontSize: 14 }}>
                          {toThaiN(e.spots)} / {toThaiN(e.spotsTotal)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <a href={e.href} className={`btn btn--sm ${e.type === "donate" ? "btn--gold" : "btn--ghost"} m-nw-cta`}>
                  {e.type === "donate" ? "ร่วมบริจาค" : "ลงทะเบียนเข้าร่วม"}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {list.length === 0 && (
          <p className="muted center reveal" style={{ marginTop: 40 }}>
            <Lotus size={40} opacity={0.4} />
            ยังไม่มีงานในหมวดนี้ — ลองดูหมวดอื่น
          </p>
        )}

        <div className="m-nw-foot reveal">
          <p className="muted">
            <Diamond filled={false} color="var(--gold)" />
            สมาชิกได้รับแจ้งเตือนงานบุญใกล้บ้านทุกสัปดาห์ ทาง LINE
            <Diamond filled={false} color="var(--gold)" />
          </p>
          <a href="#membership" className="btn btn--ghost-gold btn--sm">รับแจ้งเตือน · สมัครสมาชิก</a>
        </div>
      </div>

      <style>{`
        .m-nw { background: var(--cream); overflow: hidden; }
        .m-nw-bg { position: absolute; inset: 0; pointer-events: none; }
        .m-nw-pos { position: absolute; }
        .m-nw-pos-l { left: -6%; top: 10%; }
        .m-nw-pos-r { right: -4%; bottom: 4%; }

        .m-nw-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 40px;
        }
        .m-nw-filter {
          padding: 9px 16px;
          background: transparent;
          border: 1px solid var(--line-strong);
          color: var(--ink);
          font-family: var(--f-sans);
          font-size: 13px;
          letter-spacing: .04em;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all .3s var(--ease-zen);
        }
        .m-nw-filter:hover {
          border-color: var(--gold);
          color: var(--gold-deep);
        }
        .m-nw-filter.active {
          background: var(--ink);
          border-color: var(--ink);
          color: var(--cream);
        }
        .m-nw-filter-n {
          font-style: italic;
          font-size: 12px;
          opacity: 0.6;
        }

        .m-nw-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }
        @media (min-width: 720px) { .m-nw-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1100px) { .m-nw-grid { grid-template-columns: 1fr 1fr 1fr; } }

        .m-nw-card {
          background: var(--cream);
          border: 1px solid var(--line);
          display: flex;
          flex-direction: column;
          transition: transform .4s var(--ease-zen), box-shadow .4s var(--ease-zen);
        }
        .m-nw-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(44,31,6,.1);
        }

        .m-nw-thumb {
          position: relative;
          background: linear-gradient(135deg, #2C1F06 0%, #4a3a1a 70%);
          aspect-ratio: 16/10;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .m-nw-thumb-orn {
          opacity: 1;
          transition: transform .6s var(--ease-zen);
        }
        .m-nw-card:hover .m-nw-thumb-orn { transform: scale(1.08); }

        .m-nw-date {
          position: absolute;
          top: 14px; left: 14px;
          background: var(--cream);
          padding: 8px 12px;
          display: inline-flex;
          align-items: baseline;
          gap: 4px;
          border: 1px solid var(--gold);
        }
        .m-nw-d {
          font-size: 22px;
          font-weight: 500;
          color: var(--ink);
          letter-spacing: 0;
        }
        .m-nw-m {
          font-size: 12px;
          color: var(--gold-deep);
          letter-spacing: .08em;
          margin-left: 2px;
        }
        .m-nw-arrow {
          color: var(--ink-mute);
          margin: 0 4px;
          font-size: 12px;
        }
        .m-nw-tag {
          position: absolute;
          top: 14px; right: 14px;
          font-size: 11px;
          letter-spacing: .18em;
          color: var(--cream);
          background: rgba(44,31,6,.55);
          backdrop-filter: blur(4px);
          padding: 4px 9px;
          text-transform: uppercase;
          font-style: italic;
        }

        .m-nw-body {
          padding: 22px 22px 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .m-nw-body h3 {
          font-size: 19px;
          font-weight: 500;
          line-height: 1.35;
          margin-bottom: 8px;
        }
        .m-nw-place {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--gold-deep);
          font-size: 13px;
          margin-bottom: 12px;
        }
        .m-nw-summary {
          font-size: 14px;
          color: var(--ink-soft);
          line-height: 1.65;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .m-nw-meta {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 0;
          margin-bottom: 18px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .m-nw-meta .display {
          display: block;
          font-size: 10px;
          letter-spacing: .12em;
          margin-bottom: 4px;
          text-transform: uppercase;
        }
        .m-nw-meta-l .serif { font-size: 14px; color: var(--ink); }
        .m-nw-meta-r { text-align: right; min-width: 110px; }
        .m-nw-spots {
          display: flex;
          flex-direction: column;
          gap: 4px;
          align-items: flex-end;
        }
        .m-nw-spots-bar {
          width: 100%;
          height: 4px;
          background: var(--line);
          position: relative;
          overflow: hidden;
        }
        .m-nw-spots-bar span {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          background: var(--gold);
          transition: width .6s var(--ease-zen);
        }

        .m-nw-cta {
          align-self: flex-start;
          width: 100%;
          justify-content: center;
        }

        .m-nw-foot {
          margin-top: 60px;
          padding-top: 32px;
          border-top: 1px solid var(--line);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .m-nw-foot p {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-size: 14px;
        }
      `}</style>
    </section>
  );
}

window.News = News;
