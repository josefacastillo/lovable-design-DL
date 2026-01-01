import { Vote, ArrowRight, CheckCircle2, Home, Bus, Building2, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const electionTopics = [
  {
    id: "housing",
    icon: Home,
    title: "Bezahlbare Mieten für alle",
    summary: "Mietobergrenzen & Spekulation stoppen",
    details: "Offenbach braucht dringend bezahlbare Wohnungen. Wir setzen uns für eine Mietpreisbremse ein, die wirkt, und fordern den Bau von mindestens 500 neuen Sozialwohnungen bis 2030. Spekulativer Leerstand muss besteuert werden."
  },
  {
    id: "transport",
    icon: Bus,
    title: "Kostenloser ÖPNV",
    summary: "Mobilität als Grundrecht",
    details: "Der öffentliche Nahverkehr muss kostenfrei werden. Das entlastet Menschen mit kleinem Geldbeutel, schützt das Klima und macht unsere Stadt lebenswerter. Als ersten Schritt fordern wir ein 365€-Jahresticket für Offenbach."
  },
  {
    id: "social-housing",
    icon: Building2,
    title: "Mehr Sozialwohnungen",
    summary: "Kommunal bauen, nicht verkaufen",
    details: "Die GBO muss gestärkt werden und mehr bauen. Städtische Grundstücke dürfen nicht verkauft, sondern nur noch in Erbpacht vergeben werden. Bei Neubauprojekten fordern wir mindestens 40% Sozialwohnungen."
  },
  {
    id: "childcare",
    icon: Baby,
    title: "Kinderbetreuung ausbauen",
    summary: "Kita-Platz für jedes Kind",
    details: "Wir brauchen mehr Erzieher*innen und bessere Bezahlung. Die Kita-Gebühren müssen schrittweise abgeschafft werden. Offenbach muss endlich die gesetzlich garantierten Betreuungsplätze für alle Kinder bereitstellen."
  },
];

export const ElectionSection = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              <Vote className="w-4 h-4 mr-2" aria-hidden="true" />
              Kommunalwahl 2026
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              2026: Zeit für Veränderung
            </h2>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
              Bei der Kommunalwahl entscheiden wir, wer in Offenbach das Sagen hat. 
              Wir kämpfen für eine Stadt, die allen gehört.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {electionTopics.map((topic) => {
              const IconComponent = topic.icon;
              return (
                <Accordion key={topic.id} type="single" collapsible>
                  <AccordionItem 
                    value={topic.id}
                    className="border border-secondary-foreground/15 rounded-xl bg-background/5 backdrop-blur-sm overflow-hidden transition-all hover:bg-background/10 hover:border-secondary-foreground/25"
                  >
                    <AccordionTrigger className="hover:no-underline px-5 py-4 text-left [&>svg]:text-accent">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" aria-hidden="true" />
                        </div>
                        <div className="flex flex-col items-start gap-0.5">
                          <span className="font-semibold text-base leading-tight">{topic.title}</span>
                          <span className="text-sm text-secondary-foreground/60 font-normal">
                            {topic.summary}
                          </span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-0">
                      <div className="pl-14 text-secondary-foreground/80 text-sm leading-relaxed">
                        {topic.details}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/wahlprogramm">
                Zum vollständigen Wahlprogramm
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
