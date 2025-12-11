import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { heroData } from "@/data/heroData";
import { eventsData } from "@/data/eventsData";
import { topicsData } from "@/data/topicsData";
import { teamData } from "@/data/teamData";
import { 
  Calendar, 
  Users, 
  Heart, 
  MessageCircle, 
  ChevronDown,
  MapPin,
  Clock,
  Mail,
  Phone,
  ExternalLink
} from "lucide-react";

const OnePager = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "ueber-uns", label: "Über uns" },
    { id: "hilfe", label: "Hilfe" },
    { id: "themen", label: "Themen" },
    { id: "termine", label: "Termine" },
    { id: "kontakt", label: "Kontakt" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section - Compact */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/90 via-primary to-primary-dark overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge variant="secondary" className="mb-4 bg-background/20 text-primary-foreground border-none">
              DIE LINKE Offenbach
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 max-w-4xl mx-auto leading-tight">
              {heroData.title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              {heroData.subtitle}
            </p>
            
            {/* Quick Nav */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
                >
                  {item.label}
                </Button>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection("ueber-uns")}
              className="animate-bounce mt-4"
              aria-label="Nach unten scrollen"
            >
              <ChevronDown className="w-8 h-8 text-primary-foreground/70" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="ueber-uns" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Wer wir sind</h2>
              <p className="text-lg text-muted-foreground mb-8">
                DIE LINKE Neukölln setzt sich für soziale Gerechtigkeit, bezahlbaren Wohnraum und 
                ein solidarisches Miteinander in unserem Bezirk ein. Wir kämpfen gemeinsam für eine 
                lebenswerte Stadt für alle.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Users, label: "300+ Mitglieder", desc: "Aktive Basis" },
                  { icon: Heart, label: "Solidarität", desc: "Für alle" },
                  { icon: Calendar, label: "Regelmäßig", desc: "Events & Treffen" },
                  { icon: MessageCircle, label: "Vor Ort", desc: "In Neukölln" },
                ].map((item, i) => (
                  <Card key={i} className="bg-muted/30 border-none">
                    <CardContent className="p-4 text-center">
                      <item.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="font-semibold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Help Services - Compact */}
        <section id="hilfe" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Wir helfen dir</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="bg-primary text-primary-foreground border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sozialsprechstunde</h3>
                  <p className="opacity-90 mb-4">Kostenlose Beratung zu Bürgergeld, Wohngeld und sozialen Fragen.</p>
                  <p className="text-sm opacity-80">Jeden Donnerstag, 16-18 Uhr</p>
                  <Button variant="secondary" className="mt-4" asChild>
                    <a href="/die-linke-hilft">Mehr erfahren</a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-accent text-accent-foreground border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Heizkostencheck</h3>
                  <p className="opacity-90 mb-4">Überprüfung deiner Heizkosten-Abrechnung auf Fehler.</p>
                  <p className="text-sm opacity-80">Termine nach Vereinbarung</p>
                  <Button variant="secondary" className="mt-4" asChild>
                    <a href="/hartz-4-hilfe">Termin buchen</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Topics - Condensed */}
        <section id="themen" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Unsere Themen</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {topicsData.topics.map((topic) => (
                <Card key={topic.id} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{topic.action}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Events - Compact List */}
        <section id="termine" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Nächste Termine</h2>
            <div className="max-w-2xl mx-auto space-y-3">
              {eventsData.events.slice(0, 4).map((event, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 text-center min-w-[60px]">
                      <p className="text-2xl font-bold">{new Date(event.date).getDate()}</p>
                      <p className="text-xs uppercase">
                        {new Date(event.date).toLocaleDateString("de-DE", { month: "short" })}
                      </p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">{event.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1 truncate">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button variant="outline" asChild>
                <a href="/archiv">Alle Termine ansehen</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact - Simple */}
        <section id="kontakt" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Kontakt</h2>
              <p className="text-muted-foreground mb-8">
                Du hast Fragen oder möchtest dich engagieren? Wir freuen uns auf dich!
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center">
                    <Mail className="w-8 h-8 text-primary mb-3" />
                    <p className="font-semibold text-foreground">E-Mail</p>
                    <a href="mailto:info@die-linke-neukoelln.de" className="text-primary hover:underline">
                      info@die-linke-neukoelln.de
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center">
                    <MapPin className="w-8 h-8 text-primary mb-3" />
                    <p className="font-semibold text-foreground">Adresse</p>
                    <p className="text-muted-foreground text-sm">
                      Richardstraße 104, 12043 Berlin
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <Button size="lg" asChild>
                  <a href="/kontakt">Kontaktformular</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://www.die-linke.de/mitmachen/mitglied-werden/" target="_blank" rel="noopener noreferrer">
                    Mitglied werden <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Preview */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Unser Team</h2>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {teamData.members.slice(0, 4).map((member, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-muted overflow-hidden mx-auto mb-2">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/10">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                    )}
                  </div>
                  <p className="font-semibold text-foreground text-sm">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button variant="link" asChild>
                <a href="/kreisvorstand">Alle Mitglieder ansehen →</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default OnePager;
