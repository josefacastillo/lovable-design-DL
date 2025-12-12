import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { heroData } from "@/data/heroData";
import { eventsData } from "@/data/eventsData";
import { Link } from "react-router-dom";
import { 
  ChevronDown,
  MapPin,
  Clock,
  Mail,
  ExternalLink,
  Megaphone,
  Home,
  Building2,
  Vote,
  HeartHandshake,
  Flame,
  Users,
  ArrowRight
} from "lucide-react";

// Campaign data focused on current fights
const kaempfe = [
  {
    title: "Strahlenberger Straße",
    problem: "Menschen sollen aus ihren Wohnungen verdrängt werden.",
    stance: "Wir kämpfen für Mieterschutz und gegen Luxussanierung!",
    tag: "Wohnungskampf",
    icon: Home,
    link: "/archiv",
  },
  {
    title: "Kulturkarree retten",
    problem: "Die Stadt will öffentliche Flächen privatisieren.",
    stance: "Kulturkarree für alle – nicht für Investoren!",
    tag: "Stadtentwicklung",
    icon: Building2,
    link: "/fraktion",
  },
  {
    title: "Kommunalwahl 2026",
    problem: "Offenbach braucht eine starke linke Stimme.",
    stance: "Mit uns für ein soziales Offenbach!",
    tag: "Wahl 2026",
    icon: Vote,
    link: "/kreisvorstand",
  },
];

const OnePager = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero: The Fight */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/80 to-primary-dark/90" />
          
          <div className="container mx-auto px-4 text-center relative z-10 py-12">
            <Badge 
              variant="outline" 
              className="mb-6 border-primary-foreground/40 text-primary-foreground bg-background/10 text-sm px-4 py-1"
            >
              <Megaphone className="w-4 h-4 mr-2" aria-hidden="true" />
              DIE LINKE Offenbach
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto leading-tight">
              Wir kämpfen für<br />
              <span className="text-accent">bezahlbares Wohnen</span><br />
              in Offenbach
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Gegen Verdrängung. Gegen Sozialabbau. Für ein solidarisches Offenbach.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
                onClick={() => scrollToSection("kaempfe")}
              >
                <Flame className="w-5 h-5 mr-2" aria-hidden="true" />
                Kämpfe mit uns
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => scrollToSection("hilfe")}
              >
                Du brauchst Hilfe?
              </Button>
            </div>

            <button 
              onClick={() => scrollToSection("kaempfe")}
              className="animate-bounce"
              aria-label="Nach unten scrollen"
            >
              <ChevronDown className="w-8 h-8 text-primary-foreground/70" />
            </button>
          </div>
        </section>

        {/* Current Fights / Campaigns */}
        <section id="kaempfe" className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <Badge variant="destructive" className="mb-4">
                Aktuelle Kämpfe
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Wofür wir gerade kämpfen
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {kaempfe.map((kampf, index) => (
                <Link key={index} to={kampf.link} className="group">
                  <Card className="h-full border-2 border-border hover:border-primary transition-all hover:shadow-xl bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <kampf.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {kampf.tag}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {kampf.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-3">
                        {kampf.problem}
                      </p>
                      
                      <p className="text-foreground font-medium text-sm border-l-4 border-primary pl-3 bg-primary/5 py-2">
                        {kampf.stance}
                      </p>
                      
                      <div className="flex items-center text-primary font-medium text-sm mt-4">
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Solidarity & Help */}
        <section id="hilfe" className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <HeartHandshake className="w-12 h-12 mx-auto mb-4 opacity-80" aria-hidden="true" />
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Wir stehen an deiner Seite
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Kostenlos. Solidarisch. Ohne Bürokratie.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="bg-background/10 border-primary-foreground/20 backdrop-blur">
                <CardContent className="p-6 text-primary-foreground">
                  <h3 className="text-2xl font-bold mb-3">Sozialsprechstunde</h3>
                  <p className="opacity-90 mb-4">
                    Probleme mit dem Amt? Fragen zu Bürgergeld, Wohngeld oder Rente? 
                    Wir helfen dir – ohne Termin, ohne Kosten.
                  </p>
                  <div className="flex items-center gap-2 text-sm opacity-80 mb-4">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span>Jeden Donnerstag, 16–18 Uhr</span>
                  </div>
                  <Button variant="secondary" asChild>
                    <Link to="/die-linke-hilft">Mehr erfahren</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-background/10 border-primary-foreground/20 backdrop-blur">
                <CardContent className="p-6 text-primary-foreground">
                  <h3 className="text-2xl font-bold mb-3">Heizkostencheck</h3>
                  <p className="opacity-90 mb-4">
                    Deine Heizkostenabrechnung ist zu hoch? Wir prüfen sie auf Fehler 
                    und helfen dir, dein Geld zurückzuholen.
                  </p>
                  <div className="flex items-center gap-2 text-sm opacity-80 mb-4">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span>Nach Vereinbarung</span>
                  </div>
                  <Button variant="secondary" asChild>
                    <Link to="/hartz-4-hilfe">Termin anfragen</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Upcoming Actions */}
        <section id="aktionen" className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <Badge variant="secondary" className="mb-4">
                Termine
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Sei dabei!
              </h2>
              <p className="text-muted-foreground">
                Komm vorbei, mach mit, lern uns kennen.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-4">
              {eventsData.events.slice(0, 3).map((event, i) => (
                <Card key={i} className="overflow-hidden border-l-4 border-l-primary">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 text-center min-w-[70px]">
                      <p className="text-2xl font-bold">{new Date(event.date).getDate()}</p>
                      <p className="text-xs uppercase">
                        {new Date(event.date).toLocaleDateString("de-DE", { month: "short" })}
                      </p>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg">{event.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" aria-hidden="true" />
                          {event.time} Uhr
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" aria-hidden="true" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/archiv">Alle Termine ansehen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section id="mitmachen" className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" aria-hidden="true" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Werde Teil der Bewegung
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Wir sind über 300 Menschen in Offenbach, die sich für ein soziales und solidarisches 
                Miteinander engagieren. Werde Teil von uns!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button size="lg" className="font-bold" asChild>
                  <a 
                    href="https://www.die-linke.de/mitmachen/mitglied-werden/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Mitglied werden
                    <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/kontakt">Kontakt aufnehmen</Link>
                </Button>
              </div>
              
              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                <Card className="bg-muted/50">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">E-Mail</p>
                      <a 
                        href="mailto:info@die-linke-offenbach.de" 
                        className="text-sm font-medium text-foreground hover:text-primary"
                      >
                        info@die-linke-offenbach.de
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardContent className="p-4 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Büro</p>
                      <p className="text-sm font-medium text-foreground">
                        DIE LINKE ECKE, Offenbach
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
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