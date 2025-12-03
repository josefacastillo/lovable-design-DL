import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Send, User } from "lucide-react";
import type { Comment } from "@/types/comments";

const commentSchema = z.object({
  author_name: z.string().trim().min(2, "Name muss mindestens 2 Zeichen haben").max(100),
  author_email: z.string().trim().email("Ungültige E-Mail-Adresse").optional().or(z.literal("")),
  content: z.string().trim().min(10, "Kommentar muss mindestens 10 Zeichen haben").max(1000),
});

type CommentFormData = z.infer<typeof commentSchema>;

interface CommentsSectionProps {
  articleId: number;
}

export const CommentsSection = ({ articleId }: CommentsSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      author_name: "",
      author_email: "",
      content: "",
    },
  });

  useEffect(() => {
    fetchComments();

    const channel = supabase
      .channel(`comments-${articleId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "comments",
          filter: `article_id=eq.${articleId}`,
        },
        () => fetchComments()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [articleId]);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("id, article_id, author_name, content, created_at")
      .eq("article_id", articleId)
      .eq("is_approved", true)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setComments(data);
    }
    setIsLoading(false);
  };

  const onSubmit = async (data: CommentFormData) => {
    setIsSubmitting(true);
    
    const { error } = await supabase.from("comments").insert({
      article_id: articleId,
      author_name: data.author_name,
      author_email: data.author_email || null,
      content: data.content,
      is_approved: false,
    });

    if (error) {
      toast({
        title: "Fehler",
        description: "Kommentar konnte nicht gesendet werden.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Kommentar eingereicht",
        description: "Ihr Kommentar wird nach Prüfung veröffentlicht.",
      });
      form.reset();
    }
    
    setIsSubmitting(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className="mt-12 pt-8 border-t border-border" aria-labelledby="comments-heading">
      <h3 id="comments-heading" className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
        <MessageSquare className="h-6 w-6 text-primary" aria-hidden="true" />
        Kommentare
      </h3>

      {/* Comment Form */}
      <div className="bg-muted/50 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-semibold mb-4 text-foreground">Kommentar schreiben</h4>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="author_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ihr Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="author_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-Mail (optional)</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="ihre@email.de" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kommentar *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Schreiben Sie Ihren Kommentar..." 
                      className="min-h-[120px] resize-none"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                * Kommentare werden vor der Veröffentlichung geprüft.
              </p>
              <Button type="submit" disabled={isSubmitting} className="gap-2">
                <Send className="h-4 w-4" aria-hidden="true" />
                {isSubmitting ? "Wird gesendet..." : "Absenden"}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {isLoading ? (
          <p className="text-muted-foreground">Kommentare werden geladen...</p>
        ) : comments.length === 0 ? (
          <p className="text-muted-foreground italic">
            Noch keine Kommentare. Schreiben Sie den ersten!
          </p>
        ) : (
          comments.map((comment) => (
            <article 
              key={comment.id} 
              className="bg-background border border-border rounded-lg p-5 shadow-sm"
            >
              <header className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{comment.author_name}</p>
                  <time className="text-sm text-muted-foreground" dateTime={comment.created_at}>
                    {formatDate(comment.created_at)}
                  </time>
                </div>
              </header>
              <p className="text-foreground/90 leading-relaxed">{comment.content}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
};
