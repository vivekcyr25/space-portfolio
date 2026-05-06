"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { getAssetPath } from "@/utils/assetPath";

const projects = [
  {
    title: "Student Performance Dashboard",
    desc: "A futuristic student analytics dashboard featuring GPA calculation, subject tracking, and dynamic charts with local persistence.",
    tech: ["Next.js", "Chart.js", "TailwindCSS", "localStorage"],
    image: "/projects/student-portal.png",
  },
  {
    title: "Personal Portfolio System",
    desc: "A cinematic space-themed developer portfolio engineered with immersive UI systems and responsive futuristic architecture.",
    tech: ["React.js", "TailwindCSS", "Framer Motion"],
    image: "/projects/project-high-tech.png",
  },
  {
    title: "AI Productivity Workspace",
    desc: "An intelligent productivity environment integrating AI-assisted workflows, smart utilities, and automation systems.",
    tech: ["Node.js", "Express.js", "Gemini API"],
    image: "/projects/project-2.png",
  },
  {
    title: "Visual Experience Engine",
    desc: "An immersive animated visual atmosphere engine inspired by cinematic space environments and futuristic motion systems.",
    tech: ["JavaScript", "Canvas", "CSS Animation"],
    image: "/projects/project-3.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <div className="content-wrapper">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <h2 className="heading-syne text-purple-500 font-bold uppercase tracking-[0.4em] text-[8px] mb-4">Archive: Deployments</h2>
            <h3 className="heading-syne text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8">Mission <br /><span className="text-gray-500 italic">Logbooks.</span></h3>
            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                A permanent record of <span className="text-white">real software architectures</span> and cinematic digital deployments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="glass-card group flex flex-col h-full bg-black/10"
            >
              <div className="relative h-[350px] overflow-hidden">
                <img
                  src={getAssetPath(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
                />
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-transparent" />
                <div className="absolute inset-0 holographic-overlay opacity-20 group-hover:opacity-5 transition-opacity duration-700" />
                
                <div className="absolute top-6 left-6">
                  <div className="px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[7px] font-bold uppercase tracking-[0.3em] text-purple-400 backdrop-blur-md">
                    Verified Mission
                  </div>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow relative -mt-16 z-10">
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-[0.2em] text-purple-gradient px-3 py-1 bg-white/5 border border-white/5 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h4 className="heading-syne text-3xl font-black mb-4 text-white group-hover:text-purple-400 transition-all uppercase tracking-tighter">{project.title}</h4>
                <p className="text-gray-400 mb-8 text-base leading-relaxed font-bold">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
