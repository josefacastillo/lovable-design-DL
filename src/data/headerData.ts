import { HeaderData } from "@/types/header";

export const headerData: HeaderData = {
  logo: "DIE LINKE",
  navItems: [
    { label: "Startseite", href: "/" },
    { label: "Kreisverband", href: "/kreisverband" },
    { label: "Kreisvorstand", href: "/kreisvorstand" },
    { label: "Fraktion", href: "/fraktion" },
    { label: "DIE LINKE ECKE", href: "/die-linke-ecke" },
    { 
      label: "Hilfe & Beratung", 
      href: "#",
      submenu: [
        { label: "Die Linke hilft", href: "/die-linke-hilft" },
        { label: "Hartz-4 Hilfe", href: "/hartz-4-hilfe" },
      ]
    },
    { label: "Kontakt", href: "/kontakt" },
    { label: "Archiv", href: "/archiv" },
  ],
};
