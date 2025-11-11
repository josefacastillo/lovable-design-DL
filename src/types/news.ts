export interface NewsItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  isNew: boolean;
}

export interface NewsData {
  newsItems: NewsItem[];
}
