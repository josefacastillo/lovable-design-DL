import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";

const Kontakt = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Kontakt</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Nehmen Sie Kontakt mit uns auf. Wir freuen uns auf Ihre Nachricht!
            </p>
          </div>
        </section>
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
