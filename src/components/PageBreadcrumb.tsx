import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { headerData } from "@/data/headerData";

// Build route map from headerData
const buildRouteMap = (): Record<string, { label: string; parent?: string }> => {
  const map: Record<string, { label: string; parent?: string }> = {
    "/": { label: "Start" },
  };

  headerData.navItems.forEach((item) => {
    if (item.submenu) {
      item.submenu.forEach((subItem) => {
        if (!subItem.external && subItem.href !== "#") {
          map[subItem.href] = {
            label: subItem.label,
            parent: item.label,
          };
        }
      });
    } else if (item.href !== "#") {
      map[item.href] = { label: item.label };
    }
  });

  // Add any missing routes
  const additionalRoutes: Record<string, { label: string; parent?: string }> = {
    "/kreisverband": { label: "Kreisverband", parent: "Partei & Personen" },
    "/hartz-4-hilfe": { label: "Hartz-4-Hilfe", parent: "Beratung & Kontakt" },
    "/archiv": { label: "Archiv" },
    "/die-linke-ecke": { label: "Die Linke Ecke", parent: "Partei & Personen" },
    "/die-linke-hilft": { label: "Sozialberatung", parent: "Beratung & Kontakt" },
  };

  return { ...map, ...additionalRoutes };
};

const routeMap = buildRouteMap();

export const PageBreadcrumb = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Don't show breadcrumb on home page
  if (currentPath === "/") {
    return null;
  }

  const currentRoute = routeMap[currentPath];
  
  if (!currentRoute) {
    return null;
  }

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Home size={14} aria-hidden="true" />
              <span>Start</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {currentRoute.parent && (
          <>
            <BreadcrumbSeparator>
              <ChevronRight size={14} aria-hidden="true" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <span className="text-muted-foreground">{currentRoute.parent}</span>
            </BreadcrumbItem>
          </>
        )}

        <BreadcrumbSeparator>
          <ChevronRight size={14} aria-hidden="true" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-foreground font-medium">
            {currentRoute.label}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
