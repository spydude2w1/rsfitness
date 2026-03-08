"use client";

import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
    {
        author: {
            name: "Arjun Reddy",
            handle: "@arjun_fitness",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
        },
        text: "RS Fitness completely changed my fitness journey. The trainers are incredibly supportive and the equipment is top-notch. Lost 15 kgs in 4 months!",
    },
    {
        author: {
            name: "Priya Sharma",
            handle: "@priya.fit",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        },
        text: "Best gym in South Bangalore hands down. The Hongasandra branch has amazing vibes and the RS Cafe protein shakes are a game changer after every session.",
    },
    {
        author: {
            name: "Karthik Nair",
            handle: "@karthik.gains",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        },
        text: "The new Akshayanagar branch is incredible — brand new machines, spacious layout, and the trainers really push you to be your best. Highly recommend!",
    },
    {
        author: {
            name: "Deepika Rao",
            handle: "@deepika.wellness",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        },
        text: "As a woman, I feel completely comfortable training here. The environment is clean, well-lit, and the trainers are respectful and knowledgeable.",
    },
    {
        author: {
            name: "Rahul Verma",
            handle: "@rahul_lifts",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        },
        text: "Been a member for 2 years now. The 12-month plan is unbeatable value. Sanjay sir's training program helped me gain serious muscle mass.",
    },
    {
        author: {
            name: "Ananya Iyer",
            handle: "@ananya.strong",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        },
        text: "Love how they have both branches in great locations. The parking facility is a huge plus. Also, the steam room after leg day is absolute heaven!",
    },
];

export default function Testimonials() {
    return (
        <TestimonialsSection
            title="WHAT OUR MEMBERS SAY"
            description="Real stories from the RS Fitness community across Hongasandra and Akshayanagar."
            testimonials={testimonials}
            className="grain-overlay"
        />
    );
}
