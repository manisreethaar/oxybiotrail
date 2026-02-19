import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Science from "./pages/Science";
import Roadmap from "./pages/Roadmap";
import Products from "./pages/products/Products";
import Careers from "./pages/Careers";
import Partner from "./pages/Partner";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            {/* Navbar is handled within each page's Layout component to avoid duplication */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/science" element={<Science />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/products" element={<Products />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />

              {/* Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
