import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { heroData } from "@/data/heroData";

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
};

export const Hero = () => {
  const { title, subtitle, backgroundImage, ctaText, ctaHref, socialLinks } =
    heroData;

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-primary/60" />

      <div className="relative z-10 container mx-auto h-full flex flex-col items-start justify-center text-white px-4 md:px-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-3xl leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-medium">{subtitle}</p>
        <div className="flex items-center gap-6 mb-8">
          {socialLinks.map((social, idx) => {
            const Icon = socialIcons[social.platform];
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label={social.ariaLabel}
              >
                <Icon className="w-8 h-8" />
              </a>
            );
          })}
        </div>
        <Button
          size="lg"
          className="bg-white/70 hover:bg-white/90 text-secondary font-semibold px-8 py-6 text-lg"
        >
          {ctaText}
        </Button>
      </div>
    </section>
  );
};
