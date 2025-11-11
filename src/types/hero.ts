export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram';
  href: string;
  ariaLabel: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  ctaHref: string;
  socialLinks: SocialLink[];
}
