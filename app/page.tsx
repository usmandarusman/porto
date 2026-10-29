/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Atom,
  Braces,
  Check,
  Code2,
  Heart,
  Command,
  Cpu,
 
  Layers3,
  Menu,
  Mail,
  MessageCircle,
  Send,
  MoveUpRight,
  Radio,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    number: "01",
    name: "Mann's Intelligence",
    category: "TRADING INTELLIGENCE",
    description:
      "A trading-focused platform built around market signals, technical analysis, and configurable strategy workflows.",
    tags: ["Next.js", "TypeScript", "Trading Systems"],
    accent: "cyan",
    icon: Radio,
    status: "LIVE PROJECT",
    href: "https://manns-intelligences.vercel.app/",
  },
  {
    number: "02",
    name: "IncomeOn",
    category: "BUSINESS MANAGEMENT",
    description:
      "A clean business dashboard concept for managing store partners, inventory levels, and day-to-day stock movements.",
    tags: ["Next.js", "Firebase", "PWA"],
    accent: "violet",
    icon: Layers3,
    status: "LIVE PROJECT",
    href: "https://manns-incomeon.vercel.app/",
  },
  {
    number: "03",
    name: "MannTech",
    category: "DIGITAL WEDDING INVITATIONS",
    description:
      "A digital wedding invitation platform that helps couples share their special day through an elegant, modern online experience.",
    tags: ["Digital Invitations", "Wedding Websites", "Web Development"],
    accent: "blue",
    icon: Heart,
    status: "LIVE PROJECT",
    href: "https://manntech-delta.vercel.app/",
  },
];

