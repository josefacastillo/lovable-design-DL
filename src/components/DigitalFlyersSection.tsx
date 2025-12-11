import { flyersData } from "@/data/flyersData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const sizeConfigs = {
  S: { container: "min-h-[250px] md:min-h-[300px]", image: "max-h-[230px] md:max-h-[280px]", itemHeight: "h-[220px]" },
  M: { container: "min-h-[320px] md:min-h-[400px]", image: "max-h-[300px] md:max-h-[380px]", itemHeight: "h-[280px]" },
  L: { container: "min-h-[400px] md:min-h-[500px]", image: "max-h-[380px] md:max-h-[480px]", itemHeight: "h-[350px]" },
};

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

        {/* Option B: Single Image Display - All Sizes */}
        <div className="mb-16">
          <p className="text-center text-lg font-semibold text-foreground mb-8">Option B: Single Image Display</p>
          
          {(["S", "M", "L"] as const).map((size) => (
            <div key={`B-${size}`} className="mb-12">
              <p className="text-center text-sm text-muted-foreground mb-4">Size {size}</p>
              <div className="max-w-2xl mx-auto">
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {flyersData.flyers.map((flyer) => (
                      <CarouselItem key={flyer.id} className="basis-full">
                        <div className={`flex items-center justify-center ${sizeConfigs[size].container} bg-muted/30 rounded-xl p-4`}>
                          <img
                            src={flyer.image}
                            alt={flyer.title}
                            className={`${sizeConfigs[size].image} max-w-full object-contain rounded-lg shadow-lg`}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-4 md:-left-12" />
                  <CarouselNext className="-right-4 md:-right-12" />
                </Carousel>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-border my-16" />

        {/* Option C: Letterboxing with Multiple Items - All Sizes */}
        <div>
          <p className="text-center text-lg font-semibold text-foreground mb-8">Option C: Letterboxing (Multiple Items)</p>
          
          {(["S", "M", "L"] as const).map((size) => (
            <div key={`C-${size}`} className="mb-12">
              <p className="text-center text-sm text-muted-foreground mb-4">Size {size}</p>
              <div className="max-w-5xl mx-auto">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {flyersData.flyers.map((flyer) => (
                      <CarouselItem key={flyer.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                        <div className={`flex items-center justify-center ${sizeConfigs[size].itemHeight} bg-muted/30 rounded-xl p-4`}>
                          <img
                            src={flyer.image}
                            alt={flyer.title}
                            className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
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
          ))}
        </div>
      </div>
    </section>
  );
};
