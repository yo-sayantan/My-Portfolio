
import { generateAutoReply } from './geminiService';

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  reply: string;
}

/**
 * Sends an email by calling the Netlify serverless function.
 * This keeps secrets (Client ID/Secret) secure on the server.
 */
export const sendEmail = async (data: EmailData): Promise<EmailResponse> => {
  console.group('📨 Email Service (Netlify Function)');
  console.log('Sending data to backend...');

  if (!data.email || !data.message || !data.name) {
    console.groupEnd();
    throw new Error("Validation failed: Missing required fields.");
  }

  try {
    // Call the Netlify Function
    // In development, `netlify dev` will proxy this.
    // In production, it hits the function endpoint.
    const response = await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server error: ${response.status}`);
    }

    console.log('✅ Backend processed email successfully.');

    // Generate Intelligent UI Confirmation (AI Auto-Reply)
    // We do this on the client side to give immediate feedback while utilizing the existing Gemini service.
    let uiReply = "Thank you for your message. I will get back to you soon.";
    try {
      uiReply = await generateAutoReply(data.name, data.message);
    } catch (aiError) {
      console.warn('AI Reply generation skipped:', aiError);
    }

    console.groupEnd();
    return {
      success: true,
      reply: uiReply
    };

  } catch (error) {
    console.error("❌ Email Service Failed:", error);
    console.groupEnd();
    throw error;
  }
};
