import { ArticlesData } from "@/types/articles";
import housingImage from "@/assets/housing-article.jpg";
import meetingImage from "@/assets/community-meeting.jpg";
import celebrationImage from "@/assets/election-celebration.jpg";

export const articlesData: ArticlesData = {
  sectionTitle: "Aktuelle Beiträge",
  articles: [
    {
      id: 1,
      category: "Wohnungspolitik",
      title: "Wohnraumpotenziale heben – günstigen Wohnraum schaffen",
      date: "31. Oktober 2025",
      link: "Weiterlesen",
      image: housingImage,
    },
    {
      id: 2,
      category: "Kommunalwahl",
      title: "Die Linke wählt Kandidat*innenliste für die Kommunalwahl",
      date: "21. Oktober 2025",
      link: "Weiterlesen",
      image: celebrationImage,
    },
    {
      id: 3,
      category: "Soziales",
      title: "Die Linke Offenbach prüft Heizkostenabrechnungen",
      date: "14. Oktober 2025",
      link: "Weiterlesen",
      image: meetingImage,
    },
  ],
};
