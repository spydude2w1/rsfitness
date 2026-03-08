"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { navVariant } from "@/lib/motion";
import ScrambleHover from "@/components/ScrambleHover";
import { cn } from "@/lib/utils";
import { OFFER } from "@/lib/offerConfig";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Our Gyms", href: "/locations" },
    { label: "Plans", href: "/membership" },
    { label: "Gallery", href: "/gallery" },
    { label: "RS Cafe", href: "/cafe" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious() ?? 0;
        setScrolled(latest > 80);
        if (latest > 300 && latest > prev) setHidden(true);
        else if (latest < prev) setHidden(false);
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            const h = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
            document.addEventListener("keydown", h);
            return () => { document.removeEventListener("keydown", h); document.body.style.overflow = ""; };
        }
        else { document.body.style.overflow = ""; }
    }, [isOpen]);

    return (
        <>
            <motion.nav variants={navVariant} animate={hidden ? "hidden" : "visible"} className={`fixed left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[rgba(8,8,8,0.92)] backdrop-blur-xl" : "bg-transparent"}`} style={{ top: "var(--strip-height, 0px)" }} aria-label="Main navigation">
                <div className="section-container flex items-center justify-between h-[72px]">
                    <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center select-none">
                        <Image src="/images/RSFitness-Logo.png" alt="RS Fitness Logo" width={180} height={60} className="object-contain h-[40px] w-auto" priority />
                    </Link>
                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((link) => {
                            const active = pathname === link.href || (pathname === "/" && link.href === "/");
                            
                            if (link.label === "Gallery") {
                                return (
                                    <div key={link.href} className="relative group flex items-center h-full py-6 -my-6">
                                        <Link href={link.href} className={`relative text-[12px] uppercase tracking-[0.08em] transition-colors duration-150 ${active ? "text-[#F5F5F5]" : "text-[rgba(245,245,245,0.65)] hover:text-[#F5F5F5]"}`} style={{ fontFamily: "var(--font-dm-sans)" }}>
                                            <div className="inline-flex items-center gap-1">
                                                <ScrambleHover scrambleDuration={300}>{link.label}</ScrambleHover>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60"><path d="M6 9l6 6 6-6"/></svg>
                                            </div>
                                            {active && <motion.div layoutId="nav-indicator" className="absolute bottom-[20px] left-0 right-0 h-[2px] bg-[#2ECC52]" transition={{ duration: 0.25, ease: "easeInOut" }} />}
                                        </Link>
                                        <div className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60]">
                                            <div className="bg-[rgba(10,10,10,0.95)] backdrop-blur-md border border-[rgba(255,255,255,0.06)] rounded-[4px] shadow-2xl overflow-hidden py-1">
                                                <Link href="/gallery?tab=hongasandra" className="block px-5 py-3 text-[11px] uppercase tracking-[0.08em] hover:bg-[rgba(255,255,255,0.05)] text-[rgba(245,245,245,0.7)] hover:text-[#2ECC52] transition-colors">Hongasandra</Link>
                                                <Link href="/gallery?tab=akshayanagar" className="block px-5 py-3 text-[11px] uppercase tracking-[0.08em] hover:bg-[rgba(255,255,255,0.05)] text-[rgba(245,245,245,0.7)] hover:text-[#2ECC52] transition-colors">Akshayanagar</Link>
                                                <Link href="/gallery?tab=rs-cafe" className="block px-5 py-3 text-[11px] uppercase tracking-[0.08em] hover:bg-[rgba(255,255,255,0.05)] text-[rgba(245,245,245,0.7)] hover:text-[#2ECC52] transition-colors border-t border-[rgba(255,255,255,0.04)]">RS Cafe</Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <Link key={link.href} href={link.href} className={`relative py-6 -my-6 text-[12px] uppercase tracking-[0.08em] transition-colors duration-150 ${active ? "text-[#F5F5F5]" : "text-[rgba(245,245,245,0.65)] hover:text-[#F5F5F5]"}`} style={{ fontFamily: "var(--font-dm-sans)" }}>
                                    <div className="relative inline-block">
                                        <ScrambleHover scrambleDuration={300} className="inline-block">{link.label}</ScrambleHover>
                                        {link.label === "Plans" && !OFFER.isClosed && (
                                            <span
                                                className="absolute -top-1 -right-2.5 flex h-1.5 w-1.5"
                                                aria-label="Special offer available"
                                            >
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ECC52] opacity-75" />
                                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2ECC52]" />
                                            </span>
                                        )}
                                    </div>
                                    {active && <motion.div layoutId="nav-indicator" className="absolute bottom-[20px] left-0 right-0 h-[2px] bg-[#2ECC52]" transition={{ duration: 0.25, ease: "easeInOut" }} />}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="hidden lg:block">
                        <a
                            href="#contact"
                            className={cn(
                                "hidden lg:inline-flex items-center justify-center",
                                "border border-[#2ECC52] text-[#2ECC52] bg-transparent",
                                "font-dm text-[11px] font-semibold uppercase tracking-[0.10em]",
                                "px-5 py-2.5 rounded-[2px]",
                                "hover:bg-[#2ECC52] hover:text-[#080808]",
                                "transition-all duration-200 ease-in-out",
                                "whitespace-nowrap"
                            )}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                router.push("/contact");
                            }}
                        >
                            JOIN NOW
                        </a>
                    </div>
                    <button className="lg:hidden flex items-center justify-center w-[44px] h-[44px]" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label={isOpen ? "Close menu" : "Open menu"}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round">
                            <motion.path d={isOpen ? "M6 6L18 18" : "M4 7L20 7"} animate={{ d: isOpen ? "M6 6L18 18" : "M4 7L20 7" }} transition={{ duration: 0.3 }} />
                            <motion.path d="M4 12L20 12" animate={{ opacity: isOpen ? 0 : 1 }} transition={{ duration: 0.15 }} />
                            <motion.path d={isOpen ? "M6 18L18 6" : "M4 17L20 17"} animate={{ d: isOpen ? "M6 18L18 6" : "M4 17L20 17" }} transition={{ duration: 0.3 }} />
                        </svg>
                    </button>
                </div>
            </motion.nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 bg-[rgba(8,8,8,0.97)] flex flex-col items-center justify-center" onClick={() => setIsOpen(false)}>
                        <div className="flex flex-col items-center gap-6" onClick={(e) => e.stopPropagation()}>
                            {NAV_LINKS.map((link, idx) => (
                                <motion.div key={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ delay: idx * 0.08, duration: 0.4 }}>
                                    <Link href={link.href} className="text-[40px] text-[#F5F5F5] tracking-wide" style={{ fontFamily: "var(--font-bebas-neue)" }} onClick={() => setIsOpen(false)}>{link.label}</Link>
                                </motion.div>
                            ))}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: NAV_LINKS.length * 0.08 }} className="mt-6 w-full px-8">
                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsOpen(false);
                                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                        router.push("/contact");
                                    }}
                                    className={cn(
                                        "w-full inline-flex items-center justify-center",
                                        "border border-[#2ECC52] text-[#2ECC52] bg-transparent",
                                        "font-dm text-[15px] font-semibold uppercase tracking-[0.10em]",
                                        "px-5 py-3 rounded-[2px]",
                                        "hover:bg-[#2ECC52] hover:text-[#080808]",
                                        "transition-all duration-200 ease-in-out",
                                        "whitespace-nowrap"
                                    )}
                                >
                                    JOIN NOW &rarr;
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
