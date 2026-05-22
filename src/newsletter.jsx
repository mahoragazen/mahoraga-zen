// newsletter.jsx — CTA + newsletter with email validation

const { useState: useStateN } = React;

function Newsletter() {
  const [email, setEmail] = useStateN("");
  const [touched, setTouched] = useStateN(false);
  const [submitted, setSubmitted] = useStateN(false);
  const [error, setError] = useStateN("");

  const validate = (val) => {
    if (!val.trim()) return "กรุณากรอกอีเมล";
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(val)) return "รูปแบบอีเมลไม่ถูกต้อง";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    const err = validate(email);
    setError(err);
    if (err) return;
    setSubmitted(true);
  };

  const showError = touched && error;

  return (
    <section className="pad m-news" id="newsletter">
      <div className="m-news-bg" aria-hidden="true">
        <div className="m-news-bg-center">
          <div className="parallax-layer parallax-slow">
            <SacredImage src="assets/hero-ganesh.png" size={920} opacity={0.2} />
          </div>
        </div>
      </div>

      <div className="wrap m-news-wrap">
        <div className="m-news-card reveal bracketed">
          <span className="br-bl"></span><span className="br-br"></span>

          <div className="m-news-mark">
            <Lotus size={56} opacity={0.85} />
          </div>

          <span className="eyebrow">บทเริ่มต้น · ฟรี</span>
          <h2 className="m-news-h">
            รับ <em className="display gold-text">สมาธินำทาง ๕ นาที</em><br />
            ส่งตรงถึงคุณทุกเช้าวันจันทร์
          </h2>
          <p className="m-news-p">
            หนึ่งบทสมาธิ · หนึ่งบทเรียนภาวะผู้นำ · หนึ่งบทสวด —
            กล่องจดหมายสะอาด ไม่มีโฆษณา ยกเลิกได้ทุกเมื่อ
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="m-news-form" noValidate>
              <div className={`m-news-field ${showError ? "error" : ""}`}>
                <label htmlFor="news-email" className="sr-only">อีเมลของคุณ</label>
                <input
                  id="news-email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (touched) setError(validate(e.target.value)); }}
                  onBlur={() => { setTouched(true); setError(validate(email)); }}
                  placeholder="อีเมลของคุณ"
                  autoComplete="email"
                  required
                />
                <button type="submit" className="btn btn--gold">
                  สมัครรับบทเรียน
                  <span aria-hidden="true">→</span>
                </button>
              </div>
              {showError && (
                <p className="m-news-err" role="alert">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="13" strokeLinecap="round" />
                    <circle cx="12" cy="16.5" r="0.7" fill="currentColor" />
                  </svg>
                  {error}
                </p>
              )}
              <p className="m-news-tos muted">
                <Diamond size={6} filled color="var(--gold)" />
                การสมัครรับข่าวสาร ถือว่าคุณยอมรับ <a href="#">นโยบายความเป็นส่วนตัว</a> ของเรา
              </p>
            </form>
          ) : (
            <div className="m-news-success" role="status">
              <div className="m-news-success-mark" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <circle cx="12" cy="12" r="11" />
                  <path d="M7 12l3.5 3.5L17 9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="serif" style={{ fontSize: 28, marginTop: 18, marginBottom: 10 }}>
                ขอบคุณ — กล่องจดหมายของคุณ พร้อมรับแสงเช้าแล้ว
              </h3>
              <p className="muted">
                บทเรียนแรกของคุณ จะส่งถึง <strong style={{ color: "var(--ink)" }}>{email}</strong>
                <br />ในเช้าวันจันทร์ ที่จะถึงนี้
              </p>
              <p className="display gold-text" style={{ marginTop: 20, fontStyle: "italic", fontSize: 16 }}>
                "พระอาทิตย์ขึ้นเสมอ — แม้ในวันที่เมฆครึ้ม"
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .m-news { background: var(--cream-warm); overflow: hidden; }
        .m-news-bg { position: absolute; inset: 0; pointer-events: none; color: var(--gold); }
        .m-news-bg-center {
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
        }

        .m-news-wrap { max-width: 880px; }
        .m-news-card {
          background: var(--cream);
          padding: 56px 32px;
          text-align: center;
          border: 1px solid var(--line);
          position: relative;
        }
        @media (min-width: 700px) { .m-news-card { padding: 80px 64px; } }

        .m-news-mark {
          display: inline-flex;
          color: var(--gold);
          margin-bottom: 24px;
        }
        .m-news-h {
          font-size: clamp(28px, 3.6vw, 42px);
          line-height: 1.2;
          margin: 16px 0 22px;
          font-weight: 400;
        }
        .m-news-h em { font-style: italic; }
        .m-news-p {
          font-size: 16px;
          color: var(--ink-soft);
          line-height: 1.7;
          max-width: 52ch;
          margin: 0 auto 36px;
        }

        .m-news-form { max-width: 560px; margin: 0 auto; }
        .m-news-field {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: stretch;
          background: var(--cream-warm);
          padding: 6px;
          border: 1px solid var(--line-strong);
          transition: border-color .35s var(--ease-zen);
        }
        @media (min-width: 600px) {
          .m-news-field { flex-direction: row; align-items: center; }
        }
        .m-news-field.error { border-color: #b34a3a; }
        .m-news-field input {
          flex-grow: 1;
          background: transparent;
          border: 0;
          padding: 14px 16px;
          font-family: var(--f-sans);
          font-size: 16px;
          color: var(--ink);
          outline: none;
          min-width: 0;
        }
        .m-news-field input::placeholder {
          color: var(--ink-mute);
          font-style: italic;
          font-family: var(--f-display);
          font-size: 17px;
        }
        .m-news-field .btn { flex-shrink: 0; }

        .m-news-err {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #b34a3a;
          font-size: 14px;
          margin-top: 12px;
        }
        .m-news-tos {
          font-size: 13px;
          margin-top: 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .m-news-tos a {
          color: var(--gold-deep);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .m-news-success {
          padding: 24px 0;
          text-align: center;
        }
        .m-news-success-mark {
          width: 72px; height: 72px;
          background: var(--cream-warm);
          color: var(--gold-deep);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid var(--gold);
        }
        .m-news-success strong { font-weight: 500; }
      `}</style>
    </section>
  );
}

window.Newsletter = Newsletter;
