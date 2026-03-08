"use client"

import { motion } from "framer-motion"
import { OFFER } from "@/lib/offerConfig"
import { BorderBeam } from "@/components/ui/border-beam"
import { cn } from "@/lib/utils"

export default function OfferHeroPill() {
  if (OFFER.isClosed) return null

  return (
    <motion.a
      href="#grand-opening-offer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.65, duration: 0.55, ease: "easeOut" }}
      className={cn(
        // Layout
        "relative inline-flex items-center gap-3 overflow-hidden",
        // Sizing
        "w-full lg:w-auto",
        "px-4 py-3 lg:px-5",
        // Background
        "bg-[#111111]",
        // Border
        "rounded-[2px]",
        // Hover
        "hover:bg-[#161616]",
        "transition-colors duration-200 ease-out",
        // Cursor
        "cursor-pointer group",
        // Block on mobile so it spans full width
        "flex",
      )}
      aria-label={`Grand opening offer: ${OFFER.spotsRemaining} founding spots remaining`}
      onClick={(e) => {
        e.preventDefault()
        document.getElementById("grand-opening-offer")?.scrollIntoView({
          behavior: "smooth", block: "start"
        })
      }}
    >
      {/* BorderBeam orbits the pill border */}
      <BorderBeam
        colorFrom="#2ECC52"
        colorTo="rgba(46,204,82,0)"
        duration={3}
        borderWidth={1}
        size={80}
      />

      {/* Pulsing dot — live signal */}
      <span className="relative flex-shrink-0 flex h-2 w-2" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ECC52] opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ECC52]" />
      </span>

      {/* Left — offer summary */}
      <span className="flex flex-col gap-0.5 min-w-0">
        <span className="font-dm text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2ECC52] whitespace-nowrap">
          ⚡ GRAND OPENING OFFER
        </span>
        <span className="font-dm text-[12px] font-medium text-[#F5F5F5] whitespace-nowrap">
          6 months for <strong>₹2,999</strong>
          <span className="text-[rgba(245,245,245,0.50)] ml-1.5 text-[11px]">
            · {OFFER.spotsRemaining} spots left
          </span>
        </span>
      </span>

      {/* Right — arrow */}
      <motion.span
        className="ml-auto flex-shrink-0 text-[rgba(245,245,245,0.40)] group-hover:text-[#2ECC52] transition-colors duration-150"
        whileHover={{ x: 3 }}
        transition={{ duration: 0.15 }}
        aria-hidden="true"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.span>
    </motion.a>
  )
}
