"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import BlurText from "@/components/BlurText";
import MagneticButton from "@/components/MagneticButton";
import FoundingBadge from "@/components/ui/FoundingBadge";
import OfferHeroPill from "@/components/ui/OfferHeroPill";

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const scrollIndicatorOpacity = useTransform(
        scrollYProgress,
        [0, 0.08],
        [1, 0]
    );

    const [isMobile, setIsMobile] = useState(false);
    const [isSmallHeight, setIsSmallHeight] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            setIsSmallHeight(window.innerHeight < 680);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navigateToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        router.push("/contact");
    };

    const statPills = [
        "2 LOCATIONS",
        "CERTIFIED TRAINERS",
        "RS CAFE ON-SITE",
    ];

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative w-full min-h-screen overflow-hidden lg:flex"
            style={{ backgroundColor: "#080808" }}
        >
            <FoundingBadge />
            <div className="absolute inset-0 z-0 bg-[#080808] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px] scale-105 brightness-95"
                    style={{ backgroundImage: "url('/images/hero.png')" }}
                />
            </div>

            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background: `linear-gradient(
            100deg,
            rgba(8,8,8,0.93) 0%,
            rgba(8,8,8,0.82) 25%,
            rgba(8,8,8,0.55) 50%,
            rgba(8,8,8,0.22) 75%,
            rgba(8,8,8,0.08) 100%
          )`,
                }}
                aria-hidden="true"
            />

            <div
                className="absolute inset-0 z-[2]"
                style={{
                    background: `linear-gradient(
            to bottom,
            rgba(8,8,8,0.10) 0%,
            rgba(8,8,8,0.00) 35%,
            rgba(8,8,8,0.00) 55%,
            rgba(8,8,8,0.85) 88%,
            rgba(8,8,8,1.00) 100%
          )`,
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 w-full h-full flex flex-col justify-center lg:justify-end lg:absolute lg:bottom-[12%] lg:left-0 lg:max-w-[660px] lg:pl-[clamp(32px,5vw,88px)] px-5 pt-[38vh] lg:pt-0 lg:px-0 text-center lg:text-left">
                {mounted && (
                    <>
                        {isMobile && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                                className="flex justify-center flex-col items-center w-full mb-14 z-[15]"
                            >
                                <Image 
                                    src="/images/RSFitness-Logo.png" 
                                    alt="RS Fitness Logo" 
                                    width={400} 
                                    height={120} 
                                    className="object-contain w-[240px] h-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                                    priority
                                />
                            </motion.div>
                        )}

                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-[10px] lg:gap-[12px] mb-5 lg:ml-1"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.30, duration: 0.55, ease: "easeOut" }}
                        >
                            <span
                                className="hidden min-[375px]:block flex-shrink-0"
                                style={{
                                    width: "2px",
                                    height: "16px",
                                    background: "#2ECC52",
                                    borderRadius: "1px",
                                }}
                                aria-hidden="true"
                            />
                            <AnimatedShinyText
                                className="font-dm text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2ECC52] !ml-0 !mr-0"
                            >
                                HONGASANDRA & AKSHAYANAGAR
                            </AnimatedShinyText>
                        </motion.div>

                        <h1 className="flex flex-col items-center lg:items-start" aria-label="Your Fitness Journey Starts Here">
                            <motion.span
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.60, duration: 0.55, ease: "easeOut" }}
                                className="font-bebas block leading-none w-full"
                                style={{
                                    fontSize: isMobile ? "clamp(22px, 5.5vw, 32px)" : "clamp(28px, 3.8vw, 52px)",
                                    color: "rgba(245,245,245,0.72)",
                                    letterSpacing: "0.05em",
                                    fontFamily: "var(--font-bebas-neue)"
                                }}
                            >
                                YOUR FITNESS
                            </motion.span>

                            <motion.span
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.80, duration: 0.55, ease: "easeOut" }}
                                className="font-bebas block leading-[0.88] w-full"
                                style={{
                                    fontSize: isMobile ? "clamp(72px, 18vw, 108px)" : "clamp(88px, 14vw, 192px)",
                                    color: "#F5F5F5",
                                    letterSpacing: "-0.01em",
                                    textShadow: "0 0 80px rgba(0,0,0,0.8)",
                                    fontFamily: "var(--font-bebas-neue)"
                                }}
                            >
                                JOURNEY
                            </motion.span>

                            <motion.span
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.92, duration: 0.55, ease: "easeOut" }}
                                className="font-bebas block leading-none w-full"
                                style={{
                                    fontSize: isMobile ? "clamp(18px, 4.5vw, 26px)" : "clamp(24px, 3.2vw, 44px)",
                                    color: "rgba(245,245,245,0.60)",
                                    letterSpacing: "0.08em",
                                    fontFamily: "var(--font-bebas-neue)"
                                }}
                            >
                                STARTS HERE.
                            </motion.span>
                        </h1>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.45, duration: 0.65, ease: "easeOut" }}
                            style={{
                                marginTop: "clamp(28px, 3.5vh, 52px)",
                                marginBottom: "clamp(20px, 2.5vh, 36px)",
                                fontFamily: "var(--font-dm-sans)",
                                fontSize: "clamp(13px, 1.4vw, 16px)",
                                color: "rgba(245,245,245,0.58)",
                                letterSpacing: "0.02em",
                                lineHeight: 1.75,
                                maxWidth: isMobile ? "300px" : "400px"
                            }}
                        >
                            <BlurText
                                text="Two branches. Certified trainers. Real results. No excuses."
                                className="mx-auto lg:mx-0 font-dm-sans"
                                delay={25}
                                animateBy="words"
                            />
                        </motion.div>

                        <div className="flex w-full justify-center lg:justify-start mb-4">
                            <OfferHeroPill />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.85, duration: 0.55, ease: "easeOut" }}
                            style={{
                                filter: "drop-shadow(0 6px 24px rgba(46,204,82,0.22))",
                                display: "inline-block",
                                width: isMobile ? "100%" : "auto",
                                minWidth: isMobile ? "auto" : "180px"
                            }}
                        >
                            <MagneticButton strength={isMobile ? 0 : 0.2} className="w-full lg:w-auto">
                                <button
                                    onClick={navigateToContact}
                                    className="w-full h-[52px] bg-[#2ECC52] text-[#080808] font-dm text-[13px] font-bold uppercase tracking-[0.08em] rounded-[2px] transition-all hover:brightness-110 flex items-center justify-center"
                                    style={{ fontFamily: "var(--font-dm-sans)" }}
                                >
                                    JOIN NOW →
                                </button>
                            </MagneticButton>
                        </motion.div>
                    </>
                )}
            </div>



            {mounted && !isSmallHeight && (
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
                    style={{ opacity: scrollIndicatorOpacity }}
                >
                    <div className="relative w-[1px] h-12 bg-[rgba(255,255,255,0.18)]">
                        <motion.div
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-[4px] rounded-full bg-[#2ECC52]"
                            animate={{ y: [0, 36, 0] }}
                            transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
                        />
                    </div>
                    <span
                        className="font-dm text-[9px] uppercase tracking-[0.28em] text-[rgba(245,245,245,0.28)]"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                        SCROLL
                    </span>
                </motion.div>
            )}

            {!isMobile && mounted && (
                <div className="absolute right-[8vw] xl:right-[12vw] top-[50%] -translate-y-[55%] flex flex-col items-center gap-12 z-[8]">
                    <motion.div
                        initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ delay: 1.0, duration: 1.0, ease: "easeOut" }}
                    >
                        <Image 
                            src="/images/RSFitness-Logo.png" 
                            alt="RS Fitness Logo" 
                            width={700} 
                            height={250} 
                            className="object-contain w-[380px] lg:w-[500px] xl:w-[700px] h-auto drop-shadow-[0_0_40px_rgba(46,204,82,0.15)] opacity-90"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        className="flex flex-row flex-wrap justify-center items-center gap-4 lg:gap-6 bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.08)] px-6 py-3.5 rounded-full drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                        initial="initial"
                        animate="animate"
                        aria-label="RS Fitness highlights"
                    >
                        {statPills.map((pill, i) => (
                            <motion.div
                                key={pill}
                                className="flex items-center gap-2.5"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.0 + i * 0.12, duration: 0.5, ease: "easeOut" }}
                            >
                                <span
                                    className="text-[#2ECC52]"
                                    style={{ fontSize: "8px", lineHeight: 1 }}
                                    aria-hidden="true"
                                >
                                    ●
                                </span>
                                <span
                                    className="font-dm text-[12px] xl:text-[13px] font-medium uppercase tracking-[0.16em] text-[rgba(245,245,245,0.7)]"
                                    style={{ fontFamily: "var(--font-dm-sans)" }}
                                >
                                    {pill}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            )}
        </section>
    );
}
