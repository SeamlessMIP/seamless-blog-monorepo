
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "@/hooks/use-media-query";

const FloatingContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  
  // Check if we're on a service page
  const isServicePage = location.pathname.includes('/services/');
  // Also show it on the homepage
  const isHomePage = location.pathname === "/";
  
  // Only enable this feature on service pages or home page
  const shouldCheckVisibility = isServicePage || isHomePage;

  useEffect(() => {
    if (!shouldCheckVisibility) return;
    
    const handleScroll = () => {
      if (isHomePage) {
        // Home page logic - show after scrolling past hero section
        const heroSection = document.querySelector('section');
        
        if (heroSection) {
          const heroHeight = heroSection.offsetHeight;
          const threshold = heroHeight * 0.7; // Show button after scrolling 70% past hero
          
          setIsVisible(window.scrollY > threshold);
        }
      } else if (isServicePage) {
        // For service pages, check if we've scrolled past the first section
        // This is more reliable than checking for button visibility
        const serviceContent = document.querySelector('main');
        
        if (serviceContent) {
          const contentTop = serviceContent.getBoundingClientRect().top;
          // Show button when content top is above the viewport
          setIsVisible(contentTop < 0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage, isServicePage, shouldCheckVisibility]);

  // Don't show on non-service/home pages or when conditions aren't met
  if (!shouldCheckVisibility || (shouldCheckVisibility && !isVisible)) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button 
        size="lg" 
        className="bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg flex items-center gap-2"
        asChild
      >
        <Link to="/consultation">
          <Mail className="h-5 w-5" />
          <span>Contact Us</span>
        </Link>
      </Button>
    </div>
  );
};

export default FloatingContactButton;
