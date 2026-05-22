// audio.jsx — Meditation/chant sample player (real Web Audio drones)

const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

const TRACKS = [
  { id: "morning",  title: "บทสวดอรุณรุ่ง",        en: "Morning Chant Sample",      duration: 32, freq: 110, color: "var(--gold)" },
  { id: "scan",     title: "สมาธิสำรวจกาย",         en: "Body Scan Meditation",       duration: 45, freq: 88,  color: "var(--gold-deep)" },
  { id: "mantra",   title: "มนต์ศักดิ์สิทธิ์",       en: "Sacred Mantra · OM",        duration: 28, freq: 138, color: "var(--gold-soft)" },
  { id: "reset",    title: "Reset ก่อนประชุม",       en: "Pre-Meeting Reset",         duration: 30, freq: 165, color: "var(--gold)" },
];

// Tiny WebAudio engine — gentle drone with slow LFO
function useDrone() {
  const ctxRef = useRefA(null);
  const nodesRef = useRefA(null);

  const start = (freq) => {
    if (!ctxRef.current) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      ctxRef.current = new AC();
    }
    const ctx = ctxRef.current;
    if (ctx.state === "suspended") ctx.resume();
    stop(); // stop any prior

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const osc3 = ctx.createOscillator();
    osc1.type = "sine"; osc1.frequency.value = freq;
    osc2.type = "sine"; osc2.frequency.value = freq * 1.5; // perfect fifth
    osc3.type = "triangle"; osc3.frequency.value = freq * 2;

    const gain = ctx.createGain();
    gain.gain.value = 0;
    gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 1.5);

    // slow LFO for breath
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.18;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.05;
    lfo.connect(lfoGain).connect(gain.gain);

    osc1.connect(gain); osc2.connect(gain); osc3.connect(gain);
    gain.connect(ctx.destination);
    osc1.start(); osc2.start(); osc3.start(); lfo.start();

    nodesRef.current = { osc1, osc2, osc3, lfo, gain, ctx };
    return true;
  };

  const stop = () => {
    if (!nodesRef.current) return;
    const { osc1, osc2, osc3, lfo, gain, ctx } = nodesRef.current;
    try {
      gain.gain.cancelScheduledValues(ctx.currentTime);
      gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
      setTimeout(() => {
        try { osc1.stop(); osc2.stop(); osc3.stop(); lfo.stop(); } catch(e){}
      }, 450);
    } catch (e) {}
    nodesRef.current = null;
  };

  useEffectA(() => () => stop(), []);
  return { start, stop };
}

function fmt(s) {
  const m = Math.floor(s / 60), r = Math.floor(s % 60);
  return `${m}:${String(r).padStart(2, "0")}`;
}

