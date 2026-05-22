// ─────────────────────────────────────────────────────────────────
// ornaments.jsx — Sacred geometric SVG primitives
// Abstract symbols: mandala, lotus, om (โอม), seed, diamond divider
// ─────────────────────────────────────────────────────────────────

const Mandala = ({ size = 320, stroke = "var(--gold)", opacity = 1, rings = 5, className = "" }) => {
  // Build N concentric petal rings procedurally
  const cx = 50, cy = 50;
  const layers = [];
  for (let r = 0; r < rings; r++) {
    const radius = 6 + r * 7;
    const petals = 8 + r * 4;
    const items = [];
    for (let i = 0; i < petals; i++) {
      const angle = (i / petals) * 360;
      items.push(
        <ellipse
          key={i}
          cx={cx}
          cy={cy - radius}
          rx={radius * 0.18}
          ry={radius * 0.55}
          fill="none"
          stroke={stroke}
          strokeWidth={0.35}
          transform={`rotate(${angle} ${cx} ${cy})`}
        />
      );
    }
    layers.push(<g key={r} opacity={1 - r * 0.06}>{items}</g>);
  }
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ opacity }}
      aria-hidden="true"
    >
      <g>
        {/* outer rings */}
        <circle cx={cx} cy={cy} r="46" fill="none" stroke={stroke} strokeWidth="0.3" strokeDasharray="0.6 1.4" />
        <circle cx={cx} cy={cy} r="42" fill="none" stroke={stroke} strokeWidth="0.25" />
        <circle cx={cx} cy={cy} r="38" fill="none" stroke={stroke} strokeWidth="0.2" strokeDasharray="0.2 1.2" />
        {layers}
        {/* inner seed of life-ish */}
        <g>
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (i / 6) * Math.PI * 2;
            return <circle key={i} cx={cx + Math.cos(a) * 4} cy={cy + Math.sin(a) * 4} r="4" fill="none" stroke={stroke} strokeWidth="0.35" />;
          })}
          <circle cx={cx} cy={cy} r="4" fill="none" stroke={stroke} strokeWidth="0.35" />
          <circle cx={cx} cy={cy} r="1.2" fill={stroke} />
        </g>
      </g>
    </svg>
  );
};

const Lotus = ({ size = 64, stroke = "var(--gold)", fill = "none", opacity = 1, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100" style={{ opacity }} aria-hidden="true">
    {/* Five-petal lotus */}
    <g fill={fill} stroke={stroke} strokeWidth="0.8" strokeLinejoin="round" strokeLinecap="round">
      {/* base waterline */}
      <path d="M14 72 Q50 78 86 72" fill="none" strokeWidth="0.5" />
      {/* center petal */}
      <path d="M50 22 C58 38 58 60 50 72 C42 60 42 38 50 22 Z" />
      {/* inner petals */}
      <path d="M34 32 C40 46 44 60 50 72 C44 64 36 56 30 44 C28 38 30 34 34 32 Z" />
      <path d="M66 32 C60 46 56 60 50 72 C56 64 64 56 70 44 C72 38 70 34 66 32 Z" />
      {/* outer petals */}
      <path d="M20 48 C28 52 38 64 50 72 C42 70 28 66 18 58 C16 54 17 50 20 48 Z" />
      <path d="M80 48 C72 52 62 64 50 72 C58 70 72 66 82 58 C84 54 83 50 80 48 Z" />
      {/* inner core line */}
      <path d="M50 40 L50 66" strokeWidth="0.4" />
    </g>
  </svg>
);

// Stylized Om / Aum mark (geometric, not literal Thai/Devanagari)
const OmMark = ({ size = 48, stroke = "var(--gold)", opacity = 1, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100" style={{ opacity }} aria-hidden="true">
    <g fill="none" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="50" cy="50" r="30" strokeWidth="0.6" strokeDasharray="0.6 1.4" />
      {/* Stylized aum: stacked crescents + dot */}
      <path d="M30 56 Q34 44 46 44 Q56 44 58 52 Q60 60 50 60 Q42 60 42 54" />
      <path d="M58 60 Q66 60 66 54 Q66 46 58 46" />
      <path d="M50 30 Q56 28 60 32" strokeWidth="1.2" />
      <circle cx="62" cy="28" r="2" fill={stroke} />
    </g>
  </svg>
);

// Seed of Life — 7 overlapping circles
const SeedOfLife = ({ size = 200, stroke = "var(--gold)", opacity = 1, className = "" }) => {
  const cx = 50, cy = 50, r = 12;
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 100 100" style={{ opacity }} aria-hidden="true">
      <g fill="none" stroke={stroke} strokeWidth="0.5">
        <circle cx={cx} cy={cy} r={r} />
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i / 6) * Math.PI * 2;
          return <circle key={i} cx={cx + Math.cos(a) * r} cy={cy + Math.sin(a) * r} r={r} />;
        })}
        <circle cx={cx} cy={cy} r={r * 2.2} strokeWidth="0.4" strokeDasharray="0.4 1.2" />
      </g>
    </svg>
  );
};

