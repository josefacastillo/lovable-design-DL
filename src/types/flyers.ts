export interface Flyer {
  id: number;
  title: string;
  description?: string;
  image: string;
  link?: string;
  linkText?: string;
}

export interface FlyersData {
  flyers: Flyer[];
}
