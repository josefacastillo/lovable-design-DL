import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { headerData } from "@/data/headerData";

export const Header = () => {
  const { logo, navItems } = headerData;

  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-primary">{logo}</h1>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href} 
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
