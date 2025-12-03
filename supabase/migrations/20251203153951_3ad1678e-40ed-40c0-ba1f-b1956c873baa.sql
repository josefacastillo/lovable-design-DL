-- Create comments table with moderation
CREATE TABLE public.comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  article_id INTEGER NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT,
  content TEXT NOT NULL,
  is_approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Anyone can read approved comments
CREATE POLICY "Anyone can read approved comments" 
ON public.comments 
FOR SELECT 
USING (is_approved = true);

-- Anyone can submit comments (they start as unapproved)
CREATE POLICY "Anyone can submit comments" 
ON public.comments 
FOR INSERT 
WITH CHECK (is_approved = false);

-- Enable realtime for comments
ALTER PUBLICATION supabase_realtime ADD TABLE public.comments;