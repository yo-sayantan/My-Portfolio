
import { GoogleGenAI } from "@google/genai";

// Support both variable names
const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;

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

  if (!apiKey) {
    console.error("Server Error: API_KEY is missing in environment variables.");
    return new Response(JSON.stringify({ error: "Server misconfiguration" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await req.json();
    const { prompt, systemInstruction } = body;

    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt is required" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return new Response(JSON.stringify({ text: response.text }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error: any) {
    console.error("Gemini Function Error:", error);
    return new Response(JSON.stringify({ error: error.message || "AI Service Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
