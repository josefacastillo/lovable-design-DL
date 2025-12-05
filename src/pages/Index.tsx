import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceBar } from "@/components/ServiceBar";
import { CampaignGrid } from "@/components/CampaignGrid";
import { EventsPreview } from "@/components/EventsPreview";
import { CTARow } from "@/components/CTARow";
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
        <EventsPreview />
        <CTARow />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
