"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { OFFER, WHATSAPP_URL } from "@/lib/offerConfig"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { BlurFade } from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"

// ── PROGRESS BAR ──────────────────────────────
function SpotsProgressBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  const pct = OFFER.percentClaimed
  // Color shifts to amber when < 20 spots, red when ≤ 10
  const barColor = OFFER.isUrgent
    ? "#EF4444"   // red — urgent
    : pct > 60
    ? "#F59E0B"   // amber — filling up
    : "#2ECC52"   // green — plenty of room

  return (
    <div ref={ref} className="w-full space-y-3">

      {/* Labels row */}
      <div className="flex items-center justify-between">
        <span className="font-dm text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(245,245,245,0.55)]">
          FOUNDING SPOTS CLAIMED
        </span>
        <span
          className="font-bebas text-[20px] leading-none"
          style={{ color: barColor }}
        >
          {OFFER.claimedSpots} / {OFFER.totalSpots}
        </span>
      </div>

      {/* Progress track */}
      <div
        className="relative w-full h-[6px] rounded-[2px] overflow-hidden"
        style={{ background: "rgba(255,255,255,0.08)" }}
        role="progressbar"
        aria-valuenow={OFFER.claimedSpots}
        aria-valuemin={0}
        aria-valuemax={OFFER.totalSpots}
        aria-label={`${OFFER.claimedSpots} of ${OFFER.totalSpots} founding spots claimed`}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-[2px]"
          style={{ background: barColor }}
          initial={{ width: "0%" }}
          animate={inView ? { width: `${pct}%` } : { width: "0%" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        />
        {/* Shimmer on bar */}
        <motion.div
          className="absolute inset-y-0 w-[60px]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
          }}
          animate={inView ? { x: ["-60px", `${pct * 3}px`] } : {}}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
        />
      </div>

      {/* Remaining spots — urgency line */}
      <p
        className="font-dm text-[13px] font-medium"
        style={{ color: OFFER.isUrgent ? "#EF4444" : "rgba(245,245,245,0.65)" }}
      >
        {OFFER.isUrgent && (
          <span className="mr-1.5">⚠</span>
        )}
        Only{" "}
        <span className="font-semibold" style={{ color: barColor }}>
          {OFFER.spotsRemaining} spots remaining
        </span>
        {" "}at this price
      </p>
    </div>
  )
}

// ── PRICE DISPLAY ─────────────────────────────
function PriceDisplay() {
  return (
    <div className="flex flex-col gap-1">
      {/* Full price — shown as what you pay */}
      <div className="flex items-baseline gap-3">
        <span
          className="font-bebas leading-none text-[#F5F5F5]"
          style={{ fontSize: "clamp(64px, 8vw, 96px)" }}
        >
          ₹2,999
        </span>
        <span className="font-dm text-[14px] text-[rgba(245,245,245,0.45)] pb-2">
          one time
        </span>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 my-1">
        <div className="h-[1px] w-12 bg-[rgba(46,204,82,0.40)]" />
        <span className="font-dm text-[11px] uppercase tracking-[0.14em] text-[rgba(245,245,245,0.35)]">
          works out to
        </span>
        <div className="h-[1px] flex-1 bg-[rgba(255,255,255,0.06)]" />
      </div>

      {/* Effective monthly — the hook */}
      <div className="flex items-baseline gap-2">
        <span
          className="font-bebas leading-none text-[#2ECC52]"
          style={{ fontSize: "clamp(40px, 5vw, 60px)" }}
        >
          ₹499
        </span>
        <span className="font-dm text-[15px] font-medium text-[rgba(245,245,245,0.70)]">
          / month
        </span>
      </div>

      {/* Duration explanation */}
      <p className="font-dm text-[13px] text-[rgba(245,245,245,0.50)] mt-1">
        3 months paid · 3 months{" "}
        <span className="text-[#2ECC52] font-semibold">completely FREE</span>
      </p>
    </div>
  )
}

// ── FEATURES LIST ─────────────────────────────
function FeaturesList() {
  return (
    <div
      className="rounded-[2px] p-5 lg:p-6 space-y-3"
      style={{
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <h3 className="font-dm text-[10px] font-semibold uppercase tracking-[0.18em] text-[rgba(245,245,245,0.40)] mb-4">
        WHAT'S INCLUDED
      </h3>

      {OFFER.features.map((feature, i) => (
        <BlurFade key={feature.text} delay={0.05 * i} inView>
          <div className="flex items-center gap-3">
            {/* Checkmark */}
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              className="flex-shrink-0"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="7.5" stroke="rgba(46,204,82,0.25)" />
              <path
                d="M4.5 8.5l2.5 2.5 4.5-5"
                stroke="#2ECC52"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Feature text */}
            <span
              className={cn(
                "font-dm text-[14px]",
                feature.highlight
                  ? "text-[#F5F5F5] font-medium"
                  : "text-[rgba(245,245,245,0.65)]"
              )}
            >
              {feature.text}
              {feature.highlight && (
                <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-[2px] bg-[rgba(46,204,82,0.12)] text-[#2ECC52] text-[9px] font-bold uppercase tracking-wider">
                  INCLUDED
                </span>
              )}
            </span>
          </div>
        </BlurFade>
      ))}

      {/* 30% renewal discount callout */}
      <div
        className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.06)] rounded-[2px] p-3"
        style={{ background: "rgba(46,204,82,0.06)" }}
      >
        <p className="font-dm text-[12px] text-[rgba(245,245,245,0.70)]">
          <span className="text-[#2ECC52] font-semibold">+30% off</span>
          {" "}all future membership renewal fees — forever, as long as you stay a member.
        </p>
      </div>
    </div>
  )
}

