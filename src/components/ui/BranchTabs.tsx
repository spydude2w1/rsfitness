"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface BranchTabsProps {
    branchId: "hongasandra" | "akshayanagar";
    overviewContent: React.ReactNode;
    amenities: { icon: React.ReactNode; label: string }[];
    equipment: { category: string; items: string[] }[];
    trainers?: { name: string; instagramUrl: string }[];
}

type TabType = "overview" | "amenities" | "equipment" | "trainers";

export function BranchTabs({ branchId, overviewContent, amenities, equipment, trainers }: BranchTabsProps) {
    const [activeTab, setActiveTab] = useState<TabType>("overview");

    const tabs: { id: TabType; label: string }[] = [
        { id: "overview", label: "Overview" },
        { id: "amenities", label: "Amenities" },
        { id: "equipment", label: "Equipment" },
        { id: "trainers", label: "Trainers" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "overview":
                return <div>{overviewContent}</div>;
            case "amenities":
                return (
                    <div className="p-5 overflow-hidden">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            {amenities.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center justify-center p-3 text-center group hover:-translate-y-[2px] transition-transform duration-200 ease-out"
                                >
                                    <div className="text-[rgba(255,255,255,0.65)] group-hover:text-[#2ECC52] transition-colors duration-200 mb-2">
                                        {item.icon}
                                    </div>
                                    <span className="text-[11px] text-[rgba(245,245,245,0.55)] uppercase tracking-[0.10em]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "equipment":
                return (
                    <div className="p-5 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {equipment.map((cat, idx) => (
                                <div key={idx}>
                                    <h4 className="text-[10px] uppercase tracking-[0.15em] text-[#2ECC52] mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                        {cat.category}
                                    </h4>
                                    <ul className="space-y-2">
                                        {cat.items.map((item, i) => (
                                            <li key={i} className="text-[13px] text-[rgba(245,245,245,0.65)] flex gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                                <span>·</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "trainers":
                return (
                    <div className="p-5 overflow-hidden">
                        <div className="grid grid-cols-2 gap-4">
                            {trainers?.map((trainer, idx) => (
                                <a key={idx} href={trainer.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-[2px] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(46,204,82,0.1)] border border-[rgba(255,255,255,0.06)] hover:border-[#2ECC52] transition-colors duration-200">
                                    <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#2ECC52]">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" /><circle cx="12" cy="7" r="4" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-[14px] text-[#F5F5F5] font-semibold" style={{ fontFamily: "var(--font-dm-sans)" }}>{trainer.name}</div>
                                        <div className="text-[11px] text-[rgba(245,245,245,0.5)] tracking-wider">INSTA <span className="text-[#2ECC52]">→</span></div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="flex flex-col">
            {/* Tab Bar Container */}
            <div
                role="tablist"
                aria-label={`${branchId} branch information tabs`}
                className={cn(
                    "flex w-full",
                    "overflow-x-auto overflow-y-hidden",    // horizontal scroll enabled
                    "scrollbar-hide",                         // hide scrollbar visually
                    "border-b border-white/[0.06]",
                    "bg-[#0A0A0A]"
                )}
                style={{ WebkitOverflowScrolling: "touch" }}
            >
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            role="tab"
                            id={`tab-${branchId}-${tab.id}`}
                            aria-selected={isActive}
                            aria-controls={`panel-${branchId}-${tab.id}`}
                            tabIndex={isActive ? 0 : -1}
                            onClick={() => setActiveTab(tab.id)}
                            onKeyDown={(e) => {
                                if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                                    e.preventDefault();
                                    const currentIndex = tabs.findIndex(t => t.id === activeTab);
                                    let nextIndex = currentIndex;
                                    if (e.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
                                    if (e.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                                    setActiveTab(tabs[nextIndex].id);
                                    const nextBtn = document.getElementById(`tab-${branchId}-${tabs[nextIndex].id}`);
                                    nextBtn?.focus();
                                }
                            }}
                            className={cn(
                                "relative flex-shrink-0 min-w-fit",
                                "py-[11px] px-3 md:px-4",  // reduced padding
                                "font-dm text-[10px] font-semibold uppercase tracking-[0.09em] whitespace-nowrap",
                                isActive
                                    ? "text-[#F5F5F5]"
                                    : "text-[rgba(245,245,245,0.38)] hover:text-[rgba(245,245,245,0.68)]",
                                "transition-colors duration-150 ease-out",
                                "cursor-pointer select-none",
                                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2ECC52]"
                            )}
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                            {tab.label}

                            {/* Animated active indicator */}
                            {isActive && (
                                <motion.span
                                    layoutId={`tab-indicator-${branchId}`}
                                    className="absolute bottom-0 left-0 right-0 block h-[2px] bg-[#2ECC52]"
                                    transition={{ duration: 0.22, ease: "easeInOut" }}
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div
                id={`panel-${branchId}-${activeTab}`}
                role="tabpanel"
                tabIndex={0}
                aria-labelledby={`tab-${branchId}-${activeTab}`}
                className="min-h-[300px] outline-none"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </div>

            <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
