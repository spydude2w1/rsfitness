import { useReducedMotion as useReducedMotionFramer } from "framer-motion";
import { useState, useEffect } from "react";

export function useReducedMotion() {
    const prefersReducedMotion = useReducedMotionFramer();
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        if (prefersReducedMotion !== null) {
            setReduced(Boolean(prefersReducedMotion));
        }
    }, [prefersReducedMotion]);

    return reduced;
}
