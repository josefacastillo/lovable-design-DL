import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NewsCarousel } from "@/components/NewsCarousel";
import { TopicsSection } from "@/components/TopicsSection";
import { EventsSection } from "@/components/EventsSection";
import { ArticlesSection } from "@/components/ArticlesSection";
import { TeamSection } from "@/components/TeamSection";
import { DigitalFlyersSection } from "@/components/DigitalFlyersSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <NewsCarousel />
        <TopicsSection />
        <EventsSection />
        <ArticlesSection />
        <TeamSection />
        <DigitalFlyersSection />
        <NewsletterSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