// ── MAIN SECTION EXPORT ───────────────────────
export default function GrandOpeningOffer() {
  // If offer is closed, show a waitlist state instead
  if (OFFER.isClosed) {
    return <OfferClosedWaitlist />
  }

  return (
    <section
      id="grand-opening-offer"
      className="relative w-full overflow-hidden grain-overlay"
      style={{ background: "#0A0D0A" }}  // Very dark green-black — unique to this section
      aria-labelledby="offer-headline"
    >
      {/* Subtle green radial glow behind the price */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 25% 50%, rgba(46,204,82,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container py-20 lg:py-28">

        {/* Section label */}
        <BlurFade delay={0} inView>
          <div className="flex items-center gap-2 mb-8">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ECC52] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ECC52]" />
            </span>
            <span className="section-label">⚡ LIMITED FOUNDING OFFER</span>
          </div>
        </BlurFade>

        {/* Main grid — left price + right features */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-8">

            {/* Headline */}
            <BlurFade delay={0.05} inView>
              <div>
                <h2
                  id="offer-headline"
                  className="font-bebas text-[#F5F5F5] leading-[0.92]"
                  style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
                >
                  FOUNDING<br />
                  <span className="text-[#2ECC52]">MEMBER</span>
                </h2>
                <p
                  className="font-bebas text-[rgba(245,245,245,0.45)] mt-1"
                  style={{ fontSize: "clamp(18px, 2.5vw, 26px)", letterSpacing: "0.06em" }}
                >
                  AKSHAYANAGAR GRAND OPENING
                </p>
              </div>
            </BlurFade>

            {/* Price */}
            <BlurFade delay={0.10} inView>
              <PriceDisplay />
            </BlurFade>

            {/* Progress bar */}
            <BlurFade delay={0.15} inView>
              <SpotsProgressBar />
            </BlurFade>

            {/* CTAs */}
            <BlurFade delay={0.20} inView>
              <div className="flex flex-col sm:flex-row gap-3">

                {/* Primary CTA — scroll to contact form */}
                <a
                  href="#contact"
                  className="flex-1 sm:flex-none"
                  onClick={(e) => {
                    e.preventDefault()
                    const event = new CustomEvent("offer-cta-click", {
                      detail: { branch: "akshayanagar", source: "offer-section" }
                    })
                    window.dispatchEvent(event)
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth", block: "start"
                    })
                  }}
                >
                  <ShimmerButton
                    className={cn(
                      "w-full sm:w-auto",
                      "font-dm text-[13px] font-bold uppercase tracking-[0.08em]",
                      "rounded-[2px] h-[52px] px-8",
                    )}
                    background="#2ECC52"
                    shimmerColor="rgba(255,255,255,0.20)"
                  >
                    {OFFER.ctaButton}
                  </ShimmerButton>
                </a>

                {/* Secondary CTA — WhatsApp */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex-1 sm:flex-none",
                    "inline-flex items-center justify-center gap-2",
                    "border border-[rgba(255,255,255,0.12)] text-[rgba(245,245,245,0.70)]",
                    "font-dm text-[12px] font-medium uppercase tracking-[0.08em]",
                    "px-6 h-[52px] rounded-[2px]",
                    "hover:border-[#2ECC52] hover:text-[#F5F5F5]",
                    "transition-all duration-200 ease-out",
                  )}
                >
                  {/* WhatsApp icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.842L.057 23.882l6.19-1.623A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.36-.213-3.727.977.997-3.645-.234-.374A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                  </svg>
                  WHATSAPP US
                </a>

              </div>
            </BlurFade>

            {/* Fine print */}
            <BlurFade delay={0.25} inView>
              <p className="font-dm text-[11px] italic text-[rgba(245,245,245,0.28)] leading-relaxed max-w-md">
                {OFFER.finePrint}
              </p>
            </BlurFade>

          </div>

          {/* ── RIGHT COLUMN ── */}
          <BlurFade delay={0.15} inView>
            <FeaturesList />
          </BlurFade>

        </div>
      </div>
    </section>
  )
}

// ── OFFER CLOSED STATE ────────────────────────
// Shown when claimedSpots >= totalSpots
function OfferClosedWaitlist() {
  return (
    <section
      id="grand-opening-offer"
      className="relative w-full overflow-hidden grain-overlay"
      style={{ background: "#0A0D0A" }}
    >
      <div className="section-container py-20 text-center">
        <p className="section-label mb-4">FOUNDING OFFER</p>
        <h2
          className="font-bebas text-[#F5F5F5] mb-2"
          style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
        >
          ALL 50 FOUNDING SPOTS CLAIMED
        </h2>
        <p className="font-dm text-[rgba(245,245,245,0.55)] text-[15px] mb-8 max-w-md mx-auto">
          The founding member offer has closed. Join the waitlist to be first in line for our next special offer.
        </p>
        <a
          href="#contact"
          className={cn(
            "inline-flex items-center justify-center",
            "border border-[#2ECC52] text-[#2ECC52]",
            "font-dm text-[13px] font-bold uppercase tracking-[0.08em]",
            "px-8 h-[52px] rounded-[2px]",
            "hover:bg-[#2ECC52] hover:text-[#080808]",
            "transition-all duration-200 ease-out",
          )}
        >
          JOIN THE WAITLIST →
        </a>
      </div>
    </section>
  )
}
