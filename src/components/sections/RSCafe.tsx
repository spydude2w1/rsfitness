"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import SpotlightCard from "@/components/SpotlightCard";

const pillars = [
    {
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F5F5F5" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 003 3c0 1.5-1.5 3-3 6-1.5-3-3-4.5-3-6a3 3 0 013-3z" /><path d="M6.5 12c-1 0-2 .5-2.5 1.5L2 17h20l-2-3.5C19.5 12.5 18.5 12 17.5 12" /><path d="M3 21h18" /></svg>,
        title: "HEALTHY MEALS", desc: "Freshly prepared meals designed for muscle recovery and sustained energy.", items: ["Grilled Chicken Plates", "Egg White Omelettes", "Brown Rice Bowls", "Salad Bar"], wide: true,
    },
    {
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F5F5F5" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4" /><path d="M16 2v4" /><path d="M6 6h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z" /><path d="M8 12h8" /></svg>,
        title: "PROTEIN SHAKES", desc: "Post-workout shakes blended fresh with premium protein sources.", items: ["Whey Protein Shakes", "Banana Oat Smoothies", "Peanut Butter Blends"], wide: false,
    },
    {
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F5F5F5" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
        title: "WORKOUT NUTRITION", desc: "Pre and intra-workout fuel to maximize your training output.", items: ["Pre-Workout Mixes", "BCAA Drinks", "Energy Bars"], wide: false,
    },
];

const cafePhotos = [
    { src: "/images/rs-cafe/main.webp", alt: "RS Cafe Exterior", span: "col-span-2 row-span-2" },
    { src: "/images/rs-cafe/1.webp", alt: "RS Cafe Interior 1", span: "" },
    { src: "/images/rs-cafe/2.webp", alt: "RS Cafe Interior 2", span: "" },
];

import Link from "next/link";
import { RippleButton } from "@/components/ui/ripple-button";

export default function RSCafe({ isHomePage = false }: { isHomePage?: boolean }) {
    return (
        <section id="cafe" className="relative py-20 lg:py-28 grain-overlay" style={{ backgroundColor: "#080808" }}>
            <div className="absolute inset-0 opacity-[0.04]" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(46,204,82,0.15), transparent 70%)" }} />
            <div className="section-container relative z-10">
                <div className="text-center mb-12 lg:mb-16">
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-4"><AnimatedShinyText className="section-label inline-block">FUEL YOUR WORKOUT</AnimatedShinyText></motion.div>
                    <h2 className="text-[clamp(38px,5vw,64px)] leading-[1.05] tracking-wide text-[#F5F5F5] mb-4" style={{ fontFamily: "var(--font-bebas-neue)" }}>RS CAFE</h2>
                    <BlurFade delay={0.15} inView><p className="text-[15px] lg:text-[17px] text-[rgba(245,245,245,0.55)] max-w-[520px] mx-auto">Located inside our Hongasandra branch. Eat what fuels you — right where you train.</p></BlurFade>
                </div>

                {/* Cafe Photo Grid */}
                <BlurFade delay={0.1} inView>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
                        {cafePhotos.map((photo, i) => (
                            <div key={i} className={`relative overflow-hidden rounded-[2px] border border-[rgba(255,255,255,0.06)] group ${photo.span}`}>
                                <div className="relative aspect-video w-full h-full min-h-[180px]">
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                </BlurFade>

                {/* Menu & Offerings */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                    {pillars.map((p, i) => (
                        <BlurFade key={p.title} delay={i * 0.12} inView className={p.wide ? "lg:col-span-2" : ""}>
                            <SpotlightCard className="h-full" spotlightColor="rgba(46, 204, 82, 0.06)">
                                <div className="bg-[#111111] border border-[rgba(255,255,255,0.06)] rounded-[2px] p-6 lg:p-8 h-full hover:border-[rgba(46,204,82,0.25)] transition-all duration-200">
                                    <div className="mb-4">{p.icon}</div>
                                    <h3 className="text-[28px] tracking-wide text-[#F5F5F5] mb-2" style={{ fontFamily: "var(--font-bebas-neue)" }}>{p.title}</h3>
                                    <p className="text-[15px] text-[rgba(245,245,245,0.55)] mb-4 max-w-[280px]">{p.desc}</p>
                                    <ul className="space-y-1.5">{p.items.map((item) => <li key={item} className="text-[14px] text-[rgba(245,245,245,0.5)]">· {item}</li>)}</ul>
                                </div>
                            </SpotlightCard>
                        </BlurFade>
                    ))}
                    <BlurFade delay={0.36} inView className="lg:col-span-3">
                        <div className="bg-[#0A0A0A] border border-[rgba(255,255,255,0.06)] rounded-[2px] p-8 text-center">
                            <p className="text-[28px] tracking-wide text-[rgba(245,245,245,0.6)] italic" style={{ fontFamily: "var(--font-bebas-neue)" }}>&ldquo;What you eat is half the equation.&rdquo;</p>
                        </div>
                    </BlurFade>
                </div>

                {/* Menu Pages */}
                <BlurFade delay={0.2} inView>
                    <div className="mb-10">
                        <h3 className="text-center text-[clamp(28px,4vw,42px)] tracking-wide text-[#F5F5F5] mb-6" style={{ fontFamily: "var(--font-bebas-neue)" }}>
                            OUR <span className="text-[#2ECC52]">MENU</span>
                        </h3>
                        {isHomePage ? (
                            <div className="flex justify-center">
                                <Link href="/cafe">
                                    <RippleButton className="h-[48px] px-8 text-[14px] font-semibold tracking-wider uppercase rounded-[2px] border-[#2ECC52] text-[#2ECC52] hover:bg-[#2ECC52] hover:text-[#080808] bg-transparent transition-all duration-200" rippleColor="#2ECC52" onClick={() => {}}>
                                        VIEW FULL MENU
                                    </RippleButton>
                                </Link>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                                <div className="relative overflow-hidden rounded-[2px] border border-[rgba(255,255,255,0.06)] group">
                                    <Image
                                        src="/images/rs-cafe/menu1.webp"
                                        alt="RS Cafe Menu Page 1"
                                        width={800}
                                        height={1100}
                                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-[2px] border border-[rgba(255,255,255,0.06)] group">
                                    <Image
                                        src="/images/rs-cafe/menu2.webp"
                                        alt="RS Cafe Menu Page 2"
                                        width={800}
                                        height={1100}
                                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </BlurFade>

                <div className="text-center">
                    <ShimmerButton className="h-[44px] px-8 text-[14px] font-semibold tracking-wider uppercase rounded-[2px]" shimmerColor="#2ECC52" shimmerSize="0.08em" background="#2ECC52" onClick={() => window.open("https://maps.google.com/?q=RS+Fitness+Hongasandra+Bangalore", "_blank")}><span className="text-[#080808] font-semibold">Get Directions to Hongasandra →</span></ShimmerButton>
                </div>
            </div>
        </section>
    );
}

