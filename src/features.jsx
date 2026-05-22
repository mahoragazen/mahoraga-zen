// features.jsx — "Mahoraga ZEN ทำอะไรได้บ้าง" — feature grid

const FEATURES = [
  {
    n: 1,
    title: "ปรัชญาเซน เพื่อการตัดสินใจ",
    body: "หลักคิดโบราณที่ช่วยให้ผู้นำเห็นชัดในความซับซ้อน ตัดสินใจด้วยจิตที่นิ่ง ไม่หวั่นไหวกับเสียงรบกวน",
    Ornament: ({ size }) => <SeedOfLife size={size} opacity={0.55} />,
  },
  {
    n: 2,
    title: "ยุทธศาสตร์การเติบโต",
    body: "วิเคราะห์ธุรกิจอย่างลึกซึ้ง วางแผน ๓๐ วัน ๙๐ วัน และ ๑ ปี ที่สอดคล้องกับจังหวะของตลาด และจังหวะของชีวิต",
    Ornament: ({ size }) => <Mandala size={size} rings={4} opacity={0.6} />,
  },
  {
    n: 3,
    title: "บทสวด & สมาธิรายวัน",
    body: "คอลเลกชันบทสวดศักดิ์สิทธิ์ และคู่มือสมาธิ ๑๘๐+ บท ที่ออกแบบมาเฉพาะ สำหรับผู้นำที่ต้องตัดสินใจสำคัญทุกวัน",
    Ornament: ({ size }) => <Lotus size={size} opacity={0.65} />,
  },
  {
    n: 4,
    title: "ชุมชนผู้นำคลื่นใหม่",
    body: "เครือข่ายผู้ประกอบการที่เข้าใจ ว่าความสำเร็จที่แท้จริง เริ่มจากภายใน — แลกเปลี่ยน เรียนรู้ และเติบโตไปด้วยกัน",
    Ornament: ({ size }) => <OmMark size={size} opacity={0.7} />,
  },
];

function Features() {
  return (
    <section id="features" className="pad m-features">
      <div className="m-features-bg" aria-hidden="true">
        <div style={{ position: "absolute", top: "8%", left: "-8%" }}>
          <div className="parallax-layer parallax-slow drift-slow">
            <SacredImage src="assets/ganesha-sitting.png" size={580} opacity={0.24} />
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "-2%", right: "-6%" }}>
          <div className="parallax-layer parallax-med drift-sway">
            <SacredImage src="assets/buddha-standing.png" size={500} opacity={0.22} />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">เสาหลักทั้งสี่</span>
          <TripleDivider />
          <h2>สี่เสาหลัก ที่ค้ำจุน<br /><em>ผู้นำผู้ตื่นรู้</em></h2>
          <p className="lede">
            มโหราคะเซน ไม่ใช่เพียงแอปพลิเคชัน
            แต่เป็นเส้นทางบ่มเพาะภาวะผู้นำที่ลึกซึ้ง —
            ผสานปัญญาตะวันออก กับศาสตร์การเติบโตทางธุรกิจ
          </p>
        </div>

        <div className="m-feat-grid">
          {FEATURES.map((f, i) => (
            <article key={i} className="m-feat-card reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="m-feat-orn" aria-hidden="true">
                <f.Ornament size={120} />
              </div>
              <div className="m-feat-n">
                <span className="display">๐{f.n}</span>
                <span className="m-feat-n-line" aria-hidden="true"></span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
              <a href="#services" className="m-feat-link">
                อ่านต่อ
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .m-features { background: var(--cream); overflow: hidden; }
        .m-features-bg { position: absolute; inset: 0; pointer-events: none; color: var(--gold); }

        .m-feat-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
        }
        @media (min-width: 700px) { .m-feat-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1100px) { .m-feat-grid { grid-template-columns: repeat(4, 1fr); } }

        .m-feat-card {
          background: var(--cream);
          padding: 40px 32px 36px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: background .4s var(--ease-zen);
        }
        .m-feat-card:hover {
          background: var(--cream-warm);
        }
        .m-feat-orn {
          position: absolute;
          top: -20px; right: -20px;
          color: var(--gold);
          opacity: .3;
          transition: opacity .4s var(--ease-zen), transform .6s var(--ease-zen);
        }
        .m-feat-card:hover .m-feat-orn {
          opacity: .55;
          transform: rotate(15deg) scale(1.08);
        }
        .m-feat-n {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          color: var(--gold-deep);
        }
        .m-feat-n .display {
          font-size: 28px;
          font-style: italic;
          font-weight: 400;
        }
        .m-feat-n-line {
          width: 36px;
          height: 1px;
          background: var(--gold);
        }
        .m-feat-card h3 {
          font-size: 22px;
          font-weight: 500;
          line-height: 1.35;
          margin-bottom: 16px;
          min-height: 2.7em;
        }
        .m-feat-card p {
          color: var(--ink-soft);
          font-size: 15px;
          line-height: 1.75;
          margin-bottom: 28px;
          flex-grow: 1;
        }
        .m-feat-link {
          color: var(--ink);
          text-decoration: none;
          font-size: 13px;
          letter-spacing: .14em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          align-self: flex-start;
          padding-bottom: 3px;
          border-bottom: 1px solid var(--gold);
          transition: gap .3s var(--ease-zen), color .3s var(--ease-zen);
        }
        .m-feat-link:hover {
          gap: 14px;
          color: var(--gold-deep);
        }
      `}</style>
    </section>
  );
}

window.Features = Features;
