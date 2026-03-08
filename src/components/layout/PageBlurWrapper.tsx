"use client";

import dynamic from "next/dynamic";

const GradualBlur = dynamic(() => import("@/components/ui/GradualBlur"), { ssr: false });

export default function PageBlurWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">
            {children}

            {/* Bottom fade — scoped to main content, does not overlap Footer */}
            <GradualBlur
                target="parent"
                position="bottom"
                height="7rem"
                strength={1}
                divCount={5}
                curve="bezier"
                exponential
                opacity={0.9}
                zIndex={40}
            />
        </div>
    );
}
