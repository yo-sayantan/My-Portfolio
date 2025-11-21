
import { GoogleGenAI } from "@google/genai";

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    // Ideally, this comes from process.env.API_KEY which is injected by the environment
    // We assume the environment provides this.
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      console.warn("API Key not found in environment");
      return "I'm currently in demo mode. Please configure the API Key to chat with me!";
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: "You are a helpful, professional, and friendly AI assistant for Sayantan Biswas's portfolio website. You represent Sayantan, a Senior Software Engineer. Answer questions about his skills (Java, Microservices, AWS, AI Agents), his experience (Experian, Oracle, HighRadius), and his projects. Keep answers concise, engaging, and professional. If asked about contact info, refer them to the contact section.",
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Sorry, I'm having trouble connecting to the AI service right now. Please try again later.";
  }
};
