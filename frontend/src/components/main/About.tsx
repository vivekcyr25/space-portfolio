"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Rocket, Code2, Layers } from "lucide-react";

const aboutCards = [
  {
    icon: <Cpu className="text-purple-400" />,
    title: "AI Integration",
    desc: "Merging advanced LLMs and neural logic with modern web applications.",
  },
  {
    icon: <Rocket className="text-blue-400" />,
    title: "Scalability",
    desc: "Engineering high-performance systems designed for real-world growth.",
  },
  {
    icon: <Layers className="text-purple-400" />,
    title: "Futuristic UI",
    desc: "Crafting immersive interfaces with cinematic motion and responsive depth.",
  },
  {
    icon: <Code2 className="text-blue-400" />,
    title: "Full Stack Core",
    desc: "Building robust end-to-end architectures with MERN and Next.js mastery.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-container relative">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="heading-syne text-purple-500 font-bold uppercase tracking-[0.4em] text-[8px] mb-4">Identification & Vision</h2>
              <h3 className="heading-syne text-4xl md:text-6xl font-black leading-tight tracking-tighter text-white">
                Engineering the <br />
                <span className="text-gray-500 italic">Tomorrow.</span>
              </h3>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
                I am <span className="text-white">Vivek Sharma</span>, a highly ambitious Full-Stack Developer and AI Enthusiast. I focus on building intelligent systems that balance technical credibility with a futuristic presentation style. My work exists at the intersection of robust engineering and immersive digital aesthetics.
            </p>

            <div className="glass-card liquid-glass p-10 border-l-2 border-purple-600 relative group overflow-hidden">
              <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <p className="text-gray-200 text-xl font-bold heading-syne leading-snug relative z-10">
                &quot;The future belongs to those who build it with intelligence and creative precision.&quot;
              </p>
            </div>
          </motion.div>

          {/* Right: Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {aboutCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-8 flex flex-col gap-5 hover:-translate-y-2 group border-white/[0.01]"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/[0.01] flex items-center justify-center border border-white/5 group-hover:border-purple-500/20 group-hover:shadow-[0_0_20px_rgba(112,66,248,0.1)] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10">{card.icon}</span>
                </div>
                <h4 className="heading-syne text-xl font-bold text-white group-hover:text-purple-400 transition-all uppercase tracking-tight">{card.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-bold">
                  {card.desc}
                </p>
                <div className="absolute inset-0 holographic-overlay opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
