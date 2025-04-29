
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import ServiceContent from "@/components/ServiceContent";

const PeripheralArterialDisease = () => {
  const serviceData = {
    title: "Treatment for Peripheral Arterial Disease (PAD)",
    subtitle: "Restore blood flow to your limbs and reduce/eliminate leg pain with advanced vascular treatment",
    heroImage: "/lovable-uploads/b3867d0a-a122-49b4-8c37-1878c089ff7b.png",
    category: "Peripheral Vascular Disease",
    overview: "Peripheral artery disease (PAD), which represents the development of plaque within the arteries of the arms and legs, can be a debilitating condition significantly impacting quality of life. Seamless utilizes cutting-edge interventional techniques to restore blood flow to limbs affected by arterial blockages. Our specialists employ minimally invasive endovascular procedures that require only a pinhole through the skin to access and treat blocked arteries in the legs, providing relief from pain, improving mobility, healing wounds, and potentially preventing serious complications like tissue loss or amputation. Our doctors have special expertise in treating the small arteries of the lower limb and foot, which is important to achieve best clinical outcomes. As these are the most difficult arteries to open, many other vascular specialists do not evaluate or treat these arteries.",
    conditionsTreated: [
      {
        title: "Claudication",
        description: "Pain, cramping, or discomfort in the legs that occurs during walking or exercise and improves with rest, caused by insufficient blood flow."
      },
      {
        title: "Critical Limb Ischemia",
        description: "Severe blockage in the arteries of the lower extremities that significantly reduces blood flow, causing pain at rest, non-healing wounds, or tissue loss."
      }
    ],
    procedureDetails: [
      {
        title: "Preprocedure Assessment",
        description: "Our doctors at Seamless, who are among the most experienced in the nation at treating PAD, will perform a detailed assessment to evaluate the source of your symptoms. During this diagnostic evaluation, your doctor may perform an ultrasound of your legs."
      },
      {
        title: "Endovascular Treatments",
        description: "Our interventional specialists offer innovative, minimally invasive techniques to treat PAD, including Angioplasty (inflating a small balloon to widen narrowed arteries), Stenting (placing mesh tubes to keep arteries open), and Atherectomy (removing plaque buildup)."
      },
      {
        title: "Post-Procedure Care",
        description: "Following treatment, patients are observed for a short period before returning home the same day. You'll receive detailed instructions on activity levels, medications, and follow-up care. Regular follow up will track the long-term success of your treatment."
      }
    ],
    risksAndBenefits: {
      benefits: [
        "Significant improvement in walking distance and mobility",
        "Reduction or elimination of leg pain",
        "Avoidance of major surgery",
        "Faster recovery compared to open surgical approaches",
        "Potential to prevent serious complications like ulcers or amputation"
      ],
      risks: [
        "Temporary bruising or discomfort at access site",
        "Rare risk of bleeding or infection",
        "Rare risk of blood vessel injury requiring additional treatment",
        "Possibility of restenosis (re-narrowing) of treated vessels over time"
      ]
    },
    recoveryAndOutlook: "Recovery from PAD treatments is typically rapid, with most patients returning home the same day. You'll be advised to walk and stay active as part of your recovery process. Improvement in symptoms often begins shortly after the procedure, with continued progress over the following weeks. Success rates for endovascular PAD treatments are excellent, with 80-90% of patients experiencing significant symptom relief. Long-term results depend on severity of disease, adherence to lifestyle modifications (smoking cessation, exercise, diet), and proper medication management. Regular follow-up appointments and imaging studies will monitor your progress and ensure sustained improvement.",
    faqs: [
      {
        question: "How do I know if I have PAD?",
        answer: "Common symptoms include leg pain during walking (claudication), cramping in the hips, thighs or calves, leg numbness or weakness, cold lower legs or feet, and non-healing sores on toes, feet, or legs. Risk factors include smoking, diabetes, high blood pressure, high cholesterol, and family history. Diagnostic tests such as ankle-brachial index (ABI), ultrasound, CT angiography, or MR angiography can confirm PAD."
      },
      {
        question: "Will I need to stay in the hospital after endovascular PAD treatment?",
        answer: "Most endovascular PAD treatments are performed as outpatient procedures, allowing you to return home the same day. Some patients with more complex conditions or those undergoing extensive treatments may require overnight observation. Your doctor will discuss the specific expectations for your procedure during your consultation."
      },
      {
        question: "How long will the results of my PAD treatment last?",
        answer: "Results vary based on disease severity, location of blockages, and lifestyle factors. Many patients maintain good results for several years, while some may require additional treatments as the disease progresses. Regular follow-up and adherence to lifestyle modifications (smoking cessation, exercise, proper diet) significantly improve long-term outcomes."
      },
      {
        question: "Can lifestyle changes help manage my PAD?",
        answer: "Absolutely. Lifestyle modifications are essential components of PAD management. Smoking cessation is particularly important, as smoking significantly worsens PAD progression. Regular exercise, particularly supervised walking programs, can improve symptoms and outcomes. Heart-healthy diets, diabetes management, and controlling blood pressure and cholesterol are also crucial for long-term success."
      },
      {
        question: "What happens if I don't treat my PAD?",
        answer: "Untreated PAD can lead to worsening symptoms, significantly reduced mobility, and serious complications. In severe cases, critical limb ischemia can develop, causing rest pain, non-healing wounds, and potential tissue loss or amputation. PAD also indicates a higher risk for other cardiovascular problems like heart attack and stroke. Early intervention often provides the best outcomes."
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
        conditionsSectionTitle="Conditions Treated"
        sectionTitles={{ risksAndBenefits: "Benefits and Risks" }}
        benefitsTitle="Typical Benefits"
      />
    </ServiceDetailLayout>
  );
};

export default PeripheralArterialDisease;
