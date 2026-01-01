import { Vote, ArrowRight } from "lucide-react";
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
    title: "Bezahlbare Mieten für alle",
    summary: "Wir kämpfen für Mietobergrenzen und mehr Sozialwohnungen.",
    details: "Offenbach braucht dringend bezahlbare Wohnungen. Wir setzen uns für eine Mietpreisbremse ein, die wirkt, und fordern den Bau von mindestens 500 neuen Sozialwohnungen bis 2030. Spekulativer Leerstand muss besteuert werden."
  },
  {
    id: "transport",
    title: "Kostenloser ÖPNV in Offenbach",
    summary: "Mobilität ist ein Grundrecht – für alle bezahlbar.",
    details: "Der öffentliche Nahverkehr muss kostenfrei werden. Das entlastet Menschen mit kleinem Geldbeutel, schützt das Klima und macht unsere Stadt lebenswerter. Als ersten Schritt fordern wir ein 365€-Jahresticket für Offenbach."
  },
  {
    id: "social-housing",
    title: "Mehr Sozialwohnungen bauen",
    summary: "Kommunaler Wohnungsbau statt Rendite für Investoren.",
    details: "Die GBO muss gestärkt werden und mehr bauen. Städtische Grundstücke dürfen nicht verkauft, sondern nur noch in Erbpacht vergeben werden. Bei Neubauprojekten fordern wir mindestens 40% Sozialwohnungen."
  },
  {
    id: "childcare",
    title: "Kinderbetreuung ausbauen",
    summary: "Jedes Kind hat ein Recht auf einen Kita-Platz.",
    details: "Wir brauchen mehr Erzieher*innen und bessere Bezahlung. Die Kita-Gebühren müssen schrittweise abgeschafft werden. Offenbach muss endlich die gesetzlich garantierten Betreuungsplätze für alle Kinder bereitstellen."
  },
];

export const ElectionSection = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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
              Wir kämpfen für eine Stadt, die allen gehört – nicht nur den Reichen.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="mb-8">
            {electionTopics.map((topic) => (
              <AccordionItem 
                key={topic.id} 
                value={topic.id}
                className="border-secondary-foreground/20"
              >
                <AccordionTrigger className="hover:no-underline py-4 text-left">
                  <div className="flex flex-col items-start gap-1">
                    <span className="font-semibold text-base">{topic.title}</span>
                    <span className="text-sm text-secondary-foreground/70 font-normal">
                      {topic.summary}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-secondary-foreground/80 pb-4">
                  {topic.details}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
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
