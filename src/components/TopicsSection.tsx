import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Megaphone } from "lucide-react";

const topics = [
  {
    id: 1,
    title: "Stadtverräteleiffraktion",
    icon: Users,
    action: "Mehr erfahren",
  },
  {
    id: 2,
    title: "Unsere Standpunktes",
    icon: Home,
    action: "Mehr erfahren",
  },
  {
    id: 3,
    title: "Termine & Aktion",
    icon: Megaphone,
    action: "Mehr öffanen",
  },
];

export const TopicsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Unsere Themen in Offenbach
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Card 
              key={topic.id} 
              className="hover:shadow-lg transition-all cursor-pointer group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <topic.icon className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {topic.title}
                </h3>
                <p className="text-primary font-semibold group-hover:underline">
                  {topic.action}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
