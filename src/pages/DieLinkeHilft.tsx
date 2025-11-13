import { ContentPageTemplate } from "@/components/ContentPageTemplate";
import { dieLinkeHilftData } from "@/data/pageContents/dieLinkeHilftData";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone } from "lucide-react";

const DieLinkeHilft = () => {
  return (
    <ContentPageTemplate data={dieLinkeHilftData}>
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
    </ContentPageTemplate>
  );
};

export default DieLinkeHilft;
