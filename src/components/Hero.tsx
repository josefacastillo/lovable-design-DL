import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { heroData } from "@/data/heroData";

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
};

export const Hero = () => {
  const { title, subtitle, backgroundImage, primaryAction, secondaryAction, socialLinks } =
    heroData;

  return (
    <section className="relative h-[600px] w-full overflow-hidden" aria-labelledby="hero-title">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="img"
        aria-label="Demonstrationsbild als Hintergrund"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-primary/60" />

      <div className="relative z-10 container mx-auto h-full flex flex-col items-start justify-center text-white px-4 md:px-8">
        <h1 id="hero-title" className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-3xl leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-medium max-w-2xl">{subtitle}</p>
        
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {primaryAction && (
            <Button
              size="lg"
              variant="default"
              className="font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href={primaryAction.href}>{primaryAction.label}</a>
            </Button>
          )}
          {secondaryAction && (
            <Button
              size="lg"
              variant="outline"
              className="font-semibold px-8 py-6 text-lg bg-white/10 border-white text-white hover:bg-white hover:text-primary transition-all"
              asChild
            >
              <a href={secondaryAction.href}>{secondaryAction.label}</a>
            </Button>
          )}
        </div>

        <div className="flex items-center gap-6" role="navigation" aria-label="Social Media Links">
          {socialLinks.map((social, idx) => {
            const Icon = socialIcons[social.platform];
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
                aria-label={social.ariaLabel}
              >
                <Icon className="w-7 h-7" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
