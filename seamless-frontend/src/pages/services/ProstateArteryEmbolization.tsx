
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import ServiceContent from "@/components/ServiceContent";

const ProstateArteryEmbolization = () => {
  const serviceData = {
    title: "Prostate Artery Embolization (PAE)",
    subtitle: "A minimally invasive treatment for enlarged prostate / benign prostatic hyperplasia (BPH) preferred by many men.",
    heroImage: "/lovable-uploads/07f5aa7f-e3e7-4a4b-8857-68187db784f0.png",
    category: "Men's Health",
    overview: "Prostate Artery Embolization (PAE) is an innovative, minimally invasive procedure designed to treat benign prostatic hyperplasia (BPH) by reducing the size of an enlarged prostate. Using advanced imaging guidance, an interventional radiologist delivers tiny particles to block blood flow to the prostate, causing it to shrink and relieving urinary symptoms without the risks associated with traditional surgery.",
    conditionsTreated: [
      {
        title: "Frequency",
        description: "Urinating more frequently than once every two hours."
      },
      {
        title: "Night Time Urination",
        description: "Waking up multiple times at night to urinate."
      },
      {
        title: "Difficulty Urinating",
        description: "Straining to urinate, experiencing a weak stream."
      },
      {
        title: "Urgency",
        description: "Sudden, strong urge to urinate that is difficult to delay."
      },
      {
        title: "Incomplete Bladder Emptying",
        description: "Having to urinate again shortly after going to the bathroom."
      },
      {
        title: "Medication-Resistant BPH",
        description: "Prostate enlargement that hasn't adequately responded to medical therapy."
      }
    ],
    procedureDetails: [
      {
        title: "Pre-Procedure Preparation",
        description: "Our experienced doctors at Seamless will provide a personalized consultation to determine if you are a suitable candidate for the procedure. Your doctor may perform blood tests and an ultrasound or MRI to evaluate your prostate and to look for any other causes for urinary tract symptoms."
      },
      {
        title: "The PAE Procedure",
        description: "PAE is performed under local anesthesia or light sedation. A tiny catheter or tube is passed through a pinhole in the skin in the wrist or upper thigh and navigated to the prostatic arteries using X-ray guidance. Tiny particles are injected to block blood flow to the prostate while preserving surrounding tissues."
      },
      {
        title: "Post Procedure Recovery",
        description: "PAE is performed as an outpatient procedure. You may experience mild pelvic pain or urinary burning for a few days, which can be managed with medications. Men are able to go back to normal activity the day after the procedure."
      }
    ],
    risksAndBenefits: {
      benefits: [
        "Going into the penis is not required",
        "Preservation of sexual function",
        "Outpatient procedure with faster recovery than surgery",
        "Significant reduction in urinary symptoms in 75-95%"
      ],
      risks: [
        "Possible need for additional treatment if symptoms return (similar to TURP)",
        "Small risk of non-target embolization affecting nearby tissues"
      ]
    },
    recoveryAndOutlook: "Recovery from PAE is typically quick with minimal discomfort. Most men can return to light activities within 24-48 hours and resume normal activities within a week. Improvement in urinary symptoms often begins within days, with maximum benefit occurring over 1-3 months as the prostate gradually shrinks. Clinical studies show that 75-95% of men experience significant symptom improvement, with results lasting for 3+ years in most patients. Follow-up evaluations will track your progress and prostate size reduction.",
    faqs: [
      {
        question: "How does PAE compare to TURP (transurethral resection of the prostate)?",
        answer: "While TURP has been the traditional surgical standard, PAE offers several advantages: it is done as an outpatient procedure, treatment is not done via the penis, sexual side effects are not seen, and recovery is faster. Depending on whether associated bladder problems are present, TURP may be a better option for some men. Your doctor can help determine which procedure is best for your specific situation."
      },
      {
        question: "How does PAE compare to Minimally Invasive Surgical Therapies (MISTs), such as HoLEP, Rezum Water Vapor Therapy, UroLift, Aquablation, and others?",
        answer: "All of these MISTs require an instrument going through the urethra, which many men find unappealing. In contrast, PAE avoids the urethra completely with the access point typically being a pinhole through the groin or even the wrist in some cases."
      },
      {
        question: "Will PAE affect my sexual function?",
        answer: "PAE has a very low risk of causing sexual dysfunction. In fact, studies show that most men maintain their erectile function after PAE, and some even report improvements in sexual satisfaction due to reduced urinary symptoms. This is a significant advantage compared to surgical treatments that have higher rates of ejaculatory and erectile issues."
      },
      {
        question: "How long will the results of PAE last?",
        answer: "Clinical studies show that PAE provides lasting relief for most patients, similar to that of TURP. About 75-80% of men maintain significant symptom improvement for 3+ years. Some men may require additional treatment if symptoms return, but PAE can often be repeated if necessary."
      },
      {
        question: "Is PAE painful?",
        answer: "During the procedure, you'll receive moderate sedation to ensure comfort. Afterward, most men experience mild pelvic discomfort or urinary burning for a few days, which typically responds well to medication. Severe pain is uncommon."
      },
      {
        question: "Am I a good candidate for PAE?",
        answer: "PAE is generally suitable for men with moderate to severe BPH symptoms who haven't responded adequately to medications or who wish to avoid surgery. Factors like prostate size, anatomy, and overall health affect candidacy. A consultation with our interventional radiologists will determine if PAE is right for you."
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

export default ProstateArteryEmbolization;
