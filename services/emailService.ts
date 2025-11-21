
export interface EmailData {
  name: string;
  email: string;
  message: string;
  type?: 'contact' | 'transcript';
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
  console.log(`Sending ${data.type || 'contact'} email to backend...`);

  if (!data.email || !data.message || !data.name) {
    console.groupEnd();
    throw new Error("Validation failed: Missing required fields.");
  }

  try {
    // Call the Netlify Function
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

    console.groupEnd();
    
    return {
      success: true,
      reply: data.type === 'transcript' 
        ? "Transcript sent successfully!" 
        : "Message sent! 🚀 I'll reply faster than a hot-reloaded React component (usually)."
    };

  } catch (error) {
    console.error("❌ Email Service Failed:", error);
    console.groupEnd();
    throw error;
  }
};
