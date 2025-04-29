import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import ServiceContent from "@/components/ServiceContent";

const GenicularArteryEmbolization = () => {
  const serviceData = {
    title: "Genicular Artery Embolization (GAE)",
    subtitle: "A non-surgical option to reduce knee pain caused by osteoarthritis",
    heroImage: "/lovable-uploads/76c196a3-f4d3-445a-bae0-e27d21d1b8c5.png",
    category: "Orthopedic",
    overview: "Genicular Artery Embolization (GAE) is a cutting-edge, minimally invasive procedure that treats knee pain caused by osteoarthritis by targeting the blood vessels that feed inflammation. Using advanced imaging guidance, an interventional radiologist temporarily blocks specific arteries around the knee, reducing inflammation and providing significant pain relief without the need for surgery or joint replacement.",
    conditionsTreated: [],
    procedureDetails: [
      {
        title: "Pre-Procedure Assessment",
        description: "Prior to GAE, you'll undergo a thorough evaluation during which your doctor will review your medical history, previous treatments, and imaging studies to determine if GAE is appropriate for you."
      },
      {
        title: "During the GAE Procedure",
        description: "GAE is performed under local anesthesia and sedation. Through a pinhole in the skin in the upper thigh or foot, your doctor will navigate a tiny microcatheter using X-ray guidance to the abnormal blood vessels feeding inflammation around the knee. Microscopic particles are precisely delivered to block these vessels, reducing inflammation and pain."
      },
      {
        title: "Post-Procedure Care",
        description: "GAE is performed as an outpatient procedure with patients going home shortly after the procedure. Most patients can resume normal activities within 1-2 days."
      }
    ],
    risksAndBenefits: {
      benefits: [
        "Significant pain reduction within weeks",
        "Minimally invasive with faster recovery than surgery",
        "Preservation of joint structure and function",
        "Potential to delay or prevent knee replacement surgery"
      ],
      risks: [
        "Temporary increase in pain for 1-3 days post-procedure",
        "Minor bruising or discomfort at the access site",
        "Small risk of non-target embolization",
        "Rare allergic reactions to contrast material",
        "Varying degrees of response across patients"
      ]
    },
    recoveryAndOutlook: "Recovery from GAE is typically quick, with most patients returning to normal activities within a few days. While some patients experience a temporary increase in knee pain for 1-3 days following the procedure, this usually resolves quickly. Pain relief often begins within 1-2 weeks and continues to improve over 2-3 months. Clinical studies show that approximately 70-80% of patients experience significant pain reduction and improved function following GAE. Results can last for 1-3 years or longer, though individual outcomes vary based on the severity of arthritis and other health factors.",
    faqs: [
      {
        question: "Is GAE a permanent solution for knee osteoarthritis?",
        answer: "GAE can provide significant pain relief that can last 1-3 years or longer for many patients. It can be repeated if necessary and may delay or reduce the need for knee replacement surgery. GAE addresses the inflammatory component of knee pain, which is a major driver of symptoms. There is emerging evidence that shows that GAE may prevent or slow the progression of arthritis."
      },
      {
        question: "How does GAE compare to knee replacement surgery?",
        answer: "Unlike knee replacement, GAE is minimally invasive with faster recovery, no surgical cuts to the knee, and preservation of your natural joint. GAE targets pain and inflammation without altering joint structure. While knee replacement may provide more comprehensive treatment for advanced arthritis, GAE offers a less invasive option with fewer risks and complications."
      },
      {
        question: "How soon can I return to normal activities after GAE?",
        answer: "Most patients can resume light activities within 24-48 hours and return to normal activities within a week. Your doctor will provide specific guidelines based on your condition and response to treatment. Generally, a gradual increase in activity is recommended as pain improves."
      },
      {
        question: "Will I still need medications after GAE?",
        answer: "Many patients experience significant reduction in pain medication requirements following GAE. While some may still benefit from occasional anti-inflammatory medications, especially during high-activity periods, the overall need for pain management often decreases substantially."
      },
      {
        question: "Am I a good candidate for GAE?",
        answer: "GAE is typically most effective for patients with mild to moderate knee osteoarthritis who have pain that hasn't responded adequately to conservative treatments. Patients with severe osteoarthritis may also see benefit from GAE. Factors like the pattern of inflammation, overall joint condition, and general health affect candidacy. A consultation with our interventional radiologists will determine if GAE is appropriate for your specific situation."
      }
    ]
  };

  return (
    <ServiceDetailLayout
      serviceTitle={serviceData.title}
      serviceSubtitle={serviceData.subtitle}
      heroImageUrl={serviceData.heroImage}
      category={serviceData.category}
    >
      <ServiceContent
        overview={serviceData.overview}
        conditionsTreated={serviceData.conditionsTreated}
        procedureDetails={serviceData.procedureDetails}
        risksAndBenefits={serviceData.risksAndBenefits}
        recoveryAndOutlook={serviceData.recoveryAndOutlook}
        faqs={serviceData.faqs}
        sectionTitles={{ risksAndBenefits: "Benefits and Risks" }}
        benefitsTitle="Typical Benefits"
      />
    </ServiceDetailLayout>
  );
};

export default GenicularArteryEmbolization;
