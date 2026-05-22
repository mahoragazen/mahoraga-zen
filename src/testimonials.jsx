// testimonials.jsx — Quote carousel: auto-advance + manual nav

const { useState: useStateT, useEffect: useEffectT, useRef: useRefT } = React;

const QUOTES = [
  {
    quote: "เคยเป็น CEO ที่ตัดสินใจด้วยความกดดันมาตลอด ๑๒ ปี — มโหราคะเซน เปลี่ยนวิธีคิดของผมเรื่องการนำทีม ที่ประชุมทุกเช้า ผมเริ่มด้วยสมาธิ ๕ นาที ทุกคนสังเกตเห็นความนิ่งของผม",
    name: "คุณ A.",
    role: "CEO · บริษัทเทคโนโลยี",
    location: "กรุงเทพมหานคร",
    avatar: "lotus",
  },
  {
    quote: "ในฐานะ Content Creator ที่ต้องผลิตทุกวัน ปีที่แล้วเกือบหมดไฟ ตั้งแต่ฟังบทสวดของมโหราคะเซน ทุกเช้า ความคิดสร้างสรรค์กลับมาเอง โดยไม่ต้องฝืน",
    name: "คุณ B.",
    role: "Content Creator",
    location: "เชียงใหม่",
    avatar: "mandala",
  },
  {
    quote: "Premium Consultation ๓ ชั่วโมง ทำให้ผมเห็นชัดในปัญหา ที่เคยพยายามแก้มา ๒ ปี — มันไม่ใช่กลยุทธ์ทางธุรกิจ แต่เป็นจังหวะภายในของผมเอง คุ้มทุกบาท",
    name: "คุณ C.",
    role: "ผู้ก่อตั้งกิจการ",
    location: "ภูเก็ต",
    avatar: "om",
  },
  {
    quote: "Workshop ๒ วันที่หัวหินเปลี่ยนชีวิต — ดิฉันเคยคิดว่าความสำเร็จ ต้องแลกด้วยการนอนน้อย กลับมาเริ่มใช้กรอบ ๙๐ วันที่นี่ รายได้โต ๓ เท่า โดยทำงานน้อยลง",
    name: "คุณ D.",
    role: "ผู้บริหารหญิงอิสระ",
    location: "กรุงเทพมหานคร",
    avatar: "seed",
  },
  {
    quote: "ในฐานะหมอที่ทำงานในโรงพยาบาลรัฐ ความเครียดสะสมเป็นปกติ — บทสวดและสมาธินำทางที่นี่ ทำให้ผมตื่นมาอย่างมีกำลังใจอีกครั้ง",
    name: "คุณหมอ E.",
    role: "แพทย์",
    location: "ขอนแก่น",
    avatar: "lotus",
  },
];

// NOTE: ตัวอย่างทั้งหมดเป็น testimonial ที่ใช้ชื่อย่อ (anonymized) เพื่อความเป็นส่วนตัว
// ห้ามใช้ชื่อ-นามสกุลจริงในเว็บไซต์โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร (PDPA)

const AVATARS = {
  lotus:   <Lotus size={36} />,
  mandala: <Mandala size={48} rings={3} />,
  om:      <OmMark size={36} />,
  seed:    <SeedOfLife size={40} />,
};

