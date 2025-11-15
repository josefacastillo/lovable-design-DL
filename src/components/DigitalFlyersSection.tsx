import { Button } from "@/components/ui/button";
import { flyersData } from "@/data/flyersData";
import { ArrowRight } from "lucide-react";

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {flyersData.flyers.map((flyer, index) => (
            <div
              key={flyer.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-8"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden">
                <img
                  src={flyer.image}
                  alt={flyer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <h3 className="font-bold text-2xl md:text-3xl mb-3 text-white drop-shadow-lg">
                    {flyer.title}
                  </h3>
                  {flyer.description && (
                    <p className="text-white/90 text-sm md:text-base mb-4 drop-shadow-md leading-relaxed">
                      {flyer.description}
                    </p>
                  )}
                  
                  {flyer.link && flyer.linkText && (
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-fit group/btn"
                      asChild
                    >
                      <a
                        href={flyer.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {flyer.linkText}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
