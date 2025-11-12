import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Kreisverband = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Kreisverband Offenbach Stadt</h1>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Über uns</h2>
                <p className="text-muted-foreground mb-4">
                  Der Kreisverband DIE LINKE Offenbach Stadt setzt sich für soziale Gerechtigkeit, 
                  bezahlbaren Wohnraum und eine solidarische Gesellschaft ein.
                </p>
                <p className="text-muted-foreground">
                  Wir arbeiten eng mit den Bürger*innen zusammen, um Offenbach zu einer lebenswerteren 
                  Stadt für alle zu machen - Menschen vor Profite ist dabei unser Leitsatz.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Unsere Arbeit</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Kommunalpolitische Arbeit in der Stadtverordnetenversammlung</li>
                  <li>• Beratung und Unterstützung für Bürger*innen</li>
                  <li>• Organisation von Veranstaltungen und Aktionen</li>
                  <li>• Vernetzung mit sozialen Bewegungen und Initiativen</li>
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

export default Kreisverband;
