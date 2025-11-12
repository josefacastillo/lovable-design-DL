import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Hartz4Hilfe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Hartz-4 Hilfe</h1>
            <p className="text-lg text-muted-foreground">
              Kostenlose Beratung und Unterstützung bei Hartz-4 Angelegenheiten.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Hartz4Hilfe;
