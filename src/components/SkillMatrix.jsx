import React, { useRef, useEffect, useState } from "react";

// ─── Inline SVG Logos ────────────────────────────────────────────────────────

const LeetCodeLogo = () => (
  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c.893-.943 2.369-.994 3.225-.12l.08.087 1.87 2.012c.015.017.03.033.043.05a1.737 1.737 0 0 0 2.448.111 1.737 1.737 0 0 0 .111-2.448L14.94 5.71l-.07-.076-.006-.007-.033-.035-.003-.004A1.374 1.374 0 0 0 13.483 0z" fill="#FFA116"/>
    <path d="M8.357 11.955H19.73c.76 0 1.376.617 1.376 1.38 0 .76-.617 1.376-1.376 1.376H8.357a1.378 1.378 0 0 1-1.376-1.377c0-.762.616-1.38 1.376-1.38z" fill="#B3B3B3"/>
  </svg>
);

const CodeforcesLogo = () => (
  <svg viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
    <rect x="0"  y="9"  width="5"  height="12" rx="1.5" fill="#1E90FF"/>
    <rect x="9"  y="4"  width="5"  height="17" rx="1.5" fill="#ED2939"/>
    <rect x="18" y="1"  width="5"  height="20" rx="1.5" fill="#1E90FF"/>
  </svg>
);

const NvidiaLogo = () => (
  <svg width="40" height="40" viewBox="35.188 -14.828 351.46 351.46" xmlns="http://www.w3.org/2000/svg">
    <path d="M384.195 282.109c0 3.771-2.769 6.302-6.047 6.302v-.023c-3.371.023-6.089-2.508-6.089-6.278 0-3.769 2.718-6.293 6.089-6.293 3.279-.001 6.047 2.523 6.047 6.292zm2.453 0c0-5.176-4.02-8.18-8.5-8.18-4.511 0-8.531 3.004-8.531 8.18 0 5.172 4.021 8.188 8.531 8.188 4.48 0 8.5-3.016 8.5-8.188m-9.91.692h.91l2.109 3.703h2.315l-2.336-3.859c1.207-.086 2.2-.66 2.2-2.285 0-2.02-1.393-2.668-3.75-2.668h-3.411v8.812h1.961l.002-3.703m0-1.492v-2.121h1.364c.742 0 1.753.06 1.753.965 0 .984-.523 1.156-1.398 1.156h-1.719M329.406 237.027l10.598 28.992H318.48l10.926-28.992zm-11.35-11.289l-24.423 61.88h17.245l3.863-10.935h28.903l3.656 10.935h18.722l-24.605-61.888-23.361.008zm-49.033 61.903h17.497v-61.922l-17.5-.004.003 61.926zm-121.467-61.926l-14.598 49.078-13.984-49.074-18.879-.004 19.972 61.926h25.207l20.133-61.926h-17.851zm70.725 13.484h7.521c10.909 0 17.966 4.898 17.966 17.609 0 12.713-7.057 17.612-17.966 17.612h-7.521v-35.221zm-17.35-13.484v61.926h28.365c15.113 0 20.049-2.512 25.385-8.147 3.769-3.957 6.207-12.642 6.207-22.134 0-8.707-2.063-16.469-5.66-21.305-6.48-8.648-15.816-10.34-29.75-10.34h-24.547zm-165.743-.086v62.012h17.645v-47.086l13.672.004c4.527 0 7.754 1.129 9.934 3.457 2.765 2.945 3.894 7.699 3.894 16.396v27.229h17.098v-34.262c0-24.453-15.586-27.75-30.836-27.75H35.188zm137.583.086l.007 61.926h17.489v-61.926h-17.496z" fill="#77b900"/>
    <path d="M82.211 102.414s22.504-33.203 67.437-36.638V53.73c-49.769 3.997-92.867 46.149-92.867 46.149s24.41 70.564 92.867 77.026v-12.804c-50.237-6.32-67.437-61.687-67.437-61.687zm67.437 36.223v11.727c-37.968-6.77-48.507-46.237-48.507-46.237s18.23-20.195 48.507-23.47v12.867c-.023 0-.039-.007-.058-.007-15.891-1.907-28.305 12.938-28.305 12.938s6.958 24.99 28.363 32.182m0-107.125V53.73c1.461-.112 2.922-.207 4.391-.257 56.582-1.907 93.449 46.406 93.449 46.406s-42.343 51.488-86.457 51.488c-4.043 0-7.828-.375-11.383-1.005v13.739a75.04 75.04 0 0 0 9.481.612c41.051 0 70.738-20.965 99.484-45.778 4.766 3.817 24.278 13.103 28.289 17.167-27.332 22.884-91.031 41.33-127.144 41.33-3.481 0-6.824-.211-10.11-.528v19.306H305.68V31.512H149.648zm0 49.144V65.777c1.446-.101 2.903-.179 4.391-.226 40.688-1.278 67.382 34.965 67.382 34.965s-28.832 40.042-59.746 40.042c-4.449 0-8.438-.715-12.028-1.922V93.523c15.84 1.914 19.028 8.911 28.551 24.786l21.181-17.859s-15.461-20.277-41.524-20.277c-2.834-.001-5.545.198-8.207.483" fill="#77b900"/>
  </svg>
);

