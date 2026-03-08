"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { OFFER } from "@/lib/offerConfig"
import { cn } from "@/lib/utils"

const DISMISS_KEY = "rs-offer-strip-dismissed"

export default function AnnouncementStrip() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check sessionStorage — if dismissed this session, stay hidden
    const dismissed = sessionStorage.getItem(DISMISS_KEY)
    if (!dismissed && !OFFER.isClosed) {
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem(DISMISS_KEY, "true")
    // Let navbar know height is 0
    document.documentElement.style.setProperty('--strip-height', '0px')
  }

  // Don't render on server or if offer is closed
  if (!mounted || OFFER.isClosed) return null

  return (
    <AnimatePresence onExitComplete={() => document.documentElement.style.setProperty('--strip-height', '0px')}>
      {visible && (
        <motion.div
          id="announcement-strip"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          onAnimationComplete={() => {
            document.documentElement.style.setProperty('--strip-height', visible ? '44px' : '0px')
          }}
          className="relative z-[60] overflow-hidden"
          style={{ background: "#0D1F12" }}
        >
          <div
            className="flex items-center justify-between px-4 lg:px-8"
            style={{
              height: "44px",
              borderBottom: "1px solid rgba(46,204,82,0.25)",
            }}
          >

            {/* Left — Lightning icon + copy */}
            <div className="flex items-center gap-3 min-w-0">
              {/* Pulsing dot — signals live/active offer */}
              <span className="relative flex-shrink-0 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ECC52] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ECC52]" />
              </span>

              {/* Desktop copy */}
              <p className="hidden md:flex items-center gap-2 font-dm text-[11px] font-semibold uppercase tracking-[0.12em] text-[#F5F5F5] whitespace-nowrap">
                <span className="text-[#2ECC52]">AKSHAYANAGAR GRAND OPENING</span>
                <span className="text-[rgba(245,245,245,0.35)]">·</span>
                <span>
                  ONLY{" "}
                  <span className="text-[#2ECC52]">{OFFER.spotsRemaining} SPOTS</span>
                  {" "}LEFT
                </span>
                <span className="text-[rgba(245,245,245,0.35)]">·</span>
                <span>6 MONTHS @ ₹{OFFER.effectiveMonthly}/MO</span>
              </p>

              {/* Mobile copy — shorter */}
              <p className="flex md:hidden items-center gap-2 font-dm text-[10px] font-semibold uppercase tracking-[0.10em] text-[#F5F5F5] whitespace-nowrap overflow-hidden">
                <span className="text-[#2ECC52] flex-shrink-0">{OFFER.spotsRemaining} SPOTS LEFT</span>
                <span className="text-[rgba(245,245,245,0.35)] flex-shrink-0">·</span>
                <span className="flex-shrink-0">₹2,999 FOR 6 MO</span>
              </p>
            </div>

            {/* Right — CTA + dismiss */}
            <div className="flex items-center gap-3 flex-shrink-0 ml-4">
              {/* Claim CTA */}
              <a
                href="#contact"
                onClick={() => {
                  // Pre-select Akshayanagar branch in contact form
                  const event = new CustomEvent("offer-cta-click", {
                    detail: { branch: "akshayanagar", source: "announcement-strip" }
                  })
                  window.dispatchEvent(event)
                }}
                className={cn(
                  "font-dm text-[10px] font-bold uppercase tracking-[0.10em]",
                  "text-[#080808] bg-[#2ECC52]",
                  "px-3 py-1.5 rounded-[2px]",
                  "hover:bg-[rgba(46,204,82,0.85)]",
                  "transition-all duration-150 ease-out",
                  "whitespace-nowrap"
                )}
              >
                <span className="hidden sm:inline">CLAIM NOW →</span>
                <span className="inline sm:hidden">CLAIM →</span>
              </a>

              {/* Dismiss */}
              <button
                onClick={dismiss}
                aria-label="Dismiss announcement"
                className={cn(
                  "text-[rgba(245,245,245,0.40)] hover:text-[#F5F5F5]",
                  "transition-colors duration-150",
                  "p-1 rounded-[2px]",
                  "flex-shrink-0"
                )}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
