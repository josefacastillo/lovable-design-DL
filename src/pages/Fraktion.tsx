import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Fraktion = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-foreground">DIE LINKE Fraktion</h1>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Unsere Fraktion in der Stadtverordnetenversammlung
                </h2>
                <p className="text-muted-foreground mb-4">
                  Die Fraktion DIE LINKE engagiert sich für eine soziale und gerechte Politik 
                  in Offenbach. Wir setzen uns für bezahlbaren Wohnraum, gute Bildung, 
                  Klimaschutz und soziale Teilhabe ein.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Unsere Schwerpunkte</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Bezahlbarer Wohnraum für alle</li>
                  <li>• Klimaschutz und nachhaltige Stadtentwicklung</li>
                  <li>• Soziale Infrastruktur stärken</li>
                  <li>• Demokratische Teilhabe fördern</li>
                  <li>• Gegen Rechtsextremismus und Diskriminierung</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Fraktion;
