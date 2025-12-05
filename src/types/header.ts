export interface NavItem {
  label: string;
  href: string;
  submenu?: NavItem[];
  external?: boolean;
}

export interface HeaderData {
  logo: string;
  navItems: NavItem[];
}
