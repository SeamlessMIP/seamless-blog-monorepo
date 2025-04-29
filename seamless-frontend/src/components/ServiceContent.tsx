
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

interface ServiceContentProps {
  overview: string;
  conditionsTreated: Array<{
    title: string;
    description: string;
  }>;
  procedureDetails: Array<{
    title: string;
    description: string;
  }>;
  risksAndBenefits: {
    risks: string[];
    benefits: string[];
  };
  recoveryAndOutlook: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  conditionsSectionTitle?: string; // Optional custom title for conditions section
  sectionTitles?: {
    overview?: string;
    conditionsTreated?: string;
    procedureDetails?: string;
    risksAndBenefits?: string;
    recoveryAndOutlook?: string;
    faqs?: string;
  };
  benefitsTitle?: string; // Optional custom title for benefits section
  risksTitle?: string; // Optional custom title for risks section
}

const ServiceContent = ({
  overview,
  conditionsTreated,
  procedureDetails,
  risksAndBenefits,
  recoveryAndOutlook,
  faqs,
  conditionsSectionTitle = "Symptoms Treated", // Default title
  sectionTitles = {},
  benefitsTitle = "Typical Benefits", // Changed default from "Potential Benefits" to "Typical Benefits"
  risksTitle = "Potential Risks",
}: ServiceContentProps) => {
  return (
    <div className="space-y-16">
      {/* Overview Section */}
      <section id="overview" className="scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          {sectionTitles.overview || "Overview"}
        </h2>
        <div className="prose max-w-none text-gray-600">
          <p>{overview}</p>
        </div>
      </section>

      {/* Conditions/Symptoms Treated Section - Only show if there are conditions to display */}
      {conditionsTreated.length > 0 && (
        <section id="conditions-treated" className="scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {sectionTitles.conditionsTreated || conditionsSectionTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {conditionsTreated.map((condition, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{condition.title}</h3>
                <p className="text-gray-600">{condition.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Procedure Details Section */}
      <section id="procedure-details" className="scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          {sectionTitles.procedureDetails || "Procedure Details"}
        </h2>
        <div className="space-y-8">
          {procedureDetails.map((detail, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{detail.title}</h3>
              <p className="text-gray-600">{detail.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Risks and Benefits Section */}
      <section id="risks-benefits" className="scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          {sectionTitles.risksAndBenefits || "Benefits and Risks"} {/* Changed default from "Risks and Benefits" to "Benefits and Risks" */}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-orange-600 mb-3">{benefitsTitle}</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {risksAndBenefits.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{risksTitle}</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {risksAndBenefits.risks.map((risk, index) => (
                <li key={index}>{risk}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Recovery and Outlook Section */}
      <section id="recovery-outlook" className="scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          {sectionTitles.recoveryAndOutlook || "Recovery and Outlook"}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md text-gray-600">
          <p>{recoveryAndOutlook}</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          {sectionTitles.faqs || "Frequently Asked Questions"}
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg shadow-sm w-full"
            >
              <AccordionTrigger className="text-left text-gray-800 font-medium py-5 px-4 sm:px-6 w-full">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-4 sm:px-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default ServiceContent;
