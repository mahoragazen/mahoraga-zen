// membership.jsx — Single membership tier at ฿50/month

const { useState: useState_M } = React;

const MEMBER_FEATURES = [
  { t: "เข้าถึงคลังบทสวด ๑๘๐+ บท ทั้งหมด", icon: "lotus" },
  { t: "คลังสมาธินำทาง อัปเดตทุกสัปดาห์", icon: "om" },
  { t: "Quote ประจำวัน · บทเรียนจากปรมาจารย์", icon: "diamond" },
  { t: "Exclusive Blog เชิงลึก · เนื้อหาเฉพาะสมาชิก", icon: "diamond" },
  { t: "Workshop ออนไลน์ รายเดือน · เข้าร่วมฟรี", icon: "lotus" },
  { t: "ชุมชนผู้นำ · Private Group สำหรับสมาชิก", icon: "om" },
  { t: "E-Book ฟรี ทุกไตรมาส · ส่งถึงกล่องจดหมาย", icon: "diamond" },
  { t: "Wallpaper Pack · ภาพลายมันดาลาทุกเดือน", icon: "lotus" },
];

const FeatureIcon = ({ kind }) => {
  if (kind === "lotus") return <Lotus size={18} />;
  if (kind === "om") return <OmMark size={18} />;
  return <Diamond size={10} filled color="var(--gold)" />;
};

