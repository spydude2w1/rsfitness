"use client"

import { motion } from "framer-motion"
import { OFFER } from "@/lib/offerConfig"
import { useReducedMotion } from "@/lib/hooks"
import { cn } from "@/lib/utils"

// The text that rotates around the circle
// Spaces between words create visual separation as it spins
const BADGE_TEXT = `FOUNDING MEMBER · ${OFFER.spotsRemaining} SPOTS LEFT · ₹${OFFER.effectiveMonthly}/MO · GRAND OPENING · `

export default function FoundingBadge() {
  const prefersReduced = useReducedMotion()
  if (OFFER.isClosed) return null

  // Generate SVG text path for circular text
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const chars = BADGE_TEXT.split("")

  return (
    <motion.div
      className={cn(
        // Desktop: bottom right of hero
        "absolute bottom-10 right-8 z-20",
        // Mobile: top right, below navbar
        "lg:bottom-10 lg:right-10",
        "hidden sm:block",  // hidden on very small phones
      )}
      initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 2.8, duration: 0.7, ease: "easeOut" }}
      aria-label={`Founding member offer: ${OFFER.spotsRemaining} spots remaining`}
    >
      {/* Outer spinning ring */}
      <motion.div
        animate={{ rotate: prefersReduced ? 0 : 360 }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
        className="w-[128px] h-[128px] lg:w-[148px] lg:h-[148px] relative"
      >
        <svg
          viewBox="0 0 140 140"
          width="100%"
          height="100%"
          aria-hidden="true"
        >
          {/* Text path circle */}
          <defs>
            <path
              id="badge-circle"
              d="M 70,70 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
            />
          </defs>

          {/* Subtle outer ring */}
          <circle
            cx="70" cy="70" r="58"
            fill="none"
            stroke="rgba(46,204,82,0.15)"
            strokeWidth="1"
          />
          {/* Inner ring */}
          <circle
            cx="70" cy="70" r="46"
            fill="rgba(8,8,8,0.85)"
            stroke="rgba(46,204,82,0.30)"
            strokeWidth="1"
          />

          {/* Circular text */}
          <text
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "9.5px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              fill: "rgba(245,245,245,0.75)",
              textTransform: "uppercase",
            }}
          >
            <textPath href="#badge-circle" startOffset="0%">
              {BADGE_TEXT}
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Center — static, does not rotate */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        {/* Star symbol */}
        <span
          className="font-bebas text-[#2ECC52] leading-none mb-0.5"
          style={{ fontSize: "20px" }}
          aria-hidden="true"
        >
          ✦
        </span>
        {/* Spot count */}
        <span
          className="font-bebas text-[#F5F5F5] leading-none"
          style={{ fontSize: "22px", letterSpacing: "0.02em" }}
        >
          {OFFER.spotsRemaining}
        </span>
        {/* Label */}
        <span
          className="font-dm text-[rgba(245,245,245,0.55)] leading-none mt-0.5 uppercase tracking-widest"
          style={{ fontSize: "7px" }}
        >
          SPOTS
        </span>
      </div>

      {/* Pulse ring — draws the eye */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            "0 0 0 0px rgba(46,204,82,0.20)",
            "0 0 0 8px rgba(46,204,82,0.00)",
          ]
        }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        aria-hidden="true"
      />
    </motion.div>
  )
}
