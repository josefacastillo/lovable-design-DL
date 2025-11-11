export interface Topic {
  id: number;
  title: string;
  icon: string;
  action: string;
}

export interface TopicsData {
  sectionTitle: string;
  topics: Topic[];
}
