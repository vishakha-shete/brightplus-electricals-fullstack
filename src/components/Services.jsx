import React from "react";
import { motion } from "framer-motion";

const serviceGroups = [
  {
    category: "Core Infrastructure",
    items: [
      {
        name: "Commercial & Industrial Wiring",
        desc: "Heavy-duty power distribution for large-scale operations.",
        icon: "⚡",
        image:
          "https://i.pinimg.com/736x/af/3a/bd/af3abdcde2f0de641a26a127d93991a7.jpg",
      },
      {
        name: "Transformer Installation",
        desc: "High-voltage solutions tailored for industrial requirements.",
        icon: "🏗️",
        image:
          "https://i.pinimg.com/1200x/d3/d2/2a/d3d22a0bbf45ae94ae53229087c6d36d.jpg",
      },
      {
        name: "Panel Wiring",
        desc: "Custom control panel assembly with industrial precision.",
        icon: "📟",
        image:
          "https://images.unsplash.com/photo-1758101755915-462eddc23f57?q=80&w=774",
      },
    ],
  },
  {
    category: "Specialized Maintenance",
    items: [
      {
        name: "OLTC Servicing",
        desc: "Expert On-Load Tap Changer maintenance.",
        icon: "⚙️",
        image: "https://media.istockphoto.com/id/2246945901/photo/silica-gel-breather-contains-orange-silica-gel-of-115kv-power-transformer.jpg?s=1024x1024&w=is&k=20&c=8_I79vru9ICoNkTvpAfdp6Dnu0kWeFR9gZrOG50ZoK0=",
      },
      {
        name: "Circuit Breaker Installation",
        desc: "Advanced protection systems.",
        icon: "🛡️",
        image:
          "https://plus.unsplash.com/premium_photo-1661911021547-b0188f22d548",
      },
      {
        name: "Earthing Work",
        desc: "Safe grounding for all systems.",
        icon: "🌍",
         image: "https://media.istockphoto.com/id/2199111472/photo/electrician-working-on-circuit-box-installation-during-home-renovation-project-in-a.jpg?s=1024x1024&w=is&k=20&c=0ivYENuSYOhCFbgzke3xY0wWnJBxScKUAgxYcIuG2hs="
      },
    ],
  },
  {
    category: "Standard Services",
    items: [
      {
        name: "Residential Electrical Work",
        desc: "Safe and efficient home solutions.",
        icon: "🏠",
        image:
          "https://media.istockphoto.com/id/894471508/photo/electrician.jpg",image: "https://media.istockphoto.com/id/894471508/photo/electrician-working-in-a-residential-electrical-system.jpg?s=612x612&w=0&k=20&c=0AaXIkN3-bNXjvUOMGZP7EMxWRNAXdi09baAv-urStY=",
      },
      {
        name: "UPS & Inverter Wiring",
        desc: "Backup power systems integration.",
        icon: "🔋",
         image: "https://media.istockphoto.com/id/1694499361/photo/supply-system-rectifier-acdc-inverter-battery.jpg?s=1024x1024&w=is&k=20&c=qICQ1Q91SXVvU57hkoZPW8Nb3aMa-eUlwhSamXTrp0M=",
      },
      {
        name: "Lighting Installation",
        desc: "Modern lighting setups.",
        icon: "💡",
        image: "https://media.istockphoto.com/id/2181454772/photo/portrait-of-male-electrician-focused-on-wiring-a-temporary-light-bulb-fixture.jpg?s=612x612&w=0&k=20&c=5sCxGD5mUmn_2klu3rrUo_1-pf-C0fq4HCfTJfq7490=",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="Services" className="bg-zinc-950 py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-bold mb-4">
            Capabilities
          </h2>

          <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter">
            Industrial Grade <br />
            <span className="text-yellow-400 italic">Solutions</span>
          </h3>
        </div>

        {/* Services */}
        <div className="space-y-16">
          {serviceGroups.map((group, gIndex) => (
            <div key={gIndex}>
              
              {/* Category */}
              <h4 className="text-zinc-400 font-medium mb-6 flex items-center gap-4">
                {group.category}
                <div className="h-px flex-1 bg-zinc-800"></div>
              </h4>

              {/* Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((service, sIndex) => (
                  <motion.div
                    key={sIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: sIndex * 0.1 }}
                    className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:shadow-lg transition"
                  >
                    
                    {/* Image */}
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-40 object-cover group-hover:scale-105 transition"
                    />

                    {/* Content */}
                    <div className="p-5">
                      <div className="text-xl mb-2">{service.icon}</div>

                      <h5 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400">
                        {service.name}
                      </h5>

                      <p className="text-zinc-500 text-sm">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:scale-105 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}