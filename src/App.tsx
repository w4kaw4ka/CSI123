
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import TechnologyPage from "./pages/TechnologyPage";
import AboutPage from "./pages/AboutPage";
import RapidChillPage from "./pages/RapidChillPage";
import FoodTreatmentPage from "./pages/FoodTreatmentPage";
import SustainabilityPage from "./pages/SustainabilityPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/rapid-chill" element={<RapidChillPage />} />
          <Route path="/food-treatment" element={<FoodTreatmentPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
