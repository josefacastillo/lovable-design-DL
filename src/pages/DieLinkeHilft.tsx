import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone } from "lucide-react";

const DieLinkeHilft = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Die Linke hilft</h1>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Kostenlose Beratung und Unterstützung
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wir bieten kostenlose und vertrauliche Beratung für Menschen in schwierigen 
                  Lebenslagen. Ob bei Problemen mit Behörden, Mietfragen oder sozialen Anliegen - 
                  wir sind für Sie da.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Unsere Angebote</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Sozialberatung</li>
                  <li>• Mietrechtsberatung</li>
                  <li>• Unterstützung bei Behördengängen</li>
                  <li>• Heizkostencheck</li>
                  <li>• Allgemeine Lebenshilfe</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Kontakt</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Adresse</p>
                      <p className="text-muted-foreground">DIE LINKE ECKE<br />Offenbach Stadt</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Öffnungszeiten</p>
                      <p className="text-muted-foreground">Nach Vereinbarung</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Terminvereinbarung</p>
                      <p className="text-muted-foreground">Bitte kontaktieren Sie uns für einen Termin</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DieLinkeHilft;
