"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";
import About from "@/components/main/About";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Certificates from "@/components/main/Certificates";
import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";
import StarsCanvas from "@/components/main/StarsCanvas";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen w-full bg-[#000000] nebula-bg overflow-x-hidden">
      {/* High-Density Interactive Stars Background */}
      <StarsCanvas />

      {/* Cinematic Cosmic Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/5 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/5 blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Stardust Texture Overlay */}
        <div className="absolute inset-0 cosmic-depth" />
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
