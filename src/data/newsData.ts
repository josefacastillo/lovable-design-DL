import { NewsData } from "@/types/news";
import housingImage from "@/assets/housing-article.jpg";
import meetingImage from "@/assets/community-meeting.jpg";
import celebrationImage from "@/assets/election-celebration.jpg";

export const newsData: NewsData = {
  newsItems: [
    {
      id: 1,
      title: "Das Kulturkarree braucht ein neues Konzept",
      subtitle: "Pressemitteilung",
      image: housingImage,
      isNew: true,
    },
    {
      id: 2,
      title: "Wohnraumpotenziale heben – günstigen Wohnraum schaffen",
      subtitle: "Antrag zur StVV",
      image: meetingImage,
      isNew: false,
    },
    {
      id: 3,
      title: "Immobilienspekulanten drangsalieren Mieter*innen",
      subtitle: "Strahlenberger Straße",
      image: celebrationImage,
      isNew: false,
    },
    {
      id: 4,
      title: "Soziale Gerechtigkeit für alle Bürger*innen",
      subtitle: "Pressemitteilung",
      image: housingImage,
      isNew: true,
    },
    {
      id: 5,
      title: "Klimaschutz beginnt vor Ort",
      subtitle: "Antrag zur StVV",
      image: meetingImage,
      isNew: false,
    },
    {
      id: 6,
      title: "Bezahlbare Energie für alle",
      subtitle: "Pressemitteilung",
      image: celebrationImage,
      isNew: false,
    },
  ],
};
