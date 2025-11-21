
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
    const userAgent = req.headers.get('user-agent') || 'Unknown';
    // Netlify headers for IP
    const ip = req.headers.get('x-nf-client-connection-ip') || req.headers.get('client-ip') || 'Unknown'; 
    
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

    // 2. Professional Standard HTML Template (Not a card)
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Message</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #ffffff; padding: 20px;">
        <div style="max-width: 650px; margin: 0 auto;">
          
          <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 15px; margin-bottom: 25px;">
            <h2 style="color: #0f172a; margin: 0; font-size: 20px;">New Portfolio Contact</h2>
          </div>

          <div style="margin-bottom: 25px;">
            <p style="font-size: 12px; color: #64748b; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 4px; text-transform: uppercase;">Sender Information</p>
            <p style="margin: 0; font-size: 16px; font-weight: 500; color: #0f172a;">
              ${body.name}
              <span style="color: #64748b; font-weight: 400;">&lt;<a href="mailto:${body.email}" style="color: #0ea5e9; text-decoration: none;">${body.email}</a>&gt;</span>
            </p>
          </div>

          <div style="margin-bottom: 25px;">
            <p style="font-size: 12px; color: #64748b; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 8px; text-transform: uppercase;">Message Content</p>
            <div style="background-color: #f8fafc; border-left: 3px solid #0ea5e9; padding: 16px; color: #334155; font-size: 15px; white-space: pre-wrap;">${body.message}</div>
          </div>

          <div style="background-color: #f9fafb; border-radius: 6px; padding: 15px; font-size: 12px; color: #64748b; border: 1px solid #f1f5f9;">
            <p style="font-weight: 600; margin: 0 0 8px 0; text-transform: uppercase;">Technical Metadata</p>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 4px;"><strong>Timestamp:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST</li>
              <li style="margin-bottom: 4px;"><strong>IP Address:</strong> ${ip}</li>
              <li><strong>User Agent:</strong> ${userAgent}</li>
            </ul>
          </div>

          <p style="font-size: 11px; color: #94a3b8; margin-top: 30px; text-align: center;">
            Sent securely from Sayantan Biswas Portfolio
          </p>
        </div>
      </body>
      </html>
    `;

    // 3. Send Email
    const info = await transporter.sendMail({
      from: `"Portfolio Notification" <${GMAIL_USER}>`, // Sender address
      to: TO_EMAIL, // List of receivers
      replyTo: body.email, // Allows you to click "Reply" and email the user directly
      subject: `Portfolio Inquiry: ${body.name}`, // Subject line
      text: `Name: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}\n\nIP: ${ip}`, // Plain text body
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
