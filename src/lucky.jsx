// lucky.jsx — Daily lucky numbers + stats history + Thai lottery feed

const { useState: useStateL, useMemo: useMemoL } = React;

// Convert Arabic digits to Thai numerals
const toThai = (n) => String(n).replace(/\d/g, (d) => "๐๑๒๓๔๕๖๗๘๙"[Number(d)]);

// Thai month abbreviations
const THAI_MONTHS = ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];

// Today's lucky numbers (fictional but generated deterministically)
// — current "เลขล่างวันนี้" structure: 1 lead 2-digit + 2 supporting 3-digit + 1 lead 6-digit
const TODAY = {
  day: 20, month: 5, year: 2567,
  lead2: "๒๓",
  alt2: ["๔๗", "๘๒"],
  lead3: "๒๑๘",
  alt3: ["๕๔๓", "๙๐๔"],
  lead6: "๔๒๓ ๗๑๘",
  mantra: "โอม คณปติเย นมะห์ · สำหรับเปิดทาง",
  basedOn: "ดวงดาวประจำวัน + ราหูเสริม · ตามตำราหลวงพ่อชัยเสน",
};

// History — last 14 days of predictions with hit/miss tracking
const HISTORY = [
  { date: { d: 19, m: 5 }, pred: ["๐๔", "๑๘๒"], hit: true,  drawType: "ระหว่างงวด", note: "เลข ๔ เข้า ๒ ตัวล่าง" },
  { date: { d: 18, m: 5 }, pred: ["๙๒", "๕๐๔"], hit: false, drawType: "ระหว่างงวด", note: "พลาดเล็กน้อย" },
  { date: { d: 17, m: 5 }, pred: ["๖๗", "๒๑๙"], hit: true,  drawType: "งวดวันที่ ๑๖", note: "ตรง ๒ ตัวล่าง · ทาย!" },
  { date: { d: 16, m: 5 }, pred: ["๔๑", "๓๓๓"], hit: false, drawType: "งวดวันที่ ๑๖", note: "ใกล้เคียง รางวัลข้างเคียง" },
  { date: { d: 15, m: 5 }, pred: ["๐๘", "๗๒๖"], hit: true,  drawType: "ระหว่างงวด", note: "เลข ๘ เข้า" },
  { date: { d: 14, m: 5 }, pred: ["๒๕", "๑๔๔"], hit: false, drawType: "ระหว่างงวด", note: "" },
  { date: { d: 13, m: 5 }, pred: ["๖๓", "๔๘๐"], hit: true,  drawType: "ระหว่างงวด", note: "ตรง" },
  { date: { d: 12, m: 5 }, pred: ["๗๗", "๙๑๒"], hit: false, drawType: "ระหว่างงวด", note: "" },
  { date: { d: 11, m: 5 }, pred: ["๓๒", "๒๐๑"], hit: true,  drawType: "ระหว่างงวด", note: "เข้า ๒ ตัวล่าง" },
  { date: { d: 10, m: 5 }, pred: ["๘๔", "๖๓๕"], hit: false, drawType: "ระหว่างงวด", note: "" },
];

// Latest official Thai lottery draw (16 May 2567)
const LOTTERY = {
  drawDate: { d: 16, m: 5, y: 2567 },
  prize1: "๘๓๗ ๔๒๑",
  near1: ["๘๓๗ ๔๒๐", "๘๓๗ ๔๒๒"],
  front3: ["๑๐๒", "๔๘๗"],
  back3: ["๖๑๙", "๘๒๔"],
  back2: "๗๓",
  nextDraw: { d: 1, m: 6, y: 2567 },
};

const formatDate = (d) => `${toThai(d.d)} ${THAI_MONTHS[d.m - 1]} ${toThai(d.y || TODAY.year)}`;

