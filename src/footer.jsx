// footer.jsx — Site footer

const FOOTER_COLS = [
  {
    title: "บริการรายวัน",
    links: [
      { t: "ทำนายโชคชะตารายสัปดาห์", h: "#fortune" },
      { t: "เลขนำโชครายวัน", h: "#lucky" },
      { t: "ผลลอตเตอรี่ไทย", h: "#lucky" },
      { t: "ข่าวสารงานบุญ", h: "#news" },
    ],
  },
  {
    title: "สมาชิก & ดิจิทัล",
    links: [
      { t: "สมาชิกภาพ ฿50/เดือน", h: "#membership" },
      { t: "หนังสือ E-Book", h: "#products" },
      { t: "บทสวด MP3", h: "#products" },
      { t: "สมาธินำทาง", h: "#audio" },
    ],
  },
  {
    title: "สินค้าแนะนำ",
    links: [
      { t: "ลูกประคำ & มาลา", h: "#shop" },
      { t: "ธูป & กำยาน", h: "#shop" },
      { t: "หนังสือเล่มหลัก", h: "#shop" },
      { t: "อุปกรณ์สมาธิ", h: "#shop" },
    ],
  },
  {
    title: "ติดต่อ",
    links: [
      { t: "LINE: @mahoragazen", h: "#" },
      { t: "อีเมล: hello@mahoragazen.co", h: "#" },
      { t: "โทร: ๐๒-๖๔๔-๐๐๐๐", h: "#" },
      { t: "กรุงเทพมหานคร · ประเทศไทย", h: "#" },
    ],
  },
];

function Footer() {
  return (
    <footer id="footer" className="m-foot">
      <div className="m-foot-orn" aria-hidden="true">
        <div style={{ position: "absolute", left: "-10%", top: "-20%" }}>
          <div className="parallax-layer parallax-slow drift-slow">
            <SacredImage src="assets/buddha-standing.png" size={560} opacity={0.2} />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="m-foot-top">
          <div className="m-foot-brand">
            <Logo />
            <p className="m-foot-tagline">
              <span className="display">"ปัญญาแห่งการตื่นรู้ สำหรับทุกขั้นของการเดินทาง"</span>
            </p>
            <div className="m-foot-social">
              {["IG", "FB", "TW", "TT", "YT"].map((s, i) => (
                <a key={i} href="#" aria-label={s} className="m-foot-soc">
                  <span>{s}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="m-foot-cols">
            {FOOTER_COLS.map((c, i) => (
              <div key={i} className="m-foot-col">
                <h4>
                  <Diamond size={6} filled color="var(--gold)" />
                  {c.title}
                </h4>
                <ul>
                  {c.links.map((l, j) => (
                    <li key={j}><a href={l.h}>{l.t}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="m-foot-divider" aria-hidden="true">
          <span></span>
          <Mandala size={32} rings={3} opacity={0.6} stroke="var(--gold)" />
          <span></span>
        </div>

        <div className="m-foot-bottom">
          <div className="m-foot-copy">
            <span>© ๒๕๖๗ Mahoraga ZEN · บริษัท มโหราคะเซน จำกัด</span>
            <span className="display gold-text">·</span>
            <a href="#">นโยบายความเป็นส่วนตัว</a>
            <span className="display gold-text">·</span>
            <a href="#">ข้อกำหนดการใช้งาน</a>
          </div>
          <p className="display m-foot-blessing">
            ✦ May your inner stillness move mountains ✦
          </p>
        </div>
      </div>

      <style>{`
        .m-foot {
          background: var(--ink);
          color: var(--cream);
          padding: 96px 0 40px;
          position: relative;
          overflow: hidden;
        }
        .m-foot-orn {
          position: absolute; inset: 0;
          pointer-events: none;
        }

        .m-foot-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          position: relative;
          z-index: 2;
        }
        @media (min-width: 880px) {
          .m-foot-top {
            grid-template-columns: 1.1fr 2fr;
            gap: 64px;
          }
        }

        .m-foot .m-logo { color: var(--cream); }
        .m-foot .m-logo-name { color: var(--cream); }
        .m-foot .m-logo-sub { color: var(--gold-soft); }

        .m-foot-tagline {
          font-size: 19px;
          color: var(--gold-soft);
          line-height: 1.7;
          font-style: italic;
          margin-top: 24px;
          max-width: 28ch;
        }
        .m-foot-social {
          display: flex;
          gap: 10px;
          margin-top: 32px;
        }
        .m-foot-soc {
          width: 40px; height: 40px;
          border: 1px solid rgba(232,211,138,.2);
          color: var(--gold-soft);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: var(--f-display);
          font-style: italic;
          font-size: 13px;
          letter-spacing: .04em;
          text-decoration: none;
          transition: all .3s var(--ease-zen);
        }
        .m-foot-soc:hover {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--ink);
        }

        .m-foot-cols {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px 24px;
        }
        @media (min-width: 700px) {
          .m-foot-cols { grid-template-columns: repeat(4, 1fr); }
        }

        .m-foot-col h4 {
          font-family: var(--f-serif);
          font-size: 15px;
          font-weight: 500;
          color: var(--gold-soft);
          letter-spacing: .04em;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .m-foot-col ul {
          list-style: none;
          padding: 0; margin: 0;
        }
        .m-foot-col li { margin-bottom: 12px; }
        .m-foot-col a {
          color: rgba(253, 252, 248, 0.65);
          text-decoration: none;
          font-size: 14px;
          line-height: 1.5;
          transition: color .25s var(--ease-zen);
        }
        .m-foot-col a:hover { color: var(--gold-soft); }

        .m-foot-divider {
          display: flex;
          align-items: center;
          gap: 24px;
          margin: 72px 0 32px;
          color: var(--gold);
        }
        .m-foot-divider span {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,211,138,.3) 50%, transparent);
        }

        .m-foot-bottom {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
          text-align: center;
          font-size: 13px;
          color: rgba(253,252,248,.5);
        }
        @media (min-width: 800px) {
          .m-foot-bottom { flex-direction: row; justify-content: space-between; text-align: left; }
        }
        .m-foot-copy {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .m-foot-copy a {
          color: rgba(253,252,248,.6);
          text-decoration: none;
        }
        .m-foot-copy a:hover { color: var(--gold-soft); }
        .m-foot-blessing {
          font-style: italic;
          letter-spacing: .14em;
          font-size: 13px;
          color: var(--gold-soft);
        }
      `}</style>
    </footer>
  );
}

window.Footer = Footer;
