import { Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Über Uns</h3>
            <p className="text-sm opacity-90">
              Impressum & Datenschutzm
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Social Media</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Sitemap</h3>
            <ul className="text-sm space-y-2 opacity-90">
              <li><a href="#" className="hover:underline">Startseite</a></li>
              <li><a href="#" className="hover:underline">Themen</a></li>
              <li><a href="#" className="hover:underline">Kontakt</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-sm opacity-75 pt-8 border-t border-white/20">
          © 2023 DIE LINKE: Kreisverband Offenbach Stadt
        </div>
      </div>
    </footer>
  );
};
