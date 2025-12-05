import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const campaigns = [
  {
    title: "Wohnen in Offenbach",
    summary: "Gegen Verdrängung in der Strahlenberger Straße.",
    tag: "Wohnungspolitik",
    link: "/archiv",
  },
  {
    title: "Kulturkarree",
    summary: "Unsere Pläne für eine öffentliche Nutzung.",
    tag: "Stadtentwicklung",
    link: "/fraktion",
  },
  {
    title: "Kommunalwahl 2026",
    summary: "Lerne unsere Kandidierenden kennen.",
    tag: "Wahl 2026",
    link: "/kreisvorstand",
  },
];

export const CampaignGrid = () => {
  return (
    <section className="py-16 bg-background" aria-labelledby="campaigns-title">
      <div className="container mx-auto px-4">
        <h2 id="campaigns-title" className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          Aktuelle Kampagnen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {campaigns.map((campaign, index) => (
            <Link key={index} to={campaign.link} className="group">
              <Card className="h-full border-2 border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-6 flex flex-col h-full">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {campaign.tag}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {campaign.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow mb-4">
                    {campaign.summary}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
