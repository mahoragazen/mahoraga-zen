// products.jsx — Digital products grid with Add to Cart

const PRODUCTS = [
  {
    id: "ebook",
    title: "Zen Philosophy for Modern Business",
    titleTh: "ปรัชญาเซน สำหรับธุรกิจยุคใหม่",
    kind: "E-BOOK",
    price: 499,
    pages: "๒๔๐ หน้า · PDF + EPUB",
    summary: "๑๒ บท ที่นำหลักเซน ๒,๕๐๐ ปี มาแปลงเป็น mental framework สำหรับห้องประชุม — ทุกบทมี Reflection Questions + ๓๐-day Practice",
    ornament: "lotus",
    aspect: "3/4",
  },
  {
    id: "chants",
    title: "Sacred Chants MP3 Collection",
    titleTh: "คอลเลกชันบทสวดศักดิ์สิทธิ์",
    kind: "AUDIO · MP3",
    price: 199,
    pages: "๓๖ บท · ๓.๒ ชั่วโมง",
    summary: "๓๖ บทสวด ที่บันทึกในวัดเก่าแก่ ๘๐๐ ปี · ๓๒๐ kbps คุณภาพสูงกว่า YouTube · พร้อม Guide ว่าเมื่อไหร่ควรฟังบทไหน",
    ornament: "om",
    aspect: "1/1",
  },
  {
    id: "meditation",
    title: "30-Minute Guided Meditation",
    titleTh: "สมาธินำทาง ๓๐ นาที",
    kind: "AUDIO · MP3",
    price: 99,
    pages: "๓๐ นาที · เสียงนำภาษาไทย",
    summary: "๔ phases (settle → breath → body scan → close) · ภาษาไทยโดยพระอาจารย์ · จ่ายครั้งเดียว ฟังตลอดชีพ — ไม่ใช่ subscription",
    ornament: "mandala",
    aspect: "1/1",
  },
  {
    id: "wallpaper",
    title: "Sacred Wallpaper Pack",
    titleTh: "ภาพพื้นหลัง ๓๐ ลาย",
    kind: "DIGITAL · ZIP",
    price: 49,
    pages: "๓๐ ไฟล์ · ๔K + Mobile",
    summary: "๓๐ ลายมันดาลาทอง · จัด ๔ หมวด (creativity / focus / calm / celebration) · ราคาแก้วกาแฟ ใช้ได้ทุกวันที่เปิดคอม",
    ornament: "seed",
    aspect: "3/4",
  },
];

const ORN = ({ kind, size }) => {
  if (kind === "lotus") return <Lotus size={size} stroke="rgba(253,252,248,.5)" />;
  if (kind === "om") return <OmMark size={size} stroke="rgba(253,252,248,.5)" />;
  if (kind === "mandala") return <Mandala size={size} rings={4} opacity={1} stroke="rgba(253,252,248,.5)" />;
  return <SeedOfLife size={size} stroke="rgba(253,252,248,.5)" />;
};

