export interface ContentSection {
  id: number;
  title: string;
  content: string | string[];
}

export interface PageContent {
  pageTitle: string;
  description?: string;
  sections: ContentSection[];
}
