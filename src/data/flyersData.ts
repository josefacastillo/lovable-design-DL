import { FlyersData } from "@/types/flyers";
import flyerExample from "@/assets/flyer-example.png";

export const flyersData: FlyersData = {
  flyers: [
    {
      id: 1,
      title: "Die Linke - 3. stärkste Kraft",
      description: "Wir sind als Linke in Offenbach einfach die 3. stärkste Kraft!",
      image: flyerExample,
      link: "#",
      linkText: "Mehr erfahren"
    },
    {
      id: 2,
      title: "Mitglied werden",
      description: "Einmischen! Mitmachen!",
      image: flyerExample,
      link: "#",
      linkText: "Jetzt beitreten"
    },
    {
      id: 3,
      title: "300 Mitglieder",
      description: "Rekord Wachstum geht weiter - Wir sind jetzt 300 Mitglieder in Offenbach",
      image: flyerExample,
    },
  ],
};
