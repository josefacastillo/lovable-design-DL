export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface TeamData {
  sectionTitle: string;
  members: TeamMember[];
}
