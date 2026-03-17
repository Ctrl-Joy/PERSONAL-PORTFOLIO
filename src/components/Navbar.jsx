import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

/* ─────────────────────────────────────────────────────────────────────────────
   GLOBAL STYLES — injected once
───────────────────────────────────────────────────────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    /* ── Navbar bottom border beam ── */
    @keyframes nb-beam {
      0%   { transform: translateX(-100%); opacity: 0; }
      10%  { opacity: 1; }
      90%  { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    /* ── Logo glitch ── */
    @keyframes nb-logo-glitch {
      0%,96%,100% { clip-path: none; transform: none; filter: none; }
      97% { clip-path: inset(30% 0 50% 0); transform: translateX(3px); filter: hue-rotate(90deg); }
      98% { clip-path: inset(60% 0 10% 0); transform: translateX(-3px); filter: hue-rotate(-90deg); }
      99% { clip-path: none; transform: none; filter: none; }
    }
    /* ── Nav link hover underline draw ── */
    .nb-link {
      position: relative;
      font-family: 'Courier New', monospace;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #7a7a9a;
      transition: color 0.25s;
      padding: 4px 0;
    }
    .nb-link::before {
      content: '';
      position: absolute;
      bottom: -2px; left: 0;
      height: 1px;
      width: 0%;
      background: linear-gradient(90deg, transparent, #915EFF, #c084fc, transparent);
      transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
      box-shadow: 0 0 6px #915EFF;
    }
    .nb-link:hover,
    .nb-link.active {
      color: #e2d4ff;
      text-shadow: 0 0 12px #915EFF88;
    }
    .nb-link:hover::before,
    .nb-link.active::before {
      width: 100%;
    }
    /* Active dot above link */
    .nb-link.active::after {
      content: '';
      position: absolute;
      top: -6px; left: 50%;
      transform: translateX(-50%);
      width: 4px; height: 4px;
      border-radius: 50%;
      background: #915EFF;
      box-shadow: 0 0 8px #915EFF, 0 0 16px #915EFF88;
    }

    /* ── Clock animations ── */
    @keyframes cp-flicker {
      0%,88%,90%,92%,100% { opacity: 1; }
      89%  { opacity: 0.2; }
      91%  { opacity: 0.7; }
    }
    @keyframes cp-glow-pulse {
      0%,100% { box-shadow: 0 0 5px #7c3aed66, inset 0 0 6px #7c3aed11; }
      50%     { box-shadow: 0 0 14px #915EFF88, 0 0 28px #915EFF33, inset 0 0 12px #915EFF22; }
    }
    @keyframes cp-colon-blink {
      0%,44%  { opacity: 1; }
      50%,94% { opacity: 0.06; }
      100%    { opacity: 1; }
    }
    @keyframes cp-scan {
      0%   { top: -50%; opacity: 0; }
      8%   { opacity: 1; }
      92%  { opacity: 0.4; }
      100% { top: 150%; opacity: 0; }
    }
    @keyframes cp-live-dot {
      0%,100% { opacity: 1; transform: scale(1); box-shadow: 0 0 6px #915EFF, 0 0 12px #915EFF88; }
      50%     { opacity: 0.1; transform: scale(0.4); box-shadow: none; }
    }
    @keyframes cp-corner {
      0%,100% { opacity: 1; }
      50%     { opacity: 0.3; }
    }
    @keyframes cp-digit-glitch {
      0%,93%,100% { transform: none; clip-path: none; }
      94% { transform: translateX(2px); clip-path: inset(15% 0 65% 0); }
      95% { transform: translateX(-2px); clip-path: inset(65% 0 10% 0); }
      96% { transform: none; clip-path: none; }
    }
    .cp-clock    { animation: cp-flicker 10s infinite, cp-glow-pulse 2.4s ease-in-out infinite; }
    .cp-colon    { animation: cp-colon-blink 1s step-start infinite; display:inline-block; }
    .cp-scanline { animation: cp-scan 4s linear infinite; }
    .cp-dot      { animation: cp-live-dot 1s ease-in-out infinite; }
    .cp-corner   { animation: cp-corner 3s ease-in-out infinite; position:absolute; width:8px; height:8px; }
    .cp-hh       { animation: cp-digit-glitch 13s infinite; }
    .cp-mm       { animation: cp-digit-glitch 17s 0.4s infinite; }
    .cp-ss       { animation: cp-digit-glitch 9s 0.9s infinite; }
    .cp-digit {
      font-family: 'Courier New', monospace;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 0.06em;
      line-height: 1;
      display: inline-block;
      position: relative;
    }
    .cp-digit::before {
      content: attr(data-v);
      position: absolute; inset: 0;
      color: #915EFF;
      filter: blur(4px);
      opacity: 0.5;
      pointer-events: none;
      z-index: -1;
    }

    /* ── Navbar glass panel ── */
    @keyframes nb-border-glow {
      0%,100% { border-color: rgba(145,94,255,0.15); }
      50%     { border-color: rgba(145,94,255,0.35); }
    }

    /* ── Mobile menu ── */
    @keyframes nb-slide-down {
      from { opacity: 0; transform: translateY(-8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .nb-mobile-menu { animation: nb-slide-down 0.2s ease forwards; }

    /* ── Scan line across full navbar ── */
    @keyframes nb-fullscan {
      0%   { transform: translateY(-100%); opacity:0; }
      5%   { opacity: 0.6; }
      95%  { opacity: 0.3; }
      100% { transform: translateY(600%); opacity:0; }
    }
  `}</style>
);

/* ─────────────────────────────────────────────────────────────────────────────
   CLOCK
───────────────────────────────────────────────────────────────────────────── */
const CyberpunkClock = ({ time }) => {
  const hh = String(time.getHours()).padStart(2, "0");
  const mm = String(time.getMinutes()).padStart(2, "0");
  const ss = String(time.getSeconds()).padStart(2, "0");

  const corners = [
    { top: -1, left: -1,  borderTop: "1.5px solid #c084fc", borderLeft: "1.5px solid #c084fc",  animationDelay: "0s"   },
    { top: -1, right: -1, borderTop: "1.5px solid #c084fc", borderRight: "1.5px solid #c084fc",  animationDelay: "0.75s"},
    { bottom: -1, left: -1,  borderBottom: "1.5px solid #c084fc", borderLeft: "1.5px solid #c084fc", animationDelay: "1.5s" },
    { bottom: -1, right: -1, borderBottom: "1.5px solid #c084fc", borderRight: "1.5px solid #c084fc", animationDelay: "2.25s"},
  ];

  return (
    <div className="cp-clock" style={{
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      gap: "2px",
      padding: "5px 13px 5px 11px",
      border: "1px solid #915EFF77",
      borderRadius: "2px",
      background: "linear-gradient(120deg, rgba(145,94,255,0.11) 0%, rgba(60,20,140,0.06) 60%, rgba(145,94,255,0.09) 100%)",
      backdropFilter: "blur(6px)",
      overflow: "hidden",
      userSelect: "none",
    }}>
      {/* Scanline */}
      <div className="cp-scanline" style={{
        position: "absolute", left: 0, right: 0, height: "35%",
        background: "linear-gradient(transparent, rgba(145,94,255,0.12), transparent)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Corners */}
      {corners.map(({ animationDelay, ...rest }, i) => (
        <div key={i} className="cp-corner" style={{ animationDelay, ...rest }} />
      ))}

      {/* Digits */}
      <span className="cp-digit cp-hh" data-v={hh} style={{ color: "#e2d4ff", textShadow: "0 0 8px #915EFF, 0 0 18px #915EFF44", zIndex: 1 }}>{hh}</span>
      <span className="cp-colon" style={{ color: "#915EFF", fontFamily: "monospace", fontSize: 15, fontWeight: 900, zIndex: 1, margin: "0 1px", textShadow: "0 0 8px #915EFF" }}>:</span>
      <span className="cp-digit cp-mm" data-v={mm} style={{ color: "#e2d4ff", textShadow: "0 0 8px #915EFF, 0 0 18px #915EFF44", zIndex: 1 }}>{mm}</span>
      <span className="cp-colon" style={{ color: "#915EFF", fontFamily: "monospace", fontSize: 15, fontWeight: 900, zIndex: 1, margin: "0 1px", animationDelay: "0.5s", textShadow: "0 0 8px #915EFF" }}>:</span>
      <span className="cp-digit cp-ss" data-v={ss} style={{ color: "#a984e0", textShadow: "0 0 6px #915EFF66", zIndex: 1 }}>{ss}</span>

      {/* Divider */}
      <div style={{ width: 1, height: 16, background: "linear-gradient(to bottom, transparent, #915EFF88, transparent)", margin: "0 7px", zIndex: 1 }} />

      {/* LIVE */}
      <div style={{ display: "flex", alignItems: "center", gap: 5, zIndex: 1 }}>
        <div className="cp-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "#915EFF" }} />
        <span style={{ fontFamily: "'Courier New', monospace", fontSize: 8, fontWeight: 700, letterSpacing: "0.26em", color: "#915EFF", textShadow: "0 0 8px #915EFF" }}>LIVE</span>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────────────────────────── */
const Navbar = () => {
  const [active, setActive]     = useState("");
  const [toggle, setToggle]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime]         = useState(new Date());
  const beamRef                 = useRef(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = ""; };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: clear active when user scrolls away from a section
  useEffect(() => {
    const onScroll = () => {
      const offsets = navLinks.map((nav) => {
        const el = document.getElementById(nav.id);
        if (!el) return { id: nav.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: nav.id, title: nav.title, top: Math.abs(rect.top - 80) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      // Only mark as active if within 120px of the section top
      const inSection = offsets.find(o => {
        const el = document.getElementById(o.id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 80;
      });
      setActive(inSection ? inSection.title : "");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyles />

      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        /* Glass panel */
        background: scrolled
          ? "linear-gradient(90deg, rgba(5,2,18,0.96) 0%, rgba(10,4,30,0.94) 50%, rgba(5,2,18,0.96) 100%)"
          : "linear-gradient(90deg, rgba(5,2,18,0.5) 0%, rgba(10,4,30,0.4) 50%, rgba(5,2,18,0.5) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(145,94,255,0.18)" : "1px solid rgba(145,94,255,0.07)",
        transition: "background 0.4s, border-color 0.4s",
        animation: scrolled ? "nb-border-glow 3s ease-in-out infinite" : "none",
      }}>

        {/* Full-navbar scan line (very subtle) */}
        <div style={{
          position: "absolute", left: 0, right: 0, height: "2px",
          background: "linear-gradient(90deg, transparent 0%, #915EFF44 30%, #c084fc55 50%, #915EFF44 70%, transparent 100%)",
          animation: "nb-fullscan 6s linear infinite",
          pointerEvents: "none",
          top: 0,
        }} />

        {/* Bottom glow edge */}
        {scrolled && (
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
            background: "linear-gradient(90deg, transparent 0%, #915EFF66 20%, #c084fc88 50%, #915EFF66 80%, transparent 100%)",
            boxShadow: "0 0 12px #915EFF55",
          }} />
        )}

        <div className={`${styles.paddingX} max-w-7xl mx-auto flex items-center justify-between`}
          style={{ height: 68 }}>

          {/* ── LOGO ─────────────────────────────────────────── */}
          <Link
            to="/"
            onClick={() => { setActive(""); window.scrollTo(0, 0); }}
            style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
          >
            {/* Logo glyph with glitch */}
            <div style={{ animation: "nb-logo-glitch 12s infinite", position: "relative" }}>
              <img src={logo} alt="logo" style={{ width: 36, height: 36, objectFit: "contain" }} />
            </div>

            {/* Name */}
            <span style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "#ffffff",
              lineHeight: 1,
            }}>
              Shreejoy Bikalp
            </span>
          </Link>

          {/* ── DESKTOP NAV ───────────────────────────────────── */}
          <div className="hidden sm:flex items-center gap-10">

            {/* Decorative left bracket */}
            <span style={{ fontFamily: "monospace", color: "#915EFF44", fontSize: 18, fontWeight: 300, userSelect: "none" }}>[</span>

            <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}>
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <button
                    className={`nb-link${active === nav.title ? " active" : ""}`}
                    onClick={() => {
                      setActive(nav.title);
                      scrollTo(nav.id);
                    }}
                    style={{
                      background: "none", border: "none", cursor: "pointer", padding: "4px 0",
                    }}
                  >
                    {nav.title}
                  </button>
                </li>
              ))}
            </ul>

            {/* Decorative right bracket */}
            <span style={{ fontFamily: "monospace", color: "#915EFF44", fontSize: 18, fontWeight: 300, userSelect: "none" }}>]</span>

            {/* Separator */}
            <div style={{ width: 1, height: 28, background: "linear-gradient(to bottom, transparent, #915EFF44, transparent)" }} />

            {/* Clock */}
            <CyberpunkClock time={time} />
          </div>

          {/* ── MOBILE HAMBURGER ──────────────────────────────── */}
          <button
            className="sm:hidden"
            onClick={() => setToggle(!toggle)}
            style={{
              background: "none", border: "1px solid #915EFF44", borderRadius: 3,
              padding: "6px 8px", cursor: "pointer", color: "#915EFF",
            }}
          >
            {/* 3-line icon drawn in CSS */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{
                  width: i === 1 ? 16 : 22,
                  height: 1.5,
                  background: "#915EFF",
                  boxShadow: "0 0 4px #915EFF",
                  transition: "width 0.2s",
                }} />
              ))}
            </div>
          </button>
        </div>

        {/* ── MOBILE DROPDOWN ───────────────────────────────── */}
        {toggle && (
          <div className="nb-mobile-menu sm:hidden" style={{
            position: "absolute", top: "100%", right: 16,
            minWidth: 180,
            background: "linear-gradient(135deg, rgba(10,4,30,0.97) 0%, rgba(5,2,18,0.97) 100%)",
            border: "1px solid #915EFF33",
            borderRadius: 4,
            backdropFilter: "blur(16px)",
            overflow: "hidden",
          }}>
            {/* Top glow edge */}
            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #915EFF88, transparent)" }} />

            <ul style={{ listStyle: "none", margin: 0, padding: "8px 0" }}>
              {navLinks.map((nav, i) => (
                <li key={nav.id}>
                  <button
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                      scrollTo(nav.id);
                    }}
                    style={{
                      width: "100%",
                      background: active === nav.title ? "rgba(145,94,255,0.08)" : "none",
                      border: "none",
                      textAlign: "left",
                      padding: "12px 20px",
                      cursor: "pointer",
                      fontFamily: "'Courier New', monospace",
                      fontSize: 12,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: active === nav.title ? "#e2d4ff" : "#7a7a9a",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = "#e2d4ff"}
                    onMouseLeave={e => e.currentTarget.style.color = active === nav.title ? "#e2d4ff" : "#7a7a9a"}
                  >
                    <span style={{ color: "#915EFF44", fontSize: 10 }}>{String(i + 1).padStart(2, "0")}.</span>
                    {nav.title}
                    {active === nav.title && (
                      <div style={{ marginLeft: "auto", width: 4, height: 4, borderRadius: "50%", background: "#915EFF", boxShadow: "0 0 6px #915EFF" }} />
                    )}
                  </button>
                  {i < navLinks.length - 1 && (
                    <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #915EFF18, transparent)", margin: "0 16px" }} />
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile clock */}
            <div style={{ padding: "10px 16px 12px", borderTop: "1px solid #915EFF18" }}>
              <CyberpunkClock time={time} />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;