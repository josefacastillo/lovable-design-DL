import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, HelpCircle, Shield } from "lucide-react";

const Hartz4Hilfe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Hartz-4 Hilfe</h1>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Ihre Rechte bei Hartz-4 und Bürgergeld
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wir unterstützen Sie kostenlos bei allen Fragen rund um Hartz-4, Bürgergeld 
                  und Sozialleistungen. Unsere ehrenamtlichen Berater*innen helfen Ihnen, 
                  Ihre Rechte durchzusetzen.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <FileCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Bescheide prüfen</h3>
                  <p className="text-sm text-muted-foreground">
                    Wir überprüfen Ihre Bescheide auf Fehler und Rechtmäßigkeit
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Anträge stellen</h3>
                  <p className="text-sm text-muted-foreground">
                    Unterstützung beim Ausfüllen und Einreichen von Anträgen
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Widersprüche</h3>
                  <p className="text-sm text-muted-foreground">
                    Hilfe bei Widersprüchen gegen unrechtmäßige Entscheidungen
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Beratungsangebot</h2>
                <p className="text-muted-foreground mb-4">
                  Unsere Beratung ist kostenlos, vertraulich und unverbindlich. 
                  Vereinbaren Sie einen Termin und bringen Sie alle relevanten Unterlagen mit.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bescheide vom Jobcenter</li>
                  <li>• Kontoauszüge</li>
                  <li>• Mietverträge</li>
                  <li>• Weitere relevante Dokumente</li>
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

export default Hartz4Hilfe;
