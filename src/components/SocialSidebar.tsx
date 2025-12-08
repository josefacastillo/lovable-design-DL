import { Facebook, Instagram, Twitter, Share2, Link2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const SocialSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const pageTitle = typeof document !== "undefined" ? document.title : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success("Link kopiert!");
  };

  const shareLinks = [
    {
      icon: Facebook,
      label: "Auf Facebook teilen",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      isShare: true,
    },
    {
      icon: Twitter,
      label: "Auf Twitter teilen",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`,
      isShare: true,
    },
  ];

  const followLinks = [
    {
      icon: Facebook,
      label: "Facebook folgen",
      href: "https://facebook.com/DieLinkeOffenbach",
      isShare: false,
    },
    {
      icon: Instagram,
      label: "Instagram folgen",
      href: "https://instagram.com/DieLinkeOffenbach",
      isShare: false,
    },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex">
      <div className="flex flex-col bg-card border border-border rounded-r-lg shadow-lg overflow-hidden">
        {/* Toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-3 hover:bg-muted transition-colors border-b border-border"
          aria-label={isExpanded ? "Social-Links schließen" : "Social-Links öffnen"}
          aria-expanded={isExpanded}
        >
          <Share2 size={18} className="text-primary" />
        </button>

        {isExpanded && (
          <>
            {/* Share section */}
            <div className="border-b border-border">
              <span className="block text-[10px] text-muted-foreground px-2 pt-2 uppercase tracking-wide">
                Teilen
              </span>
              {shareLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 hover:bg-muted transition-colors group"
                  aria-label={link.label}
                >
                  <link.icon size={18} className="text-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
              <button
                onClick={handleCopyLink}
                className="flex items-center p-3 hover:bg-muted transition-colors group w-full"
                aria-label="Link kopieren"
              >
                <Link2 size={18} className="text-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>

            {/* Follow section */}
            <div>
              <span className="block text-[10px] text-muted-foreground px-2 pt-2 uppercase tracking-wide">
                Folgen
              </span>
              {followLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 hover:bg-muted transition-colors group"
                  aria-label={link.label}
                >
                  <link.icon size={18} className="text-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
