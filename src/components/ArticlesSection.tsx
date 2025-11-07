import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import housingImage from "@/assets/housing-article.jpg";
import meetingImage from "@/assets/community-meeting.jpg";
import celebrationImage from "@/assets/election-celebration.jpg";

const articles = [
  {
    id: 1,
    category: "Wohnungspolitik",
    title: "Mietenwahnsinn stoppen: Unser klarer Plan...",
    date: "15. Oktober 2023",
    readMore: "12. Oktober 2023",
    link: "Weiterlesen",
    image: housingImage,
  },
  {
    id: 2,
    category: "Soziales",
    title: "Winterhilfe gestartet",
    date: "20.11.2023 Tafel-Unterstützung, Obdachlosen-",
    link: "Weiterlesen",
    image: meetingImage,
  },
  {
    id: 3,
    category: "Jugend",
    title: "U18-Wahl in Öffnaligen",
    date: "Jugendliche haben Lehrerkräfte, machen, anstehen...",
    link: "Weiterlesen",
    image: celebrationImage,
  },
];

export const ArticlesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Aktuelle Beiträge
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card 
              key={article.id} 
              className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3 bg-accent/10 text-accent hover:bg-accent/20">
                  {article.category}
                </Badge>
                <h3 className="text-lg font-bold mb-3 text-foreground line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {article.date}
                </p>
                <p className="text-primary font-semibold group-hover:underline">
                  {article.link}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
