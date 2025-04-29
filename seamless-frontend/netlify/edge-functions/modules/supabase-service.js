
import supabase from './supabase-client.js';

// Store consultation form data in Supabase
export async function storeConsultationData(formData) {
  // Extract data for consultation submissions
  const consultationData = {
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    treatment_areas: formData.treatments ? formData.treatments.split(',') : []
  };
  
  console.log('Storing consultation data:', consultationData);
  
  // Insert into consultation_submissions table
  const { error: consultError } = await supabase.from('consultation_submissions').insert([consultationData]);
  
  if (consultError) {
    console.error('Error storing consultation submission:', consultError);
    throw new Error(`Error storing consultation: ${consultError.message}`);
  }
  
  // Insert into leads table for analytics
  const { error: leadsError } = await supabase.from('leads').insert([{
    email: formData.email,
    phone: formData.phone,
    form_type: 'consultation'
  }]);
  
  if (leadsError) {
    console.error('Error storing lead data:', leadsError);
    // Don't throw here, as we still want to continue with email notifications
  }
  
  return { success: true };
}

// Store insurance verification form data in Supabase
export async function storeInsuranceData(formData) {
  // Extract data for insurance submissions
  const insuranceData = {
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    insurance_provider: formData.insuranceProvider
  };
  
  console.log('Storing insurance verification data:', insuranceData);
  
  // Insert into insurance_verification_submissions table
  const { error: insError } = await supabase.from('insurance_verification_submissions').insert([insuranceData]);
  
  if (insError) {
    console.error('Error storing insurance verification:', insError);
    throw new Error(`Error storing insurance verification: ${insError.message}`);
  }
  
  // Insert into leads table for analytics
  const { error: leadsError } = await supabase.from('leads').insert([{
    email: formData.email,
    phone: formData.phone,
    form_type: 'insurance'
  }]);
  
  if (leadsError) {
    console.error('Error storing lead data:', leadsError);
    // Don't throw here, as we still want to continue with email notifications
  }
  
  return { success: true };
}
