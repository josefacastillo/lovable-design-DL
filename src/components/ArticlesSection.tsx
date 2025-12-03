import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { articlesData } from "@/data/articlesData";
import { CommentsSection } from "@/components/CommentsSection";
import type { Article } from "@/types/articles";

export const ArticlesSection = () => {
  const { sectionTitle, articles } = articlesData;
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section className="py-16 bg-muted/30" aria-labelledby="articles-heading">
      <div className="container mx-auto px-4">
        <h2 id="articles-heading" className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          {sectionTitle}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card 
              key={article.id} 
              className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedArticle(article)}
              aria-label={`Artikel öffnen: ${article.title}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3 bg-accent/10 text-accent hover:bg-accent/20">
                  {article.category}
                </Badge>
                <h3 className="text-lg font-bold mb-3 text-foreground line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {article.date}
                </p>
                <p className="text-primary font-semibold group-hover:underline">
                  {article.link}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Article Detail Dialog with Comments */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedArticle && (
            <>
              <DialogHeader>
                <Badge variant="secondary" className="w-fit mb-2 bg-accent/10 text-accent">
                  {selectedArticle.category}
                </Badge>
                <DialogTitle className="text-2xl font-bold">
                  {selectedArticle.title}
                </DialogTitle>
                <p className="text-sm text-muted-foreground">{selectedArticle.date}</p>
              </DialogHeader>
              
              <div className="mt-4">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <div className="prose prose-sm max-w-none text-foreground/90">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="mt-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <CommentsSection articleId={selectedArticle.id} />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
