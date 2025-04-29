
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ConsultationLayout from "@/components/ConsultationLayout";

const ConsultationSuccess = () => {
  return (
    <ConsultationLayout>
      <div className="max-w-2xl mx-auto text-center py-16 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 border border-orange-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Consultation Requested</h1>
          
          <div className="bg-green-50 rounded-md p-6 mb-8">
            <p className="text-gray-700 text-lg mb-4">
              Thank you for submitting a request. We will be in touch with you shortly to schedule a consultation!
            </p>
          </div>
          
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </ConsultationLayout>
  );
};

export default ConsultationSuccess;
