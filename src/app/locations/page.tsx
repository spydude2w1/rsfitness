import Locations from "@/components/sections/Locations";
import Testimonials from "@/components/sections/Testimonials";
import GymFAQ from "@/components/sections/GymFAQ";

export const metadata = { title: "Our Gyms | RS Fitness Bangalore" };

export default function GymsPage() {
    return (
        <div className="pt-[72px]">
            <Locations />
            <Testimonials />
            <GymFAQ />
        </div>
    );
}
