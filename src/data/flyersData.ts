import { FlyersData } from "@/types/flyers";
import flyer3rdStrongest from "@/assets/flyer-3rd-strongest.jpg";
import flyerHeatingCheck from "@/assets/flyer-heating-check.jpg";
import flyer300Members from "@/assets/flyer-300-members.jpg";
import flyerJoinUs from "@/assets/flyer-join-us.jpg";

export const flyersData: FlyersData = {
  flyers: [
    {
      id: 1,
      title: "3. stärkste Kraft in Offenbach",
      description: "Bei der letzten Wahl haben wir 17,78% erreicht - wir sind die drittstärkste politische Kraft in Offenbach!",
      image: flyer3rdStrongest,
    },
    {
      id: 2,
      title: "HeizkostenCheck",
      description: "Wir kümmern uns um Deine Nebenkosten - Prüfe jetzt Deine Heizkosten!",
      image: flyerHeatingCheck,
      link: "#",
      linkText: "Zum Check"
    },
    {
      id: 3,
      title: "300 Mitglieder - Rekordwachstum",
      description: "Unser Wachstum geht weiter! Wir sind jetzt stolze 300 Mitglieder in Offenbach.",
      image: flyer300Members,
    },
    {
      id: 4,
      title: "Mitglied werden",
      description: "Einmischen! Mitmachen! Werde Teil unserer Bewegung.",
      image: flyerJoinUs,
      link: "#",
      linkText: "Jetzt beitreten"
    },
  ],
};