function Lucky() {
  const [tab, setTab] = useStateL("today");
  const [tracked, setTracked] = useStateL(() => HISTORY.map(h => h.hit));

  const stats = useMemoL(() => {
    const total = tracked.length;
    const hits = tracked.filter(Boolean).length;
    return { total, hits, miss: total - hits, rate: total ? Math.round((hits / total) * 100) : 0 };
  }, [tracked]);

  return (
    <section id="lucky" className="pad m-lk">
      <div className="m-lk-bg" aria-hidden="true">
        <div className="m-lk-pos m-lk-pos-r">
          <div className="parallax-layer parallax-med drift-fast">
            <SacredImage src="assets/ganesha-sitting.png" size={520} opacity={0.18} />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">เลขนำโชค · รายวัน</span>
          <TripleDivider />
          <h2>เลขนำโชค<em>ประจำวัน</em><br />ตามตำราโบราณ</h2>
          <p className="lede">
            เลขที่คำนวณจากดวงดาวประจำวัน · ราหู · นพเคราะห์
            พร้อมสถิติย้อนหลังให้คุณติดตามได้เอง —
            ทุกเลขผ่านการพิจารณาโดยอาจารย์ผู้เชี่ยวชาญ
          </p>
        </div>

        {/* Tabs */}
        <div className="m-lk-tabs reveal" role="tablist">
          <button role="tab" aria-selected={tab === "today"} className={tab === "today" ? "active" : ""} onClick={() => setTab("today")}>
            <span className="display gold-text">๐๑</span> เลขประจำวันนี้
          </button>
          <button role="tab" aria-selected={tab === "history"} className={tab === "history" ? "active" : ""} onClick={() => setTab("history")}>
            <span className="display gold-text">๐๒</span> สถิติย้อนหลัง
          </button>
          <button role="tab" aria-selected={tab === "lottery"} className={tab === "lottery" ? "active" : ""} onClick={() => setTab("lottery")}>
            <span className="display gold-text">๐๓</span> ผลล็อตเตอรี่ไทย
          </button>
        </div>

        {/* TODAY */}
        {tab === "today" && (
          <div className="m-lk-today reveal">
            <div className="m-lk-today-l">
              <div className="m-lk-today-date">
                <span className="display gold-text" style={{ fontSize: 12, letterSpacing: ".2em" }}>เลขวันนี้</span>
                <span className="serif" style={{ fontSize: 22, marginTop: 4 }}>{formatDate(TODAY)}</span>
                <span className="muted" style={{ fontSize: 13, marginTop: 4 }}>คำนวณ ณ เวลา ๐๖:๐๐ น.</span>
              </div>

              <div className="m-lk-numbers">
                <div className="m-lk-num m-lk-num-lead">
                  <span className="display gold-text">เลขเด่น ๒ ตัวล่าง</span>
                  <div className="m-lk-num-big serif mono-num">{TODAY.lead2}</div>
                </div>

                <div className="m-lk-num-row">
                  <div className="m-lk-num m-lk-num-alt">
                    <span className="display gold-text">รอง</span>
                    <div className="m-lk-num-mid serif mono-num">{TODAY.alt2[0]}</div>
                  </div>
                  <div className="m-lk-num m-lk-num-alt">
                    <span className="display gold-text">รอง</span>
                    <div className="m-lk-num-mid serif mono-num">{TODAY.alt2[1]}</div>
                  </div>
                </div>

                <div className="m-lk-num m-lk-num-lead">
                  <span className="display gold-text">เลขเด่น ๓ ตัวบน</span>
                  <div className="m-lk-num-big serif mono-num">{TODAY.lead3}</div>
                </div>

                <div className="m-lk-num-row">
                  <div className="m-lk-num m-lk-num-alt">
                    <span className="display gold-text">รอง</span>
                    <div className="m-lk-num-mid serif mono-num">{TODAY.alt3[0]}</div>
                  </div>
                  <div className="m-lk-num m-lk-num-alt">
                    <span className="display gold-text">รอง</span>
                    <div className="m-lk-num-mid serif mono-num">{TODAY.alt3[1]}</div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="m-lk-today-r">
              <h4 className="serif" style={{ fontSize: 19, marginBottom: 12 }}>เลข ๖ ตัวประจำวัน</h4>
              <div className="m-lk-num-jumbo serif mono-num">{TODAY.lead6}</div>

              <div className="m-lk-divider"><span></span><Diamond size={8} filled color="var(--gold)" /><span></span></div>

              <div className="m-lk-meta-block">
                <span className="display gold-text">ที่มา</span>
                <p>{TODAY.basedOn}</p>
              </div>
              <div className="m-lk-meta-block">
                <span className="display gold-text">มนต์เปิดทาง</span>
                <p className="serif" style={{ fontStyle: "italic" }}>{TODAY.mantra}</p>
              </div>

              <button className="btn btn--gold btn--sm" style={{ width: "100%", marginTop: 18 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                รับเลขทาง LINE ทุกเช้า
              </button>
            </aside>
          </div>
        )}

        {/* HISTORY */}
        {tab === "history" && (
          <div className="m-lk-history reveal">
            <div className="m-lk-stat-row">
              <div className="m-lk-stat">
                <span className="display gold-text">รวมการทำนาย</span>
                <div className="serif mono-num m-lk-stat-n">{toThai(stats.total)}</div>
                <span className="muted">ครั้ง</span>
              </div>
              <div className="m-lk-stat">
                <span className="display gold-text">เข้ารางวัล</span>
                <div className="serif mono-num m-lk-stat-n" style={{ color: "var(--gold-deep)" }}>{toThai(stats.hits)}</div>
                <span className="muted">ครั้ง</span>
              </div>
              <div className="m-lk-stat">
                <span className="display gold-text">พลาด</span>
                <div className="serif mono-num m-lk-stat-n">{toThai(stats.miss)}</div>
                <span className="muted">ครั้ง</span>
              </div>
              <div className="m-lk-stat m-lk-stat-rate">
                <span className="display gold-text">อัตราเข้ารางวัล</span>
                <div className="serif mono-num m-lk-stat-n">{toThai(stats.rate)}<span style={{ fontSize: 22 }}>%</span></div>
                <span className="muted">ตามสถิติ</span>
              </div>
            </div>

            <div className="m-lk-table-wrap">
              <table className="m-lk-table">
                <thead>
                  <tr>
                    <th>วันที่</th>
                    <th>ประเภท</th>
                    <th>เลขที่ทาย</th>
                    <th>หมายเหตุ</th>
                    <th style={{ textAlign: "right" }}>ผล</th>
                  </tr>
                </thead>
                <tbody>
                  {HISTORY.map((h, i) => (
                    <tr key={i} className={tracked[i] ? "hit" : "miss"}>
                      <td className="display">{toThai(h.date.d)} {THAI_MONTHS[h.date.m - 1]}</td>
                      <td className="muted" style={{ fontSize: 13 }}>{h.drawType}</td>
                      <td>
                        <span className="m-lk-cell-nums">
                          {h.pred.map((n, j) => <span key={j} className="serif mono-num">{n}</span>)}
                        </span>
                      </td>
                      <td className="muted" style={{ fontSize: 13 }}>{h.note || "—"}</td>
                      <td style={{ textAlign: "right" }}>
                        <button
                          className={`m-lk-toggle ${tracked[i] ? "on" : "off"}`}
                          onClick={() => setTracked(t => t.map((v, idx) => idx === i ? !v : v))}
                          aria-label={tracked[i] ? "ทำเครื่องหมายว่าพลาด" : "ทำเครื่องหมายว่าเข้ารางวัล"}
                        >
                          {tracked[i] ? (
                            <>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                                <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              เข้า
                            </>
                          ) : "พลาด"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="muted" style={{ fontSize: 12, marginTop: 18, textAlign: "center" }}>
              กดที่คอลัมน์ "ผล" เพื่อแก้ไขสถิติส่วนตัวของคุณ
            </p>
          </div>
        )}

        {/* LOTTERY */}
        {tab === "lottery" && (
          <div className="m-lk-lottery reveal">
            <header className="m-lk-lot-head">
              <div>
                <span className="display gold-text" style={{ fontSize: 12, letterSpacing: ".22em" }}>ผลสลากกินแบ่งรัฐบาล · งวดล่าสุด</span>
                <h3 className="serif" style={{ fontSize: 28, marginTop: 6 }}>
                  ประจำงวดวันที่ {formatDate(LOTTERY.drawDate)}
                </h3>
              </div>
              <div className="m-lk-lot-source">
                <span className="m-lk-live-dot" aria-hidden="true"></span>
                อัปเดตจากกองสลาก
              </div>
            </header>

            <div className="m-lk-prize">
              <span className="display gold-text">รางวัลที่ ๑ · ฿๖,๐๐๐,๐๐๐</span>
              <div className="m-lk-prize-n serif mono-num">{LOTTERY.prize1}</div>
            </div>

            <div className="m-lk-lot-grid">
              <div className="m-lk-lot-box">
                <span className="display gold-text">เลขข้างเคียงรางวัลที่ ๑ · ฿๑๐๐,๐๐๐</span>
                <div className="m-lk-lot-nums">
                  {LOTTERY.near1.map((n, i) => <span key={i} className="serif mono-num">{n}</span>)}
                </div>
              </div>
              <div className="m-lk-lot-box">
                <span className="display gold-text">เลขหน้า ๓ ตัว · ฿๔,๐๐๐</span>
                <div className="m-lk-lot-nums">
                  {LOTTERY.front3.map((n, i) => <span key={i} className="serif mono-num">{n}</span>)}
                </div>
              </div>
              <div className="m-lk-lot-box">
                <span className="display gold-text">เลขท้าย ๓ ตัว · ฿๔,๐๐๐</span>
                <div className="m-lk-lot-nums">
                  {LOTTERY.back3.map((n, i) => <span key={i} className="serif mono-num">{n}</span>)}
                </div>
              </div>
              <div className="m-lk-lot-box m-lk-lot-back2">
                <span className="display gold-text">เลขท้าย ๒ ตัว · ฿๒,๐๐๐</span>
                <div className="m-lk-lot-nums">
                  <span className="serif mono-num">{LOTTERY.back2}</span>
                </div>
              </div>
            </div>

            <footer className="m-lk-lot-foot">
              <div>
                <span className="display gold-text">งวดถัดไป</span>
                <span className="serif" style={{ fontSize: 18, marginLeft: 12 }}>{formatDate(LOTTERY.nextDraw)}</span>
              </div>
              <a href="#" className="m-lk-lot-link">
                ดูผลย้อนหลัง ๑๒ งวด →
              </a>
            </footer>
          </div>
        )}
      </div>

      <style>{`
        .m-lk { background: var(--cream-warm); overflow: hidden; }
        .m-lk-bg { position: absolute; inset: 0; pointer-events: none; }
        .m-lk-pos { position: absolute; }
        .m-lk-pos-r { right: -4%; top: 14%; }

        .m-lk-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          background: var(--cream);
          padding: 4px;
          border: 1px solid var(--line);
          max-width: 760px;
          margin: 0 auto 40px;
        }
        .m-lk-tabs button {
          flex: 1 1 200px;
          background: transparent;
          border: 0;
          padding: 14px 18px;
          font-family: var(--f-sans);
          font-size: 14px;
          font-weight: 500;
          color: var(--ink-soft);
          letter-spacing: .02em;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          justify-content: center;
          transition: all .3s var(--ease-zen);
        }
        .m-lk-tabs button .display { font-size: 13px; letter-spacing: .08em; }
        .m-lk-tabs button.active {
          background: var(--ink);
          color: var(--cream);
        }
        .m-lk-tabs button.active .display { color: var(--gold-soft); }

        /* TODAY */
        .m-lk-today {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          max-width: 980px;
          margin: 0 auto;
        }
        @media (min-width: 880px) {
          .m-lk-today { grid-template-columns: 1.4fr 1fr; gap: 0; }
        }
        .m-lk-today-l {
          background: var(--cream);
          padding: 36px 32px;
          border: 1px solid var(--line);
        }
        @media (min-width: 880px) { .m-lk-today-l { border-right: 0; } }

        .m-lk-today-date {
          display: flex;
          flex-direction: column;
          padding-bottom: 24px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--line);
        }
        .m-lk-numbers {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .m-lk-num .display {
          display: block;
          font-size: 11px;
          letter-spacing: .18em;
          color: var(--gold-deep);
          font-style: italic;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .m-lk-num-big {
          font-size: clamp(72px, 9vw, 110px);
          font-weight: 400;
          line-height: 1;
          color: var(--ink);
          letter-spacing: 0.04em;
          padding: 14px 22px;
          background: linear-gradient(135deg, var(--cream-warm) 0%, var(--cream) 100%);
          border: 1px solid var(--gold);
          display: inline-block;
        }
        .m-lk-num-mid {
          font-size: 44px;
          font-weight: 400;
          line-height: 1;
          color: var(--ink);
          letter-spacing: 0.04em;
          padding: 10px 18px;
          background: var(--cream-warm);
          border: 1px solid var(--line);
          display: inline-block;
        }
        .m-lk-num-row {
          display: flex;
          gap: 16px;
          padding: 18px 0;
          border-top: 1px dashed var(--line);
          border-bottom: 1px dashed var(--line);
        }
        .m-lk-num-row .m-lk-num { flex: 1; }

        .m-lk-today-r {
          background: var(--ink);
          color: var(--cream);
          padding: 36px 32px;
          border: 1px solid var(--ink);
        }
        .m-lk-today-r h4 { color: var(--cream); }
        .m-lk-num-jumbo {
          font-size: clamp(38px, 4.5vw, 54px);
          font-weight: 400;
          letter-spacing: 0.08em;
          color: var(--gold-soft);
          margin-bottom: 24px;
          letter-spacing: 0.12em;
        }
        .m-lk-divider {
          display: flex; align-items: center; gap: 10px;
          margin: 4px 0 18px;
        }
        .m-lk-divider span { flex: 1; height: 1px; background: rgba(232,211,138,.2); }

        .m-lk-meta-block { margin-bottom: 18px; }
        .m-lk-meta-block .display {
          display: block;
          font-size: 11px;
          letter-spacing: .18em;
          color: var(--gold-soft);
          font-style: italic;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .m-lk-meta-block p {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(253,252,248,.78);
        }

        /* HISTORY */
        .m-lk-history { max-width: 1080px; margin: 0 auto; }
        .m-lk-stat-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          background: var(--cream);
          border: 1px solid var(--line);
          margin-bottom: 24px;
        }
        @media (min-width: 700px) { .m-lk-stat-row { grid-template-columns: repeat(4, 1fr); } }
        .m-lk-stat {
          padding: 22px 24px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        @media (min-width: 700px) { .m-lk-stat { border-bottom: 0; } }
        .m-lk-stat:last-child { border-right: 0; }
        .m-lk-stat .display {
          font-size: 11px;
          letter-spacing: .14em;
          color: var(--gold-deep);
          text-transform: uppercase;
          font-style: italic;
        }
        .m-lk-stat-n {
          font-size: 38px;
          font-weight: 500;
          line-height: 1;
          margin: 6px 0;
        }

        .m-lk-table-wrap {
          background: var(--cream);
          border: 1px solid var(--line);
          overflow-x: auto;
        }
        .m-lk-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
          min-width: 640px;
        }
        .m-lk-table th {
          text-align: left;
          padding: 16px 20px;
          font-family: var(--f-sans);
          font-size: 11px;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--ink-mute);
          font-weight: 500;
          background: var(--cream-warm);
          border-bottom: 1px solid var(--line);
        }
        .m-lk-table td {
          padding: 14px 20px;
          border-bottom: 1px solid var(--line);
        }
        .m-lk-table tr:last-child td { border-bottom: 0; }
        .m-lk-table tr.hit { background: rgba(201,168,76,.04); }
        .m-lk-table td.display { color: var(--ink); letter-spacing: .04em; font-style: normal; }
        .m-lk-cell-nums { display: flex; gap: 6px; }
        .m-lk-cell-nums span {
          padding: 3px 8px;
          font-size: 14px;
          background: var(--cream-warm);
          border: 1px solid var(--line);
        }
        .m-lk-toggle {
          padding: 5px 12px;
          font-size: 12px;
          font-family: var(--f-sans);
          font-weight: 500;
          letter-spacing: .04em;
          border: 1px solid var(--line);
          background: transparent;
          color: var(--ink-soft);
          display: inline-flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          transition: all .25s var(--ease-zen);
        }
        .m-lk-toggle.on {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--ink);
        }
        .m-lk-toggle:hover { transform: translateY(-1px); }

        /* LOTTERY */
        .m-lk-lottery {
          background: var(--cream);
          border: 1px solid var(--line);
          padding: 36px;
          max-width: 980px;
          margin: 0 auto;
        }
        .m-lk-lot-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--line);
          margin-bottom: 28px;
        }
        .m-lk-lot-source {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--ink-soft);
          font-style: italic;
        }
        .m-lk-live-dot {
          width: 8px; height: 8px;
          background: #5a9c6e;
          border-radius: 50%;
          animation: pulse-dot 1.6s infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .m-lk-prize {
          background: var(--ink);
          color: var(--cream);
          padding: 32px;
          text-align: center;
          margin-bottom: 24px;
          border: 1px solid var(--gold);
          position: relative;
        }
        .m-lk-prize .display {
          font-size: 12px;
          letter-spacing: .2em;
          color: var(--gold-soft);
          margin-bottom: 12px;
          display: block;
        }
        .m-lk-prize-n {
          font-size: clamp(50px, 8vw, 86px);
          font-weight: 400;
          letter-spacing: 0.08em;
          color: var(--gold);
          line-height: 1;
        }

        .m-lk-lot-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }
        @media (min-width: 700px) { .m-lk-lot-grid { grid-template-columns: 1fr 1fr; } }
        .m-lk-lot-box {
          padding: 20px;
          background: var(--cream-warm);
          border: 1px solid var(--line);
        }
        .m-lk-lot-box .display {
          font-size: 11px;
          letter-spacing: .14em;
          color: var(--gold-deep);
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }
        .m-lk-lot-nums {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .m-lk-lot-nums span {
          font-size: 32px;
          font-weight: 500;
          color: var(--ink);
          padding: 6px 14px;
          background: var(--cream);
          border: 1px solid var(--gold);
        }
        .m-lk-lot-back2 .m-lk-lot-nums span {
          font-size: 56px;
          letter-spacing: 0.08em;
        }

        .m-lk-lot-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 20px;
          border-top: 1px solid var(--line);
        }
        .m-lk-lot-foot .display {
          font-size: 11px;
          letter-spacing: .14em;
          color: var(--gold-deep);
          text-transform: uppercase;
        }
        .m-lk-lot-link {
          color: var(--gold-deep);
          text-decoration: underline;
          text-underline-offset: 4px;
          font-size: 14px;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}

window.Lucky = Lucky;
