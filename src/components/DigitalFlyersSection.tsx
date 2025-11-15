import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { flyersData } from "@/data/flyersData";
import { ExternalLink } from "lucide-react";

export const DigitalFlyersSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Digitale Flyer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {flyersData.flyers.map((flyer) => (
            <Card
              key={flyer.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={flyer.image}
                  alt={flyer.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 text-foreground">
                  {flyer.title}
                </h3>
                {flyer.description && (
                  <p className="text-muted-foreground text-sm mb-4">
                    {flyer.description}
                  </p>
                )}
                {flyer.link && flyer.linkText && (
                  <Button
                    variant="default"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={flyer.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      {flyer.linkText}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
