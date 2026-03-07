export const metadata = {
    title: "Our Story | RS Fitness",
    description: "The founding story of RS Fitness, the community philosophy, and what makes us different.",
};

export default function AboutPage() {
    return (
        <div className="pt-32 pb-24 section-container">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-[48px] md:text-[72px] uppercase text-[#F5F5F5] mb-8 leading-none tracking-wide" style={{ fontFamily: "var(--font-bebas-neue)" }}>
                    OUR <span className="text-[#2ECC52]">STORY</span>
                </h1>
                <div className="space-y-6 text-[rgba(245,245,245,0.7)] text-[16px] leading-relaxed">
                    <p>
                        Welcome to RS Fitness. We started with a simple belief: fitness isn't just about the equipment; it's about the environment, the guidance, and the community.
                    </p>
                    <p>
                        With two branches currently serving Hongasandra and Akshayanagar, we are redefining what a premium gym experience feels like. It's not just a place to sweat, but a hub to transform. Our state-of-the-art RS Cafe ensures that your nutrition is just as dialled in as your training.
                    </p>
                    <p>
                        We don't believe in the typical chain-gym model of packing as many people in as possible and leaving them to figure it out. We believe in actual coaching. That's why our certified team of trainers is always on the floor, making sure every rep counts.
                    </p>
                </div>
            </div>
        </div>
    );
}
