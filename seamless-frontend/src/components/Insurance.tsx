
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Insurance = () => {
  return (
    <section id="insurance" className="py-16 md:py-24 px-4 bg-gradient-to-r from-orange-50 to-amber-100">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Covered by Insurance
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Most major insurance plans cover our procedures. Schedule a consult to find out if your insurance is <span className="text-orange-600 font-medium">in-network</span>.
        </p>
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col space-y-4 max-w-md mx-auto">
            <div className="text-left mb-4">
              <div className="flex items-center mb-2">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Quick verification process</span>
              </div>
              <div className="flex items-center mb-2">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Most major providers accepted</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Our team handles paperwork</span>
              </div>
            </div>
            <Button 
              size="lg" 
              className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6 rounded-lg"
              asChild
            >
              <Link to="/consultation">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
