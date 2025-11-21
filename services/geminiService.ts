import { SUMMARY, EXPERIENCES, PROJECTS, SKILLS, SOCIAL_LINKS } from '../constants';

const RESUME_DATA = {
  name: "Sayantan Biswas",
  role: "Senior Software Engineer",
  about: SUMMARY
};

const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${RESUME_DATA.name}'s personal portfolio website.
Your goal is to answer questions about ${RESUME_DATA.name} based strictly on the provided context.
Be professional, enthusiastic, and concise.

Context:
Name: ${RESUME_DATA.name}
Role: ${RESUME_DATA.role}
About: ${RESUME_DATA.about}
Skills: ${SKILLS.map(s => `${s.category}: ${s.items.join(', ')}`).join('; ')}
Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}
Projects: ${PROJECTS.map(p => `${p.title} (${p.description})`).join('; ')}
Contact: Email: ${SOCIAL_LINKS.email}, Phone: ${SOCIAL_LINKS.phone}

Guidelines:
- Keep answers concise and to the point.
- Use bullet points for lists (like skills or projects) to improve readability.
- Use **bold text** for emphasis on key technologies or achievements.
- If asked about contact info, provide the email: ${SOCIAL_LINKS.email}.
- If asked something unrelated to the portfolio or professional skills, politely steer the conversation back to ${RESUME_DATA.name}'s work.
`;

/**
 * Calls the secure Netlify Function to interact with Gemini.
 */
export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await fetch('/.netlify/functions/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: message,
        systemInstruction: SYSTEM_INSTRUCTION
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.text || "I'm thinking... but couldn't generate a response right now.";
  } catch (error) {
    console.error("Gemini Service Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};

export const generateAutoReply = async (name: string, userMessage: string): Promise<string> => {
  const prompt = `
    You are acting as an automated email responder for Sayantan Biswas.
    A user named "${name}" sent this message via the portfolio contact form: "${userMessage}".
    
    Write a friendly, professional, and concise confirmation receipt (max 2-3 sentences).
    Acknowledge the content of their message briefly if applicable.
    Assure them that Sayantan will review it and reply to their email soon.
    Sign off as: "- Sayantan's AI Agent".
  `;

  try {
    const response = await fetch('/.netlify/functions/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt,
        // No system instruction needed for auto-reply as the prompt is self-contained
      }),
    });

    if (!response.ok) return `Thanks ${name}! I've received your message and will get back to you shortly.`;

    const data = await response.json();
    return data.text || `Thanks ${name}! I've received your message and will get back to you shortly.`;
  } catch (error) {
    console.error("Auto-reply generation failed:", error);
    return `Thanks ${name}! I've received your message and will get back to you shortly.`;
  }
};