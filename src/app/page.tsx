import Hero from "@/components/sections/Hero";
import GrandOpeningOffer from "@/components/sections/GrandOpeningOffer";
import StatsBar from "@/components/sections/StatsBar";
import Locations from "@/components/sections/Locations";
import Testimonials from "@/components/sections/Testimonials";
import MembershipPlans from "@/components/sections/MembershipPlans";
import RSCafe from "@/components/sections/RSCafe";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <GrandOpeningOffer />
      <StatsBar />
      <Locations />
      <Testimonials />
      <MembershipPlans />
      <RSCafe isHomePage={true} />
      <ContactForm />
    </main>
  );
}
