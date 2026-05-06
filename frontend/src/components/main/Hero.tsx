"use client";

import React from "react";
import { motion } from "framer-motion";
import { getAssetPath } from "@/utils/assetPath";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-20 overflow-hidden nebula-bg">
      {/* Background Holographic Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full holographic-overlay opacity-10" />

      <div className="content-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 relative z-10"
          >
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 w-fit backdrop-blur-2xl">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500"></span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.4em] text-white/40 uppercase">Neural Interface Online</span>
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="heading-syne text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter text-white">
                VIVEK <span className="text-purple-gradient">SHARMA</span>
              </h1>
            </div>

            <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-medium">
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
    </section>
  );
};

export default Hero;
