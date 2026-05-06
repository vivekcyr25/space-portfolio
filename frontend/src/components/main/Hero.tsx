"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getAssetPath } from "@/utils/assetPath";

const TITLES = ["VIVEK SHARMA", "ASPIRING SOFTWARE ENTHUSIAST", "AI SYSTEM ARCHITECT"];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [phase, setPhase] = useState<"typing" | "hold" | "swipe">("typing");

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];

    if (phase !== "typing") {
      return;
    }

    if (typedText.length < currentTitle.length) {
      const timeoutId = window.setTimeout(() => {
        setTypedText(currentTitle.slice(0, typedText.length + 1));
      }, 120);
      return () => window.clearTimeout(timeoutId);
    }

    const holdId = window.setTimeout(() => {
      setPhase("hold");
    }, 1400);
    return () => window.clearTimeout(holdId);
  }, [typedText, titleIndex, phase]);

  useEffect(() => {
    if (phase !== "hold") return;
    const swipeId = window.setTimeout(() => {
      setPhase("swipe");
    }, 800);
    return () => window.clearTimeout(swipeId);
  }, [phase]);

  useEffect(() => {
    if (phase !== "swipe") return;

    const nextId = window.setTimeout(() => {
      const nextIndex = (titleIndex + 1) % TITLES.length;
      setTitleIndex(nextIndex);
      setTypedText("");
      setPhase("typing");
    }, 650);

    return () => window.clearTimeout(nextId);
  }, [phase, titleIndex]);

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center pt-24 md:pt-20 overflow-hidden nebula-bg">
      {/* Background Holographic Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full holographic-overlay opacity-10" />

      <div className="content-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-5 md:gap-6 relative z-10"
          >
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 rounded-full border border-white/5 bg-white/5 w-fit backdrop-blur-2xl">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500"></span>
              </span>
              <span className="text-[7px] sm:text-[8px] font-bold tracking-[0.28em] sm:tracking-[0.4em] text-white/40 uppercase">Neural Interface Online</span>
            </div>

            <div className="flex flex-col gap-1">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`${titleIndex}-${phase}`}
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: phase === "swipe" ? 40 : 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className="font-space hero-title-tech text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight text-white min-h-[1.7em] sm:min-h-[1.5em] md:min-h-[1.4em]"
                >
                  <span className="text-purple-gradient">{typedText}</span>
                  {phase === "typing" && (
                    <motion.span
                      animate={{ opacity: [1, 0.15, 1] }}
                      transition={{ duration: 0.9, repeat: Infinity }}
                      className="ml-1 text-purple-300"
                    >
                      |
                    </motion.span>
                  )}
                </motion.h1>
              </AnimatePresence>
            </div>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed font-medium">
              Full-Stack Developer & AI Enthusiast engineering <span className="text-white">futuristic digital experiences</span> and intelligent web systems with cinematic precision.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a href="#projects" className="btn-primary">
                Explore Mission Log
              </a>
              <a href="#certificates" className="btn-glass">
                Achievement Nodes
              </a>
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
              {/* Complex Orbital System */}
              <div className="absolute inset-0 border border-white/5 rounded-full animate-orbit" style={{ "--duration": "80s" } as any} />
              <div className="absolute inset-20 border border-purple-500/5 rounded-full animate-orbit" style={{ "--duration": "50s", animationDirection: "reverse" } as any} />
              <div className="absolute inset-32 border border-blue-500/5 rounded-full animate-orbit" style={{ "--duration": "30s" } as any} />

              {/* Central Core Element */}
              <div className="relative w-64 h-64 rounded-full glass-container flex items-center justify-center border-white/5 group overflow-hidden liquid-glass-border">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-500/10 blur-2xl" />
                <div className="absolute inset-0 liquid-shine pointer-events-none z-20" />
                <img
                  src={getAssetPath("/profile.jpg")}
                  alt="Vivek Sharma"
                  className="relative z-10 w-full h-full object-cover rounded-full"
                />
                <div className="text-[8px] uppercase tracking-[0.4em] text-purple-400 font-black absolute bottom-6 z-30">Kernel 2.0</div>
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
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 z-20">
        <div className="w-[1px] h-8 bg-gradient-to-b from-purple-500 to-transparent animate-pulse" />
        <span className="text-[7px] font-bold uppercase tracking-[0.5em] text-white/20">Initialize Descent</span>
      </div>
    </section>
  );
};

export default Hero;
