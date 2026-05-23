// shop.jsx — Curated affiliate products (external links)

const SHOP_ITEMS = [
  {
    cat: "ลูกประคำ & มาลา",
    catEn: "Prayer Beads",
    name: "ลูกประคำหินอะเกตดำ ๑๐๘ เม็ด",
    nameEn: "Black Agate Mala · 108 Beads",
    desc: "หินอะเกตดำธรรมชาติ ขัดเงาด้วยมือ พร้อมพู่ไหมทอง — ใช้สำหรับท่องบทสวด หรือพกพาในกระเป๋า",
    price: "฿1,290",
    vendor: "Shopee",
    href: "https://s.shopee.co.th/809hmZJb6e",
    ornament: "om",
    tone: "ink",
  },
  {
    cat: "ธูป & กำยาน",
    catEn: "Incense",
    name: "ธูปหอม จันทน์-กฤษณา (กล่อง ๖๐ ก้าน)",
    nameEn: "Sandalwood & Agarwood Incense",
    desc: "ผลิตที่อินเดีย ส่วนผสมจันทน์ไม้แท้และกฤษณา จุดได้ ๔๕–๖๐ นาทีต่อก้าน — ใช้ก่อนสมาธิ",
    price: "฿390",
    vendor: "Shopee",
    href: "https://s.shopee.co.th/6VKu0LByfk",
    ornament: "lotus",
    tone: "gold",
  },
  {
    cat: "หนังสือ",
    catEn: "Books",
    name: "Tao Te Ching · ฉบับแปลภาษาไทย",
    nameEn: "Tao Te Ching · Thai Translation",
    desc: "หนังสือคำสอนเล่าจื๊อ ๘๑ บท แปลโดยอาจารย์ผู้เชี่ยวชาญ — หนังสือเล่มหลักที่เราแนะนำ",
    price: "฿420",
    vendor: "Shopee",
    href: "https://s.shopee.co.th/5L8wcNbH32",
    ornament: "seed",
    tone: "cream",
  },
  {
    cat: "อุปกรณ์สมาธิ",
    catEn: "Meditation Gear",
    name: "เบาะนั่งสมาธิ Zafu ผ้าฝ้ายแท้",
    nameEn: "Zafu Meditation Cushion · Cotton",
    desc: "เบาะกลม ผ้าฝ้ายอินทรีย์ ยัดด้วยเมล็ดบักวีต — รองรับกระดูกสันหลังให้ตรง นั่งได้นานโดยไม่ปวด",
    price: "฿1,490",
    vendor: "Shopee",
    href: "https://s.shopee.co.th/9zumBBVS5B",
    ornament: "mandala",
    tone: "ink",
  },
  {
    cat: "ธูป & กำยาน",
    catEn: "Resin Incense",
    name: "กำยานอินเดีย แท้ ๑๐๐% · ๗ กลิ่น (๒๕ เม็ด)",
    nameEn: "Indian Resin Incense · 7 Scents · 25 Pieces",
    desc: "กำยานแท้นำเข้าจากอินเดีย มี ๗ กลิ่นให้เลือก ๑ ห่อมี ๒๕ เม็ด — เผาบนถ่านใช้ในพิธีกรรมและนั่งสมาธิ",
    price: "฿150",
    vendor: "Shopee",
    href: "https://s.shopee.co.th/8fPOaqKdeZ",
    ornament: "lotus",
    tone: "gold",
  },
  {
    cat: "อุปกรณ์สมาธิ",
    catEn: "Incense Burner",
    name: "เชิงกำยานควันน้ำตก + กำยานฟรี ๑๐ ดอก",
    nameEn: "Backflow Incense Burner · 10 Cones Included",
    desc: "เชิงกำยานดีไซน์ควันน้ำตกไหลลง สวยงามระหว่างนั่งสมาธิ — แถมฟรีกำยานน้ำตก ๑๐ ดอก",
    price: "฿299",
    vendor: "Shopee",
    href: "https://s.shopee.co.th/9UyVaQpJYn",
    ornament: "mandala",
    tone: "cream",
  },
  {
    cat: "เครื่องประดับ",
    catEn: "Jewelry",
    name: "หินแม่เหล็กเงิน ลูกประคำสร้อยคอ",
    nameEn: "Silver Magnetic Stone Mala Necklace",
    desc: "สร้อยคอลูกประคำหินแม่เหล็กเงิน — พลังงานสมดุล ใส่ติดตัวเพื่อเตือนสติและดึงดูดสิ่งดีงาม",
    price: "฿390",
    vendor: "Shopee",
    href: "https://s.shopee.co.th/8fPOazGrix",
    ornament: "lotus",
    tone: "ink",
  },
];