function Testimonials() {
  const [idx, setIdx] = useStateT(0);
  const [paused, setPaused] = useStateT(false);
  const timerRef = useRefT(null);

  useEffectT(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIdx(i => (i + 1) % QUOTES.length);
    }, 6500);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const next = () => { setIdx(i => (i + 1) % QUOTES.length); };
  const prev = () => { setIdx(i => (i - 1 + QUOTES.length) % QUOTES.length); };

  const q = QUOTES[idx];

  return (
    <section id="testimonials" className="pad m-tst"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="m-tst-bg" aria-hidden="true">
        <div className="m-tst-bg-center">
          <div className="parallax-layer parallax-slow">
            <SacredImage src="assets/ganesha-full.png" size={980} opacity={0.16} />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">เสียงสะท้อนจากผู้ปฏิบัติ</span>
          <TripleDivider />
          <h2><em>เรื่องเล่า</em> จากผู้ที่<br />เดินเส้นทางนี้ ก่อนคุณ</h2>
        </div>

        <div className="m-tst-stage reveal">
          <div className="m-tst-quote-orn" aria-hidden="true">
            <span className="display">“</span>
          </div>

          <div className="m-tst-track">
            {QUOTES.map((quote, i) => (
              <article
                key={i}
                className={`m-tst-slide ${i === idx ? "active" : ""}`}
                aria-hidden={i !== idx}
              >
                <p className="serif m-tst-text">{quote.quote}</p>
                <div className="m-tst-meta">
                  <div className="m-tst-avatar" aria-hidden="true">
                    {AVATARS[quote.avatar]}
                  </div>
                  <div className="m-tst-person">
                    <div className="serif m-tst-name">{quote.name}</div>
                    <div className="m-tst-role">{quote.role}</div>
                    <div className="display m-tst-loc">{quote.location}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="m-tst-controls">
            <button className="m-tst-arrow" onClick={prev} aria-label="ก่อนหน้า">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <polyline points="15,6 9,12 15,18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="m-tst-dots" role="tablist">
              {QUOTES.map((_, i) => (
                <button
                  key={i}
                  className={`m-tst-dot ${i === idx ? "active" : ""}`}
                  role="tab"
                  aria-selected={i === idx}
                  aria-label={`เสียงที่ ${i + 1}`}
                  onClick={() => setIdx(i)}
                >
                  <span></span>
                </button>
              ))}
            </div>
            <button className="m-tst-arrow" onClick={next} aria-label="ถัดไป">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <polyline points="9,6 15,12 9,18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="m-tst-counter display">
            <span>๐{idx + 1}</span>
            <span className="gold-text">/</span>
            <span className="muted">๐{QUOTES.length}</span>
          </div>
        </div>

        {/* Logo strip */}
        <div className="m-tst-strip reveal">
          <span className="eyebrow one-side" style={{ marginRight: 24 }}>เป็นที่ไว้วางใจของ</span>
          {["FORBES TH", "THE STANDARD", "MARKETEER", "LONGTUNMAN", "ELLE TH"].map((n, i) => (
            <span key={i} className="m-tst-logo display">{n}</span>
          ))}
        </div>
      </div>

      <style>{`
        .m-tst { background: var(--cream); overflow: hidden; }
        .m-tst-bg { position: absolute; inset: 0; pointer-events: none; color: var(--gold); }
        .m-tst-bg-center {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }

        .m-tst-stage {
          position: relative;
          max-width: 880px;
          margin: 0 auto;
          padding: 56px 32px;
          background: var(--cream-warm);
          border: 1px solid var(--line);
          min-height: 460px;
        }
        @media (min-width: 700px) { .m-tst-stage { padding: 72px 64px; } }

        .m-tst-quote-orn {
          position: absolute;
          top: -8px; left: 28px;
          color: var(--gold);
          font-size: 120px;
          line-height: 1;
          font-style: italic;
          font-family: var(--f-display);
          opacity: 0.7;
        }

        .m-tst-track {
          position: relative;
          min-height: 280px;
        }
        .m-tst-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: translateY(12px);
          pointer-events: none;
          transition: opacity .8s var(--ease-zen), transform .8s var(--ease-zen);
        }
        .m-tst-slide.active {
          opacity: 1;
          transform: none;
          pointer-events: auto;
          position: relative;
        }
        .m-tst-text {
          font-size: clamp(19px, 2vw, 25px);
          line-height: 1.65;
          color: var(--ink);
          margin-bottom: 36px;
          font-weight: 400;
        }
        .m-tst-meta {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .m-tst-avatar {
          width: 64px; height: 64px;
          border: 1px solid var(--gold);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--gold-deep);
          flex-shrink: 0;
        }
        .m-tst-person { display: flex; flex-direction: column; gap: 2px; }
        .m-tst-name { font-size: 18px; font-weight: 500; }
        .m-tst-role { font-size: 14px; color: var(--ink-soft); }
        .m-tst-loc {
          font-size: 12px;
          color: var(--gold-deep);
          font-style: italic;
          letter-spacing: .1em;
          margin-top: 4px;
        }

        .m-tst-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-top: 40px;
          padding-top: 28px;
          border-top: 1px solid var(--line);
        }
        .m-tst-arrow {
          width: 44px; height: 44px;
          background: transparent;
          border: 1px solid var(--line-strong);
          color: var(--ink);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all .3s var(--ease-zen);
        }
        .m-tst-arrow:hover {
          background: var(--ink);
          border-color: var(--ink);
          color: var(--cream);
        }
        .m-tst-dots {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .m-tst-dot {
          width: 28px; height: 18px;
          padding: 0;
          background: transparent;
          border: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .m-tst-dot span {
          width: 22px;
          height: 1.5px;
          background: var(--line-strong);
          transition: all .4s var(--ease-zen);
        }
        .m-tst-dot.active span {
          background: var(--gold);
          height: 2px;
          width: 28px;
        }

        .m-tst-counter {
          position: absolute;
          top: 32px; right: 32px;
          font-style: italic;
          font-size: 18px;
          letter-spacing: .08em;
          color: var(--ink-soft);
          display: flex;
          gap: 6px;
        }

        .m-tst-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          margin-top: 60px;
          flex-wrap: wrap;
        }
        .m-tst-logo {
          font-style: italic;
          font-size: 18px;
          letter-spacing: .2em;
          color: var(--ink-mute);
          opacity: 0.7;
          transition: opacity .3s var(--ease-zen);
        }
        .m-tst-logo:hover { opacity: 1; color: var(--gold-deep); }
      `}</style>
    </section>
  );
}

window.Testimonials = Testimonials;
