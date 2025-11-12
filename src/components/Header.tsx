import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { headerData } from "@/data/headerData";

export const Header = () => {
  const { logo, navItems, secondaryNavItems } = headerData;

  return (
    <header className="bg-primary sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-6 py-4 overflow-x-auto">
          {navItems.map((item, idx) => (
            <a 
              key={idx}
              href={item.href} 
              className="text-sm font-medium text-primary-foreground hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>
        {secondaryNavItems && secondaryNavItems.length > 0 && (
          <div className="border-t border-primary-foreground/20 py-2">
            <nav className="flex items-center gap-6">
              {secondaryNavItems.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href} 
                  className="text-sm font-medium text-primary-foreground hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
