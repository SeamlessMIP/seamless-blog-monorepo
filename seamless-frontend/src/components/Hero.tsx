
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <span className="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
            Redefining the Standard of Care
          </span>
          
          <h1 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 max-w-full sm:max-w-3xl">
            <span className="text-orange-600">Minimally Invasive</span> Procedures, <span className="text-gray-800 underline">Maximum</span> Care
          </h1>
          
          <p className="mt-6 text-lg text-gray-600 max-w-full sm:max-w-2xl">
            Knifeless surgery. Outpatient procedures. Faster recovery times.
          </p>
          
          <div className="mt-10">
            <Button 
              size="lg" 
              className="hero-consultation-button bg-orange-600 hover:bg-orange-700 text-white"
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

export default Hero;
