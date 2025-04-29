
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/ScrollToTop";

// Import pages
import Index from "@/pages/Index";
import About from "@/pages/About";
import AllServices from "@/pages/AllServices";
import Consultation from "@/pages/Consultation";
import ConsultationSuccess from "@/pages/ConsultationSuccess";
import InsuranceVerification from "@/pages/InsuranceVerification";
import InsuranceVerificationSuccess from "@/pages/InsuranceVerificationSuccess";
import NotFound from "@/pages/NotFound";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";

// Import service pages
import UterineFibroidEmbolization from "@/pages/services/UterineFibroidEmbolization";
import ProstateArteryEmbolization from "@/pages/services/ProstateArteryEmbolization";
import GenicularArteryEmbolization from "@/pages/services/GenicularArteryEmbolization";
import PeripheralArterialDisease from "@/pages/services/PeripheralArterialDisease";
import HemorrhoidArteryEmbolization from "@/pages/services/HemorrhoidArteryEmbolization";
import FistulaCreation from "@/pages/services/FistulaCreation";
import PelvicCongestionEmbolization from "@/pages/services/PelvicCongestionEmbolization";
import AdhesiveCapsulitisEmbolization from "@/pages/services/AdhesiveCapsulitisEmbolization";
import SpinalCordStimulation from "@/pages/services/SpinalCordStimulation";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/consultation-success" element={<ConsultationSuccess />} />
        <Route path="/insurance-verification" element={<InsuranceVerification />} />
        <Route path="/insurance-verification-success" element={<InsuranceVerificationSuccess />} />
        
        {/* Blog routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        
        {/* Service routes */}
        <Route path="/services/uterine-fibroid-embolization" element={<UterineFibroidEmbolization />} />
        <Route path="/services/prostate-artery-embolization" element={<ProstateArteryEmbolization />} />
        <Route path="/services/genicular-artery-embolization" element={<GenicularArteryEmbolization />} />
        <Route path="/services/peripheral-arterial-disease" element={<PeripheralArterialDisease />} />
        <Route path="/services/hemorrhoid-artery-embolization" element={<HemorrhoidArteryEmbolization />} />
        <Route path="/services/fistula-creation" element={<FistulaCreation />} />
        <Route path="/services/pelvic-congestion-embolization" element={<PelvicCongestionEmbolization />} />
        <Route path="/services/adhesive-capsulitis-embolization" element={<AdhesiveCapsulitisEmbolization />} />
        <Route path="/services/spinal-cord-stimulation" element={<SpinalCordStimulation />} />
        
        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;
