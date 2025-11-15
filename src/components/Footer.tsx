import { Twitter, Instagram, Facebook } from "lucide-react";
import { footerData } from "@/data/footerData";

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
};

export const Footer = () => {
  const { sections, socialLinks, copyright } = footerData;

  return (
    <footer className="bg-secondary text-secondary-foreground py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {sections.map((section, idx) => (
            <nav key={idx} className="mx-auto md:mx-0" aria-label={section.title}>
              <h2 className="font-bold mb-4 text-center md:text-left">{section.title}</h2>
              <ul className="text-sm space-y-2 opacity-90 text-center md:text-left">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.href} 
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-secondary-foreground rounded-sm px-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          
          <div className="mx-auto md:mx-0">
            <h2 className="font-bold mb-4 text-center md:text-left">Social Media</h2>
            <div className="flex gap-4 justify-center md:justify-start" role="navigation" aria-label="Social Media Links">
              {socialLinks.map((social, idx) => {
                const Icon = socialIcons[social.platform];
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-secondary-foreground rounded-full p-1"
                    aria-label={`${social.platform} Profil besuchen`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm opacity-75 pt-8 border-t border-secondary-foreground/20">
          {copyright}
        </div>
      </div>
    </footer>
  );
};