function AudioSection() {
  const [active, setActive] = useStateA(null);   // selected track id (persists)
  const [playing, setPlaying] = useStateA(false); // true while audio is sounding
  const [progress, setProgress] = useStateA(0);
  const intervalRef = useRefA(null);
  const drone = useDrone();

  const tickStop = () => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
  };

  const startTick = (track, fromProgress) => {
    tickStop();
    intervalRef.current = setInterval(() => {
      setProgress(p => {
        const next = p + 0.1;
        if (next >= track.duration) {
          // Finished — STAY visible (don't reset). Stop sound, mark "completed".
          tickStop();
          drone.stop();
          setPlaying(false);
          return track.duration;
        }
        return next;
      });
    }, 100);
  };

  const playTrack = (track) => {
    // Same track, currently playing → pause (keep progress + active visible)
    if (active === track.id && playing) {
      drone.stop();
      tickStop();
      setPlaying(false);
      return;
    }
    // Same track, paused/completed → resume (or restart if completed)
    if (active === track.id && !playing) {
      const fresh = progress >= track.duration - 0.1;
      const startFrom = fresh ? 0 : progress;
      setProgress(startFrom);
      drone.start(track.freq);
      setPlaying(true);
      startTick(track, startFrom);
      return;
    }
    // Switch to a different track
    drone.stop();
    tickStop();
    drone.start(track.freq);
    setActive(track.id);
    setProgress(0);
    setPlaying(true);
    startTick(track, 0);
  };

  useEffectA(() => () => { drone.stop(); tickStop(); }, []);

  return (
    <section id="audio" className="pad m-audio">
      <div className="m-audio-bg" aria-hidden="true">
        <div style={{ position: "absolute", left: "-10%", top: "-6%" }}>
          <div className="parallax-layer parallax-slow drift-slow">
            <SacredImage src="assets/buddha-standing.png" size={580} opacity={0.42} />
          </div>
        </div>
        <div style={{ position: "absolute", right: "-6%", bottom: "-8%" }}>
          <div className="parallax-layer parallax-fast drift-fast">
            <SacredImage src="assets/ganesha-sitting.png" size={520} opacity={0.32} />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>ฟังเสียง · ฟรี</span>
          <TripleDivider color="var(--gold-soft)" />
          <h2 style={{ color: "var(--cream)" }}>ลองฟัง<em style={{ color: "var(--gold-soft)" }}>เสียงแห่งความสงบ</em></h2>
          <p className="lede" style={{ color: "rgba(253,252,248,.7)" }}>
            ตัวอย่างสมาธินำทาง ๔ บท จากคลังของสมาชิก —
            กดเล่นเพื่อให้เสียงโบราณ ค่อย ๆ ปรับคลื่นในตัวคุณ
          </p>
        </div>

        <div className="m-audio-grid">
          {TRACKS.map((t, i) => {
            const isActive = active === t.id;
            const isPlaying = isActive && playing;
            const isCompleted = isActive && !playing && progress >= t.duration - 0.1;
            const isPaused = isActive && !playing && progress > 0 && !isCompleted;
            const pct = isActive ? (progress / t.duration) * 100 : 0;
            return (
              <article
                key={t.id}
                className={`m-audio-card reveal ${isActive ? "active" : ""} ${isPlaying ? "playing" : ""} ${isCompleted ? "completed" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  className="m-audio-play"
                  onClick={() => playTrack(t)}
                  aria-label={isPlaying ? `หยุด ${t.title}` : isCompleted ? `เล่นซ้ำ ${t.title}` : isPaused ? `เล่นต่อ ${t.title}` : `เล่น ${t.title}`}
                >
                  {isPlaying ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <rect x="6" y="5" width="4" height="14" />
                      <rect x="14" y="5" width="4" height="14" />
                    </svg>
                  ) : isCompleted ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 12a9 9 0 11-3-6.7" strokeLinecap="round" />
                      <polyline points="21,3 21,9 15,9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <polygon points="7,4 21,12 7,20" />
                    </svg>
                  )}
                </button>

                <div className="m-audio-info">
                  <span className="display m-audio-en">
                    {t.en}
                    {isCompleted && <span className="m-audio-tag">· ฟังจบแล้ว</span>}
                    {isPaused && <span className="m-audio-tag">· หยุดชั่วคราว</span>}
                  </span>
                  <h4 className="m-audio-title">{t.title}</h4>

                  <div className="m-audio-bar">
                    {Array.from({ length: 32 }).map((_, j) => {
                      const filled = isActive && (j / 32) <= (progress / t.duration);
                      return (
                        <span
                          key={j}
                          className={`m-audio-bar-cell ${filled ? "on" : ""}`}
                          style={{
                            height: `${15 + Math.sin(j * 0.7) * 9 + (isPlaying ? Math.sin((j + progress*4) * 0.7) * 6 : 0)}px`,
                            animationDelay: `${j * 30}ms`,
                          }}
                        />
                      );
                    })}
                  </div>

                  <div className="m-audio-time">
                    <span className="mono-num">{fmt(isActive ? progress : 0)}</span>
                    <span className="muted">{fmt(t.duration)}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="m-audio-cta reveal">
          <p>
            <span className="display gold-text">✦</span>
            สมาชิกเข้าถึง ๑๘๐+ บท ในคลังเต็ม
            <span className="display gold-text">✦</span>
          </p>
          <a href="#membership" className="btn btn--gold">สมัครสมาชิก ฟังครบทุกบท</a>
        </div>
      </div>

      <style>{`
        .m-audio {
          background: linear-gradient(180deg, #1a1305 0%, #2C1F06 50%, #1a1305 100%);
          color: var(--cream);
          overflow: hidden;
        }
        .m-audio-bg { position: absolute; inset: 0; pointer-events: none; }
        .m-audio .section-head h2 em { font-style: italic; }
        .m-audio .eyebrow::before, .m-audio .eyebrow::after { background: var(--gold-soft); }
        .m-audio .divider .line { background: linear-gradient(90deg, transparent, var(--gold-soft) 50%, transparent); }

        .m-audio-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          max-width: 880px;
          margin: 0 auto;
        }
        @media (min-width: 720px) { .m-audio-grid { grid-template-columns: 1fr 1fr; gap: 18px; } }

        .m-audio-card {
          background: rgba(232, 211, 138, 0.05);
          border: 1px solid rgba(232, 211, 138, 0.18);
          padding: 22px 24px;
          display: flex;
          gap: 20px;
          align-items: center;
          transition: all .35s var(--ease-zen);
        }
        .m-audio-card:hover {
          background: rgba(232, 211, 138, 0.08);
          border-color: rgba(232, 211, 138, 0.35);
        }
        .m-audio-card.active {
          background: rgba(232, 211, 138, 0.09);
          border-color: rgba(232, 211, 138, 0.45);
        }
        .m-audio-card.playing {
          background: rgba(232, 211, 138, 0.12);
          border-color: var(--gold);
        }
        .m-audio-card.completed {
          background: rgba(232, 211, 138, 0.06);
          border-color: rgba(232, 211, 138, 0.35);
        }
        .m-audio-play {
          width: 56px; height: 56px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--gold);
          color: var(--ink);
          border: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform .3s var(--ease-zen), background .3s var(--ease-zen);
          position: relative;
        }
        .m-audio-play:hover { transform: scale(1.08); }
        .m-audio-card.playing .m-audio-play {
          background: var(--cream);
          animation: pulse 1.6s infinite ease-in-out;
        }
        .m-audio-card.completed .m-audio-play {
          background: var(--gold-soft);
        }
        .m-audio-tag {
          margin-left: 8px;
          font-size: 10px;
          color: rgba(232, 211, 138, 0.7);
          letter-spacing: .1em;
          font-style: italic;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0.5); }
          50%      { box-shadow: 0 0 0 14px rgba(201, 168, 76, 0); }
        }

        .m-audio-info { flex-grow: 1; min-width: 0; }
        .m-audio-en {
          font-size: 11px;
          letter-spacing: .2em;
          color: var(--gold-soft);
          font-style: italic;
          text-transform: uppercase;
        }
        .m-audio-title {
          font-size: 18px;
          font-weight: 500;
          color: var(--cream);
          margin-top: 2px;
          margin-bottom: 12px;
          line-height: 1.25;
        }
        .m-audio-bar {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 28px;
          margin-bottom: 8px;
        }
        .m-audio-bar-cell {
          flex: 1;
          background: rgba(232, 211, 138, 0.25);
          border-radius: 1px;
          transition: background .35s var(--ease-zen);
        }
        .m-audio-card.playing .m-audio-bar-cell { animation: barWave 1.4s infinite ease-in-out alternate; }
        .m-audio-bar-cell.on { background: var(--gold); }
        @keyframes barWave {
          from { transform: scaleY(.6); }
          to   { transform: scaleY(1.1); }
        }
        .m-audio-time {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: rgba(253, 252, 248, 0.6);
          font-family: var(--f-display);
          font-style: italic;
          letter-spacing: .05em;
        }
        .m-audio-time .muted { color: rgba(253, 252, 248, 0.4); }

        .m-audio-cta {
          text-align: center;
          margin-top: 56px;
          color: var(--cream);
        }
        .m-audio-cta p { font-size: 16px; margin-bottom: 20px; color: rgba(253,252,248,.8); }
      `}</style>
    </section>
  );
}

window.AudioSection = AudioSection;
