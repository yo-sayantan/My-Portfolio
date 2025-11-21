
interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

const CLIENT_ID = process.env.SENDPULSE_CLIENT_ID;
const CLIENT_SECRET = process.env.SENDPULSE_CLIENT_SECRET;
const FROM_EMAIL = process.env.SENDPULSE_FROM_EMAIL;
const TO_EMAIL = "sayantanbiswas.mycareer@gmail.com";

async function getAuthToken(): Promise<string> {
  if (!CLIENT_ID || !CLIENT_SECRET) {
    throw new Error("Missing SendPulse credentials.");
  }

  const response = await fetch('https://api.sendpulse.com/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error('SendPulse Auth Error:', text);
    throw new Error(`Auth failed: ${text}`);
  }

  const data = await response.json();
  return data.access_token;
}

export default async (req: Request) => {
  // Handle CORS
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

    // --- DEMO MODE CHECK ---
    // If credentials are not set in the environment, we fallback to a "Mock Send"
    // This ensures the UI works for demonstration purposes without crashing.
    if (!CLIENT_ID || !CLIENT_SECRET || !FROM_EMAIL) {
      console.log("⚠️  SENDPULSE CREDENTIALS MISSING - RUNNING IN DEMO MODE");
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

    // --- PRODUCTION MODE ---
    // 1. Get Token
    const token = await getAuthToken();

    // 2. Prepare Email
    const emailPayload = {
      email: {
        html: `
          <h2>New Portfolio Contact</h2>
          <p><strong>From:</strong> ${body.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
          <br/>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #0ea5e9; padding-left: 12px; color: #333;">
            ${body.message.replace(/\n/g, '<br/>')}
          </blockquote>
          <hr/>
          <p style="font-size: 12px; color: #888;">Sent via Netlify Functions</p>
        `,
        text: `Name: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}`,
        subject: `Portfolio Contact from ${body.name}`,
        from: {
          name: "Portfolio Website",
          email: FROM_EMAIL
        },
        to: [
          {
            name: "Sayantan Biswas",
            email: TO_EMAIL
          }
        ]
      }
    };

    // 3. Send via SendPulse
    const sendResponse = await fetch('https://api.sendpulse.com/smtp/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    });

    if (!sendResponse.ok) {
      const errText = await sendResponse.text();
      console.error('SendPulse Send Error:', errText);
      return new Response(JSON.stringify({ error: "Failed to send email via provider" }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error: any) {
    console.error("Function Error:", error);
    return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
