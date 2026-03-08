// ─────────────────────────────────────────────
// RS FITNESS — GRAND OPENING OFFER CONFIGURATION
// Update this file to change offer details sitewide.
// ─────────────────────────────────────────────

export const OFFER = {
  // Core offer details
  branch:           "AKSHAYANAGAR",
  event:            "GRAND OPENING",
  totalSpots:       50,

  // MANUALLY UPDATE this number as members join.
  // When claimedSpots === totalSpots, the offer closes automatically.
  claimedSpots:     18,   // ← UPDATE THIS as real members join

  // Pricing
  price:            2999,
  priceCurrency:    "₹",
  pricePeriods:     3,        // months paid
  freeMonths:       3,        // months free
  totalMonths:      6,        // pricePeriods + freeMonths
  renewalDiscount:  30,       // percent off future renewals

  // Derived values (computed, do not edit)
  effectiveMonthly: Math.round(2999 / 6),   // ₹499/month
  savingsVsNormal:  (999 * 6) - 2999,       // vs ₹999/mo standard rate

  // Copy strings
  pill:             "⚡ GRAND OPENING OFFER",
  headline:         "FOUNDING MEMBER",
  subheadline:      "AKSHAYANAGAR GRAND OPENING",
  hookLine:         `6 MONTHS FOR ₹${Math.round(2999 / 6)}/MONTH`,
  urgencyLine:      `Only ${50 - 18} founding spots remaining`,
  ctaButton:        "CLAIM MY FOUNDING SPOT →",
  ctaButtonShort:   "CLAIM SPOT →",
  whatsappMessage:  "Hi! I want to claim a Founding Member spot at the Akshayanagar branch. The ₹2,999 for 6 months offer.",
  finePrint:        "*Founding Member offer valid for Akshayanagar branch only. First 50 members. 3 months paid + 3 months free. 30% off all future renewal fees. Cannot be combined with other offers.",

  // Features list for the offer card
  features: [
    { text: "3 months gym access",         highlight: false },
    { text: "3 months completely FREE",     highlight: true  },  // green
    { text: "30% off all future renewals", highlight: true  },  // green
    { text: "Certified trainer access",    highlight: false },
    { text: "All equipment included",      highlight: false },
    { text: "RS Cafe 15% discount",        highlight: false },
  ],

  // Offer state — auto-computed
  get spotsRemaining() { return this.totalSpots - this.claimedSpots },
  get percentClaimed() { return (this.claimedSpots / this.totalSpots) * 100 },
  get isClosed()       { return this.claimedSpots >= this.totalSpots },
  get isUrgent()       { return this.spotsRemaining <= 10 },  // red urgency when ≤10 left
} as const

// WhatsApp CTA URL — pre-filled message
export const WHATSAPP_URL = `https://wa.me/917349089859?text=${encodeURIComponent(OFFER.whatsappMessage)}`

// Contact form anchor with branch pre-selection
export const OFFER_CTA_URL = "#contact?branch=akshayanagar"
