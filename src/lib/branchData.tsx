import React from "react";

const Icons = {
    Shower: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v6m-4-2h8m-8 4h8M8 14h.01M16 14h.01M12 14h.01M8 18h.01M16 18h.01M12 18h.01" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    Lock: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" strokeLinecap="round" /></svg>,
    Parking: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 16V8h4.5a2.5 2.5 0 010 5H9" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    Wifi: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12.55a11 11 0 0114.08 0m-10.42 2.6a6 6 0 016.83 0m-4.08 2.6a1 1 0 011.5 0" strokeLinecap="round" /></svg>,
    Cafe: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8h1a4 4 0 010 8h-1m-4-8v8M6 8v8M10 8v8M4 21h12m-6-19v18" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    AC: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M8 6h8M6 12h12M8 18h8M16 6l-8 4M8 6l8 4M16 18l-8-4M8 18l8-4" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    Mirror: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="3" width="12" height="18" rx="2" /><path d="M10 7h4M10 11h4" strokeLinecap="round" /></svg>,
    Water: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2.69C12 2.69 6.5 8.54 6.5 13.5a5.5 5.5 0 0011 0C17.5 8.54 12 2.69 12 2.69z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    Sofa: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 14v5a1 1 0 001 1h14a1 1 0 001-1v-5M4 14V8a2 2 0 012-2h12a2 2 0 012 2v6M4 14h16" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    Music: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18V5l12-2v13M9 9l12-2M9 18a3 3 0 11-6 0 3 3 0 016 0zm12-2a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    Light: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v3M5.64 5.64l2.12 2.12m0 8.48l-2.12 2.12M3 12h3m13 0h3m-3.54-6.36l-2.12 2.12m2.12 6.36l-2.12-2.12m-6.36 4.24V22" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 16a4 4 0 106 0" strokeLinecap="round" /></svg>,
    New: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
};

export const branches = [
    {
        id: "hongasandra" as const,
        branch: "HONGASANDRA",
        label: "ESTABLISHED BRANCH",
        address: "Opposite to CNT Liquor, Hongasandra, Bangalore",
        phones: ["+91 73490 89859", "+91 74115 35359"],
        facilities: ["Free Weights & Machines", "Certified Personal Trainers", "RS Cafe On-Site", "Changing Rooms"],
        isNew: false,
        mapsUrl: "https://maps.google.com/?q=RS+Fitness+Hongasandra+Bangalore",
        image: "/images/hongasandra-branch.jpg",
        amenities: [
            { icon: <Icons.Shower />, label: "Changing Rooms" },
            { icon: <Icons.Lock />, label: "Secure Lockers" },
            { icon: <Icons.Parking />, label: "Parking Available" },
            { icon: <Icons.Wifi />, label: "Free Wi-Fi" },
            { icon: <Icons.Cafe />, label: "RS Cafe On-Site" },
            { icon: <Icons.AC />, label: "Air Conditioning" },
            { icon: <Icons.Mirror />, label: "Mirror Wall" },
            { icon: <Icons.Water />, label: "Water Station" },
            { icon: <Icons.Sofa />, label: "Rest Area" },
            { icon: <Icons.Music />, label: "Music System" }
        ],
        equipment: [
            {
                category: "FREE WEIGHTS",
                items: ["Dumbbells (2kg – 50kg)", "Barbells & EZ Bars", "Weight Plates (standard + Olympic)", "Kettlebells"]
            },
            {
                category: "MACHINES",
                items: ["Cable Crossover Machine", "Lat Pulldown", "Leg Press", "Chest Press Machine", "Seated Row", "Smith Machine"]
            },
            {
                category: "CARDIO",
                items: ["Treadmills", "Stationary Bikes", "Elliptical Trainers", "Rowing Machine"]
            },
            {
                category: "FUNCTIONAL",
                items: ["Pull-up & Dip Station", "Battle Ropes", "Resistance Bands", "Foam Rollers & Mats"]
            }
        ],
        trainers: [
            { name: "Sanjay", instagramUrl: "https://www.instagram.com/rs_fitness_official/" },
            { name: "Tarun", instagramUrl: "https://www.instagram.com/rs_fitness_official/" },
            { name: "Roopesh", instagramUrl: "https://www.instagram.com/rs_fitness_official/" },
            { name: "Lokesh", instagramUrl: "https://www.instagram.com/rs_fitness_official/" }
        ]
    },
    {
        id: "akshayanagar" as const,
        branch: "AKSHAYANAGAR",
        label: "NEW BRANCH",
        address: "Akshayanagar, Bangalore",
        phones: ["+91 73490 89859"],
        facilities: ["Free Weights & Machines", "Certified Personal Trainers", "Modern Equipment", "Changing Rooms"],
        isNew: true,
        mapsUrl: "https://maps.google.com/?q=RS+Fitness+Akshayanagar+Bangalore",
        image: "/images/akshayanagar-branch.jpg",
        amenities: [
            { icon: <Icons.Shower />, label: "Changing Rooms" },
            { icon: <Icons.Lock />, label: "Secure Lockers" },
            { icon: <Icons.Parking />, label: "Parking Available" },
            { icon: <Icons.Wifi />, label: "Free Wi-Fi" },
            { icon: <Icons.AC />, label: "Air Conditioning" },
            { icon: <Icons.Mirror />, label: "Mirror Wall" },
            { icon: <Icons.Water />, label: "Water Station" },
            { icon: <Icons.Music />, label: "Music System" },
            { icon: <Icons.Light />, label: "Modern Lighting" },
            { icon: <Icons.New />, label: "New Equipment" }
        ],
        equipment: [
            {
                category: "FREE WEIGHTS",
                items: ["Dumbbells (2kg – 40kg)", "Barbells & EZ Bars", "Weight Plates"]
            },
            {
                category: "MACHINES",
                items: ["Cable Crossover Machine", "Lat Pulldown", "Leg Press", "Chest Press Machine", "Seated Row"]
            },
            {
                category: "CARDIO",
                items: ["Treadmills", "Stationary Bikes", "Elliptical Trainers"]
            },
            {
                category: "FUNCTIONAL",
                items: ["Pull-up & Dip Station", "Resistance Bands", "Mats & Stretching Area"]
            }
        ],
        trainers: [
            { name: "Sanjay", instagramUrl: "https://www.instagram.com/rs_fitness_official/" },
            { name: "Tarun", instagramUrl: "https://www.instagram.com/rs_fitness_official/" },
            { name: "Roopesh", instagramUrl: "https://www.instagram.com/rs_fitness_official/" },
            { name: "Lokesh", instagramUrl: "https://www.instagram.com/rs_fitness_official/" }
        ]
    }
];
