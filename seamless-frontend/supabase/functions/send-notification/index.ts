
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NotificationEmailRequest {
  name: string;
  email: string;
  messageType: string;
  formType: string;
  additionalData?: any;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-notification function");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestBody = await req.text();
    console.log("Request body:", requestBody);
    
    const { name, email, messageType, formType, additionalData }: NotificationEmailRequest = JSON.parse(requestBody);

    console.log("Parsed request data:", { name, email, messageType, formType });

    // Check if RESEND_API_KEY is available
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Email API key is not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Admin notification email
    console.log("Sending admin notification email...");
    const adminEmailResponse = await resend.emails.send({
      from: "Seamless Health <notifications@theseamlessway.com>",
      to: ["mohammad.rustom@theseamlessway.com"],
      subject: `New ${formType} Form Submission from ${name}`,
      html: generateAdminEmail(name, email, formType, additionalData),
    });

    console.log("Admin email send attempt result:", adminEmailResponse);

    // User confirmation email
    console.log("Sending user confirmation email...");
    const userEmailResponse = await resend.emails.send({
      from: "Seamless Health <notifications@theseamlessway.com>",
      to: [email],
      subject: "Thank you for contacting Seamless Health",
      html: generateUserEmail(name, formType),
    });

    console.log("User email send attempt result:", userEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        adminEmail: adminEmailResponse,
        userEmail: userEmailResponse
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    const errorMessage = error.message || "Unknown error";
    const errorStack = error.stack || "No stack trace";
    
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        stack: errorStack,
        details: "Error occurred while processing email notification"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

function generateUserEmail(name: string, formType: string): string {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #FFF5EA; padding: 20px; border-bottom: 3px solid #F97316;">
        <h1 style="color: #F97316; margin: 0;">Thank You, ${name}!</h1>
      </div>
      <div style="padding: 20px;">
        <p>We have received your ${formType} submission and will get back to you as soon as possible.</p>
        <p>At Seamless Health, we're dedicated to providing minimally invasive solutions for chronic pain, vascular conditions, and pelvic health issues.</p>
        <p>If you have any immediate questions, please don't hesitate to call us at <strong>(713) 355-9111</strong>.</p>
        <p style="margin-top: 30px;">Best regards,</p>
        <p><strong>The Seamless Health Team</strong></p>
      </div>
      <div style="background-color: #f8f8f8; padding: 15px; text-align: center; font-size: 12px; color: #666;">
        <p>© ${new Date().getFullYear()} Seamless Health | 6624 Fannin St #2290, Houston, TX 77030</p>
      </div>
    </div>
  `;
}

function generateAdminEmail(name: string, email: string, formType: string, additionalData: any): string {
  let detailsHtml = '';
  
  if (formType === 'consultation') {
    detailsHtml = `
      <p><strong>Phone:</strong> ${additionalData?.phone || 'Not provided'}</p>
      <p><strong>Treatment Areas:</strong> ${additionalData?.treatment_areas?.join(', ') || 'Not specified'}</p>
    `;
  } else if (formType === 'insurance') {
    detailsHtml = `
      <p><strong>Phone:</strong> ${additionalData?.phone || 'Not provided'}</p>
      <p><strong>Insurance Provider:</strong> ${additionalData?.insurance_provider || 'Not provided'}</p>
    `;
  }

  return `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #FFF5EA; padding: 20px; border-bottom: 3px solid #F97316;">
        <h1 style="color: #F97316; margin: 0;">New ${formType.charAt(0).toUpperCase() + formType.slice(1)} Form Submission</h1>
      </div>
      <div style="padding: 20px;">
        <h2>Contact Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${detailsHtml}
        <p style="margin-top: 20px;">This form was submitted on ${new Date().toLocaleString()}.</p>
      </div>
    </div>
  `;
}

serve(handler);
