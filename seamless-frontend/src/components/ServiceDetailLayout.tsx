
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceDetailLayoutProps {
  children: React.ReactNode;
  serviceTitle: string;
  serviceSubtitle: string;
  heroImageUrl?: string;
  category?: string;
}

const ServiceDetailLayout = ({ 
  children, 
  serviceTitle, 
  serviceSubtitle,
  heroImageUrl = "/placeholder.svg",
  category = "Interventional Radiology" // Default category
}: ServiceDetailLayoutProps) => {
  // Process service title to handle special case for Fistula Creation page
  const formattedTitle = serviceTitle.includes("Non-Surgical") 
    ? serviceTitle.replace("(Non-Surgical)", "<br/>(Non-Surgical)") 
    : serviceTitle;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 text-center md:text-left">
              <span className="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium inline-block mb-4">
                {category}
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
                  dangerouslySetInnerHTML={{ __html: formattedTitle }}>
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                {serviceSubtitle}
              </p>
              
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white"
                asChild
              >
                <Link to="/consultation">Schedule Consultation</Link>
              </Button>
            </div>
            
            <div className="flex-1 max-w-md">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={heroImageUrl} 
                  alt={serviceTitle}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <main className="container mx-auto py-12 px-4 max-w-5xl">
        {children}
      </main>
      
      {/* CTA */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experts to discuss your treatment options and see if this procedure is right for you.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white"
            asChild
          >
            <Link to="/consultation">
              Schedule Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default ServiceDetailLayout;
