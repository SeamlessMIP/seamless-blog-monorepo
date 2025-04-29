
// Email service for sending notifications
export async function sendEmail(formData, formType) {
  // Get Gmail credentials from environment variables
  const gmailUser = Deno.env.get("GMAIL_USER");
  const gmailPass = Deno.env.get("GMAIL_APP_PASSWORD");
  
  console.log('Gmail credentials check:', {
    userConfigured: !!gmailUser,
    passConfigured: !!gmailPass
  });
  
  if (!gmailUser || !gmailPass) {
    console.warn('Gmail credentials not configured, skipping email sending');
    return { 
      success: false, 
      error: 'Email sending is not configured'
    };
  }
  
  try {
    // In Edge Functions, SMTP connections are not supported
    // Instead, we'll log the email content that would have been sent
    // In a production environment, you would use a service like Resend, SendGrid, or Mailgun
    // that provides HTTP API endpoints for sending emails
    
    // Prepare the email data based on form type
    const name = `${formData.firstName} ${formData.lastName}`;
    let emailSubject, emailHtml;
    
    if (formType === 'consultation') {
      const treatmentsList = formData.treatments 
        ? formData.treatments.split(',').join(', ') 
        : 'None specified';
        
      emailSubject = 'Your Consultation Request';
      emailHtml = `
        <h1>Thank you for your consultation request, ${name}!</h1>
        <p>We have received your request for a consultation with the following details:</p>
        <ul>
          <li><strong>Phone:</strong> ${formData.phone}</li>
          <li><strong>Treatments of Interest:</strong> ${treatmentsList}</li>
        </ul>
        <p>One of our specialists will contact you shortly to schedule your consultation.</p>
        <p>Best regards,<br>The Medical Team</p>
      `;
    } else if (formType === 'insurance') {
      emailSubject = 'Your Insurance Verification Request';
      emailHtml = `
        <h1>Thank you for your insurance verification request, ${name}!</h1>
        <p>We have received your request to verify your insurance with the following details:</p>
        <ul>
          <li><strong>Phone:</strong> ${formData.phone}</li>
          <li><strong>Insurance Provider:</strong> ${formData.insuranceProvider}</li>
        </ul>
        <p>Our team will verify your coverage and contact you with the results shortly.</p>
        <p>Best regards,<br>The Medical Team</p>
      `;
    }
    
    console.log('Email that would be sent:', {
      to: formData.email,
      subject: emailSubject,
      content: emailHtml.replace(/<[^>]*>/g, '') // Log plain text version
    });
    
    // For now, we'll return a "mock" success since we can't actually send emails
    // In production, you would integrate with an email service with an HTTP API
    return {
      success: true,
      info: 'Email content logged (SMTP not supported in Edge Functions)'
    };
  } catch (error) {
    console.error('Error handling email:', error);
    return {
      success: false,
      error: error.message || 'Unknown email error'
    };
  }
}