const ShopOrn = ({ kind, tone, size = 140 }) => {
  const stroke = tone === "ink" ? "var(--gold-soft)"
              : tone === "gold" ? "var(--ink)"
              : "var(--gold-deep)";
  if (kind === "lotus") return <Lotus size={size} stroke={stroke} />;
  if (kind === "om") return <OmMark size={size} stroke={stroke} />;
  if (kind === "mandala") return <Mandala size={size + 30} rings={4} stroke={stroke} opacity={0.7} />;
  return <SeedOfLife size={size} stroke={stroke} />;
};

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M15 3h6v6M10 14L21 3M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Shop() {
  return (
    <section id="shop" className="pad m-shop">
      <div className="m-shop-bg" aria-hidden="true">
        <div style={{ position: "absolute", top: "-6%", right: "-6%" }}>
          <div className="parallax-layer parallax-slow drift-slow">
            <SacredImage src="assets/ganesha-sitting.png" size={540} opacity={0.2} />
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "-4%", left: "-8%" }}>
          <div className="parallax-layer parallax-fast drift-sway">
            <SacredImage src="assets/buddha-standing.png" size={480} opacity={0.2} />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">สินค้าแนะนำ · จากร้านพันธมิตร</span>
          <TripleDivider />
          <h2><em>เครื่องมือศักดิ์สิทธิ์</em><br />ที่เราเลือกสรรให้คุณ</h2>
          <p className="lede">
            ลูกประคำ · ธูป · กำยาน · หนังสือ · อุปกรณ์สมาธิ —
            สินค้าที่ทีมของเราใช้จริง คัดสรรจากร้านที่ไว้ใจได้
            กดที่ปุ่ม "ดูที่ร้าน" เพื่อสั่งซื้อจากร้านโดยตรง
          </p>
        </div>

        <div className="m-shop-grid">
          {SHOP_ITEMS.map((it, i) => (
            <article key={i} className={`m-shop-card reveal tone-${it.tone}`} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="m-shop-thumb">
                <div className="m-shop-orn parallax-layer parallax-fast">
                  <ShopOrn kind={it.ornament} tone={it.tone} />
                </div>
                <span className="m-shop-cat display">{it.catEn}</span>
                <span className="m-shop-vendor">
                  <span className="m-shop-vendor-dot" aria-hidden="true"></span>
                  {it.vendor}
                </span>
              </div>

              <div className="m-shop-body">
                <p className="m-shop-cat-th">{it.cat}</p>
                <h3 className="m-shop-name">{it.name}</h3>
                <p className="display m-shop-name-en">{it.nameEn}</p>
                <p className="m-shop-desc">{it.desc}</p>

                <div className="m-shop-foot">
                  <a
                    href={it.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-shop-link"
                    aria-label={`ดู ${it.name} ที่ ${it.vendor}`}
                  >
                    <span>ดูราคา & สั่งซื้อ</span>
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="m-shop-disclosure reveal">
          <Diamond filled={false} color="var(--gold)" />
          <p>
            <strong>หมายเหตุ:</strong> สินค้าเหล่านี้จำหน่ายโดยร้านพันธมิตรภายนอก
            มโหราคะเซนได้รับค่าคอมมิชชั่นเล็กน้อยจากการสั่งซื้อ —
            แต่ราคาเท่ากับซื้อเองทุกประการ และเราคัดสรรเฉพาะสินค้าที่ใช้จริงเท่านั้น
          </p>
          <Diamond filled={false} color="var(--gold)" />
        </div>
      </div>

      <style>{`
        .m-shop { background: var(--cream); overflow: hidden; }
        .m-shop-bg { position: absolute; inset: 0; pointer-events: none; color: var(--gold); }

        .m-shop-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 700px) { .m-shop-grid { grid-template-columns: 1fr 1fr; gap: 32px; } }
        @media (min-width: 1100px) { .m-shop-grid { grid-template-columns: repeat(3, 1fr); } }

        .m-shop-card {
          background: var(--cream);
          border: 1px solid var(--line);
          display: flex;
          flex-direction: column;
          transition: transform .4s var(--ease-zen), box-shadow .4s var(--ease-zen), border-color .4s var(--ease-zen);
        }
        .m-shop-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(44,31,6,.12);
          border-color: var(--gold);
        }

        .m-shop-thumb {
          aspect-ratio: 16/11;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .m-shop-card.tone-ink .m-shop-thumb {
          background: linear-gradient(135deg, #2C1F06 0%, #4a3a1a 100%);
        }
        .m-shop-card.tone-gold .m-shop-thumb {
          background: linear-gradient(135deg, #E8D38A 0%, #C9A84C 100%);
        }
        .m-shop-card.tone-cream .m-shop-thumb {
          background: linear-gradient(135deg, #F6EFDF 0%, #F1E9D4 100%);
          border-bottom: 1px solid var(--line);
        }

        .m-shop-orn {
          opacity: 0.5;
          transition: transform .6s var(--ease-zen), opacity .4s var(--ease-zen);
        }
        .m-shop-card:hover .m-shop-orn {
          transform: scale(1.1) rotate(8deg);
          opacity: 0.7;
        }

        .m-shop-cat {
          position: absolute;
          top: 14px; left: 14px;
          font-size: 11px;
          letter-spacing: .2em;
          font-style: italic;
          color: var(--cream);
          background: rgba(44,31,6,.55);
          backdrop-filter: blur(6px);
          padding: 5px 10px;
        }
        .m-shop-card.tone-gold .m-shop-cat { background: rgba(44,31,6,.7); }
        .m-shop-card.tone-cream .m-shop-cat { background: rgba(44,31,6,.5); }

        .m-shop-vendor {
          position: absolute;
          top: 14px; right: 14px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .04em;
          color: var(--ink);
          background: var(--cream);
          padding: 5px 10px 5px 8px;
          border: 1px solid var(--gold);
        }
        .m-shop-vendor-dot {
          width: 6px; height: 6px;
          background: var(--gold);
          border-radius: 50%;
        }

        .m-shop-body {
          padding: 28px 26px 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .m-shop-cat-th {
          font-size: 12px;
          color: var(--gold-deep);
          letter-spacing: .08em;
          margin-bottom: 8px;
        }
        .m-shop-name {
          font-size: 19px;
          line-height: 1.35;
          font-weight: 500;
          margin-bottom: 4px;
        }
        .m-shop-name-en {
          font-size: 13px;
          color: var(--ink-mute);
          font-style: italic;
          letter-spacing: .04em;
          margin-bottom: 14px;
        }
        .m-shop-desc {
          font-size: 14px;
          color: var(--ink-soft);
          line-height: 1.65;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .m-shop-foot {
          padding-top: 18px;
          border-top: 1px solid var(--line);
        }
        .m-shop-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 13px 16px;
          background: var(--ink);
          color: var(--cream);
          border: 1px solid var(--ink);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: .12em;
          transition: all .3s var(--ease-zen);
        }
        .m-shop-link:hover {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--ink);
          gap: 12px;
        }

        .m-shop-disclosure {
          margin-top: 60px;
          padding: 22px 28px;
          background: var(--cream-warm);
          border: 1px solid var(--line);
          display: flex;
          align-items: center;
          gap: 18px;
          max-width: 880px;
          margin-left: auto;
          margin-right: auto;
        }
        .m-shop-disclosure p {
          flex-grow: 1;
          font-size: 13px;
          line-height: 1.65;
          color: var(--ink-soft);
        }
        .m-shop-disclosure strong {
          color: var(--ink);
          font-weight: 500;
        }
        @media (max-width: 640px) {
          .m-shop-disclosure { flex-direction: column; text-align: center; gap: 12px; }
        }
      `}</style>
    </section>
  );
}

window.Shop = Shop;