const OracleLogo = () => (
  <svg viewBox="0 0 100 40" width="56" height="22" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0h60c11.046 0 20 8.954 20 20s-8.954 20-20 20H20C8.954 40 0 31.046 0 20S8.954 0 20 0zm0 8a12 12 0 1 0 0 24h60a12 12 0 1 0 0-24H20z" fill="#F80000"/>
  </svg>
);

// ─── Radar config ─────────────────────────────────────────────────────────────
const cx = 210, cy = 210, R = 140;
const numRings = 4, numAxes = 6;

const labels = [
  { name: "ALGORITHMS",   angle: -90  },
  { name: "AI / ML",      angle: -30  },
  { name: "SYSTEMS",      angle:  30  },
  { name: "FRONTEND",     angle:  90  },
  { name: "CRYPTOGRAPHY", angle: 150  },
  { name: "BACKEND",      angle: -150 },
];

const skills = [0.88, 0.82, 0.72, 0.68, 0.60, 0.78];
const toRad = (deg) => (deg * Math.PI) / 180;

const polarPoint = (axisIndex, fraction) => {
  const angle = toRad(labels[axisIndex].angle);
  return { x: cx + R * fraction * Math.cos(angle), y: cy + R * fraction * Math.sin(angle) };
};

const ringPolygons = Array.from({ length: numRings }, (_, ri) => {
  const frac = (ri + 1) / numRings;
  return Array.from({ length: numAxes }, (_, ai) => {
    const p = polarPoint(ai, frac); return `${p.x},${p.y}`;
  }).join(" ");
});

const axisLines = labels.map((_, ai) => {
  const outer = polarPoint(ai, 1);
  return { x1: cx, y1: cy, x2: outer.x, y2: outer.y };
});

const skillPoints = skills.map((v, ai) => { const p = polarPoint(ai, v); return `${p.x},${p.y}`; }).join(" ");

const labelPos = (angle) => {
  const dist = R + 30;
  return { x: cx + dist * Math.cos(toRad(angle)), y: cy + dist * Math.sin(toRad(angle)) };
};

const labelAnchor = (angle) => {
  const n = ((angle % 360) + 360) % 360;
  if (n > 340 || n < 20) return "middle";
  if (n >= 20 && n < 160) return "start";
  if (n >= 160 && n < 200) return "middle";
  return "end";
};

const labelDy = (angle) => {
  const n = ((angle % 360) + 360) % 360;
  if (n > 250 && n < 290) return "1em";
  if (n > 70 && n < 110) return "-0.3em";
  return "0.4em";
};

