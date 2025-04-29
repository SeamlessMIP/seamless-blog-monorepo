
import FormField from "@/components/consultation/FormField";
import TreatmentSelection from "@/components/consultation/TreatmentSelection";
import { TreatmentOption } from "@/types/consultation";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ConsultationFormFieldsProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    insuranceProvider: string;
    treatmentAreas: string[];
    notes: string;
  };
  errors: {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    phone: boolean;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleCheckboxChange: (id: string) => void;
  treatmentOptions: TreatmentOption[];
}

const ConsultationFormFields = ({
  formData,
  errors,
  handleInputChange,
  handleCheckboxChange,
  treatmentOptions
}: ConsultationFormFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          id="firstName"
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          placeholder="Enter your first name"
          error={errors.firstName}
          errorMessage="First name is required"
          isRequired={true}
        />
        
        <FormField
          id="lastName"
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          placeholder="Enter your last name"
          error={errors.lastName}
          errorMessage="Last name is required"
          isRequired={true}
        />
      </div>
      
      <FormField
        id="email"
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        placeholder="Enter your email address"
        error={errors.email}
        errorMessage="Email is required"
        isRequired={true}
      />
      
      <FormField
        id="phone"
        name="phone"
        label="Phone Number"
        type="tel"
        value={formData.phone}
        onChange={handleInputChange}
        required
        placeholder="Enter your phone number"
        error={errors.phone}
        errorMessage="Phone number is required"
        isRequired={true}
      />
      
      <FormField
        id="insuranceProvider"
        name="insuranceProvider"
        label="Insurance Provider"
        value={formData.insuranceProvider}
        onChange={handleInputChange}
        placeholder="Enter your insurance provider (optional)"
      />
      
      <TreatmentSelection 
        treatmentOptions={treatmentOptions} 
        selectedTreatments={formData.treatmentAreas}
        onSelectionChange={handleCheckboxChange}
      />
      
      <div className="space-y-2">
        <Label htmlFor="notes" className="text-base font-medium">Additional Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          placeholder="Please share any additional details about your condition or questions you may have"
          className="min-h-[100px] border-orange-200 focus-visible:ring-orange-500"
          maxLength={500}
        />
        <p className="text-xs text-gray-500 text-right">
          {formData.notes.length}/500 characters
        </p>
      </div>
    </>
  );
};

export default ConsultationFormFields;
