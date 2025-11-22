import { GoogleGenAI } from "@google/genai";
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

// Initialize the Google GenAI client with the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Calls the Gemini API directly using the SDK.
 */
export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'Unknown';
    const promptWithContext = `[Current Page Context: ${currentUrl}]\n\n${message}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: promptWithContext,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm thinking... but couldn't generate a response right now.";
  } catch (error) {
    console.error("Gemini Service Error:", error);
    return "I'm having trouble connecting to the AI service right now. Please try again later.";
  }
};
