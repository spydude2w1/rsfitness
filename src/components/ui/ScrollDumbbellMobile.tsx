"use client"

import { motion, useTransform, useSpring } from "framer-motion"
import type { MotionValue } from "framer-motion"
import { useReducedMotion } from "@/lib/hooks"

interface ScrollDumbbellMobileProps {
    scrollYProgress: MotionValue<number>
}

export default function ScrollDumbbellMobile({
    scrollYProgress,
}: ScrollDumbbellMobileProps) {
    const prefersReduced = useReducedMotion()

    if (prefersReduced) return null

    const svgX = useTransform(scrollYProgress, [0, 0.40, 0.85, 1.0], ["8vw", "0vw", "-12vw", "-22vw"])
    const svgY = useTransform(scrollYProgress, [0, 0.40, 0.85, 1.0], ["20vh", "5vh", "-8vh", "-18vh"])
    const svgRotate = useTransform(scrollYProgress, [0, 1], [-18, 210])
    const svgOpacity = useTransform(scrollYProgress, [0, 0.05, 0.10, 0.72, 0.90, 1.0], [0, 0, 0.50, 0.50, 0.18, 0])
    const svgScale = useTransform(scrollYProgress, [0, 0.07, 0.12, 0.78, 1.0], [0.0, 0.4, 0.85, 0.85, 0.45])

    const smoothX = useSpring(svgX, { stiffness: 60, damping: 20 })
    const smoothY = useSpring(svgY, { stiffness: 60, damping: 20 })
    const smoothRotate = useSpring(svgRotate, { stiffness: 70, damping: 22 })
    const smoothOpacity = useSpring(svgOpacity, { stiffness: 80, damping: 24 })
    const smoothScale = useSpring(svgScale, { stiffness: 80, damping: 24 })

    return (
        <motion.div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                translateX: smoothX,
                translateY: smoothY,
                rotate: smoothRotate,
                opacity: smoothOpacity,
                scale: smoothScale,
                pointerEvents: "none",
                zIndex: 5,
                transformOrigin: "center center",
            }}
            aria-hidden="true"
        >
            <svg width="260" height="80" viewBox="0 0 260 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
                <rect x="72" y="37" width="116" height="6" rx="3" fill="#1C1C1C" />
                <rect x="28" y="14" width="14" height="52" rx="2" fill="#121212" />
                <rect x="42" y="18" width="12" height="44" rx="2" fill="#1A1A1A" />
                <rect x="54" y="23" width="10" height="34" rx="2" fill="#222222" />
                <rect x="66" y="28" width="6" height="24" rx="1" fill="#2ECC52" />
                <rect x="188" y="28" width="6" height="24" rx="1" fill="#2ECC52" />
                <rect x="196" y="23" width="10" height="34" rx="2" fill="#222222" />
                <rect x="206" y="18" width="12" height="44" rx="2" fill="#1A1A1A" />
                <rect x="218" y="14" width="14" height="52" rx="2" fill="#121212" />
                <rect x="72" y="37" width="116" height="2" rx="1" fill="rgba(255,255,255,0.12)" />
            </svg>
        </motion.div>
    )
}
