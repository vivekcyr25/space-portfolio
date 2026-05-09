"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full py-20 border-t border-white/5 bg-black/60 backdrop-blur-2xl">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center text-center md:text-left">
          {/* Branding */}
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center justify-center md:justify-start gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center font-black text-xl group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(112,66,248,0.4)]">
                V
              </div>
              <span className="heading-syne text-xl font-black tracking-tighter liquid-text liquid-text-strong liquid-text-hover">VIVEK <span className="liquid-text liquid-text-strong liquid-text-hover">SHARMA</span></span>
            </a>
            <p className="text-sm max-w-xs mx-auto md:mx-0 font-bold leading-relaxed uppercase tracking-wider liquid-text liquid-text-subtle liquid-text-hover">
              Architecting the next generation of high-performance digital ecosystems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-12">
            {["About", "Skills", "Projects", "Achievements"].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:tracking-[0.6em] liquid-text liquid-text-subtle liquid-text-hover"
              >
                {link}
              </a>
            ))}
            <button 
              onClick={() => alert("Terms of Use\\n\\nThis portfolio and its contents are the intellectual property of Vivek Sharma.\\nDesigned for demonstration purposes. Unauthorized replication is prohibited.")}
              className="text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:tracking-[0.6em] liquid-text liquid-text-subtle liquid-text-hover cursor-pointer"
            >
              Terms of Use
            </button>
          </div>

          {/* System Info */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-[10px] tracking-[0.2em] font-black liquid-text liquid-text-subtle liquid-text-hover">© 2026 VIVEK SHARMA</p>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <p className="text-[9px] uppercase tracking-[0.5em] font-black liquid-text liquid-text-subtle liquid-text-hover">All Systems Nominal</p>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/vivek-sharma-2bba8b398/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 text-gray-500 hover:text-white"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.826 0-9.749h3.554v1.381c.43-.664 1.199-1.608 2.925-1.608 2.134 0 3.734 1.39 3.734 4.38v5.596zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.715 0-.955.77-1.715 1.916-1.715.726 0 1.215.76 1.215 1.715 0 .954-.489 1.715-1.216 1.715zm1.946 11.597H3.392V9.703h3.891v10.749zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/vivekcyr25" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 text-gray-500 hover:text-white"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Decorative Line */}
        <div className="mt-20 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
