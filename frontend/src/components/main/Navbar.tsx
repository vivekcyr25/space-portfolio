"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-3 md:py-4 backdrop-blur-3xl bg-black/40 border-b border-white/5" : "py-4 md:py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center font-black text-xl group-hover:rotate-12 transition-transform shadow-[0_0_25px_rgba(112,66,248,0.4)]">
            V
          </div>
          <span className="heading-syne text-lg sm:text-xl font-black tracking-tighter liquid-text liquid-text-strong liquid-text-hover">VIVEK <span className="liquid-text liquid-text-strong liquid-text-hover">SHARMA</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:tracking-[0.6em] liquid-text liquid-text-subtle liquid-text-hover"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary py-3 px-10 liquid-text-hover">
            <span className="liquid-text liquid-text-subtle liquid-text-hover">Initiate Link</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-[#030014]/98 backdrop-blur-3xl p-6 sm:p-8 flex flex-col gap-8 sm:gap-10 md:hidden overflow-y-auto"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10"><X size={24} /></button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl sm:text-4xl font-black heading-syne transition-all uppercase tracking-tighter liquid-text liquid-text-strong liquid-text-hover"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary mt-4 sm:mt-6 text-center liquid-text-hover">
              <span className="liquid-text liquid-text-subtle liquid-text-hover">Initiate Link</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
