
import { useState, FormEvent } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InsuranceVerificationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    insuranceProvider: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (!formData.insuranceProvider.trim()) {
      newErrors.insuranceProvider = "Insurance provider is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // With Netlify Forms, form submission will be handled by Netlify
    // Our Edge Function will process it and store in Supabase
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-lg border-orange-100">
      <CardHeader className="text-center bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
        <CardTitle className="text-2xl md:text-3xl text-gray-800">Insurance Verification</CardTitle>
        <CardDescription className="text-gray-600">
          Verify your insurance coverage for our procedures
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        <form 
          name="insurance" 
          method="POST" 
          data-netlify="true"
          action="/api/form-handler"
          onSubmit={handleSubmit} 
          className="space-y-4"
        >
          {/* Netlify Forms hidden input */}
          <input type="hidden" name="form-name" value="insurance" />
          <input type="hidden" name="form_type" value="insurance" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={errors.firstName ? "border-red-300" : ""}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={errors.lastName ? "border-red-300" : ""}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? "border-red-300" : ""}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={errors.phone ? "border-red-300" : ""}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="insuranceProvider">Insurance Provider</Label>
            <Input
              id="insuranceProvider"
              name="insuranceProvider"
              value={formData.insuranceProvider}
              onChange={handleInputChange}
              placeholder="e.g. Blue Cross Blue Shield, Aetna, United Healthcare"
              className={errors.insuranceProvider ? "border-red-300" : ""}
            />
            {errors.insuranceProvider && <p className="text-red-500 text-sm">{errors.insuranceProvider}</p>}
          </div>
          
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 rounded-md text-base w-full md:w-auto"
            >
              {isSubmitting ? "Submitting..." : "Verify Insurance"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default InsuranceVerificationForm;
