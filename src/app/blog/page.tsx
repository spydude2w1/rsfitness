export const metadata = {
    title: "Blog | RS Fitness",
    description: "Fitness tips, nutrition advice, and community updates from RS Fitness.",
};

export default function BlogPage() {
    return (
        <div className="pt-32 pb-24 section-container min-h-screen">
            <div className="text-center mb-16">
                <h1 className="text-[48px] md:text-[72px] uppercase text-[#F5F5F5] leading-none tracking-wide" style={{ fontFamily: "var(--font-bebas-neue)" }}>
                    RS <span className="text-[#2ECC52]">BLOG</span>
                </h1>
                <p className="text-[rgba(245,245,245,0.6)] mt-4">Training insights, nutrition guides, and gym news.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "5 Common Mistakes on the Bench Press", cat: "Training", date: "Oct 12, 2025" },
                    { title: "Why Protein Timing Actually Matters", cat: "Nutrition", date: "Sep 28, 2025" },
                    { title: "Touring the New Akshayanagar Branch", cat: "Community", date: "Sep 15, 2025" }
                ].map((post, i) => (
                    <div key={i} className="bg-[#111111] border border-[rgba(255,255,255,0.06)] rounded-[2px] p-6 hover:border-[rgba(46,204,82,0.3)] group transition-colors flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-bold text-[#2ECC52] uppercase tracking-[0.2em]">{post.cat}</span>
                            <span className="text-[12px] text-[rgba(245,245,245,0.4)]">{post.date}</span>
                        </div>
                        <h2 className="text-[24px] uppercase tracking-wider text-[#F5F5F5] mb-4 group-hover:text-[#2ECC52] transition-colors" style={{ fontFamily: "var(--font-bebas-neue)" }}>
                            {post.title}
                        </h2>
                        <p className="text-[14px] text-[rgba(245,245,245,0.6)] mb-6 flex-1">
                            Read more about {post.title.toLowerCase()} and learn how to optimize your lifestyle.
                        </p>
                        <a href="#" className="text-[12px] font-bold uppercase tracking-widest text-[#F5F5F5] group-hover:text-[#2ECC52] transition-colors">
                            Read Article →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
