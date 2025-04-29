
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useEffect } from "react";

const faqs = [
  {
    question: "What medical specialty do you practice?",
    answer: "Our physicians are known as interventional radiologists. Despite the name, our doctors have little to do with diagnostic radiology. Instead, they specialize in minimally invasive techniques to treat the body through only a small pinhole in the skin, using your blood vessels as the \"super highways\" to access any part of the body.",
  },
  {
    question: "Many (but not all) of your procedures have \"embolization\" in their name. What is an embolization?",
    answer: "Embolization is a medical procedure that involves blocking a blood vessel or group of vessels with small particles or substances called embolic agents, such as tiny beads. This procedure is minimally invasive and can be used to reduce inflammation or destroy unwanted cells. Embolization therapy can only be provided by Board-certified interventional radiologists.",
  },
  {
    question: "What should I expect during a consultation?",
    answer: "During your consultation, our specialists will review your medical history, discuss your symptoms, and determine whether diagnostic imaging is required. This will be used to create a personalized treatment plan. We'll answer all your questions and ensure you fully understand your options, even if that means we think you are better suited by procedures we don't offer.",
  },
  {
    question: "Does insurance cover these minimally invasive procedures?",
    answer: "Most insurance plans cover interventional radiology procedures. Our team will work with you to verify your coverage and discuss any potential costs before proceeding with treatment.",
  },
  {
    question: "How long is the recovery period?",
    answer: "Recovery times vary depending on the procedure. Many patients return to their normal activities within a few days due to the minimally invasive nature of our treatments. Your doctor will provide specific recovery guidelines based on your procedure.",
  },
  {
    question: "Are these procedures painful?",
    answer: "Most interventional radiology procedures cause minimal discomfort and don't require general anesthesia. Rather, we use local anesthesia and sometimes conscious sedation to ensure your comfort during treatment. Most patients report significantly less pain compared to traditional surgical approaches.",
  },
];

const FAQ = () => {
  // Add schema markup to page when component mounts
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Create or update the schema script tag
    let scriptElement = document.getElementById("faq-schema");
    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.id = "faq-schema";
      // Fix: Use setAttribute instead of directly setting the type property
      scriptElement.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(schema);

    // Clean up on unmount
    return () => {
      const scriptToRemove = document.getElementById("faq-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <section id="faq" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-gray-200 rounded-lg shadow-sm w-full"
                style={{ minHeight: '80px' }}
              >
                <AccordionTrigger className="text-left text-gray-800 font-medium py-5 px-4 sm:px-6 w-full text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-4 sm:px-6 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
