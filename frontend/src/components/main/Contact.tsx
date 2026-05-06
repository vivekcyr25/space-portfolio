"use client";

import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, Github, Instagram } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgodzvge";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus("idle");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container relative">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            <div>
              <h2 className="heading-syne text-purple-500 font-black uppercase tracking-[0.5em] text-[9px] mb-6">Signal Transmission</h2>
              <h3 className="heading-syne text-5xl md:text-7xl font-black leading-tight">
                Establish <br />
                <span className="text-gray-500 italic">Link.</span>
              </h3>
            </div>

            <p className="text-gray-400 text-xl font-medium leading-relaxed">
              Open for mission-critical collaborations and architectural engineering opportunities.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.02] flex items-center justify-center border border-white/5 group-hover:bg-purple-600/10 group-hover:border-purple-500/50 transition-all duration-700">
                  <Mail className="text-purple-500" size={24} />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-black tracking-[0.4em] text-gray-600 mb-2">Direct Uplink</p>
                  <p className="text-white text-xl font-bold heading-syne">viveklpu008@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.02] flex items-center justify-center border border-white/5 group-hover:bg-purple-600/10 group-hover:border-purple-500/50 transition-all duration-700">
                  <MapPin className="text-purple-500" size={24} />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-black tracking-[0.4em] text-gray-600 mb-2">Base Coordinates</p>
                  <p className="text-white text-xl font-bold heading-syne">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/vivek-sharma-2bba8b398/" },
                { Icon: Github, href: "https://github.com/vivekcyr25" },
                { Icon: Instagram, href: "#" }
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center hover:bg-purple-600 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md text-gray-400 hover:text-white"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 relative overflow-hidden bg-white/[0.005]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[100px] pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 ml-1">Identity</label>
                  <input name="name" type="text" placeholder="Commander Name" required className="bg-white/[0.01] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/40 transition-all font-medium" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 ml-1">Uplink Address</label>
                  <input name="email" type="email" placeholder="name@domain.com" required className="bg-white/[0.01] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/40 transition-all font-medium" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 ml-1">Message Payload</label>
                <textarea name="message" rows={5} placeholder="Describe the mission scope..." required className="bg-white/[0.01] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/40 transition-all resize-none font-medium"></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full py-5 flex items-center justify-center gap-4 disabled:opacity-60 disabled:cursor-not-allowed">
                <Send size={18} /> {isSubmitting ? "Transmitting..." : "Initiate Transmission"}
              </button>
              {submitStatus === "success" && (
                <p className="text-sm text-green-400 font-medium">
                  Transmission successful. I will get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-red-400 font-medium">
                  Transmission failed. Please retry in a moment.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
