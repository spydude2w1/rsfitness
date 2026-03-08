"use client";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { RippleButton } from "@/components/ui/ripple-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { GlowCard } from "@/components/ui/spotlight-card";
import { OFFER } from "@/lib/offerConfig";
import { cn } from "@/lib/utils";

const GreenCheck = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ECC52" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>;
const Dash = () => <span className="text-[rgba(245,245,245,0.20)] text-[14px]">—</span>;

const plans = [
    { name: "1 MONTH", price: "₹2,999", period: "Monthly", features: [{ text: "Full Gym Access", included: true }, { text: "Locker Room", included: true }, { text: "Steam Access", included: false }], isFeatured: false },
    { name: "3 MONTHS", price: "₹4,999", period: "Quarterly", features: [{ text: "Full Gym Access", included: true }, { text: "Locker Room", included: true }, { text: "Steam Access", included: false }], isFeatured: false },
    { name: "6 MONTHS", price: "₹7,999", period: "Half Yearly", features: [{ text: "Full Gym Access", included: true }, { text: "Locker Room", included: true }, { text: "Steam Access", included: false }], isFeatured: false },
    { name: "12 MONTHS", price: "₹9,999", period: "Yearly", features: [{ text: "Full Gym Access", included: true }, { text: "Steam Access", included: true }, { text: "Free Gym Bag", included: true }, { text: "Free Jersey", included: true }, { text: "Free Shaker", included: true }], isFeatured: true },
];

function PlanCard({ plan }: { plan: typeof plans[0] }) {
    const pathname = usePathname();
    const router = useRouter();
    const scrollTo = () => {
        const contactEl = document.querySelector("#contact");
        if (contactEl) {
            contactEl.scrollIntoView({ behavior: "smooth" });
        } else {
            // Not on home page — navigate there
            router.push("/#contact");
        }
    };
    return (
        <GlowCard customSize={true} className="w-full !p-0 !gap-0 !grid-rows-1 !border-none" glowColor="green">
            <div className={`relative bg-[#111111] border border-[rgba(255,255,255,0.06)] rounded-[2px] p-6 lg:p-8 ${plan.isFeatured ? "lg:-my-4 lg:py-10" : ""} transition-all duration-250 hover:-translate-y-1.5`}>
                {plan.isFeatured && <BorderBeam size={150} duration={4} colorFrom="#2ECC52" colorTo="transparent" borderWidth={1.5} />}
                {plan.isFeatured && <div className="mb-4"><span className="text-[11px] tracking-[0.15em] uppercase text-[#2ECC52] font-semibold">MOST POPULAR</span></div>}
                <h3 className="text-[36px] tracking-wide text-[#F5F5F5] mb-2" style={{ fontFamily: "var(--font-bebas-neue)" }}>{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[56px] leading-none text-[#F5F5F5]" style={{ fontFamily: "var(--font-bebas-neue)" }}>{plan.price}</span>
                
                </div>
                <span className="text-[12px] uppercase tracking-[0.12em] text-[#2ECC52] block mb-6">{plan.period}</span>
                <div className="h-[1px] bg-[rgba(255,255,255,0.06)] mb-6" />
                <ul className="space-y-3 mb-8">{plan.features.map((f) => <li key={f.text} className="flex items-center gap-3">{f.included ? <GreenCheck /> : <Dash />}<span className={`text-[14px] ${f.included ? "text-[rgba(245,245,245,0.8)]" : "text-[rgba(245,245,245,0.30)]"}`}>{f.text}</span></li>)}</ul>
                {plan.isFeatured ? (
                    <ShimmerButton className="w-full h-[48px] text-[14px] font-semibold tracking-wider uppercase rounded-[2px] glow-green" shimmerColor="#2ECC52" shimmerSize="0.08em" background="#2ECC52" onClick={scrollTo}><span className="text-[#080808] font-semibold">SELECT {plan.name}</span></ShimmerButton>
                ) : (
                    <RippleButton className="w-full h-[48px] text-[14px] font-semibold tracking-wider uppercase rounded-[2px] border-[#2ECC52] text-[#2ECC52] hover:bg-[#2ECC52] hover:text-[#080808] bg-transparent transition-all duration-200" rippleColor="#2ECC52" onClick={scrollTo}>SELECT {plan.name}</RippleButton>
                )}
            </div>
        </GlowCard>
    );
}

function AkshayangarOfferNudge() {
  if (OFFER.isClosed) return null;

  return (
    <BlurFade delay={0} inView className="col-span-full mb-4">
      <a
        href="#grand-opening-offer"
        className={cn(
          "flex items-center justify-between gap-4",
          "p-4 rounded-[2px]",
          "group cursor-pointer",
          "transition-all duration-200 ease-out",
        )}
        style={{
          background: "rgba(46,204,82,0.06)",
          border: "1px solid rgba(46,204,82,0.20)",
        }}
        onClick={(e) => {
          e.preventDefault()
          document.getElementById("grand-opening-offer")?.scrollIntoView({
            behavior: "smooth"
          })
        }}
      >
        <div className="flex items-center gap-3">
          {/* Pulsing dot */}
          <span className="relative flex-shrink-0 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ECC52] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ECC52]" />
          </span>
          <p className="font-dm text-[12px] text-[rgba(245,245,245,0.80)]">
            <span className="text-[#2ECC52] font-semibold">
              Joining Akshayanagar?
            </span>
            {" "}Get 6 months for ₹2,999 — our founding member offer.{" "}
            <span className="text-[rgba(245,245,245,0.45)]">
              Only {OFFER.spotsRemaining} spots left.
            </span>
          </p>
        </div>
        <span className="flex-shrink-0 text-[#2ECC52] font-dm text-[11px] font-semibold uppercase tracking-wider group-hover:underline whitespace-nowrap">
          See Offer →
        </span>
      </a>
    </BlurFade>
  )
}

export default function MembershipPlans() {
    return (
        <section id="membership" className="relative py-20 lg:py-28 grain-overlay" style={{ backgroundColor: "#0A0A0A" }}>
            <div className="section-container">
                <div className="text-center mb-12 lg:mb-16">
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-4"><AnimatedShinyText className="section-label inline-block">MEMBERSHIP PLANS</AnimatedShinyText></motion.div>
                    <h2 className="text-[clamp(38px,5vw,64px)] leading-[1.05] tracking-wide text-[#F5F5F5] mb-4" style={{ fontFamily: "var(--font-bebas-neue)" }}>CHOOSE YOUR PLAN</h2>
                    <BlurFade delay={0.15} inView><p className="text-[15px] lg:text-[17px] text-[rgba(245,245,245,0.55)] max-w-[480px] mx-auto">Flexible plans for every fitness level. Start basic, go pro, or unlock everything with Elite.</p></BlurFade>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                    <AkshayangarOfferNudge />
                    {plans.map((plan, i) => <BlurFade key={plan.name} delay={i * 0.1} inView><PlanCard plan={plan} /></BlurFade>)}
                </div>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} viewport={{ once: true }} className="text-center text-[13px] text-[rgba(245,245,245,0.35)] italic mt-8">Prices may vary during offers.</motion.p>
            </div>
        </section>
    );
}
