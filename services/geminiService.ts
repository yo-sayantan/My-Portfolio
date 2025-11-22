
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

export interface ChatHistoryItem {
  role: 'user' | 'model';
  text: string;
}

export interface AIResponse {
  text: string;
  suggestions: string[];
}

/**
 * Sends a message to the Netlify Function proxy to avoid exposing API keys.
 */
export const sendMessageToGemini = async (
  message: string, 
  history: ChatHistoryItem[] = []
): Promise<AIResponse> => {
  try {
    // Add current page context if available
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'Unknown';
    const systemInstructionWithContext = `${SYSTEM_INSTRUCTION}\n\nUser Context: Browsing ${currentUrl}`;

    const response = await fetch('/.netlify/functions/ai', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message,
            history,
            systemInstruction: systemInstructionWithContext
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server Error: ${response.status}`);
    }

    const data = await response.json();

    // Handle Demo Mode response from backend
    if (data.mode === 'demo') {
        return {
            text: "I'm currently running in **Demo Mode** because the API key is being configured securely on the server. \n\nIn a live environment, I would use Google's Gemini AI to answer your questions about Sayantan's experience with Java, Microservices, and Cloud Architecture.",
            suggestions: ["View Projects", "Contact Sayantan", "Check Skills"]
        };
    }

    // Parse the JSON response from Gemini
    // The backend returns the raw text which should be a JSON string due to the schema
    let parsedContent;
    try {
        parsedContent = typeof data.text === 'string' ? JSON.parse(data.text) : data.text;
    } catch (e) {
        console.error("Failed to parse AI JSON response", e);
        parsedContent = { answer: data.text, suggestions: [] };
    }
    
    return {
      text: parsedContent.answer || "I'm thinking... but I couldn't generate a response right now.",
      suggestions: parsedContent.suggestions || []
    };

  } catch (error) {
    console.error("Gemini Service Error:", error);
    return {
      text: "I'm having a bit of trouble connecting to the server right now. Please try again in a moment!",
      suggestions: ["Try again later", "Contact Sayantan directly"]
    };
  }
};
