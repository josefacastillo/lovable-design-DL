import { Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-12 pb-6" role="contentinfo">
      <div className="container mx-auto px-4">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">DIE LINKE. Offenbach</h3>
            <p className="text-sm opacity-80">
              Sozial. Gerecht. Für Alle.<br />
              Wir kämpfen für ein solidarisches Offenbach.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.facebook.com/DieLinkeOffenbach" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook" 
                className="hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/die_linke_offenbach/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram" 
                className="hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com/linke_of" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter" 
                className="hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Partei & Politik</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/kreisvorstand" className="opacity-80 hover:opacity-100 hover:text-white transition-colors">Kreisvorstand</Link></li>
              <li><Link to="/fraktion" className="opacity-80 hover:opacity-100 hover:text-white transition-colors">Rathausfraktion</Link></li>
              <li><Link to="/archiv" className="opacity-80 hover:opacity-100 hover:text-white transition-colors">Kommunalwahl 2026</Link></li>
              <li><Link to="/die-linke-ecke" className="opacity-80 hover:opacity-100 hover:text-white transition-colors">Die Linke Ecke</Link></li>
              <li><Link to="/archiv" className="opacity-80 hover:opacity-100 hover:text-white transition-colors">Archiv</Link></li>
            </ul>
          </div>

          {/* Column 3: Service & Action */}
          <div>
            <h4 className="text-white font-semibold mb-4">Mitmachen & Hilfe</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/die-linke-hilft" className="text-primary hover:text-primary/80 font-medium transition-colors">Sozialsprechstunde</Link></li>
              <li><Link to="/hartz4-hilfe" className="text-primary hover:text-primary/80 font-medium transition-colors">Heizkostencheck</Link></li>
              <li><Link to="/kontakt" className="opacity-80 hover:opacity-100 hover:text-white transition-colors">Spenden</Link></li>
              <li>
                <a 
                  href="https://www.die-linke.de/mitmachen/mitglied-werden/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-white transition-colors"
                >
                  Mitglied werden
                </a>
              </li>
              <li><Link to="/archiv" className="opacity-80 hover:opacity-100 hover:text-white transition-colors">Termine</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 shrink-0 opacity-80" />
                <span className="opacity-80">
                  Die Linke KV Offenbach<br />
                  Domstraße 81<br />
                  63067 Offenbach am Main
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 opacity-80" />
                <a href="mailto:info@die-linke-of.de" className="opacity-80 hover:opacity-100 hover:text-white transition-colors">
                  info@die-linke-of.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Legal */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="opacity-60">&copy; {new Date().getFullYear()} DIE LINKE Kreisverband Offenbach-Stadt</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/kontakt" className="opacity-60 hover:opacity-100 hover:text-white transition-colors">Impressum</Link>
            <Link to="/kontakt" className="opacity-60 hover:opacity-100 hover:text-white transition-colors">Datenschutz</Link>
            <button 
              onClick={() => {
                localStorage.removeItem('cookieConsent');
                window.location.reload();
              }} 
              className="opacity-60 hover:opacity-100 hover:text-white transition-colors"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
