import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccess(false);

        try {
            await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            // reset form
            setForm({
                name: "",
                phone: "",
                email: "",
                service: "",
                message: ""
            });

            setSuccess(true);
        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-16 md:py-24 px-4 md:px-6 bg-zinc-950 text-white relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-500/5 blur-[100px] rounded-full"></div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 relative z-10">

                {/* LEFT SIDE */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-bold mb-4">
                        Get In Touch
                    </h2>

                    <h3 className="text-3xl md:text-6xl font-black mb-6 tracking-tighter leading-tight">
                        Ready to <span className="text-yellow-400">Power Up</span> <br />
                        Your Project?
                    </h3>

                    <p className="text-zinc-400 text-base md:text-lg mb-10 leading-relaxed">
                        Whether it's an industrial installation or a residential repair,
                        our team is ready to provide precise and safe electrical solutions.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center">
                                📞
                            </div>
                            <div>
                                <p className="text-zinc-500 text-sm">Phone</p>
                                <p className="text-white font-bold">+91 9146171888</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center">
                                📧
                            </div>
                            <div>
                                <p className="text-zinc-500 text-sm">Email</p>
                                <p className="text-white font-bold">
                                    hrishi.shete@outlook.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE (FORM) */}
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 md:p-10 rounded-3xl backdrop-blur-sm shadow-xl">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                        {/* Name + Phone */}
                        <div className="grid md:grid-cols-2 gap-5">
                            <input
                                className="bg-zinc-800 border border-zinc-700 p-3 rounded-xl focus:outline-none focus:border-yellow-400"
                                name="name"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                className="bg-zinc-800 border border-zinc-700 p-3 rounded-xl focus:outline-none focus:border-yellow-400"
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Email */}
                        <input
                            className="bg-zinc-800 border border-zinc-700 p-3 rounded-xl focus:outline-none focus:border-yellow-400"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />

                        {/* Service */}
                        <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="bg-zinc-800 border border-zinc-700 p-3 rounded-xl focus:outline-none focus:border-yellow-400"
                            required
                        >
                            <option value="">Select Service</option>
                            <option value="industrial">Industrial Wiring</option>
                            <option value="residential">Residential Work</option>
                            <option value="maintenance">Maintenance</option>
                            <option value="other">Other</option>
                        </select>

                        {/* Message */}
                        <textarea
                            className="bg-zinc-800 border border-zinc-700 p-3 rounded-xl focus:outline-none focus:border-yellow-400 min-h-[120px]"
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            required
                        />

                        {/* Button */}
                        <button
                            disabled={isSubmitting}
                            className={`py-3 rounded-xl font-semibold transition ${isSubmitting
                                    ? "bg-zinc-700 text-zinc-400"
                                    : "bg-yellow-400 text-black hover:scale-105"
                                }`}
                        >
                            {isSubmitting ? "Sending..." : "Submit Request"}
                        </button>

                        {/* Success Message */}
                        {success && (
                            <p className="text-green-400 text-center">
                                ✅ Message sent successfully!
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}