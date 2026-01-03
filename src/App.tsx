
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import InsuranceTypes from "./pages/InsuranceTypes";
import InvestmentTypes from "./pages/InvestmentTypes";
import RRSPDetails from "./pages/RRSPDetails";
import FHSADetails from "./pages/FHSADetails";
import TFSADetails from "./pages/TFSADetails";
import RESPDetails from "./pages/RESPDetails";
import TaxCalculator2026 from "./pages/TaxCalculator2026";
import CriticalIllnessDetails from "./pages/CriticalIllnessDetails";
import DentalInsuranceDetails from "./pages/DentalInsuranceDetails";
import LifeInsuranceDetails from "./pages/LifeInsuranceDetails";
import BusinessInsuranceDetails from "./pages/BusinessInsuranceDetails";
import TravelInsuranceTruckersDetails from "./pages/TravelInsuranceTruckersDetails";
import LossOfIncomeDetails from "./pages/LossOfIncomeDetails";
import DisabilityInsuranceDetails from "./pages/DisabilityInsuranceDetails";
import HealthInsuranceDetails from "./pages/HealthInsuranceDetails";
import StudentInsuranceDetails from "./pages/StudentInsuranceDetails";
import SuperVisaInsuranceDetails from "./pages/SuperVisaInsuranceDetails";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insurance-types" element={<InsuranceTypes />} />
          <Route path="/insurance-types/critical-illness" element={<CriticalIllnessDetails />} />
          <Route path="/insurance-types/dental" element={<DentalInsuranceDetails />} />
          <Route path="/insurance-types/life" element={<LifeInsuranceDetails />} />
          <Route path="/insurance-types/business" element={<BusinessInsuranceDetails />} />
          <Route path="/insurance-types/travel-truckers" element={<TravelInsuranceTruckersDetails />} />
          <Route path="/insurance-types/loss-of-income" element={<LossOfIncomeDetails />} />
          <Route path="/insurance-types/disability" element={<DisabilityInsuranceDetails />} />
          <Route path="/insurance-types/health" element={<HealthInsuranceDetails />} />
          <Route path="/insurance-types/student" element={<StudentInsuranceDetails />} />
          <Route path="/insurance-types/super-visa" element={<SuperVisaInsuranceDetails />} />
          <Route path="/investment-types" element={<InvestmentTypes />} />
          <Route path="/investment-types/rrsp" element={<RRSPDetails />} />
          <Route path="/investment-types/fhsa" element={<FHSADetails />} />
          <Route path="/investment-types/tfsa" element={<TFSADetails />} />
          <Route path="/investment-types/resp" element={<RESPDetails />} />
          <Route path="/investment-types/tax-calculator-2026" element={<TaxCalculator2026 />} />
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
