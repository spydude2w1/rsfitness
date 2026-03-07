import type { Variants } from "motion/react";

export const fadeUp: Variants = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
};
export const fadeUpTransition = { duration: 0.6, ease: "easeOut" as const };

export const staggerContainer: Variants = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
};
export const staggerItem: Variants = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
};

export const navVariant: Variants = {
    visible: { y: "0%", transition: { duration: 0.35, ease: "easeInOut" } },
    hidden: { y: "-100%", transition: { duration: 0.35, ease: "easeInOut" } },
};
