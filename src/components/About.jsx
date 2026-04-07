import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="relative py-16 md:py-24 px-4 md:px-6 bg-zinc-950 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 md:w-96 h-80 md:h-96 bg-yellow-500/10 blur-[120px] rounded-full"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

                        <div className="relative bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl">
                            <h3 className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-bold mb-4">
                                Leadership
                            </h3>

                            <p className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-snug">
                                Led by{" "}
                                <span className="text-yellow-400">
                                    Mr. Rushikesh Shete
                                </span>
                                , delivering reliable, safe, and modern electrical solutions
                                with precision and expertise.
                            </p>

                            <div className="mt-8 flex gap-4">
                                <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
                                <div className="h-1 w-6 bg-zinc-700 rounded-full"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-left"
                    >
                        <h2
                            className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-white"
                            aria-label="About Bright Plus Electricals"
                        >
                            About{" "}
                            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                                Bright Plus
                            </span>
                        </h2>

                        <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                            Bright Plus Electricals & Services provides industrial-grade
                            solutions for{" "}
                            <span className="text-zinc-200">
                                residential, commercial, and industrial
                            </span>{" "}
                            projects. We focus on safety, quality workmanship, and long-term
                            reliability rather than quick fixes.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-white font-bold text-xl md:text-2xl">
                                    100%
                                </h4>
                                <p className="text-zinc-500 text-sm">
                                    Safety Compliance
                                </p>
                            </div>

                            <div>
                                <h4 className="text-white font-bold text-xl md:text-2xl">
                                    24/7
                                </h4>
                                <p className="text-zinc-500 text-sm">
                                    Expert Support
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}