"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { getAssetPath } from "@/utils/assetPath";

const MAIN_TITLE = "VIVEK SHARMA";
const ROLES = [
  "AI SYSTEM ARCHITECT",
  "FULL STACK ENGINEER",
  "NEURAL INTERFACE DESIGNER",
  "CINEMATIC SOFTWARE CREATOR",
  "DIGITAL INTELLIGENCE ENGINEER",
];

const MagneticButton = ({
  href,
  children,
  primary = false,
  delay = 0,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  delay?: number;
}) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        setOffset({ x: x * 0.12, y: y * 0.12 });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
      className={primary ? "btn-primary" : "btn-glass"}
    >
      {children}
    </motion.a>
  );
};

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const [sequenceStep, setSequenceStep] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [glitchBurst, setGlitchBurst] = useState(false);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const typedCharacters = useMemo(() => typedText.split(""), [typedText]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setSequenceStep(10);
      setTypedText(MAIN_TITLE);
      setIsTypingDone(true);
      return;
    }

    const timeline = [
      window.setTimeout(() => setSequenceStep(1), 300),
      window.setTimeout(() => setSequenceStep(2), 900),
      window.setTimeout(() => setSequenceStep(3), 1450),
      window.setTimeout(() => setSequenceStep(4), 1950),
      window.setTimeout(() => setSequenceStep(5), 2400),
      window.setTimeout(() => setSequenceStep(6), 3000),
      window.setTimeout(() => setSequenceStep(7), 3500),
      window.setTimeout(() => setSequenceStep(8), 3900),
      window.setTimeout(() => setSequenceStep(9), 4300),
      window.setTimeout(() => setSequenceStep(10), 4800),
    ];

    return () => timeline.forEach((timer) => window.clearTimeout(timer));
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (sequenceStep < 5 || isTypingDone) return;

    let currentIndex = 0;
    let timeoutId: number | undefined;

    const typeNextCharacter = () => {
      currentIndex += 1;
      setTypedText(MAIN_TITLE.slice(0, currentIndex));

      if (Math.random() > 0.7) {
        setGlitchBurst(true);
        window.setTimeout(() => setGlitchBurst(false), 110);
      }

      if (currentIndex < MAIN_TITLE.length) {
        const nextDelay = 45 + Math.random() * 95;
        timeoutId = window.setTimeout(typeNextCharacter, nextDelay);
      } else {
        setIsTypingDone(true);
      }
    };

    timeoutId = window.setTimeout(typeNextCharacter, 220);
    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [sequenceStep, isTypingDone]);

  useEffect(() => {
    if (!isTypingDone) return;
    const intervalId = window.setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => window.clearInterval(intervalId);
  }, [isTypingDone]);

  return (
    <motion.section
      animate={shouldReduceMotion ? undefined : { scale: [1, 1.007, 1] }}
      transition={{ duration: 8.5, ease: "easeInOut", repeat: Infinity }}
      className="relative w-full min-h-[90vh] flex items-center pt-20 overflow-hidden nebula-bg"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: sequenceStep === 0 ? 0.92 : 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute inset-0 z-[5] bg-black pointer-events-none"
      />

      {/* Background Holographic Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full holographic-overlay opacity-10" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: sequenceStep >= 2 ? 0.16 : 0 }}
        transition={{ duration: 1.3 }}
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(124,58,237,0.26),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.18),transparent_40%)]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: sequenceStep >= 4 ? 0.08 : 0, y: [0, 12, 0] }}
        transition={{ opacity: { duration: 1.2 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute inset-0 z-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,0.07)_4px,transparent_6px)]"
      />

      <div className="content-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: sequenceStep >= 3 ? 1 : 0, y: sequenceStep >= 3 ? 0 : 8 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 w-fit backdrop-blur-2xl"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500"></span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.4em] text-white/40 uppercase">
                {sequenceStep < 4 ? "SYSTEM INITIALIZING" : "NEURAL INTERFACE ONLINE"}
              </span>
            </motion.div>

            <div className="flex flex-col gap-1">
              <h1 className="font-space text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter text-white min-h-[1.2em]">
                <span className="text-purple-gradient relative">
                  {typedCharacters.map((char, index) => (
                    <motion.span
                      key={`${char}-${index}`}
                      initial={{ opacity: 0, y: 8, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="inline-block will-change-transform"
                      style={{ textShadow: glitchBurst ? "1px 0 rgba(0,255,255,0.5), -1px 0 rgba(255,0,255,0.45)" : undefined }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                  {!isTypingDone && (
                    <motion.span
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 0.85, repeat: Infinity }}
                      className="inline-block ml-1 text-blue-300"
                    >
                      |
                    </motion.span>
                  )}
                </span>
              </h1>
              <div className="h-8 mt-2 overflow-hidden">
                <AnimatePresence mode="wait">
                  {isTypingDone && (
                    <motion.p
                      key={ROLES[activeRoleIndex]}
                      initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
                      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                      className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-cyan-300/80"
                    >
                      {ROLES[activeRoleIndex]}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              animate={{ opacity: sequenceStep >= 7 ? 1 : 0, y: sequenceStep >= 7 ? 0 : 24, filter: sequenceStep >= 7 ? "blur(0px)" : "blur(10px)" }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-medium"
            >
              Full-Stack Developer and AI Enthusiast engineering <span className="text-white">futuristic digital experiences</span> and intelligent web systems with cinematic precision.
            </motion.p>

            <div className="flex flex-wrap gap-4 mt-4 min-h-[52px]">
              {sequenceStep >= 8 && (
                <>
                  <MagneticButton href="#projects" primary delay={0.06}>
                    Explore Mission Log
                  </MagneticButton>
                  <MagneticButton href="#certificates" delay={0.18}>
                    Achievement Nodes
                  </MagneticButton>
                </>
              )}
            </div>
          </motion.div>

          {/* Right Content: Immersive Orbital Engine */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-[500px] h-[500px] mx-auto flex items-center justify-center animate-float">
              <motion.div
                className="absolute top-10 left-4 glass-card px-4 py-3 border border-cyan-500/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-[8px] text-gray-400 tracking-[0.28em] uppercase font-black">Neural latency</p>
                <p className="text-xs text-cyan-300 font-bold mt-2">12.7 ms</p>
              </motion.div>
              <motion.div
                className="absolute bottom-10 right-4 glass-card px-4 py-3 border border-purple-500/20"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-[8px] text-gray-400 tracking-[0.28em] uppercase font-black">System load</p>
                <p className="text-xs text-purple-300 font-bold mt-2">97.4%</p>
              </motion.div>

              {/* Complex Orbital System */}
              <div className="absolute inset-0 border border-white/5 rounded-full animate-orbit" style={{ "--duration": "80s" } as any} />
              <div className="absolute inset-20 border border-purple-500/5 rounded-full animate-orbit" style={{ "--duration": "50s", animationDirection: "reverse" } as any} />
              <div className="absolute inset-32 border border-blue-500/5 rounded-full animate-orbit" style={{ "--duration": "30s" } as any} />
              
              {/* Central Core Element */}
              <div className="relative w-64 h-64 rounded-full glass-container flex items-center justify-center border-white/5 group overflow-hidden liquid-glass-border">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-500/10 blur-2xl group-hover:opacity-100 transition-opacity" />
                <img 
                  src={getAssetPath("/profile.jpg")} 
                  alt="Vivek Sharma" 
                  className="relative z-10 w-full h-full object-cover rounded-full"
                />
                <div className="text-[8px] uppercase tracking-[0.4em] text-purple-400 font-black absolute bottom-6 z-20">Kernel 2.0</div>
              </div>

              {/* Floating Holographic Nodes */}
              <div className="absolute top-[15%] right-[15%] w-20 h-20 glass-card rounded-2xl flex items-center justify-center border-purple-500/10">
                <span className="text-[8px] font-bold text-purple-400 uppercase tracking-widest">AI Core</span>
              </div>
              <div className="absolute bottom-[15%] left-[15%] w-20 h-20 glass-card rounded-2xl flex items-center justify-center border-blue-500/10">
                <span className="text-[8px] font-bold text-blue-400 uppercase tracking-widest">Nexus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
        <div className="w-[1px] h-8 bg-gradient-to-b from-purple-500 to-transparent animate-pulse" />
        <span className="text-[7px] font-bold uppercase tracking-[0.5em] text-white/20">Initialize Descent</span>
      </div>
    </motion.section>
  );
};

export default Hero;
