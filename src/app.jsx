// app.jsx — Main orchestrator + Tweaks for interaction modes

const { useState: useStateApp, useEffect: useEffectApp, useRef: useRefApp, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mode": "scroll",
  "showRails": true,
  "goldIntensity": "balanced"
}/*EDITMODE-END*/;

const MODE_LABELS = {
  still: "นิ่งสงบ",
  scroll: "Scroll Animation",
  parallax: "Parallax",
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [cart, setCart] = useStateApp([]);
  const [cartOpen, setCartOpen] = useStateApp(false);

  // ── Reveal observer (active in scroll + parallax) ──────────────
  useEffectApp(() => {
    const root = document.getElementById("mahoraga-root");
    if (!root) return;
    const els = root.querySelectorAll(".reveal");
    if (t.mode === "still") {
      els.forEach(el => el.classList.add("in"));
      return;
    }
    // reset
    els.forEach(el => el.classList.remove("in"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [t.mode]);

  // ── Parallax scroll handler ───────────────────────────────────
  useEffectApp(() => {
    if (t.mode !== "parallax") {
      document.querySelectorAll("[data-parallax-host]").forEach(s => s.style.setProperty("--p", "0"));
      return;
    }
    let raf = null;
    const update = () => {
      raf = null;
      const vh = window.innerHeight;
      document.querySelectorAll("[data-parallax-host]").forEach((section) => {
        const r = section.getBoundingClientRect();
        // Offset relative to viewport center, modulated by section size
        const offset = (r.top + r.height / 2) - vh / 2;
        section.style.setProperty("--p", String(offset));
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [t.mode]);

  // ── Cart actions ──────────────────────────────────────────────
  const addToCart = (p) => {
    setCart(prev => prev.some(i => i.id === p.id) ? prev : [...prev, p]);
    setCartOpen(true);
  };
  const removeFromCart = (i) => setCart(prev => prev.filter((_, j) => j !== i));
  const clearCart = () => setCart([]);

  const rootCls = `mode-${t.mode}` + (t.showRails ? "" : " rails-off") + ` gold-${t.goldIntensity}`;

  return (
    <div id="mahoraga-root" className={rootCls}>
      <Nav cartCount={cart.length} onOpenCart={() => setCartOpen(true)} />

      <div data-parallax-host>
        <Hero />
      </div>
      <div data-parallax-host>
        <Features />
      </div>
      <div data-parallax-host>
        <Fortune />
      </div>
      <div data-parallax-host>
        <Lucky />
      </div>
      <div data-parallax-host>
        <AudioSection />
      </div>
      <div data-parallax-host>
        <Membership />
      </div>
      <div data-parallax-host>
        <Products onAdd={addToCart} cart={cart} />
      </div>
      <div data-parallax-host>
        <Shop />
      </div>
      <div data-parallax-host>
        <News />
      </div>
      <div data-parallax-host>
        <Testimonials />
      </div>
      <div data-parallax-host>
        <Newsletter />
      </div>
      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onRemove={removeFromCart}
        onClear={clearCart}
      />

      <TweaksPanel>
        <TweakSection label="สไตล์ Interaction" />
        <TweakRadio
          label="โหมด"
          value={t.mode}
          options={[
            { value: "still",    label: "นิ่งสงบ" },
            { value: "scroll",   label: "Scroll" },
            { value: "parallax", label: "Parallax" },
          ]}
          onChange={(v) => setTweak("mode", v)}
        />
        <p style={{ fontSize: 11, color: "rgba(41,38,27,.55)", lineHeight: 1.5, marginTop: -2 }}>
          {t.mode === "still" && "ไม่มี Animation — ทุกอย่างปรากฏทันที เหมือนคู่มือเซน"}
          {t.mode === "scroll" && "Reveal Animation — เนื้อหาค่อย ๆ ปรากฏ ขณะเลื่อน"}
          {t.mode === "parallax" && "ชั้นลึก — ลวดลายทองเคลื่อนสวนทาง สร้างมิติ"}
        </p>

        <TweakSection label="การตกแต่ง" />
        <TweakToggle
          label="แสดง Side Rails"
          value={t.showRails}
          onChange={(v) => setTweak("showRails", v)}
        />
        <TweakRadio
          label="ความเข้มทอง"
          value={t.goldIntensity}
          options={[
            { value: "subtle",   label: "เบาบาง" },
            { value: "balanced", label: "พอดี" },
            { value: "rich",     label: "เข้ม" },
          ]}
          onChange={(v) => setTweak("goldIntensity", v)}
        />

        <TweakSection label="ทดลอง" />
        <TweakButton label="ล้างตะกร้า" onClick={() => { setCart([]); setCartOpen(false); }} />
        <TweakButton label="กลับขึ้นบน" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
      </TweaksPanel>

      {/* Global style overrides driven by tweaks */}
      <style>{`
        .rails-off .m-hero-rail-l,
        .rails-off .m-hero-rail-r { display: none !important; }

        .gold-subtle {
          --gold: #C9A84C;
          --gold-deep: #A8862E;
          --gold-soft: #E8D38A;
        }
        .gold-subtle .m-hero-mandala,
        .gold-subtle .m-hero-seed,
        .gold-subtle .m-hero-sun,
        .gold-subtle .m-features-bg,
        .gold-subtle .m-mem-bg,
        .gold-subtle .m-audio-bg,
        .gold-subtle .m-tst-bg,
        .gold-subtle .m-news-bg,
        .gold-subtle .m-foot-orn {
          opacity: 0.55;
        }

        .gold-balanced { /* defaults */ }

        .gold-rich .m-hero-mandala { opacity: 1; }
        .gold-rich .m-hero-mandala svg { opacity: 0.28 !important; }
        .gold-rich .m-features-bg svg,
        .gold-rich .m-mem-bg svg,
        .gold-rich .m-tst-bg svg,
        .gold-rich .m-news-bg svg {
          opacity: 1 !important;
          filter: saturate(1.1);
        }
        .gold-rich .m-feat-orn { opacity: .55; }
      `}</style>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
