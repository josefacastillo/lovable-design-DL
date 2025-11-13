import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Megaphone } from "lucide-react";
import { topicsData } from "@/data/topicsData";

const iconMap = {
  users: Users,
  home: Home,
  megaphone: Megaphone,
};

export const TopicsSection = () => {
  const { sectionTitle, topics } = topicsData;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          {sectionTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map((topic) => {
            const IconComponent = iconMap[topic.icon as keyof typeof iconMap];
            return (
              <Card
                key={topic.id}
                className="hover:shadow-lg transition-all cursor-pointer group"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent/70 transition-colors">
                      <IconComponent className="w-12 h-12 text-linke-darkgreen" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {topic.title}
                  </h3>
                  <p className="text-linke-darkgreen font-semibold group-hover:underline">
                    {topic.action}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
