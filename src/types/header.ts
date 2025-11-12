export interface NavItem {
  label: string;
  href: string;
  submenu?: NavItem[];
}

export interface HeaderData {
  logo: string;
  navItems: NavItem[];
}
