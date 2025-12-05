import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const CTARow = () => {
  return (
    <section className="py-16 bg-background" aria-label="Newsletter und Spenden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Newsletter Signup */}
          <Card className="border-2 border-primary/20 bg-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    Newsletter
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Keine Nachrichten aus dem Rathaus verpassen.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="flex-1"
                />
                <Button variant="secondary" className="shrink-0">
                  Anmelden
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Donation Teaser */}
          <Card className="border-2 border-accent/20 bg-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-lg shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    Unterstützen
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Unabhängige Politik braucht deine Unterstützung.
                  </p>
                </div>
              </div>
              <Button variant="default" className="w-full" asChild>
                <Link to="/kontakt">Jetzt spenden</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
