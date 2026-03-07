"use client";
import { motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { fadeUp, fadeUpTransition } from "@/lib/motion";

const stats = [
    { value: 2, suffix: "", label: "GYM BRANCHES" },
    { value: 100, suffix: "+", label: "ACTIVE MEMBERS" },
    { value: 5, suffix: "+", label: "CERTIFIED TRAINERS" },
    { value: 1, suffix: "", label: "RS CAFE ON-SITE" },
];

export default function StatsBar() {
    return (
        <section className="relative overflow-hidden grain-overlay" style={{ backgroundColor: "#0F0F0F" }}>
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-[rgba(46,204,82,0.3)]" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[rgba(46,204,82,0.3)]" />
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(245,245,245,0.03) 10px, rgba(245,245,245,0.03) 11px)" }} />
            <div className="section-container py-10 lg:py-12">
                <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" transition={fadeUpTransition} viewport={{ once: true, amount: 0.3 }} className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
                    {stats.map((s, i) => (
                        <div key={s.label} className={`flex flex-col items-center text-center py-4 lg:py-0 ${i < stats.length - 1 ? "lg:border-r lg:border-[rgba(255,255,255,0.06)]" : ""}`}>
                            <div className="flex items-baseline">
                                <NumberTicker value={s.value} className="text-[48px] lg:text-[56px] text-[#F5F5F5]" style={{ fontFamily: "var(--font-bebas-neue)" } as React.CSSProperties} />
                                {s.suffix && <span className="text-[48px] lg:text-[56px] text-[#F5F5F5]" style={{ fontFamily: "var(--font-bebas-neue)" }}>{s.suffix}</span>}
                            </div>
                            <span className="text-[11px] tracking-[0.15em] uppercase text-[rgba(245,245,245,0.45)] mt-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
