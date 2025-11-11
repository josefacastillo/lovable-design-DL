export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram';
  href: string;
}

export interface FooterData {
  sections: FooterSection[];
  socialLinks: SocialLink[];
  copyright: string;
}
