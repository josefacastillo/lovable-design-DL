import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    date: "Jeden 1. Sonntag",
    title: "Linkes Frühstück / Die Linke Ecke",
    link: "/die-linke-ecke",
  },
  {
    date: "15. Dezember 2025",
    title: "Öffentliche Fraktionssitzung",
    link: "/fraktion",
  },
  {
    date: "18. Dezember 2025",
    title: "Sozialberatung",
    link: "/die-linke-hilft",
  },
];

export const EventsPreview = () => {
  return (
    <section className="py-12 bg-muted/30" aria-labelledby="events-title">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 id="events-title" className="text-2xl md:text-3xl font-bold text-foreground">
              Kommende Termine
            </h2>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/archiv" className="flex items-center gap-1">
                Alle Termine
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <Link
                key={index}
                to={event.link}
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div className="bg-primary/10 text-primary p-2 rounded-lg shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-sm text-muted-foreground font-medium">
                    {event.date}
                  </p>
                  <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
