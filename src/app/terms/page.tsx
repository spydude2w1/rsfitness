export const metadata = {
    title: "Terms & Conditions | RS Fitness",
    description: "Membership terms, cancellation policy, refund policy, and code of conduct.",
};

export default function TermsPage() {
    return (
        <div className="pt-32 pb-24 section-container min-h-screen">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-[48px] md:text-[64px] uppercase text-[#F5F5F5] leading-none tracking-wide mb-8" style={{ fontFamily: "var(--font-bebas-neue)" }}>
                    TERMS <span className="text-[#2ECC52]">&amp; CONDITIONS</span>
                </h1>

                <div className="space-y-8 text-[15px] text-[rgba(245,245,245,0.65)] leading-relaxed">
                    <section>
                        <h2 className="text-[18px] uppercase tracking-wider text-[#F5F5F5] mb-3" style={{ fontFamily: "var(--font-bebas-neue)" }}>1. Membership Terms</h2>
                        <p>All memberships are valid from the date of activation. Quarterly, semi-annual, and annual plans must be paid upfront unless a specific EMI scheme is agreed upon in writing.</p>
                    </section>

                    <section>
                        <h2 className="text-[18px] uppercase tracking-wider text-[#F5F5F5] mb-3" style={{ fontFamily: "var(--font-bebas-neue)" }}>2. Freezing Policy</h2>
                        <p>Annual memberships may be temporarily frozen for medical reasons or extended travel (minimum 14 days, maximum 2 months), subject to approval by gym management.</p>
                    </section>

                    <section>
                        <h2 className="text-[18px] uppercase tracking-wider text-[#F5F5F5] mb-3" style={{ fontFamily: "var(--font-bebas-neue)" }}>3. Refund Policy</h2>
                        <p>Membership fees are strictly non-refundable and non-transferable under any circumstances once the tenure has commenced.</p>
                    </section>

                    <section>
                        <h2 className="text-[18px] uppercase tracking-wider text-[#F5F5F5] mb-3" style={{ fontFamily: "var(--font-bebas-neue)" }}>4. Code of Conduct</h2>
                        <p>Members must re-rack weights after use, carry a towel, wear appropriate gym attire, and maintain a respectful atmosphere. RS Fitness reserves the right to terminate the membership of anyone violating gym etiquette.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
