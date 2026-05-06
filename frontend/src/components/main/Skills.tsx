"use client";

import React from "react";
import { motion } from "framer-motion";

const skillsData = {
  "Frontend Systems": ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "React.js", "Next.js"],
  "Backend Architecture": ["Node.js", "Express.js", "Prisma", "GraphQL", "PostgreSQL"],
  "Intelligence & Ops": ["Python", "TensorFlow", "Chart.js", "GitHub", "Vite"],
};

const Skills = () => {
  return (
    <section id="skills" className="section-container relative">
      <div className="content-wrapper">
        <div className="text-center mb-24">
          <h2 className="heading-syne text-purple-500 font-bold uppercase tracking-[0.4em] text-[8px] mb-4">Cognitive Matrix</h2>
          <h3 className="heading-syne text-4xl md:text-6xl font-black tracking-tighter text-white">Technical <br /><span className="text-gray-500 italic">Payload.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {Object.entries(skillsData).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="glass-card liquid-glass p-10 group relative border-white/[0.01]"
            >
              {/* Module Header Decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-white/5 overflow-hidden">
                <div className="h-full bg-purple-500 w-1/3 group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>
              
              <h4 className="heading-syne text-2xl font-black mb-10 text-white group-hover:text-purple-gradient transition-all uppercase tracking-tight">
                {category}
              </h4>
              <div className="flex flex-wrap gap-4 relative z-10">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 rounded-2xl bg-white/[0.02] border border-white/5 text-[9px] font-bold uppercase tracking-[0.1em] text-gray-500 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white transition-all cursor-default relative overflow-hidden group/item shadow-sm"
                  >
                    {skill}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-700" />
                  </span>
                ))}
              </div>

              {/* Background Glow */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/5 blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
