
import nodemailer from 'nodemailer';

interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

// Environment variables
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const TO_EMAIL = "sayantanbiswas.mycareer@gmail.com"; // Where you want to receive the emails

export default async (req: Request) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  }

  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const body = await req.json() as EmailPayload;
    
    if (!body.name || !body.email || !body.message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // --- DEMO MODE / FALLBACK ---
    // If credentials are missing, log to console (prevents app crash during dev/demo)
    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      console.log("⚠️  GMAIL CREDENTIALS MISSING - RUNNING IN DEMO MODE");
      console.log("📧  [MOCK EMAIL SENT]");
      console.log(`    From: ${body.name} <${body.email}>`);
      console.log(`    To: ${TO_EMAIL}`);
      console.log(`    Message: ${body.message}`);
      
      return new Response(JSON.stringify({ success: true, mode: 'demo' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // --- PRODUCTION MODE (Gmail SMTP) ---
    
    // 1. Create Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // 2. Professional HTML Template
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%); padding: 30px 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">New Message Received</h1>
          <p style="color: #e0f2fe; margin: 10px 0 0 0; font-size: 14px;">From your portfolio contact form</p>
        </div>

        <!-- Content -->
        <div style="padding: 30px;">
          <!-- Sender Info Box -->
          <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #0ea5e9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 5px 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 700; width: 80px;">Name</td>
                <td style="padding: 5px 0; color: #0f172a; font-weight: 600;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding: 5px 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 700;">Email</td>
                <td style="padding: 5px 0; color: #0ea5e9; font-weight: 600;">
                  <a href="mailto:${body.email}" style="color: #0ea5e9; text-decoration: none;">${body.email}</a>
                </td>
              </tr>
            </table>
          </div>

          <!-- Message Body -->
          <div style="margin-bottom: 10px;">
            <p style="color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 700; margin-bottom: 10px;">Message</p>
            <div style="color: #334155; line-height: 1.6; font-size: 16px; background-color: #ffffff; padding: 0;">
              ${body.message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0; color: #94a3b8; font-size: 12px;">Sent via Sayantan Biswas Portfolio</p>
          <p style="margin: 5px 0 0 0; color: #cbd5e1; font-size: 11px;">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}</p>
        </div>
      </div>
    `;

    // 3. Send Email
    const info = await transporter.sendMail({
      from: `"Portfolio Bot" <${GMAIL_USER}>`, // Sender address
      to: TO_EMAIL, // List of receivers
      replyTo: body.email, // Allows you to click "Reply" and email the user directly
      subject: `✨ Portfolio Inquiry: ${body.name}`, // Subject line
      text: `Name: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}`, // Plain text body
      html: htmlContent, // HTML body
    });

    console.log("Message sent: %s", info.messageId);

    return new Response(JSON.stringify({ success: true, messageId: info.messageId }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error: any) {
    console.error("SMTP Error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email via SMTP", details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
