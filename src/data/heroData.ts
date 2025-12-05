import { HeroData } from "@/types/hero";
import heroImage from "@/assets/hero-protest.jpg";

export const heroData: HeroData = {
  title: "Solidarität in Offenbach",
  subtitle: "Für bezahlbares Wohnen und soziale Gerechtigkeit.",
  backgroundImage: heroImage,
  primaryAction: {
    label: "Wahlprogramm 2026",
    href: "/wahlprogramm"
  },
  secondaryAction: {
    label: "Mitmachen",
    href: "/mitmachen"
  },
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
