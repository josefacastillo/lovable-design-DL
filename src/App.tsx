import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { SocialSidebar } from "@/components/SocialSidebar";
import { BackToTopButton } from "@/components/BackToTopButton";
import { MobileSocialBar } from "@/components/MobileSocialBar";
import Index from "./pages/Index";
import Kreisverband from "./pages/Kreisverband";
import Kreisvorstand from "./pages/Kreisvorstand";
import Fraktion from "./pages/Fraktion";
import DieLinkeEcke from "./pages/DieLinkeEcke";
import DieLinkeHilft from "./pages/DieLinkeHilft";
import Hartz4Hilfe from "./pages/Hartz4Hilfe";
import Kontakt from "./pages/Kontakt";
import Archiv from "./pages/Archiv";
import OnePager from "./pages/OnePager";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SocialSidebar />
          <BackToTopButton />
          <MobileSocialBar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/kreisverband" element={<Kreisverband />} />
            <Route path="/kreisvorstand" element={<Kreisvorstand />} />
            <Route path="/fraktion" element={<Fraktion />} />
            <Route path="/die-linke-ecke" element={<DieLinkeEcke />} />
            <Route path="/die-linke-hilft" element={<DieLinkeHilft />} />
            <Route path="/hartz-4-hilfe" element={<Hartz4Hilfe />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/archiv" element={<Archiv />} />
            <Route path="/one-pager" element={<OnePager />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
