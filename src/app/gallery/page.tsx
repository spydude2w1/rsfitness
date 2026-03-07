export const metadata = {
    title: "Gallery | RS Fitness",
    description: "Take a look inside RS Fitness gyms in Hongasandra and Akshayanagar.",
};

export default function GalleryPage() {
    return (
        <div className="pt-32 pb-24 section-container min-h-screen">
            <div className="text-center mb-16">
                <h1 className="text-[48px] md:text-[72px] uppercase text-[#F5F5F5] leading-none tracking-wide" style={{ fontFamily: "var(--font-bebas-neue)" }}>
                    OUR <span className="text-[#2ECC52]">GALLERY</span>
                </h1>
                <p className="text-[rgba(245,245,245,0.6)] mt-4">Take a look inside RS Fitness.</p>
            </div>

            <div className="flex items-center justify-center gap-4 mb-10 overflow-x-auto pb-4">
                {["ALL", "HONGASANDRA", "AKSHAYANAGAR", "RS CAFE"].map((cat) => (
                    <button key={cat} className={`text-[12px] font-bold tracking-widest uppercase px-6 py-2 border rounded-[2px] transition-colors ${cat === "ALL" ? "border-[#2ECC52] text-[#2ECC52]" : "border-[rgba(255,255,255,0.1)] text-[rgba(245,245,245,0.5)] hover:border-[#F5F5F5] hover:text-[#F5F5F5]"}`}>
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array(8).fill(0).map((_, i) => (
                    <div key={i} className="aspect-square bg-[#111111] border border-[rgba(255,255,255,0.06)] rounded-[2px] overflow-hidden group">
                        <div className="w-full h-full bg-[#0c0c0c] flex items-center justify-center group-hover:bg-[rgba(46,204,82,0.1)] transition-colors">
                            <span className="text-[rgba(245,245,245,0.15)] text-[10px] uppercase tracking-widest group-hover:text-[#2ECC52] transition-colors">Placeholder {i + 1}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
