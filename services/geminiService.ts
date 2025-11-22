import { GoogleGenAI, Type } from "@google/genai";
import { PORTFOLIO_DATA } from '../constants';

// Construct a rich context object for the AI
const { personal, professional } = PORTFOLIO_DATA;

const SYSTEM_INSTRUCTION = `
You are an AI portfolio assistant for ${personal.name}, a ${personal.role}.
Your primary goal is to represent Sayantan professionally and answer questions about his experience, skills, and projects.

**Core Persona:**
- Professional, enthusiastic, and technical.
- Concise but informative.
- Highlights achievements and specific technologies (Java, AWS, Microservices, AI).

**Key Information Context:**
- **Role:** ${personal.role}
- **Current Focus:** Driving Fraud Detection initiatives and modernizing PreciseID at Experian.
- **Summary:** ${personal.summary}
- **Top Skills:** ${professional.skills.map(s => s.items.slice(0, 5).join(', ')).join('; ')}
- **Experience Highlights:** 
  ${professional.experiences.map(e => `- ${e.role} at ${e.company}: ${e.description[0]}`).join('\n  ')}
- **Key Projects:** 
  ${professional.projects.map(p => `- ${p.title} (${p.techStack.slice(0,3).join(', ')}): ${p.description}`).join('\n  ')}
- **Contact Info:** Email: ${personal.socialLinks.email}, Phone: ${personal.socialLinks.phone}

**Response Guidelines:**
1. **Be Concise:** Avoid long paragraphs. Use bullet points where possible.
2. **Be Specific:** If asked about skills, mention specific tools like Docker, Kubernetes, or Spring Boot.
3. **Contact:** If the user asks to hire or contact Sayantan, provide his email (${personal.socialLinks.email}) clearly.
4. **Boundaries:** If asked about unrelated topics (politics, general knowledge unrelated to tech), politely steer the conversation back to Sayantan's professional work.
`;

// Initialize the Google GenAI client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface ChatHistoryItem {
  role: 'user' | 'model';
  text: string;
}

export interface AIResponse {
  text: string;
  suggestions: string[];
}

/**
 * Sends a message to the Gemini API with chat history and returns the generated response + suggestions.
 * 
 * @param message - The user's input message string.
 * @param history - Array of previous messages for context.
 * @returns A Promise resolving to the AI's text response and suggestions.
 */
export const sendMessageToGemini = async (
  message: string, 
  history: ChatHistoryItem[] = []
): Promise<AIResponse> => {
  try {
    // Add current page context if available to help the AI understand where the user is looking
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'Unknown';
    const systemInstructionWithContext = `${SYSTEM_INSTRUCTION}\n\nUser Context: Browsing ${currentUrl}`;

    // Convert chat history to API format
    const historyContents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const responseSchema = {
      type: Type.OBJECT,
      properties: {
        answer: {
          type: Type.STRING,
          description: "The natural language response to the user's query. Use Markdown for formatting.",
        },
        suggestions: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "3 to 4 short, relevant follow-up questions the user might want to ask next based on this answer. Keep them under 6 words.",
        },
      },
      required: ["answer", "suggestions"],
    };

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...historyContents,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: systemInstructionWithContext,
        temperature: 0.7,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const jsonResponse = JSON.parse(response.text || "{}");
    
    return {
      text: jsonResponse.answer || "I'm thinking... but I couldn't generate a response right now.",
      suggestions: jsonResponse.suggestions || []
    };

  } catch (error) {
    console.error("Gemini Service Error:", error);
    return {
      text: "I'm having a bit of trouble connecting to my brain (the cloud) right now. Please try again in a moment!",
      suggestions: ["Try again later", "Contact Sayantan directly"]
    };
  }
};