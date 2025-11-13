import { ContentPageTemplate } from "@/components/ContentPageTemplate";
import { dieLinkeEckeData } from "@/data/pageContents/dieLinkeEckeData";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Coffee, Calendar } from "lucide-react";

const DieLinkeEcke = () => {
  return (
    <ContentPageTemplate data={dieLinkeEckeData}>
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
    </ContentPageTemplate>
  );
};

export default DieLinkeEcke;