// Small diamond/lozenge divider mark
const Diamond = ({ size = 14, color = "var(--gold)", className = "", filled = true }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 10 10" aria-hidden="true">
    {filled
      ? <polygon points="5,0.6 9.4,5 5,9.4 0.6,5" fill={color} />
      : <polygon points="5,0.6 9.4,5 5,9.4 0.6,5" fill="none" stroke={color} strokeWidth="0.6" />}
  </svg>
);

// Triple diamond divider for section heads
const TripleDivider = ({ color = "var(--gold)", className = "" }) => (
  <span className={`divider ${className}`} aria-hidden="true">
    <span className="line" />
    <span className="mark"><Diamond filled={false} color={color} /></span>
    <span className="mark"><Diamond filled color={color} size={10} /></span>
    <span className="mark"><Diamond filled={false} color={color} /></span>
    <span className="line" />
  </span>
);

// Sun-like rays decoration (radiating lines)
const SunRays = ({ size = 240, stroke = "var(--gold)", opacity = 1, count = 36, className = "" }) => {
  const cx = 50, cy = 50;
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 100 100" style={{ opacity }} aria-hidden="true">
      <g stroke={stroke} strokeWidth="0.35" strokeLinecap="round">
        {Array.from({ length: count }).map((_, i) => {
          const a = (i / count) * Math.PI * 2;
          const x1 = cx + Math.cos(a) * 20;
          const y1 = cy + Math.sin(a) * 20;
          const x2 = cx + Math.cos(a) * (i % 3 === 0 ? 48 : 42);
          const y2 = cy + Math.sin(a) * (i % 3 === 0 ? 48 : 42);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
      <circle cx={cx} cy={cy} r="18" fill="none" stroke={stroke} strokeWidth="0.5" />
      <circle cx={cx} cy={cy} r="14" fill="none" stroke={stroke} strokeWidth="0.3" strokeDasharray="0.3 1" />
    </svg>
  );
};

// Numbered ornate marker (e.g. ๑, ๒, ๓ inside a gold frame)
const ThaiNumeral = ({ n }) => {
  const map = ["๐","๑","๒","๓","๔","๕","๖","๗","๘","๙"];
  return <span className="display">{String(n).split("").map((c, i) => <span key={i}>{map[Number(c)] ?? c}</span>)}</span>;
};

// Photographic placeholder card — striped sumi-e style with monospace label
const PhotoPlaceholder = ({ label = "ภาพถ่ายเซน", aspect = "3/4", className = "", tone = "warm" }) => {
  const bg = tone === "dark"
    ? "linear-gradient(135deg, #2C1F06 0%, #5C4A2E 100%)"
    : "linear-gradient(135deg, #F1E9D4 0%, #E8D38A 60%, #C9A84C 100%)";
  return (
    <div
      className={`photo-ph ${className}`}
      style={{
        aspectRatio: aspect,
        background: bg,
        position: "relative",
        overflow: "hidden",
      }}
      role="img"
      aria-label={label}
    >
      {/* horizontal "mist" bands */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 9px)",
        mixBlendMode: "overlay",
      }} />
      {/* mandala ghost */}
      <div style={{ position: "absolute", inset: "10% -10% auto auto", opacity: 0.18 }}>
        <Mandala size={260} stroke={tone === "dark" ? "#E8D38A" : "#9C7E2B"} rings={6} />
      </div>
      <div style={{
        position: "absolute", left: 16, bottom: 14,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: 11,
        letterSpacing: ".12em",
        color: tone === "dark" ? "rgba(232,211,138,.8)" : "rgba(44,31,6,.7)",
        textTransform: "uppercase",
      }}>
        ◌ photo · {label}
      </div>
    </div>
  );
};

Object.assign(window, {
  Mandala, Lotus, OmMark, SeedOfLife, Diamond,
  TripleDivider, SunRays, ThaiNumeral, PhotoPlaceholder, SacredImage
});

// ── SacredImage ────────────────────────────────────────────────
// Renders an uploaded line-art PNG as a background watermark
// (gold ink on transparent). No rotation — parallax-friendly only.
function SacredImage({ src, size = 480, opacity = 0.5, flip = false, className = "", style = {} }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={className}
      draggable={false}
      style={{
        width: size,
        height: "auto",
        maxWidth: "none",
        opacity,
        pointerEvents: "none",
        userSelect: "none",
        display: "block",
        transform: flip ? "scaleX(-1)" : undefined,
        ...style,
      }}
    />
  );
}
