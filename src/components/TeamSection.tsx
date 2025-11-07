import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";

const team = [
  {
    id: 1,
    name: "Gizem Erinç-Çiftçi",
    role: "Fraktionsvorsitzende",
    image: person1,
  },
  {
    id: 2,
    name: "Markus Philippi",
    role: "Stadtverordneter",
    image: person2,
  },
];

export const TeamSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Unsere Fraktion
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <Card 
              key={member.id} 
              className="text-center hover:shadow-lg transition-all cursor-pointer group"
            >
              <CardContent className="p-6">
                <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-background group-hover:ring-primary/20 transition-all">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
