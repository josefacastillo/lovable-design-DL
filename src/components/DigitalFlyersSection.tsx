import { flyersData } from "@/data/flyersData";

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
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {flyersData.flyers.map((flyer, index) => (
            <div
              key={flyer.id}
              className="break-inside-avoid mb-6 group"
            >
              <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={flyer.image}
                  alt={flyer.title}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
