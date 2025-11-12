import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/TeamSection";

const Kreisvorstand = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Kreisvorstand</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Unser Vorstand setzt sich für soziale Gerechtigkeit und eine bessere Zukunft für alle ein.
            </p>
          </div>
        </section>
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Kreisvorstand;
