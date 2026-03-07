"use client";
import React, { useRef, useState, useCallback } from "react";

export default function ScrambleHover({ children, className = "", scrambleDuration = 300, characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" }: { children: string; className?: string; scrambleDuration?: number; characters?: string }) {
    const [displayText, setDisplayText] = useState(children);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = useCallback(() => {
        const original = children;
        let iteration = 0;
        const totalIterations = Math.ceil(scrambleDuration / 30);
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setDisplayText(original.split("").map((c, i) => {
                if (c === " ") return " ";
                if (i < iteration) return original[i];
                return characters[Math.floor(Math.random() * characters.length)];
            }).join(""));
            iteration += original.length / totalIterations;
            if (iteration >= original.length) { clearInterval(intervalRef.current!); setDisplayText(original); }
        }, 30);
    }, [children, scrambleDuration, characters]);

    const reset = useCallback(() => { if (intervalRef.current) clearInterval(intervalRef.current); setDisplayText(children); }, [children]);

    return <span className={className} onMouseEnter={scramble} onMouseLeave={reset} aria-label={children}>{displayText}</span>;
}
