import { HeaderData } from "@/types/header";

export const headerData: HeaderData = {
  logo: "DIE LINKE",
  navItems: [
    { label: "Start", href: "/" },
    { 
      label: "Partei & Personen", 
      href: "#",
      submenu: [
        { label: "Kreisvorstand", href: "/kreisvorstand" },
        { label: "Fraktion-News", href: "/fraktion" },
        { label: "Die Linke Ecke", href: "/die-linke-ecke" },
      ]
    },
    { 
      label: "Wahlen 2026", 
      href: "#",
      submenu: [
        { label: "Wahlprogramm & Infos", href: "/archiv" },
        { label: "Aktuelle Pressemitteilungen", href: "/archiv" },
      ]
    },
    { 
      label: "Aktiv werden", 
      href: "#",
      submenu: [
        { label: "Termine", href: "/archiv" },
        { label: "Spenden", href: "/kontakt" },
        { label: "Mitglied werden", href: "https://www.die-linke.de/mitmachen/mitglied-werden/", external: true },
      ]
    },
    { 
      label: "Beratung & Kontakt", 
      href: "#",
      submenu: [
        { label: "Sozialberatung", href: "/die-linke-hilft" },
        { label: "Kontaktformular", href: "/kontakt" },
        { label: "Pressekontakt", href: "/fraktion" },
      ]
    },
  ],
};
