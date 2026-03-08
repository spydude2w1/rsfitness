export const metadata = {
    title: "Gallery | RS Fitness",
    description: "Take a look inside RS Fitness gyms in Hongasandra and Akshayanagar.",
};

import { Suspense } from "react";
import GalleryClient from "./GalleryClient";

export default function GalleryPage() {
    return (
        <Suspense fallback={<div className="min-h-screen pt-32 pb-24 text-center text-[#F5F5F5]">Loading Gallery...</div>}>
            <GalleryClient />
        </Suspense>
    );
}
