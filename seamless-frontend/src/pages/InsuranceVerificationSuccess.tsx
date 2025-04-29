
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import InsuranceVerificationLayout from "@/components/InsuranceVerificationLayout";

const InsuranceVerificationSuccess = () => {
  return (
    <InsuranceVerificationLayout title="Submission Complete">
      <div className="max-w-2xl mx-auto text-center py-8">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        
        <div className="bg-green-50 rounded-md p-6 mb-8">
          <p className="text-gray-700 text-lg mb-4">
            Thank you! We will contact you momentarily to confirm our services are covered by your insurance provider.
          </p>
        </div>
        
        <Button asChild className="bg-orange-600 hover:bg-orange-700">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return to Home
          </Link>
        </Button>
      </div>
    </InsuranceVerificationLayout>
  );
};

export default InsuranceVerificationSuccess;
