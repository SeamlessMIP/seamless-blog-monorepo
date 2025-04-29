
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TreatmentOption } from "@/types/consultation";
import { useConsultationForm } from "@/hooks/useConsultationForm";
import ConsultationFormFields from "@/components/consultation/ConsultationFormFields";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ConsultationFormProps {
  treatmentOptions: TreatmentOption[];
}

const ConsultationForm = ({ treatmentOptions }: ConsultationFormProps) => {
  const navigate = useNavigate();
  const {
    formData,
    isSubmitting,
    errors,
    handleInputChange,
    handleCheckboxChange,
    validateForm,
    setIsSubmitting
  } = useConsultationForm();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form validation failed",
        description: "Please fill out all required fields correctly.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    try {
      // First, store the data in Supabase
      const { error: supabaseError } = await supabase
        .from('consultation_submissions')
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          treatment_areas: formData.treatmentAreas
        }]);
      
      if (supabaseError) {
        throw new Error(`Error storing data: ${supabaseError.message}`);
      }
      
      // Also insert into leads table for analytics
      await supabase
        .from('leads')
        .insert([{
          email: formData.email,
          phone: formData.phone,
          form_type: 'consultation'
        }]);
      
      // Send confirmation email via the edge function
      console.log('Sending confirmation email with data:', {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        treatmentAreas: formData.treatmentAreas
      });
      
      const { data: emailResult, error: emailError } = await supabase.functions.invoke('send-consultation-confirmation', {
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          treatmentAreas: formData.treatmentAreas
        })
      });
      
      console.log('Email confirmation result:', emailResult);
      
      if (emailError) {
        console.error('Email confirmation error:', emailError);
        // Show a warning toast but still continue with success flow
        toast({
          title: "Form submitted successfully",
          description: "Your form was submitted, but there was an issue sending the confirmation email. We'll still contact you soon.",
          variant: "default",
        });
      } else {
        // Standard success toast
        toast({
          title: "Form submitted successfully!",
          description: "We'll contact you soon about your consultation. Please check your email for a confirmation.",
        });
      }
      
      // Push GTM dataLayer event for form submission if it exists
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'form_submission',
          formType: 'consultation'
        });
      }
      
      // Redirect to success page
      navigate('/consultation-success');
    } catch (error) {
      console.error('Form submission error:', error);
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
      toast({
        title: "Form submission failed",
        description: error instanceof Error ? error.message : "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-lg border-orange-100">
      <CardHeader className="text-center bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
        <CardTitle className="text-2xl md:text-3xl text-gray-800">Schedule Your Consultation</CardTitle>
        <CardDescription className="text-gray-600">
          Let us know how we can help you with minimally invasive treatments
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
              {error}
            </div>
          )}
          
          <ConsultationFormFields
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
            handleCheckboxChange={handleCheckboxChange}
            treatmentOptions={treatmentOptions}
          />
          
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 rounded-md text-base w-full md:w-auto"
              id="form_submit"
              onClick={() => {
                if (window.dataLayer) {
                  window.dataLayer.push({
                    event: 'button_click',
                    buttonId: 'form_submit',
                    buttonText: 'Request Consultation'
                  });
                }
              }}
            >
              {isSubmitting ? "Submitting..." : "Request Consultation"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ConsultationForm;
