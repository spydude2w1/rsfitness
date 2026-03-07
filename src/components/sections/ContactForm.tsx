"use client";
import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [branch, setBranch] = useState<"hongasandra" | "akshayanagar">("hongasandra");
    const [interests, setInterests] = useState<string[]>([]);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const toggleInterest = (i: string) => setInterests((p) => p.includes(i) ? p.filter((x) => x !== i) : [...p, i]);

    const validate = () => {
        const e: Record<string, string> = {};
        if (name.trim().length < 2) e.name = "Name must be at least 2 characters";
        if (!/^\d{10}$/.test(phone.replace(/\s/g, ""))) e.phone = "Enter a valid 10-digit phone number";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = async (ev: FormEvent) => {
        ev.preventDefault();
        if (!validate()) return;
        setStatus("loading");
        await new Promise((r) => setTimeout(r, 1500));
        setStatus("success");
        setTimeout(() => { setStatus("idle"); setName(""); setPhone(""); setMessage(""); setInterests([]); }, 4000);
    };

    return (
        <section id="contact" className="relative py-20 lg:py-28 grain-overlay overflow-hidden" style={{ backgroundColor: "#060606" }}>
            <div className="section-container relative z-10">
                <div className="text-center mb-12 lg:mb-16">
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-4"><AnimatedShinyText className="section-label inline-block">GET IN TOUCH</AnimatedShinyText></motion.div>
                    <h2 className="text-[clamp(38px,5vw,64px)] leading-[1.05] tracking-wide text-[#F5F5F5] mb-4" style={{ fontFamily: "var(--font-bebas-neue)" }}>JOIN RS FITNESS TODAY</h2>
                    <BlurFade delay={0.15} inView><p className="text-[15px] lg:text-[17px] text-[rgba(245,245,245,0.55)] max-w-[520px] mx-auto">Drop us a message or call directly. We&apos;ll get back to you within 24 hours.</p></BlurFade>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
                    <div className="lg:col-span-7 lg:pr-10">
                        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                            <div>
                                <label htmlFor="name" className="block text-[12px] uppercase tracking-[0.12em] text-[rgba(245,245,245,0.55)] mb-2">Full Name *</label>
                                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full h-[48px] px-4 bg-[#141414] border border-[rgba(255,255,255,0.06)] rounded-[2px] text-[#F5F5F5] text-[15px] focus:border-[rgba(46,204,82,0.5)] focus:shadow-[0_0_0_3px_rgba(46,204,82,0.08)] focus:outline-none transition-all duration-200" required minLength={2} />
                                {errors.name && <p className="text-[12px] text-red-400 mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-[12px] uppercase tracking-[0.12em] text-[rgba(245,245,245,0.55)] mb-2">Phone Number *</label>
                                <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full h-[48px] px-4 bg-[#141414] border border-[rgba(255,255,255,0.06)] rounded-[2px] text-[#F5F5F5] text-[16px] focus:border-[rgba(46,204,82,0.5)] focus:shadow-[0_0_0_3px_rgba(46,204,82,0.08)] focus:outline-none transition-all duration-200" required />
                                {errors.phone && <p className="text-[12px] text-red-400 mt-1">{errors.phone}</p>}
                            </div>
                            <div>
                                <span className="block text-[12px] uppercase tracking-[0.12em] text-[rgba(245,245,245,0.55)] mb-2">Select Branch *</span>
                                <div className="flex gap-2">
                                    {(["hongasandra", "akshayanagar"] as const).map((b) => <button key={b} type="button" onClick={() => setBranch(b)} className={`flex-1 h-[44px] text-[13px] font-semibold tracking-wider uppercase rounded-[2px] border transition-all duration-200 ${branch === b ? "bg-[#2ECC52] text-[#080808] border-[#2ECC52]" : "bg-transparent text-[rgba(245,245,245,0.55)] border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.25)]"}`}>{b}</button>)}
                                </div>
                            </div>
                            <div>
                                <span className="block text-[12px] uppercase tracking-[0.12em] text-[rgba(245,245,245,0.55)] mb-2">Interested In</span>
                                <div className="flex flex-wrap gap-2">
                                    {["Membership", "Personal Training", "RS Cafe"].map((i) => <button key={i} type="button" onClick={() => toggleInterest(i)} className={`px-4 py-2 text-[13px] rounded-[2px] border transition-all duration-200 ${interests.includes(i) ? "bg-[rgba(46,204,82,0.15)] text-[#2ECC52] border-[rgba(46,204,82,0.3)]" : "bg-transparent text-[rgba(245,245,245,0.55)] border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.20)]"}`}>{i}</button>)}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="msg" className="block text-[12px] uppercase tracking-[0.12em] text-[rgba(245,245,245,0.55)] mb-2">Message</label>
                                <textarea id="msg" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-3 bg-[#141414] border border-[rgba(255,255,255,0.06)] rounded-[2px] text-[#F5F5F5] text-[15px] resize-none focus:border-[rgba(46,204,82,0.5)] focus:shadow-[0_0_0_3px_rgba(46,204,82,0.08)] focus:outline-none transition-all duration-200" placeholder="Any questions or specific goals?" />
                            </div>
                            <ShimmerButton type="submit" className="w-full h-[52px] text-[14px] font-semibold tracking-wider uppercase rounded-[2px]" shimmerColor={status === "success" ? "#22c55e" : "#2ECC52"} shimmerSize="0.08em" background={status === "success" ? "#22c55e" : "#2ECC52"} disabled={status === "loading" || status === "success"}>
                                <span className="text-[#080808] font-semibold">
                                    {status === "idle" && "SEND ENQUIRY →"}
                                    {status === "loading" && "SENDING..."}
                                    {status === "success" && "✓ Sent! We'll reach out soon."}
                                    {status === "error" && "Something went wrong. Try calling us."}
                                </span>
                            </ShimmerButton>
                        </form>
                    </div>
                    <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-[rgba(46,204,82,0.2)]">
                        <BlurFade delay={0.2} inView>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-[11px] uppercase tracking-[0.15em] text-[#F5F5F5] mb-3">Call Us Directly</h4>
                                    <div className="space-y-2">
                                        <div><span className="text-[12px] text-[rgba(245,245,245,0.45)] block mb-1">Hongasandra</span><a href="tel:+917349089859" className="text-[16px] text-[rgba(245,245,245,0.7)] hover:text-[#F5F5F5] transition-colors block">+91 73490 89859</a><a href="tel:+917411535359" className="text-[16px] text-[rgba(245,245,245,0.7)] hover:text-[#F5F5F5] transition-colors block">+91 74115 35359</a></div>
                                        <div className="pt-2"><span className="text-[12px] text-[rgba(245,245,245,0.45)] block mb-1">Akshayanagar</span><a href="tel:+917349089859" className="text-[16px] text-[rgba(245,245,245,0.7)] hover:text-[#F5F5F5] transition-colors block">+91 73490 89859</a></div>
                                    </div>
                                </div>
                                <PulsatingButton className="w-full h-[48px] text-[14px] font-semibold tracking-wider uppercase rounded-[2px] bg-[#25D366] text-white" pulseColor="#25D366" duration="2s" onClick={() => window.open("https://wa.me/917349089859", "_blank")}>WhatsApp Us →</PulsatingButton>
                                <div>
                                    <h4 className="text-[11px] uppercase tracking-[0.15em] text-[#F5F5F5] mb-3">Operating Hours</h4>
                                    <p className="text-[14px] text-[rgba(245,245,245,0.55)]">Mon — Sat: 5:00 AM – 10:00 PM</p>
                                    <p className="text-[14px] text-[rgba(245,245,245,0.55)]">Sunday: 6:00 AM – 8:00 PM</p>
                                </div>
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </section>
    );
}
