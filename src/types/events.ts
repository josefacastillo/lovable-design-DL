export interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location?: string;
  description?: string;
}

export interface EventsData {
  sectionTitle: string;
  events: CalendarEvent[];
}