// ─── 3D Radar wrapper ─────────────────────────────────────────────────────────
const RadarChart3D = () => {
  const containerRef = useRef(null);
  const rafRef       = useRef(null);

  // MAX tilt — kept small so labels never go past readable angle
  const MAX_X = 14; // degrees up/down
  const MAX_Y = 16; // degrees left/right
  const REST  = { rotX: 0, rotY: 0 };

  const current = useRef({ rotX: 0, rotY: 0 });
  const target  = useRef({ rotX: 0, rotY: 0 });
  const isHover = useRef(false);

  const [transform, setTransform] = useState("perspective(900px) rotateX(0deg) rotateY(0deg)");

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    // Faster snap-back when idle, slower follow when hovering
    const tick = () => {
      const speed = isHover.current ? 0.08 : 0.04;
      current.current.rotX = lerp(current.current.rotX, target.current.rotX, speed);
      current.current.rotY = lerp(current.current.rotY, target.current.rotY, speed);

      setTransform(
        `perspective(900px) rotateX(${current.current.rotX.toFixed(2)}deg) rotateY(${current.current.rotY.toFixed(2)}deg)`
      );
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    // mx/my: -1 at left/top edge, +1 at right/bottom edge
    const mx = ((e.clientX - rect.left) / rect.width)  * 2 - 1;
    const my = ((e.clientY - rect.top)  / rect.height) * 2 - 1;

    isHover.current = true;
    // rotX: mouse near top → tilt top toward viewer (positive X) and vice versa
    // rotY: mouse near right → tilt right toward viewer
    target.current.rotX = -my * MAX_X;
    target.current.rotY =  mx * MAX_Y;
  };

  const onMouseLeave = () => {
    isHover.current = false;
    // Snap smoothly back to flat
    target.current.rotX = REST.rotX;
    target.current.rotY = REST.rotY;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        cursor: "default",
        perspective: "900px",
        perspectiveOrigin: "50% 50%",
      }}
    >
      {/* The rotating plate */}
      <div
        style={{
          transform,
          transformStyle: "preserve-3d",
          transition: "none", // smoothed via RAF, not CSS
          willChange: "transform",
        }}
      >
        <svg width="420" height="420" viewBox="0 0 420 420">
          <defs>
            <filter id="cyan-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="skill-fill" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#00eaff" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#00eaff" stopOpacity="0.06" />
            </radialGradient>
          </defs>

          {/* Axis lines */}
          {axisLines.map((l, i) => (
            <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          ))}

          {/* Ring polygons */}
          {ringPolygons.map((pts, i) => (
            <polygon key={i} points={pts} fill="none"
              stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
          ))}

          {/* Skill shape */}
          <polygon
            points={skillPoints}
            fill="url(#skill-fill)"
            stroke="#00eaff"
            strokeWidth="2"
            filter="url(#cyan-glow)"
          />

          {/* Vertex dots */}
          {skills.map((v, ai) => {
            const p = polarPoint(ai, v);
            return <circle key={ai} cx={p.x} cy={p.y} r="3.5" fill="#00eaff" filter="url(#cyan-glow)" />;
          })}

          {/* Labels */}
          {labels.map((lbl, ai) => {
            const pos = labelPos(lbl.angle);
            return (
              <text key={ai} x={pos.x} y={pos.y}
                textAnchor={labelAnchor(lbl.angle)} dy={labelDy(lbl.angle)}
                fill="#6a9abf" fontSize="11.5"
                fontFamily="'Courier New', monospace" letterSpacing="0.05em">
                {lbl.name}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const SkillMatrix = () => {
  const achievements = [
    { Logo: LeetCodeLogo,   title: "LeetCode",    subtitle: "Top 1% Algorithm Master"   },
    { Logo: CodeforcesLogo, title: "Codeforces",  subtitle: "Competitive Programming"   },
    { Logo: NvidiaLogo,     title: "NVIDIA",       subtitle: "Deep Learning Certified"   },
    { Logo: OracleLogo,     title: "Oracle Cloud", subtitle: "OCI Foundations Certified" },
  ];

  return (
    <>
      <style>{`
        @keyframes radar-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.65; }
        }
      `}</style>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* ── RADAR PANEL ───────────────────────────────────── */}
          <div style={{
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(6,18,30,0.85)",
            backdropFilter: "blur(12px)",
            padding: 32,
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Grid texture */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none", borderRadius: 16,
              backgroundImage: `
                linear-gradient(rgba(0,234,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,234,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "28px 28px",
            }} />

            {/* Header */}
            <p style={{
              color: "#4a7fa5", fontSize: 11, letterSpacing: "0.2em",
              textAlign: "right", marginBottom: 8,
              fontFamily: "monospace", position: "relative", zIndex: 1,
            }}>
              SKILL MATRIX
            </p>

            {/* 3D Radar */}
            <div style={{
              display: "flex", justifyContent: "center",
              position: "relative", zIndex: 1,
            }}>
              <RadarChart3D />
            </div>
          </div>

          {/* ── ACHIEVEMENTS ──────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map(({ Logo, title, subtitle }, i) => (
              <div key={i} className="
                rounded-xl border border-white/10 bg-white/5 backdrop-blur-md
                p-6 flex flex-col items-center text-center
                transition-all duration-300
                hover:-translate-y-1 hover:scale-[1.03] hover:border-cyan-400/40
              ">
                <div style={{ marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "center", height: 40 }}>
                  <Logo />
                </div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
                <p className="text-secondary text-sm mt-1">{subtitle}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default SkillMatrix;