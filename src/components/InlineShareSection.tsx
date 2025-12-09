import { Facebook, Twitter, Link2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const InlineShareSection = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const pageTitle = typeof document !== "undefined" ? document.title : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success("Link kopiert!");
  };

  const shareActions = [
    {
      icon: Facebook,
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`,
    },
  ];

  return (
    <div className="border-t border-border pt-6 mt-8">
      <p className="text-sm text-muted-foreground mb-3">Diese Seite teilen:</p>
      <div className="flex gap-2 flex-wrap">
        {shareActions.map((action) => (
          <Button
            key={action.label}
            variant="outline"
            size="sm"
            asChild
          >
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Auf ${action.label} teilen`}
            >
              <action.icon size={16} className="mr-2" aria-hidden="true" />
              {action.label}
            </a>
          </Button>
        ))}
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopyLink}
          aria-label="Link kopieren"
        >
          <Link2 size={16} className="mr-2" aria-hidden="true" />
          Link kopieren
        </Button>
      </div>
    </div>
  );
};
