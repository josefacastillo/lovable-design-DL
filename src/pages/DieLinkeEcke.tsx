import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Coffee, Calendar } from "lucide-react";

const DieLinkeEcke = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-foreground">DIE LINKE ECKE</h1>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Unser Treffpunkt im Herzen von Offenbach
                </h2>
                <p className="text-muted-foreground mb-4">
                  Die LINKE ECKE ist unser Büro und Treffpunkt für alle, die sich für 
                  soziale Gerechtigkeit und eine solidarische Stadt einsetzen wollen.
                </p>
                <p className="text-muted-foreground">
                  Hier finden Veranstaltungen, Beratungen und Treffen statt. 
                  Kommen Sie vorbei und lernen Sie uns kennen!
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Adresse</h3>
                      <p className="text-muted-foreground">
                        DIE LINKE ECKE<br />
                        Offenbach am Main
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Öffnungszeiten</h3>
                      <p className="text-muted-foreground">
                        Nach Vereinbarung<br />
                        und bei Veranstaltungen
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-3">Veranstaltungen</h3>
                    <p className="text-muted-foreground mb-3">
                      In der LINKEN ECKE finden regelmäßig Veranstaltungen statt:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Diskussionsveranstaltungen</li>
                      <li>• Beratungstermine</li>
                      <li>• Mitgliedertreffen</li>
                      <li>• Vortragsabende</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Coffee className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-3">Offener Treffpunkt</h3>
                    <p className="text-muted-foreground">
                      Die LINKE ECKE ist auch ein Ort der Begegnung. 
                      Bei unseren offenen Treffen können Sie andere politisch Interessierte kennenlernen 
                      und sich austauschen.
                    </p>
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

export default DieLinkeEcke;
