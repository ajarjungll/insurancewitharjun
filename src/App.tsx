
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import InsuranceTypes from "./pages/InsuranceTypes";
import InvestmentTypes from "./pages/InvestmentTypes";
import RRSPDetails from "./pages/RRSPDetails";
import FHSADetails from "./pages/FHSADetails";
import TFSADetails from "./pages/TFSADetails";
import RESPDetails from "./pages/RESPDetails";
import CriticalIllnessDetails from "./pages/CriticalIllnessDetails";
import DentalInsuranceDetails from "./pages/DentalInsuranceDetails";
import LifeInsuranceDetails from "./pages/LifeInsuranceDetails";
import BusinessInsuranceDetails from "./pages/BusinessInsuranceDetails";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insurance-types" element={<InsuranceTypes />} />
          <Route path="/insurance-types/critical-illness" element={<CriticalIllnessDetails />} />
          <Route path="/insurance-types/dental" element={<DentalInsuranceDetails />} />
          <Route path="/insurance-types/life" element={<LifeInsuranceDetails />} />
          <Route path="/insurance-types/business" element={<BusinessInsuranceDetails />} />
          <Route path="/investment-types" element={<InvestmentTypes />} />
          <Route path="/investment-types/rrsp" element={<RRSPDetails />} />
          <Route path="/investment-types/fhsa" element={<FHSADetails />} />
          <Route path="/investment-types/tfsa" element={<TFSADetails />} />
          <Route path="/investment-types/resp" element={<RESPDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
