"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ShineBorder } from "@/components/ui/shine-border";
import SpotlightCard from "@/components/SpotlightCard";
import DecryptedText from "@/components/DecryptedText";
import { BranchTabs } from "@/components/ui/BranchTabs";
import { branches } from "@/lib/branchData";

const GreenCheck = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2ECC52" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>;

function LocationCard({ id, branch, label, address, phones, facilities, isNew, mapsUrl, image, amenities, equipment, trainers }: typeof branches[0]) {
    const overviewContent = (
        <div className="p-6 lg:p-8 flex flex-col h-full">
            <span className="text-[11px] tracking-[0.18em] uppercase text-[rgba(245,245,245,0.45)] block mb-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{label}</span>
            <h3 className="text-[clamp(24px,3vw,32px)] leading-[1.1] tracking-wide text-[#F5F5F5] mb-3" style={{ fontFamily: "var(--font-bebas-neue)" }}><DecryptedText text={branch} speed={60} revealDirection="start" className="inline-block" /></h3>
            <p className="text-[14px] text-[rgba(245,245,245,0.55)] mb-2">{address}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">{phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="text-[14px] text-[rgba(245,245,245,0.65)] hover:text-[#F5F5F5] transition-colors duration-150">{p}</a>)}</div>
            <div className="h-[1px] bg-[rgba(255,255,255,0.08)] mb-4" />
            <ul className="space-y-2.5 mb-6 flex-1">{facilities.map((f) => <li key={f} className="flex items-center gap-2.5"><GreenCheck /><span className="text-[14px] text-[rgba(245,245,245,0.7)]">{f}</span></li>)}</ul>

            <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-[2px] p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] text-[rgba(245,245,245,0.5)] uppercase tracking-wider" style={{ fontFamily: "var(--font-dm-sans)" }}>Mon - Sat</span>
                    <span className="text-[12px] text-[#F5F5F5] font-semibold" style={{ fontFamily: "var(--font-dm-sans)" }}>5:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[11px] text-[rgba(245,245,245,0.5)] uppercase tracking-wider" style={{ fontFamily: "var(--font-dm-sans)" }}>Sunday</span>
                    <span className="text-[12px] text-[#2ECC52] font-semibold" style={{ fontFamily: "var(--font-dm-sans)" }}>6:00 AM - 10:00 PM</span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center h-[48px] lg:h-[44px] px-6 border border-[#2ECC52] text-[#2ECC52] hover:bg-[#2ECC52] hover:text-[#080808] transition-all duration-200 text-[14px] font-semibold tracking-wider uppercase rounded-[2px]">Get Directions →</a>
                <a href={`tel:${phones[0].replace(/\s/g, "")}`} className="flex-1 inline-flex items-center justify-center h-[48px] lg:h-[44px] text-[14px] font-semibold tracking-wider uppercase text-[rgba(245,245,245,0.65)] hover:text-[#F5F5F5] transition-colors duration-150">Call Now</a>
            </div>
        </div>
    );

    const card = (
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.06)] rounded-[2px] overflow-hidden hover:border-[rgba(46,204,82,0.25)] transition-all duration-200 flex flex-col h-full" aria-label={`RS Fitness ${branch} Branch`}>
            <div className="relative aspect-video overflow-hidden shrink-0">
                <Image src={image} alt={`RS Fitness ${branch} gym interior`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111111] to-transparent" />
                {isNew && <div className="absolute top-3 right-3 z-10"><AnimatedShinyText className="inline-flex items-center gap-1 px-3 py-1.5 bg-[rgba(8,8,8,0.8)] backdrop-blur-sm border border-[rgba(46,204,82,0.3)] rounded-[2px] text-[10px] font-semibold tracking-wider uppercase text-[#2ECC52]">✦ NEW · JANUARY 2025</AnimatedShinyText></div>}
            </div>
            <div className="flex-1 flex flex-col">
                <BranchTabs
                    branchId={id}
                    overviewContent={overviewContent}
                    amenities={amenities}
                    equipment={equipment}
                    trainers={trainers}
                />
            </div>
        </div>
    );

    if (isNew) return <div className="relative h-full"><ShineBorder shineColor={["#2ECC52", "rgba(46,204,82,0)"]} borderWidth={1.5} className="rounded-[2px] z-0" /><SpotlightCard className="w-full h-full relative z-10" spotlightColor="rgba(46, 204, 82, 0.06)">{card}</SpotlightCard></div>;
    return <SpotlightCard className="w-full h-full" spotlightColor="rgba(46, 204, 82, 0.06)">{card}</SpotlightCard>;
}

export default function Locations() {
    return (
        <section id="locations" className="relative py-20 lg:py-28 grain-overlay" style={{ backgroundColor: "#080808" }}>
            <div className="section-container">
                <div className="text-center mb-12 lg:mb-16">
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-4">
                        <AnimatedShinyText className="section-label inline-block">OUR BRANCHES</AnimatedShinyText>
                    </motion.div>
                    <h2 className="text-[clamp(38px,5vw,64px)] leading-[1.05] tracking-wide text-[#F5F5F5] mb-4 lg:mb-6" style={{ fontFamily: "var(--font-bebas-neue)" }}>TWO LOCATIONS. ONE STANDARD.</h2>
                    <BlurFade delay={0.15} inView><p className="text-[15px] lg:text-[17px] text-[rgba(245,245,245,0.55)] max-w-[560px] mx-auto leading-relaxed">Whether you're in Hongasandra or Akshayanagar, the same quality of training, equipment, and energy awaits.</p></BlurFade>
                </div>
                {/* 
                  To ensure both cards stretch to equal heights despite dynamically sized content panels, 
                  we use items-stretch via the grid container.
                */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
                    <BlurFade delay={0} inView className="flex flex-col"><LocationCard {...branches[0]} /></BlurFade>
                    <BlurFade delay={0.15} inView className="flex flex-col"><LocationCard {...branches[1]} /></BlurFade>
                </div>
            </div>
        </section>
    );
}
