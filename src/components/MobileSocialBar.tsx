import { Facebook, Instagram, Twitter, Link2 } from "lucide-react";
import { toast } from "sonner";

export const MobileSocialBar = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const pageTitle = typeof document !== "undefined" ? document.title : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success("Link kopiert!");
  };

  const socialActions = [
    {
      icon: Facebook,
      label: "Auf Facebook teilen",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      type: "link" as const,
    },
    {
      icon: Twitter,
      label: "Auf Twitter teilen",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`,
      type: "link" as const,
    },
    {
      icon: Link2,
      label: "Link kopieren",
      onClick: handleCopyLink,
      type: "button" as const,
    },
    {
      icon: Facebook,
      label: "Facebook folgen",
      href: "https://facebook.com/DieLinkeOffenbach",
      type: "link" as const,
    },
    {
      icon: Instagram,
      label: "Instagram folgen",
      href: "https://instagram.com/DieLinkeOffenbach",
      type: "link" as const,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card border-t border-border shadow-lg">
      <div className="flex items-center justify-around py-2 px-4">
        {socialActions.map((action, index) => (
          action.type === "link" ? (
            <a
              key={index}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label={action.label}
            >
              <action.icon size={20} aria-hidden="true" />
            </a>
          ) : (
            <button
              key={index}
              onClick={action.onClick}
              className="flex flex-col items-center p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label={action.label}
            >
              <action.icon size={20} aria-hidden="true" />
            </button>
          )
        ))}
      </div>
    </div>
  );
};
