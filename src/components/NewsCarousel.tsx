import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import housingImage from "@/assets/housing-article.jpg";
import meetingImage from "@/assets/community-meeting.jpg";
import celebrationImage from "@/assets/election-celebration.jpg";

const newsItems = [
  {
    id: 1,
    title: "Das Kulturkarree braucht ein neues Konzept",
    subtitle: "Pressemitteilung",
    image: housingImage,
    isNew: true,
  },
  {
    id: 2,
    title: "Wohnraumpotenziale heben – günstigen Wohnraum schaffen",
    subtitle: "Antrag zur StVV",
    image: meetingImage,
    isNew: false,
  },
  {
    id: 3,
    title: "Immobilienspekulanten drangsalieren Mieter*innen",
    subtitle: "Strahlenberger Straße",
    image: celebrationImage,
    isNew: false,
  },
];

export const NewsCarousel = () => {
  return (
    <section className="bg-white py-8 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="shrink-0">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <div className="flex gap-4 overflow-x-auto scrollbar-hide flex-1">
            {newsItems.map((item) => (
              <Card key={item.id} className="min-w-[300px] shrink-0 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      {item.isNew && (
                        <Badge className="bg-primary text-primary-foreground mb-2">Neu</Badge>
                      )}
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Button variant="ghost" size="icon" className="shrink-0">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
