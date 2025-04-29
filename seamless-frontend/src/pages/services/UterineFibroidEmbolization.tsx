
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import ServiceContent from "@/components/ServiceContent";

const UterineFibroidEmbolization = () => {
  const serviceData = {
    title: "Uterine Fibroid Embolization (UFE)",
    subtitle: "A uterus-sparing, minimally invasive alternative to hysterectomy for treating symptomatic uterine fibroids",
    heroImage: "/lovable-uploads/d75b93c1-a933-4f89-b5c0-b08f1ee641d0.png",
    category: "Women's Health",
    overview: "Uterine fibroids, the most benign tumors in women, are a common cause of heavy menstrual bleeding and pain. Uterine Fibroid Embolization (UFE) is a minimally invasive, nonsurgical treatment for uterine fibroids. During UFE, a specially trained physician uses X-ray guidance to block the blood supply to the fibroids, causing them to undergo necrosis (death of cells) and shrink. Compared to surgery, UFE has less recovery time and fewer complications and the uterus is preserved.",
    conditionsTreated: [
      {
        title: "Symptomatic Uterine Fibroids",
        description: "Benign tumors that develop in the uterus, causing heavy menstrual bleeding, pelvic pain, and pressure on the bladder or bowel."
      },
      {
        title: "Heavy Menstrual Bleeding",
        description: "Excessive bleeding that can lead to anemia and significantly impact quality of life."
      },
      {
        title: "Pelvic Pain and Pressure",
        description: "Discomfort in the pelvic region, including bloating, due to enlarged fibroids pressing on surrounding organs."
      },
      {
        title: "Urinary Frequency",
        description: "Pressure on the bladder from fibroids can lead to frequent urination, including waking up at night to urinate, or urinary incontinence."
      },
      {
        title: "Pain During Intercourse",
        description: "Discomfort or pain during sexual activity caused by fibroids that distort the shape of the uterus or put pressure on surrounding tissues."
      }
    ],
    procedureDetails: [
      {
        title: "Pre-Procedure Preparation",
        description: "Our experienced doctors at Seamless will provide a personalized consultation to determine if you are a suitable candidate for the procedure. Your doctor may perform an ultrasound or MRI to better evaluate your fibroids, including the size and number of fibroids, and look for any other conditions which may be contributing to your symptoms."
      },
      {
        title: "During the Procedure",
        description: "A tiny catheter or tube is inserted through a pinhole in the wrist and navigated into the arteries feeding the uterus. Tiny particles are injected to block blood flow to the fibroids while preserving healthy uterine tissue."
      },
      {
        title: "Post-Procedure Care",
        description: "You will recover at home and receive any medications necessary to manage discomfort. Most women can return to normal activities within 5-7 days."
      }
    ],
    risksAndBenefits: {
      benefits: [
        "Preservation of the uterus and possible ability to conceive after the procedure",
        "Shorter recovery time compared to surgery",
        "Significant reduction in fibroid symptoms in greater than 90% of patients",
        "Outpatient procedure",
        "Improvement in quality of life"
      ],
      risks: [
        "Post-embolization syndrome (fever, pain, nausea) lasting a few days",
        "Rare possibility of infection",
        "Premature menopause (very rare)"
      ]
    },
    recoveryAndOutlook: "Patients recover at home after UFE. You may experience moderate to severe pelvic pain and cramping for the first 24-72 hours, which are managed with medications. Most women return to light activities within a few days and normal activities by 5 days post procedure. Most women experience significant symptom improvement within 2-3 menstrual cycles.",
    faqs: [
      {
        question: "Will my fibroids return after UFE?",
        answer: "UFE treats all existing fibroids. While new fibroids can develop, most women do not require additional treatment."
      },
      {
        question: "Can I have children after UFE?",
        answer: "Many women have had successful pregnancies after UFE. However, if you're planning to become pregnant, discuss this with your doctor, as they may recommend other treatments depending on your specific situation."
      },
      {
        question: "Will UFE affect my hormones or cause early menopause?",
        answer: "UFE targets only the blood supply to the fibroids and preserves normal uterine tissue. It does not affect your ovaries or hormone production. Early menopause is a very rare complication."
      },
      {
        question: "How effective is UFE compared to hysterectomy?",
        answer: "Studies show that UFE is effective in relieving symptoms in greater than 90% of patients. While hysterectomy eliminates any possibility of fibroid recurrence, it involves major surgery and longer recovery. UFE offers a less invasive alternative with excellent outcomes for symptom relief."
      },
      {
        question: "How effective is UFE compared to a myomectomy?",
        answer: "Although myomectomy (surgical treatment) is designed to preserve the uterus, there is always a chance that a myomectomy converts to a hysterectomy due to excessive bleeding that cannot be controlled by the surgeon. A woman opting for myomectomy should know this is a possible outcome. This contrasts with UFE which is non-surgical and treats all fibroids while sparing the uterus."
      },
      {
        question: "Is UFE covered by insurance?",
        answer: "Most insurance plans cover UFE as it is a well-established treatment. Our office will work with you to verify coverage and address any insurance-related questions."
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

export default UterineFibroidEmbolization;
