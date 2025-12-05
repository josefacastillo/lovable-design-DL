export interface HeroAction {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram';
  href: string;
  ariaLabel: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  ctaText?: string;
  ctaHref?: string;
  socialLinks: SocialLink[];
}
