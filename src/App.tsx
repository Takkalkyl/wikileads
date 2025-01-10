import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BliPartner from "./pages/BliPartner";
import Kontakt from "./pages/Kontakt";
import OmOss from "./pages/OmOss";
import Tjanster from "./pages/Tjanster";
import Priser from "./pages/Priser";
import FAQ from "./pages/FAQ";
import Integritetspolicy from "./pages/Integritetspolicy";
import Villkor from "./pages/Villkor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bli-partner" element={<BliPartner />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/tjanster" element={<Tjanster />} />
          <Route path="/priser" element={<Priser />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/integritetspolicy" element={<Integritetspolicy />} />
          <Route path="/villkor" element={<Villkor />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;