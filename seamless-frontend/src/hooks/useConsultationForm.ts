
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useConsultationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    insuranceProvider: "",
    treatmentAreas: [] as string[],
    notes: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false
  });

  // Track if a field has been modified to collect leads
  const [fieldsModified, setFieldsModified] = useState({
    email: false,
    phone: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'email' || name === 'phone' || name === 'firstName' || name === 'lastName') {
      setErrors(prev => ({ ...prev, [name]: false }));
      
      // Track if email or phone have been modified for leads collection
      if ((name === 'email' || name === 'phone') && value.trim() !== '') {
        setFieldsModified(prev => ({
          ...prev,
          [name]: true
        }));
      }
    }
  };

  const handleCheckboxChange = (id: string) => {
    setFormData(prev => {
      const currentSelections = [...prev.treatmentAreas];
      if (currentSelections.includes(id)) {
        return { ...prev, treatmentAreas: currentSelections.filter(item => item !== id) };
      } else {
        return { ...prev, treatmentAreas: [...currentSelections, id] };
      }
    });
  };

  // Track potential leads if user leaves the page
  const saveLead = async () => {
    // Only save lead if either email or phone was entered but form wasn't submitted
    if ((fieldsModified.email || fieldsModified.phone) && (formData.email || formData.phone)) {
      try {
        await supabase.from('leads').insert({
          email: formData.email || null,
          phone: formData.phone || null,
          form_type: 'consultation'
        });
        console.log('Lead information saved');
      } catch (error) {
        console.error('Error saving lead:', error);
      }
    }
  };

  // Add event listener for when user leaves the page
  useEffect(() => {
    const handleBeforeUnload = () => {
      saveLead();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [formData, fieldsModified]);

  const validateForm = () => {
    const newErrors = {
      firstName: !formData.firstName.trim(),
      lastName: !formData.lastName.trim(),
      email: !formData.email.trim(),
      phone: !formData.phone.trim()
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  return {
    formData,
    isSubmitting,
    errors,
    handleInputChange,
    handleCheckboxChange,
    validateForm,
    setIsSubmitting
  };
};
