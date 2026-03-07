"use client";
import React, { useRef, useState, type ReactNode } from "react";
import { motion } from "motion/react";

export default function MagneticButton({ children, className = "", strength = 0.3 }: { children: ReactNode; className?: string; strength?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    return (
        <motion.div ref={ref} className={className}
            onMouseMove={(e) => { if (!ref.current) return; const r = ref.current.getBoundingClientRect(); setPos({ x: (e.clientX - r.left - r.width / 2) * strength, y: (e.clientY - r.top - r.height / 2) * strength }); }}
            onMouseLeave={() => setPos({ x: 0, y: 0 })}
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
        >{children}</motion.div>
    );
}
