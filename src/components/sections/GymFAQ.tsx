"use client";

import { FAQ } from "@/components/ui/faq-tabs";

const categories = {
    general: "General",
    hongasandra: "Hongasandra Branch",
    akshayanagar: "Akshayanagar Branch",
    membership: "Membership & Pricing",
    training: "Training & Facilities",
};

const faqData = {
    general: [
        {
            question: "What are the operating hours at RS Fitness?",
            answer: "RS Fitness is open Monday to Saturday from 5:00 AM to 11:00 PM, and on Sundays from 6:00 AM to 10:00 PM. These hours apply to both the Hongasandra and Akshayanagar branches.",
        },
        {
            question: "Do I need to bring my own towel or water bottle?",
            answer: "Each branch has a water station with purified drinking water, so you don't have to carry a bottle. We do recommend bringing your own towel, although towels can be provided on request at the reception counter.",
        },
        {
            question: "Is there a trial session available before I sign up?",
            answer: "Yes! We offer a free one-day trial at both branches. Just walk in during operating hours, speak with our front desk team, and they'll get you set up with a complimentary session so you can experience the gym firsthand.",
        },
        {
            question: "Can I train at both branches with a single membership?",
            answer: "Yes, all RS Fitness memberships give you access to both the Hongasandra and Akshayanagar branches. Train wherever is most convenient for you on any given day.",
        },
        {
            question: "Is RS Fitness suitable for beginners?",
            answer: "Absolutely. Our certified trainers — Sanjay, Tarun, Lokesh, and Roopesh — are experienced in working with beginners. They'll create a personalised program to help you build a solid foundation safely and effectively.",
        },
    ],
    hongasandra: [
        {
            question: "Where exactly is the Hongasandra branch located?",
            answer: "The Hongasandra branch is located opposite CNT Liquor, Hongasandra, Bangalore. It's easily accessible by public transport and has ample parking available for both two-wheelers and cars.",
        },
        {
            question: "Does the Hongasandra branch have RS Cafe?",
            answer: "Yes! The Hongasandra branch has our full RS Cafe on-site, offering protein shakes, smoothies, healthy snacks, and post-workout meals. It's the perfect spot to refuel after a session.",
        },
        {
            question: "What kind of equipment is available at Hongasandra?",
            answer: "The Hongasandra branch features a comprehensive setup including dumbbells (2kg–50kg), barbells, Olympic plates, a cable crossover machine, lat pulldown, leg press, Smith machine, treadmills, stationary bikes, elliptical trainers, rowing machine, and a full functional training zone.",
        },
        {
            question: "Is there a steam room at Hongasandra?",
            answer: "Yes, the Hongasandra branch is equipped with a steam room. Members on the 12-month plan get complimentary steam access, and it's available as an add-on for other plans.",
        },
        {
            question: "How do I contact the Hongasandra branch directly?",
            answer: "You can reach the Hongasandra branch at +91 73490 89859 or +91 74115 35359. Our team is happy to assist with any queries regarding membership, training, or facilities.",
        },
    ],
    akshayanagar: [
        {
            question: "When did the Akshayanagar branch open?",
            answer: "The Akshayanagar branch opened in January 2025. It features brand-new, state-of-the-art equipment and a modern interior designed to deliver the best workout experience.",
        },
        {
            question: "What makes the Akshayanagar branch different?",
            answer: "The Akshayanagar branch features entirely new equipment, modern LED lighting, a spacious layout with dedicated stretching and functional training areas, and a fresh, energetic atmosphere. It's built from the ground up with the latest gym design principles.",
        },
        {
            question: "Does the Akshayanagar branch have parking?",
            answer: "Yes, the Akshayanagar branch has dedicated parking for both two-wheelers and four-wheelers, making it convenient for members commuting from surrounding areas.",
        },
        {
            question: "Is the Akshayanagar branch air-conditioned?",
            answer: "Yes, the entire Akshayanagar branch is fully air-conditioned, ensuring a comfortable workout environment regardless of the outside weather.",
        },
        {
            question: "Are the same trainers available at both branches?",
            answer: "Our trainers — Sanjay, Tarun, Lokesh, and Roopesh — rotate between both branches. You can check with the front desk for the daily trainer schedule, and personal training sessions can be booked at either location.",
        },
    ],
    membership: [
        {
            question: "What membership plans does RS Fitness offer?",
            answer: "We offer four flexible plans: 1 Month (₹2,999), 3 Months (₹4,999), 6 Months (₹7,999), and 12 Months (₹9,999). The 12-month plan is our most popular, offering the best value with added perks like a free gym bag, jersey, shaker, and steam access.",
        },
        {
            question: "Can I freeze or pause my membership?",
            answer: "Yes, memberships of 3 months and above can be frozen for up to 15 days per plan cycle, free of charge. Just inform the front desk at least 2 days in advance. Medical freeze requests with documentation are also supported with extended freeze periods.",
        },
        {
            question: "Are there any hidden fees beyond the membership price?",
            answer: "No hidden fees. The price you see is what you pay. All memberships include full gym access, locker room usage, and Wi-Fi. The only optional extras are personal training sessions and the RS Cafe menu.",
        },
        {
            question: "Do you offer student or corporate discounts?",
            answer: "Yes, we offer special rates for students (with valid ID) and corporate group enrollments of 5 or more people. Contact us directly at +91 73490 89859 to discuss customised packages.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept cash, UPI (Google Pay, PhonePe, Paytm), bank transfers, and all major debit/credit cards. EMI options are also available for 6-month and 12-month plans.",
        },
    ],
    training: [
        {
            question: "Do you provide personal training?",
            answer: "Yes, our certified trainers offer one-on-one personal training sessions tailored to your specific goals — whether it's weight loss, muscle gain, strength building, or rehabilitation. Sessions can be booked at either branch.",
        },
        {
            question: "What qualifications do RS Fitness trainers have?",
            answer: "All our trainers are certified fitness professionals with extensive experience in strength & conditioning, HIIT, bodybuilding, and rehabilitation. They regularly update their skills and are trained to work with all fitness levels.",
        },
        {
            question: "Is there a group class or batch training option?",
            answer: "Currently, RS Fitness focuses on individual and personal training to ensure maximum attention and results. We do occasionally run small group sessions — follow our Instagram @rs_fitness_official for updates.",
        },
        {
            question: "Can the trainers help with a diet plan?",
            answer: "Yes, our trainers provide basic nutritional guidance and diet plan suggestions as part of personal training. For comprehensive diet programs, they'll recommend the best approach based on your body type and fitness goals.",
        },
        {
            question: "What cardio equipment is available?",
            answer: "Both branches feature treadmills, stationary bikes, and elliptical trainers. The Hongasandra branch additionally has a rowing machine. All cardio machines are high-quality commercial-grade equipment.",
        },
    ],
};

export default function GymFAQ() {
    return (
        <FAQ
            title="FREQUENTLY ASKED QUESTIONS"
            subtitle="Everything you need to know about RS Fitness"
            categories={categories}
            faqData={faqData}
            className="grain-overlay py-20 lg:py-28"
        />
    );
}
