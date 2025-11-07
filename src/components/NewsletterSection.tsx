import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const NewsletterSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary text-primary-foreground p-3 rounded">
                  <Mail className="w-6 h-6" />
                </div>
              <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    Bleiben Sie informiert
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Newsletter abonnieren
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="ihre.email@beispiel.de"
                  className="flex-1"
                />
                <Button className="bg-accent hover:bg-accent/90 text-white shrink-0">
                  Anmelden
                </Button>
              </div>
              
              <p className="text-center text-sm text-muted-foreground mt-6">
                <a href="#" className="hover:text-primary transition-colors">
                  Alle Beiträge anzeigen
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
