
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Function to create proper link for anchor tags
  const getAnchorLink = (anchor: string) => {
    // Always use the form "/#anchor" to ensure proper routing and scrolling
    return `/#${anchor}`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-orange-600">
          Seamless
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-gray-700 hover:text-orange-600 transition-colors">
            Services
          </Link>
          <a href={getAnchorLink("insurance")} className="text-gray-700 hover:text-orange-600 transition-colors">
            Insurance
          </a>
          <a href={getAnchorLink("locations")} className="text-gray-700 hover:text-orange-600 transition-colors">
            Our Locations
          </a>
          <a href={getAnchorLink("faq")} className="text-gray-700 hover:text-orange-600 transition-colors">
            FAQ
          </a>
          <Link to="/about" className="text-gray-700 hover:text-orange-600 transition-colors">
            About Us
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-orange-600 transition-colors">
            Blog
          </Link>
          <Button variant="default" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
            <Link to="/consultation">Book Consultation</Link>
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-orange-600 hover:bg-orange-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden z-50">
            <div className="flex flex-col p-4 space-y-3">
              <Link to="/services" className="text-gray-700 hover:text-orange-600 py-2 px-4">
                Services
              </Link>
              <a href={getAnchorLink("insurance")} className="text-gray-700 hover:text-orange-600 py-2 px-4">
                Insurance
              </a>
              <a href={getAnchorLink("locations")} className="text-gray-700 hover:text-orange-600 py-2 px-4">
                Our Locations
              </a>
              <a href={getAnchorLink("faq")} className="text-gray-700 hover:text-orange-600 py-2 px-4">
                FAQ
              </a>
              <Link to="/about" className="text-gray-700 hover:text-orange-600 py-2 px-4">
                About Us
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-orange-600 py-2 px-4">
                Blog
              </Link>
              <Button variant="default" className="bg-orange-600 hover:bg-orange-700 text-white w-full" asChild>
                <Link to="/consultation">Book Consultation</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