function Membership() {
  const [cycle, setCycle] = useState_M("monthly");

  const monthly = 50;
  const yearly = 500; // 2 months free
  const amount = cycle === "monthly" ? monthly : yearly;
  const period = cycle === "monthly" ? "/ เดือน" : "/ ปี";
  const save = cycle === "yearly" ? `ประหยัด ฿${(monthly * 12) - yearly}` : null;

  return (
    <section id="membership" className="pad m-mem">
      <div className="m-mem-bg" aria-hidden="true">
        <div className="m-mem-bg-center">
          <div className="parallax-layer parallax-slow">
            <SacredImage src="assets/buddha-sitting.png" size={880} opacity={0.18} />
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "4%", right: "-6%" }}>
          <div className="parallax-layer parallax-fast drift-fast">
            <SacredImage src="assets/ganesha-sitting.png" size={460} opacity={0.22} />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">สมาชิกภาพ · เพียงแพ็คเดียว</span>
          <TripleDivider />
          <h2>เข้าร่วม<em>วงในของผู้ตื่นรู้</em><br />ในราคาที่ทุกคนเอื้อมถึง</h2>
          <p className="lede">
            ไม่มีหลายระดับให้สับสน ไม่มีค่าธรรมเนียมแอบแฝง —
            เพียงสมาชิกภาพเดียว ที่เปิดประตูสู่ทุกสิ่ง
            ที่มโหราคะเซนมีให้
          </p>
        </div>

        <div className="m-mem-card-wrap reveal bracketed">
          <span className="br-bl"></span><span className="br-br"></span>

          <article className="m-mem-card-single">
            {/* Left: brand mark + price */}
            <div className="m-mem-card-l">
              <div className="m-mem-mark" aria-hidden="true">
                <Mandala size={180} rings={5} opacity={0.7} />
              </div>

              <div className="m-mem-meta">
                <span className="display m-mem-name-en">THE INNER CIRCLE</span>
                <h3 className="m-mem-name-single">สมาชิกแห่งวงใน</h3>
                <p className="m-mem-tag">
                  ผู้แสวงหา · ผู้ปฏิบัติ · ผู้นำผู้ตื่นรู้ —
                  หนึ่งเส้นทาง สำหรับทุกขั้นของการเดินทาง
                </p>
              </div>

              <div className="m-mem-toggle" role="tablist" aria-label="รอบการเรียกเก็บเงิน">
                <button
                  role="tab"
                  aria-selected={cycle === "monthly"}
                  className={cycle === "monthly" ? "active" : ""}
                  onClick={() => setCycle("monthly")}
                >
                  รายเดือน
                </button>
                <button
                  role="tab"
                  aria-selected={cycle === "yearly"}
                  className={cycle === "yearly" ? "active" : ""}
                  onClick={() => setCycle("yearly")}
                >
                  รายปี
                  <span className="m-mem-save">ฟรี ๒ เดือน</span>
                </button>
                <div className={`m-mem-toggle-pill ${cycle}`} aria-hidden="true"></div>
              </div>

              <div className="m-mem-price-row">
                <div className="m-mem-price">
                  <span className="m-mem-currency display">฿</span>
                  <span className="m-mem-amount serif mono-num">{amount.toLocaleString()}</span>
                  <span className="m-mem-period">{period}</span>
                </div>
                {save && <span className="m-mem-save-pill">✦ {save}</span>}
              </div>

              <a href="#" className="btn btn--gold btn--lg m-mem-cta">
                เริ่มทดลองใช้ ๗ วันฟรี
                <span aria-hidden="true">→</span>
              </a>

              <p className="m-mem-fine muted">
                ทดลองใช้งาน ๗ วัน · ยกเลิกได้ทุกเมื่อ · ไม่มีค่าธรรมเนียมแอบแฝง
              </p>
            </div>

            {/* Right: features list */}
            <div className="m-mem-card-r">
              <div className="m-mem-r-head">
                <span className="display gold-text" style={{ fontSize: 13, letterSpacing: ".22em" }}>
                  ✦ ทุกสิ่งที่คุณได้รับ
                </span>
                <span className="display m-mem-r-num">๐๘ สิทธิ์</span>
              </div>

              <ul className="m-mem-features-single">
                {MEMBER_FEATURES.map((f, i) => (
                  <li key={i}>
                    <span className="m-mem-f-icon" aria-hidden="true">
                      <FeatureIcon kind={f.icon} />
                    </span>
                    <span className="m-mem-f-t">{f.t}</span>
                    <span className="display m-mem-f-n">๐{i + 1}</span>
                  </li>
                ))}
              </ul>

              <div className="m-mem-extras">
                <div className="m-mem-extra">
                  <div className="display gold-text" style={{ fontSize: 28 }}>๒,๔๐๐+</div>
                  <div className="muted" style={{ fontSize: 12 }}>สมาชิกผู้ปฏิบัติ</div>
                </div>
                <div className="m-mem-extra">
                  <div className="display gold-text" style={{ fontSize: 28 }}>๔.๙</div>
                  <div className="muted" style={{ fontSize: 12 }}>คะแนนเฉลี่ย</div>
                </div>
                <div className="m-mem-extra">
                  <div className="display gold-text" style={{ fontSize: 28 }}>๒๔/๗</div>
                  <div className="muted" style={{ fontSize: 12 }}>เข้าถึงได้ตลอดเวลา</div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <p className="m-mem-note reveal">
          <span className="display gold-text">✦</span>
          ทดลองใช้ฟรี ๗ วัน · ยกเลิกได้ทุกเมื่อ
          <span className="display gold-text">✦</span>
        </p>
      </div>

      <style>{`
        .m-mem { background: var(--cream); overflow: hidden; }
        .m-mem-bg { position: absolute; inset: 0; pointer-events: none; color: var(--gold); }
        .m-mem-bg-center {
          position: absolute;
          top: 6%; left: 50%;
          transform: translateX(-50%);
        }

        .m-mem-card-wrap {
          max-width: 1080px;
          margin: 0 auto;
          padding: 14px;
          background: var(--cream-warm);
          position: relative;
        }

        .m-mem-card-single {
          background: var(--cream);
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          border: 1px solid var(--line);
        }
        @media (min-width: 900px) {
          .m-mem-card-single { grid-template-columns: 0.95fr 1.1fr; }
        }

        .m-mem-card-l {
          padding: 56px 40px;
          background: var(--ink);
          color: var(--cream);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .m-mem-mark {
          position: absolute;
          top: -30px; right: -50px;
          color: var(--gold);
          opacity: 0.5;
          pointer-events: none;
        }

        .m-mem-meta {
          position: relative;
          z-index: 2;
        }
        .m-mem-name-en {
          font-size: 13px;
          letter-spacing: .26em;
          color: var(--gold-soft);
          font-style: italic;
        }
        .m-mem-name-single {
          font-size: clamp(34px, 4vw, 44px);
          font-weight: 500;
          color: var(--cream);
          margin-top: 8px;
          line-height: 1.15;
        }
        .m-mem-tag {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(253,252,248,.7);
          margin-top: 20px;
          max-width: 36ch;
        }

        .m-mem-toggle {
          position: relative;
          display: inline-flex;
          background: rgba(232,211,138,.08);
          border: 1px solid rgba(232,211,138,.2);
          padding: 4px;
          margin-top: 36px;
          gap: 4px;
          align-self: flex-start;
        }
        .m-mem-toggle button {
          position: relative;
          z-index: 2;
          background: transparent;
          border: 0;
          padding: 11px 22px;
          font-family: var(--f-sans);
          font-size: 13px;
          font-weight: 500;
          color: rgba(253,252,248,.55);
          letter-spacing: .04em;
          transition: color .35s var(--ease-zen);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .m-mem-toggle button.active { color: var(--ink); }
        .m-mem-save {
          font-size: 10px;
          background: var(--gold);
          color: var(--ink);
          padding: 2px 6px;
          letter-spacing: .04em;
          font-style: normal;
        }
        .m-mem-toggle button.active .m-mem-save {
          background: var(--ink);
          color: var(--gold);
        }
        .m-mem-toggle-pill {
          position: absolute;
          top: 4px; bottom: 4px;
          width: calc(50% - 4px);
          background: var(--gold-soft);
          transition: transform .45s var(--ease-zen);
          z-index: 1;
        }
        .m-mem-toggle-pill.yearly { transform: translateX(calc(100% + 4px)); }

        .m-mem-price-row {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-top: 32px;
          padding-top: 32px;
          border-top: 1px solid rgba(232,211,138,.18);
        }
        .m-mem-price {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        .m-mem-currency {
          font-size: 26px;
          color: var(--gold-soft);
          font-style: italic;
        }
        .m-mem-amount {
          font-size: clamp(64px, 8vw, 88px);
          font-weight: 400;
          line-height: 1;
          color: var(--cream);
          letter-spacing: -0.02em;
        }
        .m-mem-period {
          font-family: var(--f-display);
          font-style: italic;
          font-size: 17px;
          color: rgba(253,252,248,.55);
          margin-left: 4px;
        }
        .m-mem-save-pill {
          font-size: 12px;
          color: var(--gold-soft);
          font-style: italic;
          font-family: var(--f-display);
          letter-spacing: .04em;
          padding-bottom: 6px;
        }

        .m-mem-card-l .m-mem-cta {
          margin-top: 28px;
          width: 100%;
        }
        .m-mem-fine {
          font-size: 12.5px;
          color: rgba(253,252,248,.55);
          text-align: center;
          margin-top: 18px;
          letter-spacing: .02em;
        }

        .m-mem-card-r {
          padding: 56px 40px;
          display: flex;
          flex-direction: column;
        }
        .m-mem-r-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--line);
          margin-bottom: 8px;
        }
        .m-mem-r-num {
          font-size: 14px;
          color: var(--ink-mute);
          font-style: italic;
          letter-spacing: .08em;
        }

        .m-mem-features-single {
          list-style: none;
          padding: 0; margin: 0;
        }
        .m-mem-features-single li {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid var(--line);
          font-size: 15px;
          line-height: 1.5;
          color: var(--ink);
        }
        .m-mem-features-single li:last-child { border-bottom: 0; }
        .m-mem-f-icon {
          flex-shrink: 0;
          width: 32px; height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          border: 1px solid var(--line);
          background: var(--cream-warm);
        }
        .m-mem-f-t { flex-grow: 1; }
        .m-mem-f-n {
          color: var(--ink-mute);
          font-size: 13px;
          font-style: italic;
          letter-spacing: .08em;
        }

        .m-mem-extras {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          padding-top: 32px;
          margin-top: 12px;
          border-top: 1px solid var(--line);
        }
        .m-mem-extra {
          text-align: center;
          padding: 8px;
        }
        .m-mem-extra + .m-mem-extra { border-left: 1px solid var(--line); }

        .m-mem-note {
          text-align: center;
          margin-top: 48px;
          font-size: 14px;
          color: var(--ink-soft);
          letter-spacing: .02em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .m-mem-note .display { color: var(--gold); }
        .m-mem-note-link {
          color: var(--gold-deep);
          text-decoration: underline;
          text-underline-offset: 4px;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}

window.Membership = Membership;
