import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceBar } from "@/components/ServiceBar";
import { CampaignGrid } from "@/components/CampaignGrid";
import { EventsSection } from "@/components/EventsSection";
import { CTARow } from "@/components/CTARow";
import { ElectionSection } from "@/components/ElectionSection";
import { DigitalFlyersSection } from "@/components/DigitalFlyersSection";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServiceBar />
        <CampaignGrid />
        <EventsSection />
        <CTARow />
        <ElectionSection />
        <DigitalFlyersSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
