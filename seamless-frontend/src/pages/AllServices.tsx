
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

const servicesData = [
  {
    id: "uterine-fibroid-embolization",
    title: "Uterine Fibroid Embolization (UFE)",
    category: "Women's Health",
    description: "A uterus-sparing, minimally invasive alternative to hysterectomy for treating symptomatic uterine fibroids.",
    path: "/services/uterine-fibroid-embolization",
    imageUrl: "/lovable-uploads/d75b93c1-a933-4f89-b5c0-b08f1ee641d0.png",
    keywords: "fibroids, uterine, women's health, bleeding, pain, non-surgical, minimally invasive, embolization, UFE"
  },
  {
    id: "prostate-artery-embolization",
    title: "Prostate Artery Embolization (PAE)",
    category: "Men's Health",
    description: "A minimally invasive treatment for enlarged prostate / benign prostatic hyperplasia (BPH) preferred by many men.",
    path: "/services/prostate-artery-embolization",
    imageUrl: "/lovable-uploads/07f5aa7f-e3e7-4a4b-8857-68187db784f0.png",
    keywords: "prostate, BPH, men's health, urinary symptoms, minimally invasive, embolization, PAE, enlarged prostate"
  },
  {
    id: "genicular-artery-embolization",
    title: "Genicular Artery Embolization (GAE)",
    category: "Orthopedic",
    description: "A non-surgical option to reduce knee pain caused by osteoarthritis.",
    path: "/services/genicular-artery-embolization",
    imageUrl: "/lovable-uploads/76c196a3-f4d3-445a-bae0-e27d21d1b8c5.png",
    keywords: "knee pain, osteoarthritis, genicular, joint pain, arthritis, embolization, GAE, non-surgical"
  },
  {
    id: "peripheral-arterial-disease",
    title: "Treatment for PAD",
    category: "Peripheral Vascular Disease",
    description: "Restore blood flow to your limbs and reduce/eliminate leg pain with advanced vascular treatment.",
    path: "/services/peripheral-arterial-disease",
    imageUrl: "/lovable-uploads/b3867d0a-a122-49b4-8c37-1878c089ff7b.png",
    keywords: "PAD, peripheral arterial disease, circulation, vascular, leg pain, claudication, blood flow, angioplasty, stenting"
  },
  {
    id: "hemorrhoid-artery-embolization",
    title: "Hemorrhoid Artery Embolization",
    category: "Gastrointestinal Health",
    description: "A groundbreaking approach to treat symptomatic hemorrhoids without surgery.",
    path: "/services/hemorrhoid-artery-embolization",
    imageUrl: "/lovable-uploads/83d4d7c5-86c2-4770-a598-0f0cbfe66b17.png",
    keywords: "hemorrhoids, rectal bleeding, gastrointestinal, piles, non-surgical, embolization, pain, minimally invasive"
  },
  {
    id: "fistula-creation",
    title: "Percutaneous (Non-Surgical) Dialysis Fistula Creation",
    category: "Dialysis Access",
    description: "Advanced endovascular arteriovenous fistula creation for improved dialysis access.",
    path: "/services/fistula-creation",
    imageUrl: "/lovable-uploads/fd08fdca-a45a-4296-b383-6b758a4b7caf.png",
    keywords: "dialysis, fistula, kidney disease, vascular access, eAVF, dialysis access, kidney failure, renal"
  },
  {
    id: "spinal-cord-stimulation",
    title: "Spinal Cord Stimulation",
    category: "Pain Management",
    description: "Advanced neuromodulation therapy for chronic pain relief.",
    path: "/services/spinal-cord-stimulation",
    imageUrl: "/lovable-uploads/f21b98fa-4783-44fe-b681-10d2d01024ea.png",
    keywords: "chronic pain, back pain, spinal cord, neuromodulation, nerve pain, pain management, stimulation"
  },
  {
    id: "pelvic-congestion-embolization",
    title: "Pelvic Congestion Embolization",
    category: "Women's Health",
    description: "Effective treatment for chronic pelvic pain caused by venous congestion.",
    path: "/services/pelvic-congestion-embolization",
    imageUrl: "/lovable-uploads/c8389472-c639-46af-ba74-3268a73208da.png",
    keywords: "pelvic pain, women's health, venous congestion, varicose veins, embolization, chronic pain, minimally invasive"
  },
  {
    id: "adhesive-capsulitis-embolization",
    title: "Adhesive Capsulitis Embolization",
    category: "Orthopedic",
    description: "Novel approach for treating frozen shoulder through targeted embolization.",
    path: "/services/adhesive-capsulitis-embolization",
    imageUrl: "/lovable-uploads/8f0a88b4-aea1-407a-97e6-fffa36dfdbb0.png",
    keywords: "frozen shoulder, adhesive capsulitis, shoulder pain, mobility, stiffness, embolization, orthopedic"
  }
];

const ServiceCard = ({ service }: { service: typeof servicesData[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={service.path} className="block">
      <Card 
        className="overflow-hidden transition-all duration-300 border-none shadow-md hover:shadow-lg mb-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 h-48 overflow-hidden">
            <img 
              src={service.imageUrl} 
              alt={service.category}
              className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
          </div>
          <div className="w-full md:w-2/3">
            <CardHeader className="pb-2">
              <span className="text-xs font-medium text-orange-600 tracking-wide uppercase">
                {service.category}
              </span>
              <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                {service.description}
              </CardDescription>
              <div className="inline-flex items-center text-orange-600 font-medium hover:underline">
                Learn more <span className="ml-1">→</span>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </Link>
  );
};

const AllServices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredServices, setFilteredServices] = useState(servicesData);

  useEffect(() => {
    const results = servicesData.filter(service => 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.keywords.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServices(results);
  }, [searchTerm]);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
        <div className="container mx-auto py-16 px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive interventional radiology solutions tailored to your unique healthcare needs
            </p>
            
            <div className="relative max-w-md mx-auto mt-8">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search services by keyword..."
                className="pl-10 py-6 text-base border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-12">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No services match your search. Please try different keywords.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <FloatingContactButton />
      <Footer />
    </>
  );
};

export default AllServices;
