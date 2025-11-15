import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom">
      <Card className="max-w-4xl mx-auto border-2 border-primary/20 bg-card/95 backdrop-blur-sm shadow-lg">
        <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2 text-foreground">
              Wir verwenden Cookies
            </h3>
            <p className="text-sm text-muted-foreground">
              Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern. Durch die weitere Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button
              variant="outline"
              onClick={handleDecline}
              className="whitespace-nowrap"
            >
              Ablehnen
            </Button>
            <Button
              variant="default"
              onClick={handleAccept}
              className="whitespace-nowrap"
            >
              Akzeptieren
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDecline}
            className="absolute top-2 right-2 sm:relative sm:top-0 sm:right-0"
            aria-label="Schließen"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};
