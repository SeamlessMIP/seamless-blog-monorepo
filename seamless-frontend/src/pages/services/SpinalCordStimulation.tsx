import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import ServiceContent from "@/components/ServiceContent";

const SpinalCordStimulation = () => {
  const serviceData = {
    title: "Spinal Cord Stimulation (SCS)",
    subtitle: "Advanced neuromodulation therapy for chronic pain relief",
    heroImage: "/lovable-uploads/f21b98fa-4783-44fe-b681-10d2d01024ea.png",
    category: "Pain Management",
    overview: "Spinal Cord Stimulation (SCS) is an innovative pain management approach that uses mild electrical pulses to interrupt pain signals traveling to the brain. This reversible therapy involves implanting a small device that delivers controlled electrical stimulation to the spinal cord, effectively masking pain sensations with tingling, buzzing, or other more pleasant sensations. SCS offers a targeted solution for patients with chronic pain who haven't achieved adequate relief through medications, physical therapy, or other conventional treatments.",
    conditionsTreated: [
      {
        title: "Failed Back Surgery Syndrome",
        description: "Persistent pain following one or more spine surgeries, often characterized by chronic back and/or leg pain."
      },
      {
        title: "Complex Regional Pain Syndrome (CRPS)",
        description: "A chronic pain condition affecting a limb following injury or surgery, causing disproportionate pain and sensitivity."
      },
      {
        title: "Neuropathic Pain",
        description: "Pain resulting from nerve damage or dysfunction, often described as burning, shooting, or electric-like sensations."
      }
    ],
    procedureDetails: [
      {
        title: "Trial Phase",
        description: "Before permanent implantation, patients undergo a trial period of typically 5-7 days. Temporary leads are placed near the spine through a minimally invasive procedure. The patient uses an external stimulator to evaluate pain relief. This trial helps determine if SCS will provide meaningful benefit before committing to permanent implantation."
      },
      {
        title: "Permanent Implantation",
        description: "If the trial is successful (typically defined as at least 50% pain reduction), permanent implantation is performed. This minimally invasive procedure involves placing leads in the epidural space near specific spinal levels, connected to a small pulse generator implanted under the skin, usually in the lower back or buttock area."
      },
      {
        title: "Programming and Optimization",
        description: "Following implantation, the device is programmed to provide optimal pain relief. Modern SCS systems offer various stimulation patterns and frequencies that can be adjusted to target specific pain patterns. Patients receive a remote control to adjust stimulation levels within preset parameters."
      }
    ],
    risksAndBenefits: {
      benefits: [
        "Significant pain reduction without the side effects of opioid medications",
        "Improved quality of life and daily function",
        "Potentially reduced need for pain medications",
        "Reversible and adjustable therapy that can be optimized over time",
        "Trial period allows assessment of benefit before permanent implantation"
      ],
      risks: [
        "Surgical risks including infection, bleeding, or spinal fluid leak",
        "Lead migration or movement requiring repositioning",
        "Hardware complications such as battery failure or connection issues",
        "Potential for diminished effectiveness over time",
        "Uncommon but possible nerve damage or stimulation in unwanted areas"
      ]
    },
    recoveryAndOutlook: "Recovery from SCS implantation typically involves limiting certain movements and activities for 6-8 weeks while healing occurs. Most patients can return to light activities within days and gradually increase activity under medical guidance. Temporary surgical pain is managed with appropriate medications. Long-term outcomes show that approximately 60-70% of carefully selected patients experience at least 50% pain reduction with SCS. Modern systems with advanced programming capabilities often achieve even better results. Regular follow-up appointments help optimize stimulation parameters and ensure continued benefit. Battery life varies by usage and device type, with rechargeable systems lasting 10+ years and non-rechargeable systems typically requiring replacement every 2-5 years.",
    faqs: [
      {
        question: "Will a spinal cord stimulator eliminate my pain completely?",
        answer: "SCS typically provides partial pain relief rather than complete elimination. Success is generally defined as at least 50% reduction in pain, though many patients experience greater relief. The goal is to reduce pain to a manageable level that improves function and quality of life. The trial period helps set realistic expectations about the degree of relief you might experience."
      },
      {
        question: "Can I undergo MRI scans with a spinal cord stimulator?",
        answer: "Many modern SCS systems are MRI-conditional, meaning MRI scans can be performed under specific conditions and protocols. However, limitations may exist regarding which body parts can be scanned and what type of MRI machine can be used. Always inform healthcare providers about your stimulator before any imaging studies, and carry your device identification card at all times."
      },
      {
        question: "Will I feel the stimulation?",
        answer: "Traditional SCS produces a tingling sensation (paresthesia) that replaces pain. However, newer stimulation patterns (high-frequency, burst, or dorsal root ganglion stimulation) can provide pain relief without perceptible sensations. During your trial and programming sessions, we'll work to find the stimulation type that provides the best relief with minimal unwanted sensations."
      },
      {
        question: "Can I stop taking pain medications after getting a stimulator?",
        answer: "Many patients experience enough pain relief to reduce or sometimes eliminate pain medications, particularly opioids. However, this varies by individual and should be done gradually under medical supervision. SCS often works best as part of a comprehensive pain management approach that may include appropriate medications, physical therapy, and behavioral techniques."
      },
      {
        question: "What activities will I need to avoid with a spinal cord stimulator?",
        answer: "Most daily activities can be resumed after the initial healing period. However, you should avoid extreme twisting or bending that could move the leads, high-impact activities that might damage the device, and environments with strong electromagnetic fields. Swimming is generally allowed once incisions are fully healed. Your doctor will provide detailed guidelines based on your specific device and lifestyle needs."
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

export default SpinalCordStimulation;
