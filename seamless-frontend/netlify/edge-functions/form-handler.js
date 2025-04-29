
import corsHeaders from './modules/cors-headers.js';
import { sendEmail } from './modules/email-service.js';
import { storeConsultationData, storeInsuranceData } from './modules/supabase-service.js';

export default async (request, context) => {
  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Only process POST requests
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { 
      status: 405,
      headers: corsHeaders
    });
  }

  try {
    // Parse the form data from Netlify
    const payload = await request.formData();
    const formData = {};
    
    // Convert FormData to a regular object
    for (const [key, value] of payload.entries()) {
      formData[key] = value;
    }
    
    const formType = formData.form_type;
    console.log('Processing form submission:', formType, formData);
    
    // Store in the appropriate Supabase table based on form type
    if (formType === 'consultation') {
      await storeConsultationData(formData);
    } else if (formType === 'insurance') {
      await storeInsuranceData(formData);
    }
    
    // Attempt to send email notification (will be logged but not actually sent)
    const emailResult = await sendEmail(formData, formType);
    
    // Return a JSON response for API calls
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Form submission successful',
      emailStatus: emailResult.success ? 'logged' : 'failed',
      emailInfo: emailResult.info || emailResult.error,
      redirect: formType === 'consultation' ? '/consultation-success' : '/insurance-verification-success'
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Unknown error occurred during form processing'
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  }
};
