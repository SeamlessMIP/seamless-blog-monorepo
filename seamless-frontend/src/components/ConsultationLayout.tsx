
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

interface ConsultationLayoutProps {
  children: React.ReactNode;
}

const ConsultationLayout = ({ children }: ConsultationLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      <Navigation />
      
      <main id="consultation-section" className="container mx-auto py-12 px-4">
        {children}
      </main>
      
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default ConsultationLayout;
