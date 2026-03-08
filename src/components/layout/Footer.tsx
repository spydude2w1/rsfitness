"use client";
import Link from "next/link";
import Image from "next/image";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const links = [
    { label: "About", href: "/about" },
    { label: "Trainers", href: "/trainers" },
    { label: "Gallery", href: "/gallery" },
    { label: "Offers", href: "/offers" },
    { label: "Privacy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
];

export default function Footer() {
    return (
        <>
            <ScrollProgress className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-[#2ECC52]" />
            <footer className="relative w-full overflow-hidden" style={{ backgroundColor: "#060606" }}>
                {/* Green top border */}
                <div className="h-[1px] bg-[rgba(46,204,82,0.25)] w-full" />

                {/* Scrolling ticker */}
                <div className="w-full overflow-hidden border-b border-[rgba(255,255,255,0.06)] py-4">
                    <ScrollVelocityContainer className="w-full">
                        <ScrollVelocityRow baseVelocity={1} className="whitespace-nowrap">
                            <span
                                className="text-[18px] text-[rgba(245,245,245,0.12)] tracking-widest mx-6"
                                style={{ fontFamily: "var(--font-bebas-neue)" }}
                            >
                                RS FITNESS · TRAIN HARD · LIVE STRONG · HONGASANDRA · RS CAFE · AKSHAYANAGAR ·&nbsp;
                            </span>
                        </ScrollVelocityRow>
                    </ScrollVelocityContainer>
                </div>

                {/* Main footer grid */}
                <div className="section-container py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                        {/* Brand */}
                        <div className="col-span-2 md:col-span-1">
                            <div className="flex items-center mb-4">
                                <Image src="/images/RSFitness-Logo.png" alt="RS Fitness Logo" width={200} height={60} className="object-contain h-[48px] w-auto" />
                            </div>
                            <p className="text-[13px] text-[rgba(245,245,245,0.50)] mb-1">Train Hard. Live Strong.</p>
                            <p className="text-[12px] text-[rgba(245,245,245,0.30)]">Hongasandra & Akshayanagar, Bangalore</p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-[11px] uppercase tracking-[0.14em] text-[rgba(245,245,245,0.6)] mb-4">Navigate</h4>
                            <ul className="space-y-2.5">
                                {links.map((l) => (
                                    <li key={l.href}>
                                        <Link href={l.href} className="text-[13px] text-[rgba(245,245,245,0.40)] hover:text-[#F5F5F5] transition-colors duration-150">
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-[11px] uppercase tracking-[0.14em] text-[rgba(245,245,245,0.6)] mb-4">Call Us</h4>
                            <ul className="space-y-2.5">
                                <li>
                                    <span className="text-[11px] text-[rgba(245,245,245,0.35)] block mb-1">Hongasandra</span>
                                    <a href="tel:+917349089859" className="text-[13px] text-[rgba(245,245,245,0.40)] hover:text-[#F5F5F5] transition-colors duration-150 block">+91 73490 89859</a>
                                    <a href="tel:+917411535359" className="text-[13px] text-[rgba(245,245,245,0.40)] hover:text-[#F5F5F5] transition-colors duration-150 block mt-1">+91 74115 35359</a>
                                </li>
                                <li className="pt-1">
                                    <span className="text-[11px] text-[rgba(245,245,245,0.35)] block mb-1">Akshayanagar</span>
                                    <a href="tel:+917349089859" className="text-[13px] text-[rgba(245,245,245,0.40)] hover:text-[#F5F5F5] transition-colors duration-150 block">+91 73490 89859</a>
                                </li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="text-[11px] uppercase tracking-[0.14em] text-[rgba(245,245,245,0.6)] mb-4">Find Us</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-[13px] text-[rgba(245,245,245,0.40)] hover:text-[#2ECC52] transition-colors duration-150 flex items-center gap-2">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://maps.google.com/?q=RS+Fitness+Hongasandra+Bangalore" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[rgba(245,245,245,0.40)] hover:text-[#2ECC52] transition-colors duration-150 flex items-center gap-2">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                        Hongasandra
                                    </a>
                                </li>
                                <li>
                                    <a href="https://maps.google.com/?q=RS+Fitness+Akshayanagar+Bangalore" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[rgba(245,245,245,0.40)] hover:text-[#2ECC52] transition-colors duration-150 flex items-center gap-2">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                        Akshayanagar
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-[rgba(255,255,255,0.05)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                        <span className="text-[12px] text-[rgba(245,245,245,0.25)]">© 2025 RS Fitness. All rights reserved.</span>
                        <span className="text-[12px] text-[rgba(245,245,245,0.25)]">Designed by Shivam Biswal</span>
                    </div>
                </div>
            </footer>
        </>
    );
}
