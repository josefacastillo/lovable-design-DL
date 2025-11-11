import { FooterData } from "@/types/footer";

export const footerData: FooterData = {
  sections: [
    {
      title: "Über Uns",
      links: [
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "/datenschutz" },
      ],
    },
    {
      title: "Sitemap",
      links: [
        { label: "Start", href: "/" },
        { label: "Fraktion", href: "/fraktion" },
        { label: "Themen", href: "/themen" },
        { label: "Aktuelles", href: "/aktuelles" },
        { label: "Kreisvorstand", href: "/kreisvorstand" },
        { label: "Kontakt", href: "/kontakt" },
      ],
    },
  ],
  socialLinks: [
    { platform: "facebook", href: "https://www.facebook.com/dielinkeoffenbach" },
    { platform: "twitter", href: "#" },
    { platform: "instagram", href: "#" },
  ],
  copyright: "© 2025 DIE LINKE Kreisverband Offenbach Stadt",
};
