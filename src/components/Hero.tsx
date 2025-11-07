import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-protest.jpg";

export const Hero = () => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-primary/60" />
      
      <div className="relative z-10 container mx-auto h-full flex flex-col items-start justify-center text-white px-4 md:px-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-3xl leading-tight">
          Menschen vor Profite
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-medium">
          DIE LINKE Kreisverband Offenbach Stadt
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg">
          Jetzt Mitglied werden
        </Button>
      </div>
    </section>
  );
};
