
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Function to create proper link for anchor tags
  const getAnchorLink = (anchor: string) => {
    // Check if we're already on the homepage
    const isHomePage = window.location.pathname === "/" || window.location.pathname === "";
    
    // If we're on the homepage, just use the anchor
    if (isHomePage) {
      return `#${anchor}`;
    }
    // If we're on another page, use the root path plus anchor
    return `/#${anchor}`;
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Seamless</h3>
            <p className="text-gray-600 mb-4">
              Minimally Invasive Procedures, Maximum Care
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-orange-600 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-orange-600 transition-colors">About Us</Link>
              </li>
              <li>
                <a href={getAnchorLink("locations")} className="text-gray-600 hover:text-orange-600 transition-colors">Our Locations</a>
              </li>
              <li>
                <a href={getAnchorLink("insurance")} className="text-gray-600 hover:text-orange-600 transition-colors">Insurance</a>
              </li>
              <li>
                <a href={getAnchorLink("faq")} className="text-gray-600 hover:text-orange-600 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Seamless. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 flex items-center justify-center">
            Made with <Heart className="h-3 w-3 text-red-500 mx-1" /> for better patient outcomes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
