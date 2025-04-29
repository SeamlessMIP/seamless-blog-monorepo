
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import ServiceContent from "@/components/ServiceContent";

const AdhesiveCapsulitisEmbolization = () => {
  const serviceData = {
    title: "Adhesive Capsulitis Embolization (ACE)",
    subtitle: "Novel approach for treating frozen shoulder through targeted embolization",
    heroImage: "/lovable-uploads/8f0a88b4-aea1-407a-97e6-fffa36dfdbb0.png",
    category: "Orthopedic",
    overview: "Adhesive Capsulitis Embolization (ACE) is a groundbreaking minimally invasive procedure designed to treat frozen shoulder (adhesive capsulitis) by targeting abnormal blood vessels that contribute to inflammation and pain. Using specialized imaging and catheter-based techniques, this procedure precisely identifies and blocks tiny vessels feeding the inflammatory process in the shoulder capsule, potentially improving pain and mobility without the need for more invasive procedures like manipulation under anesthesia or surgery.",
    conditionsTreated: [],
    procedureDetails: [
      {
        title: "Evaluation",
        description: "Our doctors at Seamless Health, who are at the forefront of cutting-edge embolization therapies, will perform a thorough history and physical examination. You may undergo MRI to evaluate for adhesive capsulitis and to rule out other causes of shoulder pain."
      },
      {
        title: "The ACE Procedure",
        description: "The procedure is performed under sedation and local anesthesia. Via a pinhole in the wrist, your doctor will advance a tiny catheter, or tube, to the small arteries supplying the inflamed shoulder capsule under X-ray guidance. Tiny embolic particles are precisely delivered to reduce blood flow to these abnormal vessels while preserving normal circulation."
      },
      {
        title: "Post Procedure",
        description: "ACE is performed as an outpatient procedure with patients going home shortly after the procedure. Unlike some other treatments for frozen shoulder, you can begin gentle physical therapy within days following the procedure. This early mobilization helps maximize the benefits of reduced inflammation by improving range of motion while pain is decreased."
      }
    ],
    risksAndBenefits: {
      benefits: [
        "Potential for significant pain reduction without surgery",
        "Maintenance of natural shoulder anatomy and function",
        "Minimal recovery time compared to surgical interventions",
        "Ability to start physical therapy sooner, potentially improving outcomes",
        "May accelerate recovery from frozen shoulder, which can otherwise last 1-3 years"
      ],
      risks: [
        "Temporary increase in shoulder pain for 1-3 days following the procedure",
        "Rare risk of non-target embolization affecting nearby tissues",
        "Varying degrees of response across patients",
        "Possible need for additional treatments for complete resolution"
      ]
    },
    recoveryAndOutlook: "Recovery from ACE is typically quick. Some patients experience temporary increased pain for 1-3 days after the procedure, which gradually improves as inflammation subsides. Early clinical experience shows promising results, with many patients reporting significant pain improvement within 1-2 weeks and progressive improvement in shoulder mobility over 1-3 months. ACE may help accelerate recovery from frozen shoulder, which typically follows a prolonged course of 1-3 years with conventional management. The procedure addresses a key contributor to the inflammatory cycle that perpetuates frozen shoulder, potentially shortening the disease course and improving outcomes.",
    faqs: [
      {
        question: "How does ACE compare to other treatments for frozen shoulder?",
        answer: "Unlike manipulation under anesthesia or surgical release, which physically break up adhesions, ACE targets the underlying inflammatory process that contributes to adhesion formation. It's far less invasive than these procedures and doesn't carry the risks of fracture, instability, or prolonged recovery. Compared to steroid injections, ACE addresses the vascular component of inflammation and may provide more lasting results. ACE can be complementary to physical therapy, potentially making it more effective by reducing pain during exercises."
      },
      {
        question: "How quickly will I regain shoulder motion after ACE?",
        answer: "Improvement in shoulder mobility typically occurs gradually over weeks to months following the procedure. Initial pain reduction often begins within 1-2 weeks, which allows for more effective physical therapy. Most patients notice meaningful improvement in range of motion within 4-8 weeks, with continued progress over 3-6 months. Following your physical therapy program is essential for maximizing recovery of shoulder function."
      },
      {
        question: "Can ACE be used for all stages of frozen shoulder?",
        answer: "ACE appears to be most effective in the early to middle stages of frozen shoulder when inflammation is a predominant feature. Patients in the 'freezing' (painful) or early 'frozen' (stiff and painful) phases may benefit most. Those in the late 'frozen' or 'thawing' phases with primarily stiffness but minimal pain or inflammation may be better served by other approaches. Your evaluation will help determine if ACE is appropriate for your specific situation."
      },
      {
        question: "Is ACE a new procedure? What evidence supports its use?",
        answer: "ACE is an innovative adaptation of embolization techniques that have been used successfully for other inflammatory musculoskeletal conditions like knee osteoarthritis and tennis elbow. While relatively new for frozen shoulder specifically, early clinical studies and case series show promising results for pain reduction and improved mobility. The procedure builds on established principles of vascular embolization that have been used safely for decades in other applications."
      },
      {
        question: "Will my insurance cover ACE for frozen shoulder?",
        answer: "Insurance coverage for ACE varies by provider and plan. As a newer application of embolization, some insurance companies may consider it investigational for this specific indication. Our office will work with you to determine potential coverage and discuss options. For many patients, the potential benefits of accelerated recovery from frozen shoulder and avoidance of more invasive procedures make ACE worth considering even if some out-of-pocket costs are involved."
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

export default AdhesiveCapsulitisEmbolization;
