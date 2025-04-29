
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-8 text-center">About Us</h1>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our founding members met through an act of serendipity. One was a business consultant in corporate America who required an organ to be removed due to illness and had seen many doctors trying to save his organ. The other was (and still is) an interventional radiologist who delivered organ-saving treatment. They met through a chance encounter, as no physician had provided this organ-saving treatment as an option. After successful treatment, they decided to team up together and bring minimally invasive procedures to as many people as possible, focusing on high quality care with better outcomes compared to traditional surgery. We hope our story can become your story as well.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <ol className="text-gray-700 mb-6 leading-relaxed list-decimal pl-5">
              <li className="mb-4">
                We treat our patients like we would our own family members.
                <ul className="list-disc pl-5 mt-2 mb-2">
                  <li className="mb-2">We put your health first, even if that means you are better served elsewhere.</li>
                  <li className="mb-2">We spend time with you and listen to what you have to say. If it's important to you, it's important to us.</li>
                  <li className="mb-2">We promise to treat you with respect and dignity. We ask you to do the same with our staff.</li>
                </ul>
              </li>
              <li className="mb-4">We care for our employees. Happier employees provide a better experience for our patients.</li>
              <li>We strive for a Seamless experience – what we call The Seamless Way. Today's healthcare system is complicated enough. We know there is a better way to deliver care.</li>
            </ol>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Our doctors are board-certified Interventional Radiologists with extensive training and experience in performing minimally invasive, image-guided procedures. See our locations for specific information about your local team.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default About;
