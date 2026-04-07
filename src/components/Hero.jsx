import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-zinc-950 text-white text-center py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Glow Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/5 blur-[100px] rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium mb-6 md:mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          Trusted by Industrial & Residential Clients
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-[1.1] bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent"
        >
          Bright Plus <br />
          <span className="text-yellow-400 italic">Electricals</span> & Services
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base md:text-xl text-zinc-400 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Providing industrial-grade electrical solutions built on{" "}
          <span className="text-zinc-200 font-medium">
            safety, precision, and long-term reliability.
          </span>{" "}
          Powering your projects with expert support.
        </motion.p>

        {/* CTA Buttons 🔥 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Get Free Quote
          </a>

          <a
            href="tel:9146171888"
            className="border border-zinc-700 px-6 py-3 rounded-lg hover:bg-zinc-800 transition"
          >
            Call Now
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <div className="mt-14 md:mt-20 pt-8 md:pt-10 border-t border-zinc-900/50 flex flex-wrap justify-center gap-6 md:gap-16 opacity-40 grayscale">
          <span className="text-xs md:text-sm font-semibold tracking-widest">
            RESIDENTIAL
          </span>
          <span className="text-xs md:text-sm font-semibold tracking-widest">
            COMMERCIAL
          </span>
          <span className="text-xs md:text-sm font-semibold tracking-widest">
            INDUSTRIAL
          </span>
        </div>
      </div>
    </section>
  );
}