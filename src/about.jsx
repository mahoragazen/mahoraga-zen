// about.jsx — About / Origin section for Mahoraga ZEN

const PILLARS = [
  { icon: "lotus", th: "ปัญญาตะวันออก", sub: "สังเคราะห์พุทธปรัชญา เต๋า และเซน ให้จับต้องได้ในชีวิตสมัยใหม่" },
  { icon: "om",    th: "ชุมชนผู้ตื่น",   sub: "พื้นที่ปลอดภัยสำหรับทุกคนที่กำลังค้นหาความหมายลึกกว่าที่ตาเห็น" },
  { icon: "lotus", th: "เส้นทางสู่ใจ",   sub: "บทสวด สมาธินำทาง และเลขศาสตร์ — เครื่องมือที่ผ่านการพิสูจน์นับศตวรรษ" },
];

function About() {
  return (
    <section id="about" className="pad m-abt">
      <div className="m-abt-bg" aria-hidden="true">
        <div className="parallax-layer parallax-slow" style={{ position: "absolute", top: "5%", left: "-8%", opacity: 0.13 }}>
          <Mandala rings={5} size={560} />
        </div>
        <div className="parallax-layer parallax-fast" style={{ position: "absolute", bottom: "4%", right: "-4%", opacity: 0.10 }}>
          <SacredImage src="assets/ganesha-full.png" size={400} opacity={1} />
        </div>
      </div>

      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">เกี่ยวกับเรา · ที่มาของมโหราคะเซน</span>
          <TripleDivider />
          <h2>เกิดจาก<em>การค้นหา</em><br />เติบโตด้วย<em>ชุมชน</em></h2>
          <p className="lede">
            มโหราคะเซนไม่ได้เกิดจากแผนธุรกิจ —
            แต่เกิดจากคำถามเดียวกันที่หลายคนถาม:
            <em>ในโลกที่วุ่นวาย เราจะหาความสงบและปัญญาที่แท้จริงได้ที่ไหน?</em>
          </p>
        </div>

        <div className="m-abt-story reveal bracketed">
          <span className="br-bl"></span><span className="br-br"></span>
          <div className="m-abt-story-inner">
            <div className="m-abt-story-text">
              <p>
                เราเริ่มต้นในฐานะกลุ่มเล็ก ๆ ของคนที่รู้สึกว่าปรัชญาตะวันออก —
                พุทธ เต๋า เซน — มีคำตอบให้กับชีวิตสมัยใหม่
                แต่ไม่รู้จะเริ่มต้นจากตรงไหน
              </p>
              <p>
                แทนที่จะเก็บความรู้ไว้คนเดียว เราจึงสร้างพื้นที่นี้ขึ้น
                เพื่อให้ทุกคนเข้าถึงได้ — ไม่ว่าจะอยู่ที่ไหน
                ไม่ว่าจะเริ่มต้นจากจุดใด
              </p>
              <p>
                วันนี้ชุมชนของเรามีสมาชิกจากทั่วประเทศ
                ที่มาร่วมกันเดินบนเส้นทางแห่งการตื่นรู้
                ผ่านบทสวด สมาธิ และปัญญาที่ถ่ายทอดกันมานับพันปี
              </p>
            </div>
            <div className="m-abt-story-stat">
              <div className="m-abt-stat-item">
                <span className="m-abt-stat-num gold-text">๔๒๗+</span>
                <span className="m-abt-stat-label">สมาชิกชุมชน</span>
              </div>
              <div className="m-abt-stat-divider"></div>
              <div className="m-abt-stat-item">
                <span className="m-abt-stat-num gold-text">๑๘๐+</span>
                <span className="m-abt-stat-label">บทสวดศักดิ์สิทธิ์</span>
              </div>
              <div className="m-abt-stat-divider"></div>
              <div className="m-abt-stat-item">
                <span className="m-abt-stat-num gold-text">∞</span>
                <span className="m-abt-stat-label">ปีของภูมิปัญญา</span>
              </div>
            </div>
          </div>
        </div>

        <div className="m-abt-pillars reveal">
          {PILLARS.map((p, i) => (
            <div key={i} className="m-abt-pillar">
              <div className="m-abt-pillar-icon">
                {p.icon === "lotus" ? <Lotus size={28} /> : <OmMark size={28} />}
              </div>
              <h4 className="m-abt-pillar-title">{p.th}</h4>
              <p className="m-abt-pillar-sub">{p.sub}</p>
            </div>
          ))}
        </div>

        <div className="m-abt-cta reveal" style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ color: "var(--ink-soft)", marginBottom: 20, fontSize: "1.05rem" }}>
            เส้นทางของทุกคนแตกต่างกัน — แต่จุดหมายเดียวกัน
          </p>
          <a href="#membership" className="btn btn--gold">เข้าร่วมชุมชนวันนี้</a>
        </div>
      </div>
    </section>
  );
}

window.About = About;
