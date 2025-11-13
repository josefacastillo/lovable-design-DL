import { EventsData } from "@/types/events";

export const eventsData: EventsData = {
  sectionTitle: "Kommende Termine",
  events: [
    {
      id: 1,
      title: "Mitgliederversammlung",
      date: "2025-12-15",
      time: "18:00",
      location: "DIE LINKE ECKE, Offenbach",
      description: "Monatliche Mitgliederversammlung zur Besprechung aktueller Themen"
    },
    {
      id: 2,
      title: "Sozialberatung",
      date: "2025-12-18",
      time: "14:00",
      location: "DIE LINKE ECKE, Offenbach",
      description: "Offene Sozialberatung für alle Bürger*innen"
    },
    {
      id: 3,
      title: "Stadtverordnetenversammlung",
      date: "2025-12-20",
      time: "17:00",
      location: "Rathaus Offenbach",
      description: "Öffentliche Sitzung der Stadtverordnetenversammlung"
    }
  ]
};
