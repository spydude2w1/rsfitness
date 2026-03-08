export const metadata = {
    title: "Meet the Trainers | RS Fitness",
    description: "Get to know the certified coaches and personal trainers at RS Fitness.",
};

const trainers = [
    { name: "Sanjay", specialty: "Strength & Conditioning", experience: "5 Years" },
    { name: "Tarun", specialty: "Weight Loss & HIIT", experience: "4 Years" },
    { name: "Lokesh", specialty: "Bodybuilding & Muscle Gain", experience: "6 Years" },
    { name: "Roopesh", specialty: "Rehabilitation & Mobility", experience: "3 Years" },
];

export default function TrainersPage() {
    return (
        <div className="pt-32 pb-24 section-container">
            <div className="text-center mb-16">
                <h1 className="text-[48px] md:text-[72px] uppercase text-[#F5F5F5] leading-none tracking-wide" style={{ fontFamily: "var(--font-bebas-neue)" }}>
                    MEET THE <span className="text-[#2ECC52]">TRAINERS</span>
                </h1>
                <p className="text-[rgba(245,245,245,0.6)] mt-4">Every coach at RS is certified, experienced, and dedicated to your results.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {trainers.map((t) => (
                    <div key={t.name} className="bg-[#111111] border border-[rgba(255,255,255,0.06)] rounded-[2px] overflow-hidden group hover:border-[rgba(46,204,82,0.3)] transition-colors">
                        <div className="aspect-[3/4] bg-[#0c0c0c] flex items-center justify-center relative">
                            <span className="text-[rgba(245,245,245,0.15)] text-[12px] uppercase tracking-widest">{t.name} Photo</span>
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-[24px] uppercase tracking-wider text-[#F5F5F5] group-hover:text-[#2ECC52] transition-colors" style={{ fontFamily: "var(--font-bebas-neue)" }}>{t.name}</h3>
                            <p className="text-[14px] text-[rgba(245,245,245,0.6)] mt-1">{t.specialty}</p>
                            <p className="text-[12px] text-[#2ECC52] mt-3 tracking-widest uppercase">{t.experience} Experience</p>

                            <button className="w-full mt-6 py-3 bg-[rgba(245,245,245,0.05)] hover:bg-[#2ECC52] text-[13px] hover:text-[#080808] font-bold tracking-widest uppercase rounded-[2px] transition-all">
                                Train with {t.name.split(" ")[0]}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
