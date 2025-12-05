import { HelpCircle, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: HelpCircle,
    title: "Brauchen Sie Hilfe?",
    text: "Kostenlose Sozialsprechstunde: Jeden Dienstag 18-20 Uhr.",
    link: "/die-linke-hilft",
  },
  {
    icon: Calculator,
    title: "Heizkosten zu hoch?",
    text: "Wir prüfen Ihre Abrechnung. Jetzt Termin vereinbaren.",
    link: "/hartz4-hilfe",
  },
];

export const ServiceBar = () => {
  return (
    <section className="bg-primary text-primary-foreground py-6" aria-label="Service-Angebote">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <div className="bg-white/20 p-3 rounded-lg shrink-0">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:underline">
                    {service.title}
                  </h3>
                  <p className="text-sm opacity-90">{service.text}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
