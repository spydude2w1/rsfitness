import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export const metadata = {
    title: "Page Not Found | RS Fitness",
    description: "Looks like this page skipped leg day.",
};

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center section-container text-center">
            <AnimatedShinyText className="text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase text-[#2ECC52] mb-6">
                404 ERROR
            </AnimatedShinyText>
            <h1 className="text-[clamp(48px,8vw,96px)] leading-none tracking-wide text-[#F5F5F5] mb-6" style={{ fontFamily: "var(--font-bebas-neue)" }}>
                LOOKS LIKE THIS PAGE <br className="hidden md:block" /> SKIPPED LEG DAY.
            </h1>
            <p className="text-[15px] md:text-[18px] text-[rgba(245,245,245,0.6)] max-w-[500px] mb-10">
                The link you followed might be broken, or the page may have been removed. Let&apos;s get you back to your workout.
            </p>
            <Link href="/">
                <ShimmerButton className="h-[48px] px-8 text-[14px] font-semibold tracking-wider uppercase rounded-[2px]" shimmerColor="#2ECC52" shimmerSize="0.08em" background="#2ECC52">
                    <span className="text-[#080808] font-bold">BACK TO HOME →</span>
                </ShimmerButton>
            </Link>
        </div>
    );
}
