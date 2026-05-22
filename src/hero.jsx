// hero.jsx — Hero section with parallax-ready ornaments

function Hero() {
  return (
    <section id="top" className="m-hero" aria-label="ปฐมบท">
      {/* Background ornament layers — sacred figures with gentle drift (no rotation) */}
      <div className="m-hero-bg" aria-hidden="true">
        <div className="m-hero-ganesh">
          <div className="parallax-layer parallax-slow">
            <SacredImage src="assets/hero-ganesh.png" size={1100} opacity={0.55} />
          </div>
        </div>
        <div className="m-hero-buddha">
          <div className="parallax-layer parallax-med drift-fast">
            <SacredImage src="assets/buddha-sitting.png" size={380} opacity={0.45} />
          </div>
        </div>
      </div>

      <div className="wrap m-hero-wrap">
        <div className="m-hero-l reveal">
          <span className="eyebrow one-side">
            <Diamond size={6} filled={false} />
            ปฐมบท · บทแห่งการตื่นรู้
          </span>

          <h1 className="m-hero-title">
            <span className="m-hero-line-1">ปัญญาแห่ง</span>
            <span className="m-hero-line-2 display"><em>การตื่นรู้</em></span>
          </h1>

          <p className="m-hero-lede">
            มโหราคะเซน คือเส้นทางพัฒนาตน ที่ผสานปรัชญาตะวันออก
            เข้ากับการเติบโตของจิตวิญญาณยุคใหม่ —
            เพื่อให้คุณก้าวไปข้างหน้า ด้วยจิตใจที่สงบ
            และสายตาที่เห็นแจ่มชัด
          </p>

          <div className="m-hero-cta">
            <a href="#membership" className="btn btn--gold btn--lg">เริ่มต้นเส้นทาง</a>
            <a href="#audio" className="btn btn--ghost btn--lg">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="6,4 22,12 6,20" />
              </svg>
              ฟังเสียงสมาธิ
            </a>
          </div>

          {/* Stats / proof row */}
          <div className="m-hero-proof">
            <div>
              <span className="display m-hero-num">๒,๔๐๐+</span>
              <span className="m-hero-proof-l">สมาชิกผู้ปฏิบัติ</span>
            </div>
            <div className="m-hero-proof-div" aria-hidden="true"></div>
            <div>
              <span className="display m-hero-num">๑๘๐</span>
              <span className="m-hero-proof-l">บทสวด & สมาธิ</span>
            </div>
            <div className="m-hero-proof-div" aria-hidden="true"></div>
            <div>
              <span className="display m-hero-num">๔.๙</span>
              <span className="m-hero-proof-l">คะแนนเฉลี่ย</span>
            </div>
          </div>
        </div>

        <div className="m-hero-r reveal">
          <div className="m-hero-portrait bracketed">
            <span className="br-bl"></span><span className="br-br"></span>
            <PhotoPlaceholder label="meditation portrait" aspect="3/4" />
            <div className="m-hero-portrait-tag">
              <Lotus size={20} />
              <div>
                <div className="display" style={{ fontSize: 13, color: "var(--gold-deep)", letterSpacing: ".14em" }}>ANNO MMXX</div>
                <div className="serif" style={{ fontSize: 15, marginTop: 2 }}>เริ่มฝึกฝน ตั้งแต่ปีนี้</div>
              </div>
            </div>
          </div>

          <div className="m-hero-quote">
            <span className="display" style={{ fontSize: 48, lineHeight: 0.4, color: "var(--gold)" }}>“</span>
            <p className="serif">
              ผู้นำที่แท้จริง<br />
              ไม่ใช่ผู้ที่เสียงดังที่สุด<br />
              <em className="display gold-text">หากแต่เป็นผู้ที่นิ่งที่สุด</em>
            </p>
          </div>
        </div>
      </div>

      {/* Side rails — vertical text */}
      <div className="m-hero-rail-l" aria-hidden="true">
        <span>MAHORAGA · ZEN · มโหราคะ</span>
      </div>
      <div className="m-hero-rail-r" aria-hidden="true">
        <span>๒๕๖๗ · NO. ๐๑ · ปฐมบท</span>
      </div>

      {/* Scroll hint */}
      <div className="m-hero-scroll" aria-hidden="true">
        <span className="display">เลื่อนลง</span>
        <span className="m-hero-scroll-line"></span>
      </div>

      <style>{`
        .m-hero {
          position: relative;
          padding: 140px 0 80px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .m-hero { padding: 180px 0 100px; }
        }
        .m-hero-bg {
          position: absolute; inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .m-hero-ganesh {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -45%);
        }
        .m-hero-buddha {
          position: absolute;
          top: 14%; right: -2%;
        }
        @media (max-width: 1000px) {
          .m-hero-ganesh { opacity: 0.7; transform: translate(-50%, -50%) scale(.9); }
          .m-hero-buddha { display: none; }
        }
        .m-hero-wrap {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        @media (min-width: 1000px) {
          .m-hero-wrap {
            grid-template-columns: 1.15fr 1fr;
            gap: 80px;
          }
        }

        .m-hero-title {
          font-size: clamp(48px, 7vw, 96px);
          line-height: 1.02;
          letter-spacing: -0.015em;
          font-weight: 400;
          margin: 28px 0 32px;
          display: flex;
          flex-direction: column;
        }
        .m-hero-title span { display: block; }
        .m-hero-line-2 {
          color: var(--gold-deep);
          font-style: italic;
          line-height: 1.05;
          padding-left: clamp(20px, 4vw, 56px);
        }
        .m-hero-line-2 em { font-style: italic; }
        .m-hero-line-3 { padding-left: clamp(40px, 8vw, 100px); }

        .m-hero-lede {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.8;
          color: var(--ink-soft);
          max-width: 52ch;
          margin-bottom: 36px;
        }
        .m-hero-cta {
          display: flex; flex-wrap: wrap; gap: 14px;
          margin-bottom: 56px;
        }
        .m-hero-proof {
          display: flex;
          align-items: center;
          gap: clamp(16px, 3vw, 36px);
          padding-top: 32px;
          border-top: 1px solid var(--line);
        }
        .m-hero-proof > div { display: flex; flex-direction: column; gap: 4px; }
        .m-hero-num {
          font-size: clamp(28px, 3vw, 38px);
          color: var(--ink);
          line-height: 1;
        }
        .m-hero-proof-l {
          font-size: 12px;
          color: var(--ink-soft);
          letter-spacing: .04em;
        }
        .m-hero-proof-div {
          width: 1px;
          height: 36px;
          background: var(--line);
        }

        .m-hero-r {
          position: relative;
        }
        .m-hero-portrait {
          position: relative;
          padding: 18px;
          background: var(--cream-warm);
          max-width: 460px;
          margin: 0 auto;
        }
        .m-hero-portrait-tag {
          position: absolute;
          left: -20px; bottom: 60px;
          background: var(--cream);
          padding: 12px 18px;
          border: 1px solid var(--line);
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 8px 24px rgba(44,31,6,.06);
        }
        @media (max-width: 600px) {
          .m-hero-portrait-tag { left: -8px; bottom: 30px; padding: 10px 14px; }
        }
        .m-hero-quote {
          margin-top: 48px;
          padding-left: 28px;
          border-left: 1px solid var(--gold);
          position: relative;
        }
        .m-hero-quote p {
          font-size: clamp(17px, 1.5vw, 20px);
          line-height: 1.7;
          color: var(--ink-soft);
        }
        .m-hero-quote em { font-style: italic; }

        .m-hero-rail-l, .m-hero-rail-r {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-family: var(--f-display);
          font-style: italic;
          font-size: 12px;
          letter-spacing: 0.36em;
          color: var(--gold-deep);
          opacity: 0.65;
          z-index: 1;
          display: none;
        }
        @media (min-width: 1200px) {
          .m-hero-rail-l, .m-hero-rail-r { display: block; }
        }
        .m-hero-rail-l { left: 18px; }
        .m-hero-rail-r { right: 18px; }
        .m-hero-rail-l span {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        .m-hero-rail-r span {
          writing-mode: vertical-rl;
        }

        .m-hero-scroll {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: var(--gold-deep);
          font-size: 12px;
          letter-spacing: .14em;
          z-index: 2;
        }
        .m-hero-scroll-line {
          width: 1px;
          height: 36px;
          background: linear-gradient(180deg, var(--gold), transparent);
          position: relative;
          overflow: hidden;
        }
        .m-hero-scroll-line::before {
          content: "";
          position: absolute;
          left: 0; top: -100%;
          width: 100%; height: 50%;
          background: var(--gold-deep);
          animation: scrolldown 2.6s infinite var(--ease-zen);
        }
        @keyframes scrolldown {
          0% { top: -100%; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
}

window.Hero = Hero;
