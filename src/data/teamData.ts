import { TeamData } from "@/types/team";
import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";

export const teamData: TeamData = {
  sectionTitle: "Unsere Fraktion",
  members: [
    {
      id: 1,
      name: "Gizem Erinç-Çiftçi",
      role: "Fraktionsvorsitzende",
      image: person1,
    },
    {
      id: 2,
      name: "Markus Philippi",
      role: "Stadtverordneter",
      image: person2,
    },
  ],
};
