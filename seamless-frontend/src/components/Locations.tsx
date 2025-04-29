
import { Card, CardContent } from "./ui/card";
import { Image } from "./ui/image";

const Locations = () => {
  return (
    <section id="locations" className="py-16 md:py-24 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Our Locations
        </h2>
        
        <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img 
            src="/lovable-uploads/a7f2aab8-5cc1-4705-be18-1aecee794054.png" 
            alt="Port Arthur Clinic" 
            className="w-full h-auto object-cover"
          />
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Port Arthur, Texas</h3>
            <p className="text-gray-600">Address To Be Announced Summer 2025</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Locations;
