
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import ServiceContent from "@/components/ServiceContent";

const FistulaCreation = () => {
  const serviceData = {
    title: "Percutaneous (Non-Surgical) Dialysis Fistula Creation",
    subtitle: "Advanced endovascular arteriovenous fistula creation for improved dialysis access",
    heroImage: "/lovable-uploads/fd08fdca-a45a-4296-b383-6b758a4b7caf.png",
    category: "Dialysis Access",
    overview: "A fistula is a connection that is created between an artery and a vein (i.e., arteriovenous) in the arm that will serve as vascular access during dialysis treatment. Vascular access is a way to reach the blood for hemodialysis. The access allows blood to travel through blood lines to the dialysis machine where it is cleaned by a special filter before being returned to your body. The word \"percutaneous\" pertains to any medical procedure where access to inner tissues or vessels is done via pinhole needle-puncture of the skin, rather than opening the skin as in traditional surgical methods. Percutaneous Fistula Creation represents an innovative minimally invasive outpatient option for patients with kidney disease nearing or already on dialysis.",
    conditionsTreated: [],
    procedureDetails: [
      {
        title: "Pre-Procedure Assessment",
        description: "Before Percutaneous Arteriovenous Fistula (pAVF) creation, you'll undergo comprehensive vascular mapping using ultrasound to evaluate your blood vessels and determine the optimal location for fistula creation. Our team will review your medical history and dialysis needs to ensure the most appropriate approach."
      },
      {
        title: "The pAVF Procedure",
        description: "The procedure is performed under local anesthesia with sedation. Using ultrasound guidance, a specialized catheter is inserted through a single pinhole in the upper arm. This catheter is used to create a connection between an artery and vein. The entire procedure typically takes between 10-20 minutes, with minimal discomfort."
      },
      {
        title: "Post-Procedure Maturation",
        description: "After creation, the fistula needs time to develop or 'mature' before it can be used for dialysis. This process typically takes 4-8 weeks, during which the connection strengthens and the vein enlarges to accommodate dialysis needles. Regular ultrasound evaluations will track the progress of your fistula's development."
      }
    ],
    risksAndBenefits: {
      benefits: [
        "No surgical incisions, resulting in less pain and scarring",
        "Reduced risk of infection compared to surgical approaches",
        "Outpatient procedure with same-day discharge",
        "Potential for faster maturation and earlier usability",
        "Preservation of future access sites should additional access be needed",
        "Potential for fewer maintenance procedures compared to surgically created fistulas"
      ],
      risks: [
        "Possibility of fistula not maturing adequately for dialysis use",
        "Risk of thrombosis (clotting) requiring intervention",
        "Potential for arm swelling due to altered blood flow",
        "Rare cases of steal syndrome (reduced blood flow to the hand)",
        "Possible need for additional procedures to maintain or enhance fistula function"
      ]
    },
    recoveryAndOutlook: "Recovery from pAVF creation is typically straightforward, with minimal pain and rapid return to normal activities. Most patients can resume light activities immediately and normal activities within 24-48 hours. The fistula maturation process takes approximately 4-8 weeks, during which you'll feel a characteristic 'thrill' (vibration) at the fistula site, indicating good function. You doctor will follow up with you to perform imaging in the office to ensure that your fistula is functioning properly and that it is suitable for dialysis. Success rates for pAVF compare favorably to surgical fistulas, with approximately 80-85% developing into usable access. Once mature, a pAVF can potentially provide years of reliable dialysis access with proper care and monitoring.",
    faqs: [
      {
        question: "How does a pAVF differ from a traditional surgical AVF?",
        answer: "The primary difference is that pAVF creation doesn't require surgical incisions or suturing. Instead, it uses catheters and specialized devices inserted through small needle punctures to create the arteriovenous connection from within the blood vessels. This minimally invasive approach typically results in less pain, faster recovery, reduced scarring, and lower infection risk compared to surgical techniques. As the blood supply to the communicating artery and vein are not interrupted, as they are with surgical creation, there is potential for higher success rate and fewer maintenance procedures long term."
      },
      {
        question: "How soon can my pAVF be used for dialysis?",
        answer: "Most pAVFs require 4-8 weeks to mature before they can be used for dialysis. During this time, the vein enlarges and the walls strengthen to accommodate repeated needle insertions. Your doctor will perform ultrasound evaluations to determine when your fistula is ready for use. In some cases, additional minor procedures may be recommended to enhance maturation."
      },
      {
        question: "What care is needed for my pAVF?",
        answer: "Proper fistula care is essential for longevity. You'll be advised to check daily for the presence of the 'thrill' (vibration), avoid tight clothing or jewelry on the access arm, prevent blood pressure measurements or blood draws from that arm, and perform specific exercises to promote maturation. Regular follow-up appointments will monitor your fistula's health and function."
      },
      {
        question: "What happens if my pAVF doesn't mature properly?",
        answer: "If maturation issues occur, several interventional options are available. These may include balloon angioplasty to widen narrowed segments, embolization of competing veins that divert blood flow, or stent placement to maintain vessel openness. These procedures are performed on an outpatient basis with minimal recovery time."
      },
      {
        question: "Am I a good candidate for pAVF?",
        answer: "Candidacy depends on several factors, including vessel size and quality, overall vascular health, and prior access history. The ideal candidate has adequate forearm or upper arm vessels without significant stenosis (narrowing or constriction of the blood vessels) or previous damage. Patients with severe peripheral vascular disease, very small vessels, or certain anatomical variations may be better served by alternative access options. A comprehensive evaluation with our interventional team will determine the most appropriate access approach for your specific situation."
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
      />
    </ServiceDetailLayout>
  );
};

export default FistulaCreation;
