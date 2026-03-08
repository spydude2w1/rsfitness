"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    // Hongasandra
    ...Array.from({ length: 6 }).map((_, i) => ({
        id: `hongasandra-${i + 1}`,
        src: `/images/hongasandra-branch/${i + 1}.webp`,
        category: "HONGASANDRA",
        alt: `Hongasandra Branch Interior ${i + 1}`
    })),
    // Akshayanagar
    ...Array.from({ length: 4 }).map((_, i) => ({
        id: `akshayanagar-${i + 1}`,
        src: `/images/akshayanagar-branch/${i + 1}.webp`,
        category: "AKSHAYANAGAR",
        alt: `Akshayanagar Branch Interior ${i + 1}`
    })),
    // RS Cafe
    { id: "cafe-main", src: "/images/rs-cafe/main.webp", category: "RS CAFE", alt: "RS Cafe Exterior" },
    { id: "cafe-1", src: "/images/rs-cafe/1.webp", category: "RS CAFE", alt: "RS Cafe Interior 1" },
    { id: "cafe-2", src: "/images/rs-cafe/2.webp", category: "RS CAFE", alt: "RS Cafe Interior 2" },
    { id: "cafe-menu1", src: "/images/rs-cafe/menu1.webp", category: "RS CAFE", alt: "RS Cafe Menu Page 1" },
    { id: "cafe-menu2", src: "/images/rs-cafe/menu2.webp", category: "RS CAFE", alt: "RS Cafe Menu Page 2" },
];

const CATEGORIES = ["ALL", "HONGASANDRA", "AKSHAYANAGAR", "RS CAFE"];

export default function GalleryClient() {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get("tab");
    
    // Validate the initialCategory against CATEGORIES
    const [activeCategory, setActiveCategory] = useState("ALL");

    useEffect(() => {
        if (tabParam) {
            const formatted = tabParam.toUpperCase().replace("-", " ");
            if (CATEGORIES.includes(formatted)) {
                setActiveCategory(formatted);
            }
        }
    }, [tabParam]);

    const filteredImages = activeCategory === "ALL" 
        ? images 
        : images.filter(img => img.category === activeCategory);

    return (
        <div className="pt-32 pb-24 section-container min-h-screen">
            <div className="text-center mb-16">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[48px] md:text-[72px] uppercase text-[#F5F5F5] leading-none tracking-wide" 
                    style={{ fontFamily: "var(--font-bebas-neue)" }}
                >
                    OUR <span className="text-[#2ECC52]">GALLERY</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[rgba(245,245,245,0.6)] mt-4"
                >
                    Take a look inside RS Fitness.
                </motion.p>
            </div>

            <div className="flex items-center justify-start md:justify-center gap-3 mb-10 overflow-x-auto pb-4 scrollbar-hide w-full max-w-full px-2 snap-x">
                {CATEGORIES.map((cat, idx) => (
                    <motion.button 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.05 }}
                        key={cat} 
                        onClick={() => setActiveCategory(cat)}
                        className={`text-[12px] font-bold tracking-widest uppercase px-6 py-2 border rounded-[2px] transition-all whitespace-nowrap snap-center ${
                            activeCategory === cat 
                                ? "border-[#2ECC52] text-[#080808] bg-[#2ECC52]" 
                                : "border-[rgba(255,255,255,0.1)] text-[rgba(245,245,245,0.5)] hover:border-[#2ECC52] hover:text-[#2ECC52] bg-transparent"
                        }`}
                    >
                        {cat}
                    </motion.button>
                ))}
            </div>

            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <AnimatePresence mode="popLayout">
                    {filteredImages.map((img) => (
                        <motion.div 
                            layout
                            key={img.id} 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="aspect-square bg-[#111111] border border-[rgba(255,255,255,0.06)] rounded-[2px] overflow-hidden group relative cursor-pointer"
                        >
                            {img.src ? (
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            ) : (
                                <div className="w-full h-full bg-[#0c0c0c] flex flex-col items-center justify-center group-hover:bg-[rgba(46,204,82,0.05)] transition-colors">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[rgba(245,245,245,0.2)] mb-2 group-hover:text-[#2ECC52] transition-colors"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                                    <span className="text-[rgba(245,245,245,0.15)] text-[10px] uppercase tracking-widest group-hover:text-[#2ECC52] transition-colors text-center px-4">RS Cafe Coming Soon</span>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                                <span className="text-white text-[10px] font-bold tracking-widest uppercase">{img.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
