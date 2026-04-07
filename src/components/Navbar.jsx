import { useState } from "react";
import BrightPlusLogo from "../assets/BrightPlusLogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-950 text-white px-4 md:px-10 py-4 md:py-5 border-b border-zinc-800 sticky top-0 z-50">
      
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={BrightPlusLogo} alt="BrightPlus Logo" className="h-10" />
          <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">
            <span className="text-yellow-400">Bright</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
              Plus
            </span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider">
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>
          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-zinc-900 p-4 rounded-xl border border-zinc-800">
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}