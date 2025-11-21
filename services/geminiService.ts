
import { GoogleGenAI } from "@google/genai";
import { SUMMARY, EXPERIENCES, PROJECTS, SKILLS, SOCIAL_LINKS } from '../constants';

// Initialize Gemini Client
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

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

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, but the AI service is not configured correctly (Missing API Key). Please contact the developer.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm thinking... but couldn't generate a response right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request. Please try again later.";
  }
};
