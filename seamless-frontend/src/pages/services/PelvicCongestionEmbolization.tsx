import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import ServiceContent from "@/components/ServiceContent";

const PelvicCongestionEmbolization = () => {
  const serviceData = {
    title: "Pelvic Congestion Embolization (PCE)",
    subtitle: "Effective treatment for chronic pelvic pain caused by venous congestion",
    heroImage: "/lovable-uploads/c8389472-c639-46af-ba74-3268a73208da.png",
    category: "Women's Health",
    overview: "Pelvic Congestion Embolization (PCE) is a minimally invasive procedure designed to treat chronic pelvic pain caused by pelvic congestion syndrome. This condition occurs when veins in the pelvis become enlarged and congested, similar to varicose veins in the legs. PCE works by blocking these enlarged veins, redirecting blood flow through healthier vessels and reducing painful congestion. The procedure offers relief to many women who have suffered from unexplained chronic pelvic pain that worsens with prolonged standing, physical activity, or during menstruation.",
    conditionsTreated: [
      {
        title: "Chronic Pelvic Pain",
        description: "Persistent pain in the pelvic region lasting more than six months that hasn't responded to conventional treatments. Pain is commonly worse with sitting or standing. Patients with PCE also commonly experience pain with intercourse."
      },
      {
        title: "Vulvar/Vaginal Varicosities",
        description: "Enlarged veins that may be associated with pelvic congestion syndrome, causing discomfort, bleeding, and cosmetic concerns. Enlarged veins may also be seen in the groins or thighs."
      },
      {
        title: "Menstrual Irregularities",
        description: "Women with PCE may have heavy, painful periods."
      },
      {
        title: "Other Symptoms",
        description: "Women with PCE commonly have increased frequency of urination, frequent bouts of constipation and diarrhea (irritable bowel), chronic pain in other parts of the body."
      }
    ],
    procedureDetails: [
      {
        title: "Diagnostic Evaluation",
        description: "Our doctors at Seamless Health will perform a personalized consultation for you. You may also undergo imaging studies such as specialized MRI, CT venography, or transabdominal ultrasound with Doppler to confirm the diagnosis of pelvic congestion syndrome and identify the specific veins involved. This detailed mapping is essential for procedure planning."
      },
      {
        title: "The Embolization Procedure",
        description: "PCE is performed under local anesthesia and sedation, although it is not a painful procedure. Your doctor will guide a thin catheter, or tube, into the venous system via a pinhole through the skin. Using X-ray guidance, the catheter is navigated through the venous system to the affected pelvic veins. Specialized coils, foam, or other embolization materials are precisely placed to block the abnormal veins while preserving normal circulation."
      },
      {
        title: "Post-Procedure Recovery",
        description: "Patients are able to go home shortly after the procedure. You may experience mild to moderate pelvic discomfort or cramping for a few days, similar to menstrual cramps. Normal activities may be resumed within 1-3 days."
      }
    ],
    risksAndBenefits: {
      benefits: [
        "Significant reduction in chronic pelvic pain in 70-90% of properly selected patients",
        "Outpatient procedure with rapid recovery",
        "No surgical incisions, only a small puncture site",
        "Preservation of normal pelvic structures and function",
        "Long-lasting results with low recurrence rates",
        "Potential for fewer maintenance procedures compared to surgically created fistulas"
      ],
      risks: [
        "Rare coil migration requiring additional treatment",
        "Rare allergic reactions to contrast material",
        "Potential for incomplete relief requiring additional procedures"
      ]
    },
    recoveryAndOutlook: "Recovery from PCE is typically straightforward, with most women returning to normal activities within 1-3 days. Some pelvic discomfort may persist for a few days to a week as the body adjusts to the changes in blood flow. Pain relief often begins within weeks of the procedure, with maximum benefit typically achieved within 2-3 months. Clinical studies show that approximately 70-90% of properly selected patients experience significant pain reduction following PCE. The procedure addresses the underlying cause of pelvic congestion, providing durable relief in most cases.",
    faqs: [
      {
        question: "How do I know if my pelvic pain is caused by pelvic congestion?",
        answer: "Pelvic congestion syndrome typically causes a dull, aching pain that worsens with prolonged standing, during or after intercourse, and before or during menstruation. The pain may be accompanied by other symptoms like vaginal or vulvar varicose veins, feeling of fullness in the legs, and visible veins on the buttocks or thighs. Specialized imaging studies are needed to confirm the diagnosis, as the symptoms can overlap with other pelvic conditions."
      },
      {
        question: "Will PCE affect my fertility or hormonal function?",
        answer: "PCE targets only the abnormal, congested veins and does not affect the ovaries, uterus, or hormonal function. The procedure preserves normal reproductive anatomy and there is no evidence that it impacts fertility. Many women have successfully conceived and carried pregnancies after PCE. However, if you're planning pregnancy, discuss this with your doctor during your consultation."
      },
      {
        question: "How long will the results of PCE last?",
        answer: "PCE provides long-lasting results for most patients. Studies with 3-5 year follow-up show sustained symptom relief in the majority of women. Once the abnormal veins are successfully embolized, they remain blocked, though occasionally new collateral veins may develop over time. If symptoms recur, the procedure can often be repeated with good results."
      },
      {
        question: "Is PCE painful?",
        answer: "The procedure itself is performed under sedation, so you'll be comfortable during the embolization. After the procedure, most women experience mild to moderate pelvic cramping for a few days, similar to menstrual cramps. This discomfort typically responds well to over-the-counter pain medications and resolves within a week as your body adjusts to the changes in blood flow."
      },
      {
        question: "How soon can I resume normal activities after PCE?",
        answer: "Most women can return to desk work and light activities within 24-48 hours. We recommend avoiding strenuous exercise, heavy lifting (over 10 pounds), and sexual activity for approximately one week to allow for optimal healing. Your doctor will provide personalized guidance based on your specific situation and recovery progress."
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
        conditionsSectionTitle="Symptoms of PCE"
      />
    </ServiceDetailLayout>
  );
};

export default PelvicCongestionEmbolization;
