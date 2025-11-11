import { HeroData } from "@/types/hero";
import heroImage from "@/assets/hero-protest.jpg";

export const heroData: HeroData = {
  title: "Menschen vor Profite",
  subtitle: "DIE LINKE Kreisverband Offenbach Stadt",
  backgroundImage: heroImage,
  ctaText: "Jetzt Mitglied werden",
  ctaHref: "#",
  socialLinks: [
    { 
      platform: "facebook", 
      href: "https://www.facebook.com/DieLinkeOffenbach",
      ariaLabel: "Facebook"
    },
    { 
      platform: "twitter", 
      href: "https://twitter.com/linke_of",
      ariaLabel: "Twitter"
    },
    { 
      platform: "instagram", 
      href: "https://www.instagram.com/die_linke_offenbach/",
      ariaLabel: "Instagram"
    },
  ],
};
