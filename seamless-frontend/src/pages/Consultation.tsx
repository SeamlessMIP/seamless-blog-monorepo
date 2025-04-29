
import ConsultationLayout from "@/components/ConsultationLayout";
import ConsultationForm from "@/components/ConsultationForm";
import { TreatmentOption } from "@/types/consultation";

const treatmentOptions: TreatmentOption[] = [
  { id: "knee-pain", label: "Knee Pain & Inflammation" },
  { id: "bladder-issues", label: "Bladder Issues" },
  { id: "pelvic-pain", label: "Pelvic Pain / Painful Sex" },
  { id: "back-pain", label: "Chronic Back Pain" },
  { id: "heavy-menstrual-bleeding", label: "Heavy Menstrual Bleeding" },
  { id: "leg-pain", label: "Leg Pain" },
  { id: "frozen-shoulder", label: "Frozen Shoulder" },
  { id: "kidney-disease", label: "Kidney Disease / Dialysis" },
  { id: "other", label: "Other" }
];

const Consultation = () => {
  return (
    <ConsultationLayout>
      <ConsultationForm treatmentOptions={treatmentOptions} />
    </ConsultationLayout>
  );
};

export default Consultation;
