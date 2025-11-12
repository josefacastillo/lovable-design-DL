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
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start">
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="text-sm space-y-2 opacity-90">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4">Social Media</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social, idx) => {
                const Icon = socialIcons[social.platform];
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm opacity-75 pt-8 border-t border-white/20">
          {copyright}
        </div>
      </div>
    </footer>
  );
};
