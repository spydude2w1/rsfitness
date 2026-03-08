"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll } from "framer-motion"
import { OFFER } from "@/lib/offerConfig"
import { cn } from "@/lib/utils"

const FLOAT_DISMISS_KEY = "rs-float-offer-dismissed"

export default function FloatingOfferNotification() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    if (OFFER.isClosed) return
    if (sessionStorage.getItem(FLOAT_DISMISS_KEY)) {
      setDismissed(true)
      return
    }

    const unsubscribe = scrollY.on("change", (y) => {
      // Get the offer section position
      const offerSection = document.getElementById("grand-opening-offer")
      if (!offerSection) return

      const sectionBottom = offerSection.offsetTop + offerSection.offsetHeight

      // Show notification after scrolling past the offer section
      // Hide it if they scroll back up to it
      setVisible(!dismissed && y > sectionBottom + 100)
    })

    return unsubscribe
  }, [scrollY, dismissed])

  const dismiss = () => {
    setVisible(false)
    setDismissed(true)
    sessionStorage.setItem(FLOAT_DISMISS_KEY, "true")
  }

  if (OFFER.isClosed || dismissed) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.30, ease: "easeOut" }}
          className="fixed bottom-6 left-4 lg:left-6 z-50"
          role="complementary"
          aria-label="Founding member offer reminder"
        >
          <div
            className="flex items-center gap-3 pr-2 pl-4 py-3 rounded-[2px]"
            style={{
              background: "#111111",
              border: "1px solid rgba(46,204,82,0.30)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.50), 0 0 0 1px rgba(46,204,82,0.05)",
              maxWidth: "320px",
            }}
          >
            {/* Pulsing dot */}
            <span className="relative flex-shrink-0 flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ECC52] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ECC52]" />
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="font-dm text-[11px] font-semibold uppercase tracking-[0.10em] text-[#2ECC52]">
                Founding Offer Still Available
              </p>
              <p className="font-dm text-[12px] text-[rgba(245,245,245,0.65)] mt-0.5 truncate">
                {OFFER.spotsRemaining} spots · 6 months ₹2,999
              </p>
            </div>

            {/* Claim link */}
            <a
              href="#grand-opening-offer"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("grand-opening-offer")?.scrollIntoView({
                  behavior: "smooth"
                })
              }}
              className="flex-shrink-0 font-dm text-[10px] font-bold uppercase tracking-wider text-[#080808] bg-[#2ECC52] px-2.5 py-1.5 rounded-[2px] hover:bg-[rgba(46,204,82,0.85)] transition-colors duration-150 whitespace-nowrap"
            >
              CLAIM
            </a>

            {/* Dismiss */}
            <button
              onClick={dismiss}
              aria-label="Dismiss offer notification"
              className="flex-shrink-0 ml-1 text-[rgba(245,245,245,0.30)] hover:text-[rgba(245,245,245,0.70)] transition-colors duration-150 p-1"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
