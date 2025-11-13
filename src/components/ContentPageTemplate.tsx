import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { PageContent } from "@/types/page-content";

interface ContentPageTemplateProps {
  data: PageContent;
  children?: React.ReactNode;
}

export const ContentPageTemplate = ({ data, children }: ContentPageTemplateProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-foreground">{data.pageTitle}</h1>
            {data.description && (
              <p className="text-lg text-muted-foreground mb-8">{data.description}</p>
            )}
            
            {data.sections.map((section, index) => (
              <Card key={section.id} className={index < data.sections.length - 1 ? "mb-8" : ""}>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">{section.title}</h2>
                  {Array.isArray(section.content) ? (
                    section.content[0]?.startsWith("•") ? (
                      <ul className="space-y-3 text-muted-foreground">
                        {section.content.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      section.content.map((paragraph, i) => (
                        <p key={i} className={`text-muted-foreground ${i < section.content.length - 1 ? 'mb-4' : ''}`}>
                          {paragraph}
                        </p>
                      ))
                    )
                  ) : (
                    <p className="text-muted-foreground">{section.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
            
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