function NextJsLogo({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 40 40" aria-hidden="true" className={className} fill="currentColor"><circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M12 28V12h2.8l10.4 12.4V12H28v16h-2.8L14.8 15.6V28z" /></svg>;
}
function TailwindLogo({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 40 40" aria-hidden="true" className={className} fill="currentColor"><path d="M20 12c-5.3 0-8.6 2.7-10 8 2-2.7 4.3-3.7 7-3 1.5.4 2.6 1.5 3.8 2.7C22.7 21.7 24.8 24 29 24c5.3 0 8.6-2.7 10-8-2 2.7-4.3 3.7-7 3-1.5-.4-2.6-1.5-3.8-2.7C26.3 14.3 24.2 12 20 12ZM10 24c-5.3 0-8.6 2.7-10 8 2-2.7 4.3-3.7 7-3 1.5.4 2.6 1.5 3.8 2.7C12.7 33.7 14.8 36 19 36c5.3 0 8.6-2.7 10-8-2 2.7-4.3 3.7-7 3-1.5-.4-2.6-1.5-3.8-2.7C16.3 26.3 14.2 24 10 24Z" transform="translate(5 -4) scale(.85)"/></svg>;
}
function TypeScriptLogo({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 40 40" aria-hidden="true" className={className}><rect x="3" y="3" width="34" height="34" rx="4" fill="#3178C6"/><path d="M9 17h14v4h-5v12h-4V21H9zm15.5 11.5c1.2 1 2.4 1.5 3.7 1.5 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.3-2.5-2.1-2.7-1.2-4.2-2.5-4.2-5 0-2.8 2.2-4.7 5.5-4.7 1.8 0 3.4.4 4.7 1.4l-1.8 3.1c-.9-.7-1.8-1-2.8-1-1 0-1.6.4-1.6 1.1 0 .8.7 1.2 2.5 2 2.8 1.2 4.2 2.6 4.2 5.1 0 3-2.3 4.9-5.8 4.9-2.3 0-4.3-.7-5.8-2z" fill="white" transform="translate(-1 -1) scale(.9)"/></svg>;
}
function FirebaseLogo({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 40 40" aria-hidden="true" className={className}><path fill="#FFCA28" d="M8 30 12 6c.2-1.4 2-1.7 2.7-.5l4.1 7.7z"/><path fill="#FFA000" d="m8 30 11-16 5 9z"/><path fill="#F57C00" d="m8 30 20-24c.8-1 2.4-.5 2.6.8L34 30 21 37z"/><path fill="#FFCA28" d="m8 30 15-7 11 7-13 7z"/></svg>;
}
const skills = [
  { name: "Next.js", type: "FRAMEWORK", icon: NextJsLogo, color: "text-white" },
  { name: "React", type: "FRONTEND", icon: Atom, color: "text-cyan-300" },
  { name: "TypeScript", type: "LANGUAGE", icon: TypeScriptLogo, color: "text-blue-300" },
  { name: "Tailwind CSS", type: "STYLING", icon: TailwindLogo, color: "text-cyan-300" },
  { name: "Firebase", type: "BACKEND", icon: FirebaseLogo, color: "text-amber-300" },
  { name: "REST APIs", type: "INTEGRATION", icon: Braces, color: "text-violet-300" },
];

// Ganti tiga nilai di bawah dengan kontak asli sebelum deploy.
const contactLinks = {
  whatsapp: "https://wa.me/62XXXXXXXXXX",
  telegram: "https://t.me/username",
  email: "mailto:email@example.com",
};

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};


/**
 * Interactive cursor effect:
 * - Neon particles follow the pointer.
 * - Clicking creates a small burst of futuristic code.
 * - Disabled for touch-only devices and reduced-motion preferences.
 */
function InteractiveCodeField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchOnly = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (reducedMotion || touchOnly) return;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      text?: string;
      color: string;
    };

    const particles: Particle[] = [];
    const snippets = ["{ }", "=>", "</>", "0x01", "const", "0101", "build()", "[01]", "++", "&&"];
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastMove = 0;
    let lastX = 0;
    let lastY = 0;
    let animationId = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const addParticle = (x: number, y: number, burst = false) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = burst ? 0.7 + Math.random() * 3.2 : 0.15 + Math.random() * 0.9;
      const life = burst ? 38 + Math.random() * 34 : 18 + Math.random() * 20;
      const showText = burst && Math.random() > 0.38;

      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (burst ? 0.25 : 0.1),
        life,
        maxLife: life,
        size: showText ? 10 + Math.random() * 3 : 1 + Math.random() * 2.2,
        text: showText ? snippets[Math.floor(Math.random() * snippets.length)] : undefined,
        color: Math.random() > 0.25 ? "#67e8f9" : "#a78bfa",
      });

      if (particles.length > 180) particles.splice(0, particles.length - 180);
    };

    const onPointerMove = (event: PointerEvent) => {
      const now = performance.now();
      if (now - lastMove < 12) return;
      lastMove = now;

      const x = event.clientX;
      const y = event.clientY;
      const distance = Math.hypot(x - lastX, y - lastY);
      const count = Math.min(3, Math.max(1, Math.floor(distance / 18)));
      for (let i = 0; i < count; i++) {
        addParticle(
          lastX + (x - lastX) * ((i + 1) / count),
          lastY + (y - lastY) * ((i + 1) / count),
        );
      }
      lastX = x;
      lastY = y;
    };

    const onPointerDown = (event: PointerEvent) => {
      for (let i = 0; i < 24; i++) {
        addParticle(event.clientX, event.clientY, true);
      }
    };

    const animate = () => {
      frame++;
      context.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.985;
        particle.vy *= 0.985;
        particle.life -= 1;

        if (particle.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const opacity = Math.max(0, particle.life / particle.maxLife);
        context.globalAlpha = opacity * 0.9;
        context.shadowBlur = particle.text ? 12 : 9;
        context.shadowColor = particle.color;
        context.fillStyle = particle.color;

        if (particle.text) {
          context.font = `500 ${particle.size}px ui-monospace, SFMono-Regular, Menlo, monospace`;
          context.fillText(particle.text, particle.x, particle.y);
        } else {
          context.beginPath();
          context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          context.fill();
        }
      }

      context.globalAlpha = 1;
      context.shadowBlur = 0;
      animationId = window.requestAnimationFrame(animate);
    };

    resize();
    animationId = window.requestAnimationFrame(animate);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60]"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [talkOpen, setTalkOpen] = useState(false);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!talkOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setTalkOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [talkOpen]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07080c] text-white selection:bg-cyan-300 selection:text-black">
      <InteractiveCodeField />
      {/* BACKGROUND ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-64 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-500/[0.09] blur-[150px]" />
        <div className="absolute top-[850px] -left-64 h-[500px] w-[500px] rounded-full bg-violet-600/[0.07] blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      {/* NAVIGATION */}
      <header className="relative z-50 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <nav className="flex h-[82px] items-center justify-between border-b border-white/[0.08]">
          <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] transition group-hover:border-cyan-300/50">
              <Command size={19} className="text-cyan-300" />
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.16em]">
                MANN<span className="text-cyan-300">{"'S"} OFFICIAL</span>
              </p>
              <p className="mt-0.5 text-[9px] tracking-[0.23em] text-white/35">
                INDEPENDENT DIGITAL BUILDER
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {[
              ["Home", "#home"],
              ["Projects", "#projects"],
              ["About", "#about"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[12px] text-white/55 transition hover:text-cyan-300"
              >
                {label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setTalkOpen(true)}
            className="hidden items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.06] sm:flex"
          >
            {"Let's Talk"} <ArrowUpRight size={14} />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="rounded-lg border border-white/10 p-2 text-white/80 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="absolute left-4 right-4 top-[72px] z-50 rounded-2xl border border-white/10 bg-[#101219]/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden">
            {[
              ["Home", "#home"],
              ["Projects", "#projects"],
              ["About", "#about"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/[0.05] hover:text-cyan-300"
              >
                {label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => { setMenuOpen(false); setTalkOpen(true); }}
              className="mt-2 flex w-full items-center justify-between rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-3 text-sm text-cyan-200 transition hover:bg-cyan-300/[0.12]"
            >
              {"Let's"} Talk <ArrowUpRight size={16} />
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[690px] max-w-[1440px] flex-col justify-center px-5 pb-24 pt-20 sm:px-8 lg:min-h-[790px] lg:px-14 lg:pb-28"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="relative z-10"
          >
            <motion.div variants={reveal} className="mb-9 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[10px] tracking-[0.15em] text-white/60">
                BUILDING WHAT COMES NEXT
              </span>
            </motion.div>

            <motion.p
              variants={reveal}
              className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300"
            >
              INDEPENDENT DEVELOPER · PRODUCT BUILDER
            </motion.p>

            <motion.h1
              variants={reveal}
              className="max-w-3xl text-[clamp(3.5rem,8vw,7.2rem)] font-semibold leading-[0.95] tracking-[-0.075em]"
            >
              Ideas into
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                reality.
              </span>
              <span className="ml-2 inline-block text-cyan-300">_</span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-8 max-w-lg text-sm leading-7 text-white/50 sm:text-base sm:leading-8"
            >
              I build digital products, trading tools, and practical business systems.
              Every project is an opportunity to turn a useful idea into a real
              experience.
            </motion.p>

            <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-cyan-300 px-6 py-3.5 text-xs font-bold text-[#071014] transition hover:bg-cyan-200"
              >
                Explore my work
                <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-xs font-medium text-white/75 transition hover:border-white/35 hover:bg-white/[0.04]"
              >
                Discover my story <ArrowDownRight size={15} />
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/[0.08] pt-7"
            >
              <div className="flex items-center gap-2 text-[10px] tracking-[0.12em] text-white/45">
                <Code2 size={15} className="text-cyan-300" />
                PRODUCT DEVELOPMENT
              </div>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.12em] text-white/45">
                <Cpu size={15} className="text-violet-300" />
                SYSTEM THINKING
              </div>
            </motion.div>
          </motion.div>

          {/* ABSTRACT TECH VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto w-full max-w-[470px]"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-[8%] rounded-full border border-cyan-300/10" />
              <div className="absolute inset-[16%] rounded-full border border-dashed border-white/[0.12]" />
              <div className="absolute inset-[25%] rounded-full border border-violet-300/20" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[10%] rounded-full border border-transparent border-t-cyan-300/60 border-r-violet-400/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[21%] rounded-full border border-transparent border-b-cyan-200/40 border-l-violet-300/50"
              />

              <div className="absolute left-1/2 top-1/2 flex h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[34%] border border-white/15 bg-gradient-to-br from-cyan-300/[0.12] via-[#111522] to-violet-500/[0.15] shadow-[0_0_100px_rgba(34,211,238,0.12)] backdrop-blur-xl">
                <div className="absolute inset-2 rounded-[30%] border border-white/[0.06]" />
                <div className="relative flex flex-col items-center">
                  <Braces size={62} strokeWidth={1} className="text-cyan-200 sm:h-[76px] sm:w-[76px]" />
                  <span className="mt-3 text-[9px] tracking-[0.3em] text-white/45">
                    CREATE / BUILD
                  </span>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[3%] top-[20%] rounded-2xl border border-white/10 bg-[#10131c]/90 p-3.5 shadow-2xl backdrop-blur-xl"
              >
                <Terminal size={19} className="text-cyan-300" />
                <p className="mt-2 text-[9px] text-white/40">STATUS</p>
                <p className="mt-0.5 text-xs font-medium">Compiling ideas</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[17%] left-0 rounded-2xl border border-white/10 bg-[#10131c]/90 p-4 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={15} className="text-violet-300" />
                  <span className="text-[10px] text-white/65">Creative mode</span>
                </div>
                <div className="mt-3 flex gap-1">
                  <span className="h-1 w-9 rounded-full bg-cyan-300" />
                  <span className="h-1 w-5 rounded-full bg-violet-400" />
                  <span className="h-1 w-3 rounded-full bg-white/15" />
                </div>
              </motion.div>

              <div className="absolute left-[18%] top-[12%] h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_18px_#67e8f9]" />
              <div className="absolute bottom-[23%] right-[10%] h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_15px_#a78bfa]" />
              <div className="absolute right-[19%] top-[55%] h-1 w-1 rounded-full bg-white/80" />
            </div>

            <div className="mt-2 flex items-center justify-center gap-3 text-[9px] tracking-[0.24em] text-white/30">
              <span className="h-px w-8 bg-white/15" />
              DIGITAL MINDSHIFT
              <span className="h-px w-8 bg-white/15" />
            </div>
          </motion.div>
        </div>

        <a
          href="#projects"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] tracking-[0.22em] text-white/30 transition hover:text-cyan-300 md:flex"
        >
          SCROLL TO EXPLORE <ArrowDownRight size={13} />
        </a>
      </section>

      {/* MARQUEE */}
      <div className="relative overflow-hidden border-y border-white/[0.07] bg-white/[0.015] py-5">
        <div className="flex min-w-max animate-[marquee_28s_linear_infinite] items-center gap-9">
          {[0, 1].map((group) => (
            <div key={group} className="flex items-center gap-9">
              {["DESIGN WITH INTENT", "BUILD WITH PURPOSE", "THINK IN SYSTEMS", "STAY CURIOUS"].map((item) => (
                <span key={`${group}-${item}`} className="flex items-center gap-9 text-[10px] tracking-[0.22em] text-white/35">
                  {item}
                  <span className="text-cyan-300">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projects" className="relative mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-14 lg:py-36">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-4 text-[10px] tracking-[0.25em] text-cyan-300">
              01 / SELECTED WORK
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
              {"Things I've"} <span className="text-white/35">built.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/45">
              Three live projects built around technology, trading intelligence, and
              practical business workflows.
            </p>
          </div>
          <span className="text-[10px] tracking-[0.15em] text-white/30">
            SELECTED PROJECTS — 2026
          </span>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            const cyan = project.accent === "cyan";
            const violet = project.accent === "violet";

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#0d0f16] transition duration-500 hover:-translate-y-1"
              >
                <div
                  className={`pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full blur-[100px] transition duration-700 group-hover:opacity-100 ${
                    cyan ? "bg-cyan-400/[0.10]" : violet ? "bg-violet-500/[0.12]" : "bg-blue-500/[0.10]"
                  }`}
                />

                <div className="relative flex flex-1 flex-col p-6 sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] text-white/30">
                      PROJECT / {project.number}
                    </span>
                    <span className="flex items-center gap-2 text-[9px] tracking-[0.12em] text-white/35">
                      <span className={`h-1.5 w-1.5 rounded-full ${cyan ? "bg-cyan-300" : violet ? "bg-violet-300" : "bg-blue-300"}`} />
                      {project.status}
                    </span>
                  </div>

                  <div className="my-10 flex min-h-[150px] items-center justify-center">
                    <div className={`relative flex h-32 w-32 items-center justify-center rounded-[30px] border bg-gradient-to-br transition duration-500 group-hover:scale-105 group-hover:rotate-3 ${
                      cyan
                        ? "border-cyan-300/20 from-cyan-300/[0.12] to-transparent shadow-[0_0_70px_rgba(34,211,238,0.05)]"
                        : violet
                          ? "border-violet-300/20 from-violet-400/[0.13] to-transparent shadow-[0_0_70px_rgba(167,139,250,0.05)]"
                          : "border-blue-300/20 from-blue-400/[0.13] to-transparent"
                    }`}>
                      <ProjectIcon size={52} strokeWidth={1} className={cyan ? "text-cyan-200" : violet ? "text-violet-200" : "text-blue-200"} />
                      <span className="absolute -right-2 -top-2 h-3 w-3 rounded-full border-2 border-[#0d0f16] bg-cyan-300" />
                    </div>
                  </div>

                  <p className={`mb-3 text-[9px] tracking-[0.22em] ${cyan ? "text-cyan-300" : violet ? "text-violet-300" : "text-blue-300"}`}>
                    {project.category}
                  </p>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      {project.name}
                    </h3>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.name} live website in a new tab`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition group-hover:border-cyan-300/40 group-hover:bg-cyan-300 group-hover:text-black"
                    >
                      <MoveUpRight size={17} />
                    </a>
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/45">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[10px] text-white/55">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-5 text-xs leading-6 text-white/30">
          Open any project to explore the live version. Features and details can evolve as each product grows.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-14 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <p className="mb-5 text-[10px] tracking-[0.25em] text-cyan-300">
              02 / ABOUT ME
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl">
              Not just writing code.
              <br />
              <span className="text-white/35">Building possibilities.</span>
            </h2>
            <div className="mt-8 h-px w-20 bg-gradient-to-r from-cyan-300 to-violet-400" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="space-y-6"
          >
            <p className="text-base leading-8 text-white/65">
              I&apos;m an independent builder who enjoys turning ideas into real,
              usable products. My work spans web development, trading tools,
              business dashboards, and interfaces designed around practical needs.
            </p>
            <p className="text-sm leading-8 text-white/40">
              My approach is simple: understand the problem, design with
              intention, build with care, and keep improving. Good technology
              should feel clear, useful, and thoughtfully made.
            </p>

            <div className="grid gap-3 pt-5 sm:grid-cols-2">
              {[
                "Curiosity-driven learning",
                "Clean & maintainable code",
                "Practical problem solving",
                "Continuous improvement",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-300/[0.09]">
                    <Check size={14} className="text-cyan-300" />
                  </div>
                  <span className="text-xs text-white/65">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
        >
          <p className="mb-4 text-[10px] tracking-[0.25em] text-cyan-300">
            03 / TECH STACK
          </p>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
              Tools of the <span className="text-white/35">tech.</span>
            </h2>
            <p className="max-w-sm text-sm leading-7 text-white/40">
              Technologies I use or explore to bring digital ideas to life.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill, index) => {
            const SkillIcon = skill.icon;
            return <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:border-cyan-300/25 hover:bg-cyan-300/[0.035] sm:p-6"
            >
              <div className="mb-8 flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition group-hover:border-cyan-300/30">
                <SkillIcon className={`h-[19px] w-[19px] ${skill.color} transition group-hover:scale-110`} />
              </div>
              <p className="text-sm font-medium">{skill.name}</p>
              <p className="mt-2 text-[9px] tracking-[0.15em] text-white/30">{skill.type}</p>
            </motion.div>;
          })}
        </div>
        <p className="mt-4 text-xs text-white/30">
          Adjust this list to match your actual experience and proficiency.
        </p>
      </section>

      {/* {"LET'S"} TALK CTA */}
      <section className="relative mx-auto max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[30px] border border-cyan-300/15 bg-gradient-to-br from-[#101b25] via-[#0d1018] to-[#151020] p-7 sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute -right-24 -top-36 h-96 w-96 rounded-full bg-cyan-400/[0.10] blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-violet-500/[0.10] blur-[100px]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-6 flex items-center gap-2 text-[10px] tracking-[0.25em] text-cyan-300">
                <Zap size={14} /> 04 / OPEN CHANNEL
              </p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-[-0.06em] sm:text-6xl">
                Have an idea?<br /><span className="text-white/40">{"Let's"} talk about it.</span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/45">
                Got a project, collaboration, or just want to connect? Choose the channel that works best for you.
              </p>
            </div>
            <button type="button" onClick={() => setTalkOpen(true)} className="group inline-flex w-fit items-center gap-3 rounded-full bg-cyan-300 px-6 py-4 text-xs font-bold text-[#071014] transition hover:bg-cyan-200 hover:shadow-[0_0_35px_rgba(103,232,249,0.18)]">
              <MessageCircle size={16} /> {"Let's"} Talk
              <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {talkOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-8 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onMouseDown={(event) => { if (event.target === event.currentTarget) setTalkOpen(false); }}
            role="presentation"
          >
            <motion.div
              role="dialog" aria-modal="true" aria-labelledby="talk-modal-title"
              initial={{ opacity: 0, y: 28, scale: 0.94, rotateX: 5 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 23 }}
              className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-cyan-300/20 bg-[#0b1018] p-6 shadow-[0_0_100px_rgba(34,211,238,0.12)] sm:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-violet-500/10 blur-[80px]" />
              <div className="relative">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-3 flex items-center gap-2 text-[9px] tracking-[0.25em] text-cyan-300"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" /> CONNECTION PORTAL</p>
                    <h2 id="talk-modal-title" className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">{"Let's"} talk<span className="text-cyan-300">.</span></h2>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">Pick your preferred channel. {"I'll"} be glad to hear from you.</p>
                  </div>
                  <button type="button" onClick={() => setTalkOpen(false)} aria-label="Close contact modal" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:rotate-90 hover:border-white/25 hover:text-white"><X size={18} /></button>
                </div>
                <div className="grid gap-3">
                  <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.04] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-300/[0.08]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300"><MessageCircle size={23} /></span>
                    <span className="min-w-0 flex-1"><span className="block text-sm font-medium">WhatsApp</span><span className="mt-1 block text-xs text-white/40">Direct message</span></span><ArrowUpRight size={17} className="text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300" />
                  </a>
                  <a href={contactLinks.telegram} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-sky-300/15 bg-sky-300/[0.04] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-sky-300/[0.08]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-300/10 text-sky-300"><Send size={22} /></span>
                    <span className="min-w-0 flex-1"><span className="block text-sm font-medium">Telegram</span><span className="mt-1 block text-xs text-white/40">{"Let's"} connect there</span></span><ArrowUpRight size={17} className="text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300" />
                  </a>
                  <a href={contactLinks.email} className="group flex items-center gap-4 rounded-2xl border border-violet-300/15 bg-violet-300/[0.04] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-violet-300/40 hover:bg-violet-300/[0.08]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-300/10 text-violet-300"><Mail size={22} /></span>
                    <span className="min-w-0 flex-1"><span className="block text-sm font-medium">Gmail / Email</span><span className="mt-1 block text-xs text-white/40">Send me an email</span></span><ArrowUpRight size={17} className="text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
                  </a>
                </div>
                <p className="mt-6 text-center text-[10px] tracking-wide text-white/25">{"MANN'S"} OFFICIAL · OPEN TO GOOD IDEAS</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="relative border-t border-white/[0.08] bg-[#07080c]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

        <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-14">
          {/* BRAND */}
          <a
            href="#home"
            aria-label="Back to home"
            className="group flex w-fit items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] transition duration-300 group-hover:border-cyan-300/50 group-hover:bg-cyan-300/10">
              <Command
                size={19}
                strokeWidth={1.6}
                className="text-cyan-300 transition group-hover:scale-110"
              />
            </div>

            <div>
              <p className="text-sm font-bold tracking-[0.16em] text-white">
                MANN<span className="text-cyan-300">{"'S"} OFFICIAL</span>
                <span className="text-cyan-300">.</span>
              </p>
              <p className="mt-1 text-[9px] tracking-[0.2em] text-white/30">
                INDEPENDENT DIGITAL BUILDER
              </p>
            </div>
          </a>

          {/* COPYRIGHT */}
          <div className="order-3 flex flex-col gap-2 md:order-2 md:items-center">
            <p className="text-[10px] tracking-wide text-white/35">
              © {year ?? 2026} {"MANN'S"} OFFICIAL. All rights reserved.
            </p>

            <p className="flex items-center gap-1.5 text-[10px] text-white/25">
              Crafted with
              <span className="text-cyan-300">♥</span>
              and curiosity.
            </p>
          </div>

          {/* LIVE PROJECT LINKS */}
          <div className="order-2 flex items-center gap-2 md:order-3">
            <a
              href="https://manntech-delta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open MannTech"
              title="MannTech"
              className="group flex h-10 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.02] px-3 text-[10px] font-semibold text-white/55 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.07] hover:text-cyan-300"
            >MT</a>
            <a
              href="https://manns-intelligences.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Mann's Intelligence"
              title="Mann's Intelligence"
              className="group flex h-10 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.02] px-3 text-[10px] font-semibold text-white/55 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.07] hover:text-cyan-300"
            >MI</a>
            <a
              href="https://manns-incomeon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open IncomeOn"
              title="IncomeOn"
              className="group flex h-10 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.02] px-3 text-[10px] font-semibold text-white/55 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.07] hover:text-cyan-300"
            >IO</a>
          </div>
        </div>

        {/* BOTTOM ACCENT */}
        <div className="mx-auto flex max-w-[1440px] items-center justify-between border-t border-white/[0.05] px-5 py-3 sm:px-8 lg:px-14">
          <span className="text-[9px] tracking-[0.16em] text-white/20">
            DESIGNED FOR THE FUTURE
          </span>

          <a
            href="#home"
            className="group flex items-center gap-2 text-[9px] tracking-[0.14em] text-white/30 transition hover:text-cyan-300"
          >
            BACK TO TOP
            <ArrowUpRight
              size={12}
              className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </footer>


      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 24px;
        }

        body {
          background: #07080c;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
