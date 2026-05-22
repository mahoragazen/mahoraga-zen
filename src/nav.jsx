// nav.jsx — Sticky nav with mobile drawer
const { useState, useEffect } = React;

const NAV_LINKS = [
  { label: "ทำนาย", href: "#fortune" },
  { label: "เลขนำโชค", href: "#lucky" },
  { label: "บทสวด", href: "#audio" },
  { label: "ข่าวงานบุญ", href: "#news" },
  { label: "สมาชิก", href: "#membership" },
  { label: "ร้านค้า", href: "#shop" },
];

const Logo = () => (
  <a href="#top" className="m-logo" aria-label="Mahoraga ZEN — กลับสู่หน้าแรก">
    <Lotus size={28} stroke="var(--gold)" />
    <span className="m-logo-text">
      <span className="serif m-logo-name">MAHORAGA</span>
      <span className="display m-logo-sub">· zen ·</span>
    </span>
  </a>
);

function Nav({ cartCount = 0, onOpenCart }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`m-nav ${scrolled ? "scrolled" : ""}`} role="banner">
        <div className="m-nav-inner wrap">
          <Logo />
          <nav className="m-nav-links" aria-label="หลัก">
            {NAV_LINKS.map((l, i) => (
              <a key={i} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="m-nav-actions">
            <button className="m-cart-btn" onClick={onOpenCart} aria-label={`ตะกร้า มีของ ${cartCount} ชิ้น`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path d="M3 4h2l2.5 12h11l2-9H6.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
                <circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />
              </svg>
              {cartCount > 0 && <span className="m-cart-badge">{cartCount}</span>}
            </button>
            <a href="#membership" className="btn btn--gold btn--sm m-nav-cta">สมัครสมาชิก</a>
            <button
              className="m-burger"
              aria-expanded={open}
              aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
              onClick={() => setOpen(o => !o)}
            >
              <span className={open ? "open" : ""}></span>
              <span className={open ? "open" : ""}></span>
              <span className={open ? "open" : ""}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`m-drawer ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="เมนู">
        <div className="m-drawer-backdrop" onClick={() => setOpen(false)} />
        <aside className="m-drawer-panel">
          <div className="m-drawer-head">
            <Logo />
            <button className="m-drawer-close" onClick={() => setOpen(false)} aria-label="ปิดเมนู">×</button>
          </div>
          <div className="m-drawer-orn" aria-hidden="true">
            <Mandala size={260} opacity={0.12} rings={6} />
          </div>
          <nav className="m-drawer-links" aria-label="เมนูมือถือ">
            {NAV_LINKS.map((l, i) => (
              <a key={i} href={l.href} onClick={() => setOpen(false)}>
                <span className="mono-num display" style={{ color: "var(--gold-deep)", marginRight: 14, fontSize: 14 }}>
                  ๐{i + 1}
                </span>
                <span>{l.label}</span>
                <span className="m-drawer-arrow">→</span>
              </a>
            ))}
          </nav>
          <div className="m-drawer-foot">
            <a href="#membership" className="btn btn--gold" onClick={() => setOpen(false)}>เริ่มต้นเส้นทาง</a>
            <p className="muted" style={{ fontSize: 13, marginTop: 18, textAlign: "center" }}>
              <span className="display" style={{ color: "var(--gold-deep)" }}>“ ความสงบ คือ ความสำเร็จ ”</span>
            </p>
          </div>
        </aside>
      </div>

      <style>{`
        .m-nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 18px 0;
          transition: all .4s var(--ease-zen);
          background: transparent;
        }
        .m-nav.scrolled {
          background: rgba(253, 252, 248, 0.88);
          backdrop-filter: blur(14px) saturate(140%);
          -webkit-backdrop-filter: blur(14px) saturate(140%);
          border-bottom: 1px solid var(--line);
          padding: 12px 0;
        }
        .m-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .m-logo {
          display: inline-flex; align-items: center; gap: 12px;
          text-decoration: none; color: var(--ink);
        }
        .m-logo-text { display: flex; flex-direction: column; line-height: 1; }
        .m-logo-name {
          font-size: 17px; font-weight: 500;
          letter-spacing: 0.22em;
        }
        .m-logo-sub {
          font-size: 13px; font-style: italic;
          color: var(--gold-deep); margin-top: 4px;
          letter-spacing: 0.1em;
        }
        .m-nav-links {
          display: none;
          gap: 32px;
          align-items: center;
        }
        .m-nav-links a {
          color: var(--ink);
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0.02em;
          position: relative;
          padding: 6px 0;
          transition: color .25s var(--ease-zen);
        }
        .m-nav-links a::after {
          content: "";
          position: absolute;
          left: 50%; right: 50%; bottom: 0;
          height: 1px; background: var(--gold);
          transition: all .35s var(--ease-zen);
        }
        .m-nav-links a:hover { color: var(--gold-deep); }
        .m-nav-links a:hover::after { left: 0; right: 0; }

        .m-nav-actions { display: flex; align-items: center; gap: 14px; }
        .m-nav-cta { display: none; }
        .m-cart-btn {
          position: relative;
          width: 40px; height: 40px;
          border: 1px solid var(--line-strong);
          background: transparent;
          color: var(--ink);
          display: inline-flex; align-items: center; justify-content: center;
          transition: all .3s var(--ease-zen);
        }
        .m-cart-btn:hover {
          border-color: var(--gold);
          color: var(--gold-deep);
        }
        .m-cart-badge {
          position: absolute; top: -6px; right: -6px;
          background: var(--gold);
          color: var(--ink);
          font-size: 10px; font-weight: 600;
          width: 18px; height: 18px;
          display: inline-flex; align-items: center; justify-content: center;
          border-radius: 50%;
        }
        .m-burger {
          width: 40px; height: 40px;
          background: transparent;
          border: 1px solid var(--line-strong);
          display: inline-flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 4px;
          padding: 0;
        }
        .m-burger span {
          width: 18px; height: 1.2px;
          background: var(--ink);
          transition: all .3s var(--ease-zen);
        }
        .m-burger span.open:nth-child(1) { transform: translateY(5.2px) rotate(45deg); }
        .m-burger span.open:nth-child(2) { opacity: 0; }
        .m-burger span.open:nth-child(3) { transform: translateY(-5.2px) rotate(-45deg); }

        @media (min-width: 980px) {
          .m-nav-links { display: inline-flex; }
          .m-nav-cta { display: inline-flex; }
          .m-burger { display: none; }
        }

        /* Drawer */
        .m-drawer {
          position: fixed; inset: 0;
          z-index: 200;
          pointer-events: none;
        }
        .m-drawer.open { pointer-events: auto; }
        .m-drawer-backdrop {
          position: absolute; inset: 0;
          background: rgba(44, 31, 6, 0.4);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity .4s var(--ease-zen);
        }
        .m-drawer.open .m-drawer-backdrop { opacity: 1; }
        .m-drawer-panel {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: min(420px, 90vw);
          background: var(--cream);
          border-left: 1px solid var(--line);
          padding: 24px;
          display: flex; flex-direction: column;
          transform: translateX(100%);
          transition: transform .5s var(--ease-zen);
          overflow: hidden;
        }
        .m-drawer.open .m-drawer-panel { transform: translateX(0); }
        .m-drawer-head {
          display: flex; align-items: center; justify-content: space-between;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--line);
        }
        .m-drawer-close {
          width: 40px; height: 40px;
          background: transparent;
          border: 1px solid var(--line);
          color: var(--ink);
          font-size: 22px; line-height: 1;
        }
        .m-drawer-orn {
          position: absolute;
          right: -80px; bottom: 80px;
          pointer-events: none;
        }
        .m-drawer-links {
          display: flex; flex-direction: column;
          margin-top: 32px;
        }
        .m-drawer-links a {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 20px 0;
          font-family: var(--f-serif);
          font-size: 22px;
          color: var(--ink);
          text-decoration: none;
          border-bottom: 1px solid var(--line);
          transition: color .25s var(--ease-zen), padding .35s var(--ease-zen);
        }
        .m-drawer-links a:hover { color: var(--gold-deep); padding-left: 8px; }
        .m-drawer-arrow {
          margin-left: auto;
          color: var(--gold);
          opacity: 0;
          transition: opacity .3s var(--ease-zen), transform .3s var(--ease-zen);
        }
        .m-drawer-links a:hover .m-drawer-arrow { opacity: 1; transform: translateX(4px); }
        .m-drawer-foot {
          margin-top: auto;
          padding-top: 24px;
        }
        .m-drawer-foot .btn { width: 100%; }
      `}</style>
    </>
  );
}

window.Nav = Nav;
window.Logo = Logo;
