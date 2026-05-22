// cart.jsx — Slide-in cart drawer for digital products

function CartDrawer({ open, onClose, cart, onRemove, onClear }) {
  const total = cart.reduce((s, i) => s + i.price, 0);

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className={`m-cart ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="ตะกร้าสินค้า">
      <div className="m-cart-backdrop" onClick={onClose} />
      <aside className="m-cart-panel">
        <header className="m-cart-head">
          <div>
            <span className="display gold-text" style={{ fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase" }}>The Vessel</span>
            <h3 style={{ fontSize: 24, marginTop: 4 }}>ตะกร้าของคุณ</h3>
          </div>
          <button className="m-cart-close" onClick={onClose} aria-label="ปิดตะกร้า">×</button>
        </header>

        <div className="m-cart-body">
          {cart.length === 0 ? (
            <div className="m-cart-empty">
              <Lotus size={80} opacity={0.4} />
              <p className="serif" style={{ fontSize: 19, marginTop: 24, color: "var(--ink-soft)" }}>
                ตะกร้ายังว่างเปล่า
              </p>
              <p className="display gold-text" style={{ fontSize: 14, marginTop: 8, fontStyle: "italic" }}>
                "ก่อนจะเต็ม จงเริ่มจากความว่าง"
              </p>
              <a href="#products" onClick={onClose} className="btn btn--ghost-gold" style={{ marginTop: 28 }}>
                เลือกชมสินค้า
              </a>
            </div>
          ) : (
            <ul className="m-cart-list">
              {cart.map((item, i) => (
                <li key={`${item.id}-${i}`} className="m-cart-item">
                  <div className="m-cart-thumb" aria-hidden="true">
                    {item.ornament === "lotus" && <Lotus size={36} />}
                    {item.ornament === "om" && <OmMark size={36} />}
                    {item.ornament === "mandala" && <Mandala size={48} rings={3} />}
                    {item.ornament === "seed" && <SeedOfLife size={44} />}
                  </div>
                  <div className="m-cart-info">
                    <div className="m-cart-kind">{item.kind}</div>
                    <div className="m-cart-name">{item.titleTh}</div>
                    <div className="m-cart-price serif mono-num">฿{item.price.toLocaleString()}</div>
                  </div>
                  <button className="m-cart-remove" onClick={() => onRemove(i)} aria-label={`ลบ ${item.titleTh}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                      <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <footer className="m-cart-foot">
            <div className="m-cart-divider" aria-hidden="true">
              <span></span><Diamond size={8} filled color="var(--gold)" /><span></span>
            </div>
            <div className="m-cart-totals">
              <div>
                <span className="muted">ยอดรวม ({cart.length} ชิ้น)</span>
                <span className="serif mono-num" style={{ fontSize: 24 }}>฿{total.toLocaleString()}</span>
              </div>
            </div>
            <p className="m-cart-note muted">ดาวน์โหลดทันทีหลังชำระเงิน</p>
            <button className="btn btn--gold" style={{ width: "100%", marginTop: 12 }}>
              ชำระเงิน
              <span aria-hidden="true">→</span>
            </button>
            <button className="m-cart-clear" onClick={onClear}>
              ล้างตะกร้า
            </button>
          </footer>
        )}
      </aside>

      <style>{`
        .m-cart {
          position: fixed; inset: 0;
          z-index: 300;
          pointer-events: none;
        }
        .m-cart.open { pointer-events: auto; }
        .m-cart-backdrop {
          position: absolute; inset: 0;
          background: rgba(44, 31, 6, 0.4);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity .4s var(--ease-zen);
        }
        .m-cart.open .m-cart-backdrop { opacity: 1; }
        .m-cart-panel {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: min(440px, 92vw);
          background: var(--cream);
          border-left: 1px solid var(--line);
          display: flex; flex-direction: column;
          transform: translateX(100%);
          transition: transform .5s var(--ease-zen);
        }
        .m-cart.open .m-cart-panel { transform: translateX(0); }

        .m-cart-head {
          padding: 28px 28px 20px;
          border-bottom: 1px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .m-cart-close {
          width: 36px; height: 36px;
          background: transparent;
          border: 1px solid var(--line);
          color: var(--ink);
          font-size: 22px; line-height: 1;
        }
        .m-cart-close:hover { background: var(--ink); color: var(--cream); }

        .m-cart-body {
          flex-grow: 1;
          overflow-y: auto;
          padding: 24px 28px;
        }
        .m-cart-empty {
          text-align: center;
          padding: 60px 0;
          color: var(--gold);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .m-cart-list {
          list-style: none;
          padding: 0; margin: 0;
        }
        .m-cart-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 18px 0;
          border-bottom: 1px solid var(--line);
        }
        .m-cart-thumb {
          width: 64px; height: 64px;
          background: var(--ink);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold-soft);
          flex-shrink: 0;
        }
        .m-cart-info { flex-grow: 1; }
        .m-cart-kind {
          font-size: 10px;
          letter-spacing: .14em;
          color: var(--gold-deep);
          margin-bottom: 4px;
        }
        .m-cart-name {
          font-family: var(--f-serif);
          font-size: 16px;
          font-weight: 500;
          line-height: 1.3;
          margin-bottom: 6px;
        }
        .m-cart-price {
          font-size: 17px;
          color: var(--ink);
        }
        .m-cart-remove {
          background: transparent;
          border: 1px solid var(--line);
          width: 32px; height: 32px;
          color: var(--ink-soft);
          display: inline-flex;
          align-items: center; justify-content: center;
          transition: all .25s var(--ease-zen);
          flex-shrink: 0;
        }
        .m-cart-remove:hover {
          color: var(--cream);
          background: #8b3a3a;
          border-color: #8b3a3a;
        }

        .m-cart-foot {
          padding: 24px 28px 32px;
          border-top: 1px solid var(--line);
          background: var(--cream-warm);
        }
        .m-cart-divider {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 18px;
        }
        .m-cart-divider span {
          flex: 1; height: 1px; background: var(--gold);
          opacity: 0.5;
        }
        .m-cart-totals > div {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }
        .m-cart-note {
          font-size: 12px;
          margin-top: 8px;
          font-family: var(--f-display);
          font-style: italic;
        }
        .m-cart-clear {
          width: 100%;
          background: transparent;
          border: 0;
          color: var(--ink-mute);
          padding: 14px;
          font-size: 12px;
          letter-spacing: .14em;
          font-family: var(--f-sans);
          margin-top: 4px;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .m-cart-clear:hover { color: var(--ink); }
      `}</style>
    </div>
  );
}

window.CartDrawer = CartDrawer;
