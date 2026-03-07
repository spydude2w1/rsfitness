export const metadata = {
    title: "Privacy Policy | RS Fitness",
    description: "Standard privacy policy covering form data collection, Google Analytics usage, and data storage.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="pt-32 pb-24 section-container min-h-screen">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-[48px] md:text-[64px] uppercase text-[#F5F5F5] leading-none tracking-wide mb-8" style={{ fontFamily: "var(--font-bebas-neue)" }}>
                    PRIVACY <span className="text-[#2ECC52]">POLICY</span>
                </h1>

                <div className="space-y-8 text-[15px] text-[rgba(245,245,245,0.65)] leading-relaxed">
                    <section>
                        <h2 className="text-[18px] uppercase tracking-wider text-[#F5F5F5] mb-3" style={{ fontFamily: "var(--font-bebas-neue)" }}>1. Data Collection</h2>
                        <p>We collect basic information via our contact forms such as your name, phone number, and branch preference. This allows us to reach out regarding your enquiry, trials, and membership options. We do not sell your personal data.</p>
                    </section>

                    <section>
                        <h2 className="text-[18px] uppercase tracking-wider text-[#F5F5F5] mb-3" style={{ fontFamily: "var(--font-bebas-neue)" }}>2. Analytics</h2>
                        <p>Our website uses Google Analytics to help us understand visitor traffic and interaction patterns. This involves placing cookies on your device to analyze usage anonymously.</p>
                    </section>

                    <section>
                        <h2 className="text-[18px] uppercase tracking-wider text-[#F5F5F5] mb-3" style={{ fontFamily: "var(--font-bebas-neue)" }}>3. Communications</h2>
                        <p>By submitting your phone number via our forms or WhatsApp links, you agree to receive follow-up messages regarding RS Fitness services from our official channels.</p>
                    </section>

                    <section>
                        <h2 className="text-[18px] uppercase tracking-wider text-[#F5F5F5] mb-3" style={{ fontFamily: "var(--font-bebas-neue)" }}>4. Data Storage</h2>
                        <p>Your details are safely stored within our internal member management systems and are only accessible by authorized RS Fitness staff.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
