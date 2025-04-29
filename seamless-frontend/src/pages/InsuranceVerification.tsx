
import { useEffect } from "react";
import InsuranceVerificationLayout from "@/components/InsuranceVerificationLayout";
import InsuranceVerificationForm from "@/components/forms/InsuranceVerificationForm";

const InsuranceVerification = () => {
  // Clean up any component-specific event listeners when navigating away
  useEffect(() => {
    return () => {
      // This cleanup function runs when the component unmounts
      // No action needed here as the cleanup is handled in the form component
    };
  }, []);

  return (
    <InsuranceVerificationLayout>
      <div className="mb-8 text-center">
        <p className="text-gray-600">
          Complete the form below to verify if your insurance covers our procedures.
          Our team will contact you shortly with the coverage information.
        </p>
      </div>
      <InsuranceVerificationForm />
    </InsuranceVerificationLayout>
  );
};

export default InsuranceVerification;
