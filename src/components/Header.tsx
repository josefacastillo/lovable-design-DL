import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-primary">DIE LINKE</h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Themen
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Fraktion
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Aktuelles
              </a>
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
