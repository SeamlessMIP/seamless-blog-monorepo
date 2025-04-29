
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Locations from "@/components/Locations";
import Insurance from "@/components/Insurance";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <div id="insurance">
          <Insurance />
        </div>
        <div id="locations">
          <Locations />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <Footer />
      </main>
      <FloatingContactButton />
    </div>
  );
};

export default Index;
