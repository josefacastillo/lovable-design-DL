import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {newsItems.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="hover:shadow-md transition-shadow">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};