function Products({ onAdd, cart }) {
  return (
    <section id="products" className="pad m-prod">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">ดิจิทัล โปรดักต์</span>
          <TripleDivider />
          <h2>เครื่องมือ<em>ศักดิ์สิทธิ์</em><br />ที่ดาวน์โหลดได้ทันที</h2>
          <p className="lede">
            หนังสือ บทสวด สมาธินำทาง และภาพพื้นหลัง —
            พกพาความสงบติดตัว ไปกับคุณทุกที่
          </p>
        </div>

        <div className="m-prod-grid">
          {PRODUCTS.map((p, i) => {
            const inCart = cart.some(c => c.id === p.id);
            return (
              <article key={p.id} className="m-prod-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="m-prod-thumb" style={{ aspectRatio: p.aspect }}>
                  <div className="m-prod-thumb-orn parallax-layer parallax-fast">
                    <ORN kind={p.ornament} size={p.aspect === "1/1" ? 220 : 200} />
                  </div>
                  <span className="m-prod-kind">{p.kind}</span>
                  <span className="m-prod-num display">๐{i + 1}</span>
                </div>

                <div className="m-prod-body">
                  <h3 className="m-prod-title">{p.titleTh}</h3>
                  <p className="m-prod-title-en display">{p.title}</p>
                  <p className="m-prod-meta">{p.pages}</p>
                  <p className="m-prod-summary">{p.summary}</p>

                  <div className="m-prod-foot">
                    <div className="m-prod-price">
                      <span className="display">฿</span>
                      <span className="mono-num serif">{p.price.toLocaleString()}</span>
                    </div>
                    <button
                      className={`m-prod-cta ${inCart ? "added" : ""}`}
                      onClick={() => onAdd(p)}
                      aria-label={inCart ? `เพิ่ม ${p.titleTh} แล้ว` : `เพิ่ม ${p.titleTh} ลงตะกร้า`}
                    >
                      {inCart ? (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                            <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          เพิ่มในตะกร้าแล้ว
                        </>
                      ) : (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                          เพิ่มลงตะกร้า
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="m-prod-note reveal">
          <Diamond filled={false} color="var(--gold)" />
          <span>ดาวน์โหลดทันทีหลังชำระเงิน · ดาวน์โหลดซ้ำได้ตลอดชีวิต · ใบเสร็จส่งทาง Email</span>
          <Diamond filled={false} color="var(--gold)" />
        </p>
      </div>

      <style>{`
        .m-prod { background: var(--cream-warm); overflow: hidden; }

        .m-prod-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 700px) { .m-prod-grid { grid-template-columns: 1fr 1fr; gap: 36px; } }
        @media (min-width: 1100px) { .m-prod-grid { grid-template-columns: repeat(4, 1fr); gap: 28px; } }

        .m-prod-card {
          background: var(--cream);
          border: 1px solid var(--line);
          display: flex;
          flex-direction: column;
          transition: transform .4s var(--ease-zen), box-shadow .4s var(--ease-zen);
        }
        .m-prod-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(44,31,6,.1);
        }

        .m-prod-thumb {
          position: relative;
          background: linear-gradient(135deg, var(--ink) 0%, #4a3a1a 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .m-prod-thumb-orn {
          color: var(--gold-soft);
          transition: transform .6s var(--ease-zen);
        }
        .m-prod-card:hover .m-prod-thumb-orn { transform: scale(1.08) rotate(8deg); }
        .m-prod-kind {
          position: absolute;
          top: 14px; left: 14px;
          font-family: var(--f-sans);
          font-size: 10px;
          letter-spacing: .18em;
          color: var(--gold-soft);
          background: rgba(44,31,6,.4);
          backdrop-filter: blur(6px);
          padding: 5px 9px;
        }
        .m-prod-num {
          position: absolute;
          right: 14px; bottom: 12px;
          font-size: 32px;
          font-style: italic;
          color: rgba(232,211,138,.55);
        }

        .m-prod-body {
          padding: 24px 22px 22px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .m-prod-title {
          font-size: 20px;
          line-height: 1.3;
          font-weight: 500;
          margin-bottom: 6px;
        }
        .m-prod-title-en {
          font-size: 12px;
          color: var(--gold-deep);
          font-style: italic;
          letter-spacing: .08em;
          margin-bottom: 14px;
        }
        .m-prod-meta {
          font-size: 12px;
          letter-spacing: .04em;
          color: var(--ink-mute);
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--line);
        }
        .m-prod-summary {
          font-size: 14px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .m-prod-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .m-prod-price {
          display: flex;
          align-items: baseline;
          gap: 3px;
        }
        .m-prod-price .display {
          color: var(--gold-deep);
          font-style: italic;
          font-size: 16px;
        }
        .m-prod-price .serif {
          font-size: 28px;
          font-weight: 500;
          color: var(--ink);
        }
        .m-prod-cta {
          background: var(--ink);
          color: var(--cream);
          border: 1px solid var(--ink);
          padding: 12px 16px;
          font-size: 12px;
          letter-spacing: .12em;
          font-family: var(--f-sans);
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all .3s var(--ease-zen);
          white-space: nowrap;
        }
        .m-prod-cta:hover {
          background: var(--gold-deep);
          border-color: var(--gold-deep);
        }
        .m-prod-cta.added {
          background: var(--cream-warm);
          color: var(--gold-deep);
          border-color: var(--gold);
        }

        .m-prod-note {
          margin-top: 60px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          color: var(--ink-soft);
          font-size: 14px;
        }
        @media (max-width: 600px) {
          .m-prod-note { flex-direction: column; gap: 8px; }
          .m-prod-note span { font-size: 13px; line-height: 1.5; }
        }
      `}</style>
    </section>
  );
}

window.Products = Products;
