
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    category: "Women's Health",
    title: "Uterine Fibroid Embolization (UFE)",
    description: "A uterus-sparing, minimally invasive alternative to hysterectomy for treating symptomatic uterine fibroids.",
    imageUrl: "/lovable-uploads/d75b93c1-a933-4f89-b5c0-b08f1ee641d0.png",
    path: "/services/uterine-fibroid-embolization"
  },
  {
    category: "Men's Health",
    title: "Prostate Artery Embolization (PAE)",
    description: "A minimally invasive treatment for enlarged prostate / benign prostatic hyperplasia (BPH) preferred by many men.",
    imageUrl: "/lovable-uploads/07f5aa7f-e3e7-4a4b-8857-68187db784f0.png",
    path: "/services/prostate-artery-embolization"
  },
  {
    category: "Orthopedic",
    title: "Genicular Artery Embolization (GAE)",
    description: "A non-surgical option to reduce knee pain caused by osteoarthritis.",
    imageUrl: "/lovable-uploads/76c196a3-f4d3-445a-bae0-e27d21d1b8c5.png",
    path: "/services/genicular-artery-embolization"
  },
  {
    category: "Peripheral Vascular Disease",
    title: "Treatment for PAD",
    description: "Restore blood flow to your limbs and reduce/eliminate leg pain with advanced vascular treatment.",
    imageUrl: "/lovable-uploads/b3867d0a-a122-49b4-8c37-1878c089ff7b.png",
    path: "/services/peripheral-arterial-disease"
  },
  {
    category: "Gastrointestinal Health",
    title: "Hemorrhoid Artery Embolization",
    description: "A groundbreaking approach to treat symptomatic hemorrhoids without surgery.",
    imageUrl: "/lovable-uploads/83d4d7c5-86c2-4770-a598-0f0cbfe66b17.png",
    path: "/services/hemorrhoid-artery-embolization"
  },
  {
    category: "Dialysis Access",
    title: "Percutaneous (Non-Surgical) Dialysis Fistula Creation",
    description: "Advanced endovascular arteriovenous fistula creation for improved dialysis access.",
    imageUrl: "/lovable-uploads/fd08fdca-a45a-4296-b383-6b758a4b7caf.png",
    path: "/services/fistula-creation"
  }
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={service.path} className="block h-full">
      <Card 
        className="overflow-hidden transition-all duration-300 h-full border-none shadow-md hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-48 overflow-hidden">
          <img 
            src={service.imageUrl} 
            alt={service.category}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        </div>
        <CardHeader className="pb-2">
          <span className="text-xs font-medium text-orange-600 tracking-wide uppercase">
            {service.category}
          </span>
          <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600">
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Minimally invasive procedures tailored to your needs
          </p>
        </div>
        
        {/* Desktop: Regular Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="basis-full">
                  <ServiceCard service={service} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-6 gap-4">
              <CarouselPrevious className="static translate-y-0 h-9 w-9" />
              <div className="flex items-center gap-1 text-sm text-orange-600">
                <span>Scroll for more</span>
                <ChevronRight className="h-4 w-4" />
              </div>
              <CarouselNext className="static translate-y-0 h-9 w-9" />
            </div>
          </Carousel>
          
          {/* Mobile swipe indicator */}
          <div className="mt-4 flex justify-center items-center">
            <div className="flex space-x-2">
              {[0, 1, 2].map((_, i) => (
                <div key={i} className="h-2 w-2 rounded-full bg-orange-200 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
            size="lg"
            asChild
          >
            <Link to="/services">
              All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
