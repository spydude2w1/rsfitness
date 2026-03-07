export const metadata = {
    title: "Current Offers | RS Fitness",
    description: "Check out the latest promotions, referral programs, and inaugural discounts.",
};

export default function OffersPage() {
    return (
        <div className="pt-32 pb-24 section-container">
            <div className="text-center mb-16">
                <h1 className="text-[48px] md:text-[72px] uppercase text-[#F5F5F5] leading-none tracking-wide" style={{ fontFamily: "var(--font-bebas-neue)" }}>
                    CURRENT <span className="text-[#2ECC52]">OFFERS</span>
                </h1>
                <p className="text-[rgba(245,245,245,0.6)] mt-4">Take advantage of our ongoing promos across all branches.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-[#111111] p-8 border border-[rgba(255,255,255,0.06)] hover:border-[rgba(46,204,82,0.3)] transition-colors rounded-[2px]">
                    <span className="text-[11px] font-bold text-[#2ECC52] uppercase tracking-[0.2em] block mb-2">Akshayanagar Branch</span>
                    <h2 className="text-[32px] md:text-[40px] tracking-wide text-[#F5F5F5] mb-4 leading-none" style={{ fontFamily: "var(--font-bebas-neue)" }}>Launch Deal</h2>
                    <p className="text-[15px] text-[rgba(245,245,245,0.6)] mb-8">Get 20% off all quarterly and yearly memberships during our inaugural month at the new Akshayanagar location.</p>
                    <a href="/contact" className="inline-block px-8 py-3 bg-[#2ECC52] text-[#080808] text-[13px] font-bold tracking-widest uppercase rounded-[2px] hover:bg-white transition-colors">Claim Offer</a>
                </div>

                <div className="bg-[#111111] p-8 border border-[rgba(255,255,255,0.06)] hover:border-[rgba(46,204,82,0.3)] transition-colors rounded-[2px]">
                    <span className="text-[11px] font-bold text-[#2ECC52] uppercase tracking-[0.2em] block mb-2">All Branches</span>
                    <h2 className="text-[32px] md:text-[40px] tracking-wide text-[#F5F5F5] mb-4 leading-none" style={{ fontFamily: "var(--font-bebas-neue)" }}>Refer a Friend</h2>
                    <p className="text-[15px] text-[rgba(245,245,245,0.6)] mb-8">Bring a friend to any RS location. If they sign up for a 6-month or longer plan, you both get 1 month of free membership added to your plan.</p>
                    <a href="/contact" className="inline-block px-8 py-3 bg-[#2ECC52] text-[#080808] text-[13px] font-bold tracking-widest uppercase rounded-[2px] hover:bg-white transition-colors">Claim Offer</a>
                </div>
            </div>
        </div>
    );
}
