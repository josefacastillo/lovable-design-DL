import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Calendar, Clock, MapPin, List, CalendarDays } from "lucide-react";
import { eventsData } from "@/data/eventsData";
import { cn } from "@/lib/utils";

export const EventsSection = () => {
  const { sectionTitle, events } = eventsData;
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("de-DE", { 
      day: "2-digit", 
      month: "long", 
      year: "numeric" 
    });
  };

  // Create a set of dates that have events
  const eventDates = events.map(event => {
    const date = new Date(event.date);
    return date.toDateString();
  });

  // Get events for selected date
  const selectedDateEvents = selectedDate
    ? events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.toDateString() === selectedDate.toDateString();
      })
    : [];

  // Custom day content to highlight event dates
  const modifiers = {
    hasEvent: (date: Date) => eventDates.includes(date.toDateString()),
  };

  const modifiersStyles = {
    hasEvent: {
      fontWeight: "bold",
      textDecoration: "underline",
      textDecorationColor: "hsl(var(--primary))",
    },
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {sectionTitle}
          </h2>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="gap-2"
            >
              <List className="w-4 h-4" />
              Liste
            </Button>
            <Button
              variant={viewMode === "calendar" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("calendar")}
              className="gap-2"
            >
              <CalendarDays className="w-4 h-4" />
              Kalender
            </Button>
          </div>
        </div>
        
        {viewMode === "list" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event) => (
              <Card 
                key={event.id} 
                className="hover:shadow-lg transition-all cursor-pointer group border-l-4 border-l-primary"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        {formatDate(event.date)}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        {event.time} Uhr
                      </span>
                    </div>
                    
                    {event.location && (
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {event.location}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {event.description && (
                    <p className="text-sm text-muted-foreground mt-4 pt-4 border-t">
                      {event.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="flex justify-center items-start p-6">
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                modifiers={modifiers}
                modifiersStyles={modifiersStyles}
                className={cn("p-3 pointer-events-auto")}
              />
            </Card>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                {selectedDate ? formatDate(selectedDate.toISOString()) : "Wählen Sie ein Datum"}
              </h3>
              
              {selectedDateEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedDateEvents.map((event) => (
                    <Card 
                      key={event.id} 
                      className="border-l-4 border-l-primary"
                    >
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-3 text-foreground">
                          {event.title}
                        </h4>
                        
                        <div className="space-y-2">
                          <div className="flex items-start gap-3">
                            <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-muted-foreground text-sm">
                              {event.time} Uhr
                            </span>
                          </div>
                          
                          {event.location && (
                            <div className="flex items-start gap-3">
                              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <span className="text-muted-foreground text-sm">
                                {event.location}
                              </span>
                            </div>
                          )}
                          
                          {event.description && (
                            <p className="text-sm text-muted-foreground mt-2 pt-2 border-t">
                              {event.description}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-center">
                      Keine Termine für dieses Datum
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
