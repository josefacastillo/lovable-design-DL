import { Button } from "@/components/ui/button";
import { Search, ChevronDown, Menu } from "lucide-react";
import { headerData } from "@/data/headerData";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const { logo, navItems } = headerData;

  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-primary">{logo}</h1>
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item, idx) => (
                item.submenu ? (
                  <DropdownMenu key={idx}>
                    <DropdownMenuTrigger className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-card">
                      {item.submenu.map((subItem, subIdx) => (
                        <DropdownMenuItem key={subIdx} asChild>
                          <a href={subItem.href} className="cursor-pointer">
                            {subItem.label}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a 
                    key={idx}
                    href={item.href} 
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item, idx) => (
                    <div key={idx}>
                      {item.submenu ? (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-2">
                            {item.label}
                          </p>
                          <div className="pl-4 flex flex-col gap-2">
                            {item.submenu.map((subItem, subIdx) => (
                              <a
                                key={subIdx}
                                href={subItem.href}
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                              >
                                {subItem.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.label}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
