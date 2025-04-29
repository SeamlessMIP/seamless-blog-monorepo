
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailData {
  name: string;
  email: string;
  phone: string;
  treatmentAreas: string[];
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-consultation-confirmation function");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestBody = await req.text();
    console.log("Request body:", requestBody);
    
    const { name, email, phone, treatmentAreas }: EmailData = JSON.parse(requestBody);

    console.log("Parsed request data:", { name, email, phone, treatmentAreas });

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

    // Format the treatment areas for the email
    const treatmentsList = treatmentAreas.length > 0 
      ? treatmentAreas.join(", ") 
      : "None specified";

    // Send user confirmation email
    console.log("Sending user confirmation email...");
    const userEmailResponse = await resend.emails.send({
      from: "Seamless MIP <notifications@theseamlessway.com>",
      to: [email],
      subject: "Your Consultation Request - Seamless MIP",
      html: generateConfirmationEmail(name, phone, treatmentsList),
    });

    console.log("User email send attempt result:", userEmailResponse);

    // Send admin notification email
    console.log("Sending admin notification email...");
    const adminEmailResponse = await resend.emails.send({
      from: "Seamless MIP <notifications@theseamlessway.com>",
      to: ["mohammad.rustom@theseamlessway.com"], // Add your personal email here
      subject: `New Consultation Request from ${name}`,
      html: generateAdminEmail(name, email, phone, treatmentsList),
    });

    console.log("Admin email send attempt result:", adminEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        userEmailResponse,
        adminEmailResponse
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
    console.error("Error in send-consultation-confirmation function:", error);
    const errorMessage = error.message || "Unknown error";
    const errorStack = error.stack || "No stack trace";
    
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        stack: errorStack,
        details: "Error occurred while processing email confirmation"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

function generateConfirmationEmail(name: string, phone: string, treatmentsList: string): string {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #FFF5EA; padding: 20px; border-bottom: 3px solid #F97316;">
        <h1 style="color: #F97316; margin: 0;">Thank You for Your Consultation Request!</h1>
      </div>
      <div style="padding: 20px;">
        <p>Dear ${name},</p>
        
        <p>Thank you for submitting your consultation request with Seamless. We've received your information and a member of our team will be in touch with you shortly to discuss your needs further.</p>
        
        <div style="background-color: #f8f8f8; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #F97316; margin-top: 0;">Your Request Details:</h3>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Treatment Areas of Interest:</strong> ${treatmentsList}</p>
        </div>
        
        <p>At Seamless, we're dedicated to providing minimally invasive solutions for chronic pain, vascular conditions, and pelvic health issues.</p>
        
        <p>If you have any immediate questions, please don't hesitate to call us at <strong>(713) 355-9111</strong>.</p>
        
        <p style="margin-top: 30px;">Warm regards,</p>
        <p><strong>The Seamless MIP Team</strong></p>
      </div>
      <div style="background-color: #f8f8f8; padding: 15px; text-align: center; font-size: 12px; color: #666;">
        <p>© ${new Date().getFullYear()} Seamless MIP | 6624 Fannin St #2290, Houston, TX 77030</p>
      </div>
    </div>
  `;
}

function generateAdminEmail(name: string, email: string, phone: string, treatmentsList: string): string {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #FFF5EA; padding: 20px; border-bottom: 3px solid #F97316;">
        <h1 style="color: #F97316; margin: 0;">New Consultation Request</h1>
      </div>
      <div style="padding: 20px;">
        <p>A new consultation request has been submitted with the following details:</p>
        
        <div style="background-color: #f8f8f8; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #F97316; margin-top: 0;">Request Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Treatment Areas of Interest:</strong> ${treatmentsList}</p>
          <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <p>You may want to contact this person soon to schedule their consultation.</p>
      </div>
      <div style="background-color: #f8f8f8; padding: 15px; text-align: center; font-size: 12px; color: #666;">
        <p>© ${new Date().getFullYear()} Seamless MIP | Internal Notification</p>
      </div>
    </div>
  `;
}

serve(handler);
