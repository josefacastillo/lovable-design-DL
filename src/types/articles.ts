export interface Article {
  id: number;
  category: string;
  title: string;
  date: string;
  link: string;
  image: string;
}

export interface ArticlesData {
  sectionTitle: string;
  articles: Article[];
}
