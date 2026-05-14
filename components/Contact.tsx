"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Send, Mail, MapPin, Github, Linkedin, Facebook, Instagram, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const socialLinks = [
    { label: "GitHub", href: "https://github.com/sujitapandeyy", icon: Github, color: "hover:border-gray-900 hover:bg-gray-900 hover:text-white" },
    { label: "LinkedIn", href: "https://linkedin.com/in/sujitapandey", icon: Linkedin, color: "hover:border-blue-600 hover:bg-blue-600 hover:text-white" },
    { label: "Facebook", href: "https://facebook.com/sujitapandeyy", icon: Facebook, color: "hover:border-blue-500 hover:bg-blue-500 hover:text-white" },
    { label: "Instagram", href: "https://instagram.com/sujitapandeyy", icon: Instagram, color: "hover:border-pink-500 hover:bg-pink-500 hover:text-white" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.success) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
                toast.success("Mail sent successfully!");
            } else {
                setStatus("error");
                toast.error("Failed to send mail");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="relative py-10 px-4 overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
                style={{
                    backgroundImage:
                        "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                }}
            />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100 rounded-full blur-3xl opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-30 pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-5xl mx-auto">

                {/* Header */}

                {/* Left + Right */}
                <div className="flex flex-col md:flex-row gap-40 md:gap-10">
                    <div className="hidden md:flex flex-col">
                        {/* <div className="lg:flex hidden"> */}
                        <form onSubmit={handleSubmit} className="md:w-full space-y-4 mt-10 bg-white p-8 rounded-xl shadow-xl relative z-10">
                            <p className="text-sm font-medium tracking-[0.2em] uppercase text-indigo-400 text-center">Leave a message for me 😊</p>
                            <div className="grid sm:grid-cols-2 gap-4 mt-10 ">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-widest">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-widest">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email address"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-gray-700 py-2 uppercase">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    placeholder="Tell me about your project or just say hi…"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-indigo-100"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" /> Sending…
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} /> Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* RIGHT — INFO (moved here) */}
                    <div className=" flex flex-col justify-center space-y-8">
                        <div className="text-center  mb-14">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Contact{" "}
                                <span className="italic text-violet-500" style={{ fontFamily: "Georgia, serif" }}>
                                    Me
                                </span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-2" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-4">
                                <span className="w-11 h-11 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                                    <Mail size={18} className="text-indigo-500" />
                                </span>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-0.5">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:your@gmail.com"
                                        className="text-sm text-gray-700 hover:text-indigo-500 transition-colors"
                                    >
                                        sujitapandey806@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="w-11 h-11 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                                    <MapPin size={18} className="text-indigo-500" />
                                </span>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-0.5">
                                        Location
                                    </p>
                                    <p className="text-sm text-gray-700">Kathmandu, Nepal</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:hidden flex-col items-center">

                            {/* <div className="lg:hidden flex"> */}
                            <form onSubmit={handleSubmit} className="md:w-full bg-white p-8 rounded-xl shadow-xl relative z-10">
                                <p className="text-sm font-medium tracking-[0.2em] uppercase text-indigo-400 text-center">Leave a message for me 😊</p>
                                <div className="grid sm:grid-cols-2 gap-4 mt-10 ">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-gray-700 uppercase tracking-widest">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-gray-700 uppercase tracking-widest">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your email address"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-700 py-2 uppercase">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={3}
                                        placeholder="Tell me about your project or just say hi…"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-indigo-100"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" /> Sending…
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} /> Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        <div className="h-px bg-gray-100" />

                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                                Find me on
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {socialLinks.map(({ label, href, icon: Icon, color }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 bg-white text-gray-600 text-xs font-medium transition-all duration-200 ${color}`}
                                    >
                                        <Icon size={14} />
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}