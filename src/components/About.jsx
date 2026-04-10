import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-bold mb-4">
            About Us
          </h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter">
            About <span className="text-yellow-400">Bright Electricals</span>
          </h3>
        </div>

        {/* Intro */}
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center mb-12">
          Bright Electricals is a licensed electrical contracting firm dedicated to delivering 
          high-quality, professional electrical services. We handle projects across industries 
          including banks, warehouses, hospitals, hotels, retail complexes, and more.
        </p>

        {/* Extra Professional Info (NEW SECTION) */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl mb-10">
          <p className="text-zinc-400 leading-relaxed mb-4">
            Our contract management expertise ensures that all installations are completed on time, 
            within budget, and with the highest level of professionalism. We maintain strong communication, 
            progress tracking, and a flexible problem-solving approach to deliver seamless project execution.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            We aim to make working with Bright Electricals simple and efficient by maintaining transparency, 
            reliability, and a client-focused approach in every project we undertake.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl mb-10">
          <h4 className="text-xl font-bold mb-3 text-yellow-400">Our Mission</h4>
          <p className="text-zinc-400 leading-relaxed">
            To exceed client expectations by maintaining the highest standards of quality, professionalism, 
            and project management. We aim to build long-term trust and deliver excellence in every project.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h5 className="text-white font-bold mb-2">Safety</h5>
            <p className="text-zinc-500 text-sm">We care about people and prioritize safety.</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h5 className="text-white font-bold mb-2">Reliability</h5>
            <p className="text-zinc-500 text-sm">We deliver consistent and trustworthy services.</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h5 className="text-white font-bold mb-2">Responsiveness</h5>
            <p className="text-zinc-500 text-sm">We listen, adapt, and respond quickly.</p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl mb-10">
          <h4 className="text-xl font-bold mb-4 text-yellow-400">Core Principles</h4>

          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-semibold text-white">Honesty</p>
              <p className="text-zinc-500">Always truthful, open, and transparent.</p>
            </div>

            <div>
              <p className="font-semibold text-white">Integrity</p>
              <p className="text-zinc-500">Maintaining strong ethics and fairness.</p>
            </div>

            <div>
              <p className="font-semibold text-white">Culture</p>
              <p className="text-zinc-500">Continuous learning and improvement.</p>
            </div>

            <div>
              <p className="font-semibold text-white">Passion</p>
              <p className="text-zinc-500">We love what we do and lead by example.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 text-center border-t border-zinc-800 pt-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">10+</h3>
            <p className="text-zinc-500 text-sm">Years Experience</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">100%</h3>
            <p className="text-zinc-500 text-sm">Professional Service</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">24/7</h3>
            <p className="text-zinc-500 text-sm">Support</p>
          </div>
        </div>

      </div>
    </section>
  );
}