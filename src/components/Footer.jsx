import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 md:py-16 px-4 md:px-6 border-t border-zinc-900 relative overflow-hidden">
      
      {/* Glow Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16 text-left">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold">
                B+
              </div>
              <span className="text-xl font-black text-white">
                Bright<span className="text-yellow-400">Plus</span>
              </span>
            </div>

            <p className="max-w-sm text-sm text-zinc-500 leading-relaxed">
              Delivering safe and reliable electrical solutions for residential,
              commercial, and industrial needs with precision and expertise.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">
              Sitemap
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="hero" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
              <li><a href="#Services" className="hover:text-yellow-400">Services</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">
              Contact
            </h4>

            <div className="space-y-3 text-sm">
              <p>⚡ 24/7 Support</p>
              <p className="text-zinc-500">Maharashtra, India</p>
              <a href="tel:9146171888" className="text-white font-bold hover:text-yellow-400">
                +91 9146171888
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-zinc-600">
          <p>© {currentYear} Bright Plus Electricals & Services</p>

          <div className="flex gap-4">
            <span className="hover:text-zinc-400 cursor-pointer">Safety</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}