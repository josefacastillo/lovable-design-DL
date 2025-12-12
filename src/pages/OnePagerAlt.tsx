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
  Sparkles,
  Users,
  ArrowRight,
  Calendar,
  CheckCircle2
} from "lucide-react";

// Themes with collaborative/constructive language
const themen = [
  {
    title: "Bezahlbares Wohnen",
    description: "Wir setzen uns für Mieterschutz und sozialen Wohnungsbau ein.",
    stance: "Gemeinsam für ein Zuhause, das sich jeder leisten kann.",
    tag: "Wohnen",
    icon: Home,
    link: "/archiv",
  },
  {
    title: "Lebendige Stadtkultur",
    description: "Öffentliche Räume gehören allen – wir gestalten sie gemeinsam.",
    stance: "Kultur und Begegnung statt Leerstand und Spekulation.",
    tag: "Stadtentwicklung",
    icon: Building2,
    link: "/fraktion",
  },
  {
    title: "Kommunalwahl 2026",
    description: "Mit einer starken linken Stimme im Stadtparlament.",
    stance: "Gemeinsam gestalten wir ein soziales Offenbach.",
    tag: "Wahl 2026",
    icon: Vote,
    link: "/kreisvorstand",
  },
];

// Election 2026 goals
const wahlziele = [
  "Bezahlbare Mieten für alle",
  "Kostenloser ÖPNV in Offenbach",
  "Mehr Sozialwohnungen bauen",
  "Kinderbetreuung ausbauen",
];

const OnePagerAlt = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero: Collaborative tone */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/80 to-secondary/90" />
          
          <div className="container mx-auto px-4 text-center relative z-10 py-12">
            <Badge 
              variant="outline" 
              className="mb-6 border-primary-foreground/40 text-primary-foreground bg-background/10 text-sm px-4 py-1"
            >
              <Megaphone className="w-4 h-4 mr-2" aria-hidden="true" />
              DIE LINKE Offenbach
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto leading-tight">
              Gemeinsam für ein<br />
              <span className="text-accent">soziales Offenbach</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Solidarisch. Gerecht. Für alle. Wir gestalten unsere Stadt gemeinsam.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
                onClick={() => scrollToSection("themen")}
              >
                <Sparkles className="w-5 h-5 mr-2" aria-hidden="true" />
                Unsere Themen
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25 backdrop-blur-sm"
                onClick={() => scrollToSection("hilfe")}
              >
                Beratung & Hilfe
              </Button>
            </div>

            <button 
              onClick={() => scrollToSection("themen")}
              className="animate-bounce"
              aria-label="Nach unten scrollen"
            >
              <ChevronDown className="w-8 h-8 text-primary-foreground/70" />
            </button>
          </div>
        </section>

        {/* Themes / Topics */}
        <section id="themen" className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <Badge variant="secondary" className="mb-4">
                Unsere Themen
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Wofür wir uns einsetzen
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {themen.map((thema, index) => (
                <Link key={index} to={thema.link} className="group">
                  <Card className="h-full border-2 border-border hover:border-accent transition-all hover:shadow-xl bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-accent/10">
                          <thema.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {thema.tag}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {thema.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-3">
                        {thema.description}
                      </p>
                      
                      <p className="text-foreground font-medium text-sm border-l-4 border-accent pl-3 bg-accent/5 py-2">
                        {thema.stance}
                      </p>
                      
                      <div className="flex items-center text-accent font-medium text-sm mt-4">
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

        {/* Wahlen 2026 */}
        <section id="wahl2026" className="py-16 md:py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  <Vote className="w-4 h-4 mr-2" aria-hidden="true" />
                  Kommunalwahl 2026
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Gemeinsam gestalten
                </h2>
                <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
                  Bei der Kommunalwahl 2026 entscheiden wir, wie Offenbach in den nächsten Jahren aussehen wird. 
                  Wir stehen für ein gerechtes und lebenswertes Offenbach.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {wahlziele.map((ziel, i) => (
                  <div key={i} className="flex items-center gap-3 bg-background/10 rounded-lg p-4">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                    <span className="font-medium">{ziel}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link to="/kreisvorstand">
                    Mehr zum Wahlprogramm
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Solidarity & Help */}
        <section id="hilfe" className="py-16 md:py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <HeartHandshake className="w-12 h-12 mx-auto mb-4 opacity-80" aria-hidden="true" />
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Wir sind für dich da
              </h2>
              <p className="text-accent-foreground/80 text-lg">
                Kostenlose Beratung und Unterstützung.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="bg-background/10 border-accent-foreground/20 backdrop-blur">
                <CardContent className="p-6 text-accent-foreground">
                  <h3 className="text-2xl font-bold mb-3">Sozialsprechstunde</h3>
                  <p className="opacity-90 mb-4">
                    Fragen zu Bürgergeld, Wohngeld oder Rente? 
                    Wir beraten dich kostenlos und vertraulich.
                  </p>
                  <div className="flex items-center gap-2 text-sm opacity-80 mb-4">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span>Jeden Donnerstag, 16–18 Uhr</span>
                  </div>
                  <Button className="bg-background text-foreground hover:bg-background/90" asChild>
                    <Link to="/die-linke-hilft">Mehr erfahren</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-background/10 border-accent-foreground/20 backdrop-blur">
                <CardContent className="p-6 text-accent-foreground">
                  <h3 className="text-2xl font-bold mb-3">Heizkostencheck</h3>
                  <p className="opacity-90 mb-4">
                    Wir prüfen deine Heizkostenabrechnung auf Fehler 
                    und helfen dir, zu viel gezahltes Geld zurückzuholen.
                  </p>
                  <div className="flex items-center gap-2 text-sm opacity-80 mb-4">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span>Nach Vereinbarung</span>
                  </div>
                  <Button className="bg-background text-foreground hover:bg-background/90" asChild>
                    <Link to="/hartz-4-hilfe">Termin anfragen</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section id="termine" className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <Badge variant="secondary" className="mb-4">
                <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                Termine
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Komm vorbei!
              </h2>
              <p className="text-muted-foreground">
                Lern uns kennen bei unseren Veranstaltungen.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-4">
              {eventsData.events.slice(0, 3).map((event, i) => (
                <Card key={i} className="overflow-hidden border-l-4 border-l-accent">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg p-3 text-center min-w-[70px]">
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
              <Users className="w-12 h-12 mx-auto mb-4 text-accent" aria-hidden="true" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mach mit!
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Über 300 Menschen in Offenbach engagieren sich bei uns für eine solidarische Stadt. 
                Werde Teil unserer Gemeinschaft!
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
                    <Mail className="w-5 h-5 text-accent" aria-hidden="true" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">E-Mail</p>
                      <a 
                        href="mailto:info@die-linke-offenbach.de" 
                        className="text-sm font-medium text-foreground hover:text-accent"
                      >
                        info@die-linke-offenbach.de
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardContent className="p-4 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />
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

export default OnePagerAlt;