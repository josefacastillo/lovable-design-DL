export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderData {
  logo: string;
  navItems: NavItem[];
  secondaryNavItems?: NavItem[];
}
