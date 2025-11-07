import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NewsCarousel } from "@/components/NewsCarousel";
import { TopicsSection } from "@/components/TopicsSection";
import { ArticlesSection } from "@/components/ArticlesSection";
import { TeamSection } from "@/components/TeamSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <NewsCarousel />
        <TopicsSection />
        <ArticlesSection />
        <TeamSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
