import { flyersData } from "@/data/flyersData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const DigitalFlyersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Unsere Kampagnen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Gemeinsam für soziale Gerechtigkeit und eine lebenswerte Stadt
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 items-center">
              {flyersData.flyers.map((flyer) => (
                <CarouselItem key={flyer.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={flyer.image}
                      alt={flyer.title}
                      className="w-full h-auto max-w-[400px] mx-auto object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
