"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { getAssetPath } from "@/utils/assetPath";

const certificates = [
  {
    title: "Walmart Global Tech",
    provider: "Advanced Software Engineering Job Simulation",
    image: "/certificates/cert-walmart-forage.jpg",
    focus: "Data structures & architecture systems",
    badge: "Architect",
  },
  {
    title: "TATA Forage",
    provider: "Data Visualisation: Empowering Business Insights",
    image: "/certificates/cert-tata-forage.jpg",
    focus: "Business analytics & data visualization",
    badge: "Data Intelligence",
  },
  {
    title: "Infosys Springboard",
    provider: "Learning Full Stack React",
    image: "/certificates/cert-infosys-react.jpg",
    focus: "Advanced React ecosystem & scalability",
    badge: "Frontend Systems",
  },
  {
    title: "Infosys Springboard",
    provider: "Mastering DevOps",
    image: "/certificates/cert-infosys-devops.jpg",
    focus: "Deployment pipelines & scalable practices",
    badge: "Infrastructure Ops",
  },
  {
    title: "India AI Mission",
    provider: "India-AI Impact Summit Explorer Quiz",
    image: "/certificates/cert-india-ai.jpg",
    focus: "National AI innovation initiative",
    badge: "AI Explorer",
  },
  {
    title: "HP LIFE",
    provider: "Professional Networking for Career Growth",
    image: "/certificates/cert-hp-life.jpg",
    focus: "Professional communication & networking",
    badge: "Professional Systems",
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<null | typeof certificates[0]>(null);

  return (
    <section id="certificates" className="section-container relative z-10 bg-white/[0.002]">
      <div className="content-wrapper">
        <div className="text-center mb-24">
          <h2 className="heading-syne text-purple-500 font-bold uppercase tracking-[0.4em] text-[8px] mb-4">Cognitive Validation</h2>
          <h3 className="heading-syne text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white">
            Achievement <br /><span className="text-gray-500 italic">Nodes.</span>
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
            A secured archive of real-world technical milestones and professional engineering expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title + idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-card flex flex-col group border-white/[0.02] hover:border-purple-500/20 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden border-b border-white/5">
                <img 
                  src={getAssetPath(cert.image)} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[7px] font-black uppercase tracking-[0.3em] text-purple-400 backdrop-blur-md">
                    {cert.badge}
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-10">
                <h4 className="heading-syne text-2xl font-black mb-2 text-white group-hover:text-purple-gradient transition-all uppercase tracking-tighter">
                  {cert.title}
                </h4>
                <p className="text-gray-500 font-bold text-[10px] mb-4 uppercase tracking-widest leading-relaxed">{cert.provider}</p>
                <div className="flex items-center gap-3 text-gray-500 text-[10px] font-medium mt-auto">
                  <CheckCircle size={14} className="text-purple-500" />
                  <span>{cert.focus}</span>
                </div>
              </div>

              <div className="px-8 pb-8">
                <button className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-500 group-hover:text-white transition-all flex items-center gap-3">
                  Identify Vault
                  <div className="w-6 h-[1px] bg-gray-700 group-hover:bg-purple-500 group-hover:w-12 transition-all duration-500" />
                </button>
              </div>

              {/* Holographic Overlay */}
              <div className="absolute inset-0 holographic-overlay opacity-0 group-hover:opacity-10 transition-opacity duration-1000" />
            </motion.div>
          ))}
        </div>

        {/* Neural Stats */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Core Technologies", value: "12+" },
            { label: "Mission Deployments", value: "3+" },
            { label: "Achievement Nodes", value: "6" },
            { label: "Uptime (Years)", value: "2" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="heading-syne text-5xl md:text-7xl font-black text-white group-hover:text-purple-gradient transition-all duration-1000 tracking-tighter drop-shadow-[0_0_20px_rgba(112,66,248,0.1)]">{stat.value}</div>
              <div className="text-[8px] font-bold uppercase tracking-[0.4em] text-gray-700 mt-4 group-hover:text-purple-400 transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optimized Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-4xl liquid-glass p-1 md:p-1.5 rounded-[40px] overflow-hidden shadow-[0_0_150px_rgba(112,66,248,0.4)]"
            >
              <div className="relative w-full bg-black/80 rounded-[38px] p-6 md:p-10 overflow-auto max-h-[90vh]">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-8 right-8 z-50 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all hover:rotate-90 duration-500"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col gap-10">
                  <div className="relative w-full mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black">
                    <div className="relative" style={{ aspectRatio: '1.414' }}>
                      <img 
                        src={getAssetPath(selectedCert.image)} 
                        alt={selectedCert.title} 
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </div>
                  
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-4 px-2">
                      <div className="flex-1">
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-purple-400 mb-6 w-fit animate-pulse liquid-glass-text">
                          {selectedCert.badge}
                        </div>
                        <h4 className="heading-syne text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4 leading-none liquid-glass-text block">
                          {selectedCert.title}
                        </h4>
                        <p className="text-xs uppercase tracking-[0.3em] leading-relaxed liquid-glass-text block mt-4">{selectedCert.provider}</p>
                      </div>
                      
                      <div className="flex items-center gap-6 px-8 py-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md w-full md:w-auto">
                        <CheckCircle className="text-purple-500 flex-shrink-0" size={28} />
                        <div className="min-w-0">
                          <p className="text-[10px] uppercase font-black tracking-[0.4em] text-gray-500 mb-2">Focus Domain</p>
                          <p className="text-white font-bold text-sm tracking-tight liquid-glass-text">{selectedCert.focus}</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
