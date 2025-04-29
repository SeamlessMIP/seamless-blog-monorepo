
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import ServiceContent from "@/components/ServiceContent";

const HemorrhoidArteryEmbolization = () => {
  const serviceData = {
    title: "Hemorrhoid Artery Embolization",
    subtitle: "A groundbreaking approach to treat symptomatic hemorrhoids without surgery",
    heroImage: "/lovable-uploads/83d4d7c5-86c2-4770-a598-0f0cbfe66b17.png",
    category: "Gastrointestinal Health",
    overview: "Hemorrhoid Artery Embolization (HAE) is an innovative, minimally invasive procedure that treats symptomatic hemorrhoids by reducing blood flow to the hemorrhoidal tissues. Unlike traditional hemorrhoid treatments that require surgical removal or banding, embolization works by targeting the arteries that feed the hemorrhoids, reducing their size and symptoms without direct intervention in the anal area, resulting in less pain and faster recovery.",
    conditionsTreated: [
      {
        title: "Chronic Hemorrhoidal Bleeding",
        description: "Persistent or recurrent bleeding during bowel movements that can lead to anemia and significantly impact quality of life."
      },
      {
        title: "Hemorrhoid-Related Pain",
        description: "Discomfort, pain, or throbbing associated with hemorrhoidal disease that impacts daily activities."
      },
      {
        title: "Hemorrhoid Prolapse",
        description: "Occurs when hemorrhoids extend outside the anus with straining."
      },
      {
        title: "Recurrent Hemorrhoids",
        description: "Hemorrhoids that have returned after previous treatments such as banding, sclerotherapy, or surgery."
      }
    ],
    procedureDetails: [
      {
        title: "Pre-Procedure Evaluation",
        description: "Before hemorrhoid artery embolization, you'll undergo a comprehensive evaluation including physical examination and, if not already done so, possibly colonoscopy or anoscopy to confirm diagnosis and rule out other conditions."
      },
      {
        title: "The HAE Procedure",
        description: "The procedure is performed under local anesthesia and sedation. Through a pinhole in the skin in the wrist or upper thigh, your doctor will navigate a tiny microcatheter using X-ray guidance to the arteries that feed the hemorrhoids. Tiny particles or coils are precisely delivered to reduce blood flow to the hemorrhoidal tissues while preserving normal circulation."
      },
      {
        title: "Post-Procedure Recovery",
        description: "HAE is performed as an outpatient procedure, with patients going home shortly after the procedure. There is typically no discomfort afterwards, unlike traditional hemorrhoid surgery. Most patients can return to normal activities within 24-48 hours."
      }
    ],
    risksAndBenefits: {
      benefits: [
        "No direct surgical intervention in the anal area",
        "Minimal pain compared to traditional hemorrhoid treatments",
        "Quick recovery with return to normal activities within 1-2 days",
        "Reduction in bleeding in 90-95% of patients",
        "Preservation of normal anal anatomy and function"
      ],
      risks: [
        "Temporary access site bruising or discomfort",
        "Rare risk of non-target embolization",
        "As with surgical or endoscopic treatment, potential need for additional treatment in some cases"
      ]
    },
    recoveryAndOutlook: "Recovery from hemorrhoid artery embolization is typically quick and comfortable. Most patients experience minimal or no discomfort. You may notice a gradual improvement in symptoms over 1-4 weeks as the hemorrhoids shrink due to reduced blood flow. Clinical studies show that approximately 85-95% of patients experience significant reduction in bleeding, and 70-80% report improvement in pain and other symptoms. Results can be long-lasting, though some patients may require additional treatment for complete symptom resolution.",
    faqs: [
      {
        question: "How does hemorrhoid artery embolization compare to traditional hemorrhoid treatments?",
        answer: "Unlike traditional treatments such as rubber band ligation, surgical hemorrhoidectomy, or hemorrhoid artery ligation, embolization doesn't involve direct intervention in the sensitive anal area. This results in significantly less pain, no risk of anal stenosis or incontinence, and faster recovery. Embolization treats hemorrhoids from the inside out by addressing the arterial blood flow that contributes to hemorrhoid development and symptoms."
      },
      {
        question: "Is hemorrhoid artery embolization painful?",
        answer: "One of the major advantages of hemorrhoid artery embolization is the minimal to discomfort associated with the procedure. Unlike surgical treatments that can cause significant pain in the anal area, embolization typically does not cause anal pain. Most patients describe the recovery as remarkably pain-free compared to other hemorrhoid treatments."
      },
      {
        question: "Will my hemorrhoids come back after embolization?",
        answer: "Clinical studies show good long-term results, with approximately 80% of patients maintaining symptom improvement for two years or longer. However, as with surgical and endoscopic treatments, some patients may experience partial symptom return over time. Maintaining healthy bowel habits, adequate hydration, and proper diet is important to help prevent recurrence."
      },
      {
        question: "Am I a good candidate for hemorrhoid artery embolization?",
        answer: "This procedure is generally most suitable for patients with internal hemorrhoids who experience recurrent bleeding or pain, particularly those who haven't responded well to conservative treatments. It's also an excellent option for patients who wish to avoid the pain and recovery associated with surgical hemorrhoid treatments. A consultation with our interventional radiologists will determine if you're an appropriate candidate based on your specific condition."
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

export default HemorrhoidArteryEmbolization;
