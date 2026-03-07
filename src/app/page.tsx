import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Locations from "@/components/sections/Locations";
import MembershipPlans from "@/components/sections/MembershipPlans";
import RSCafe from "@/components/sections/RSCafe";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Locations />
      <MembershipPlans />
      <RSCafe />
      <ContactForm />
    </main>
  );
}
