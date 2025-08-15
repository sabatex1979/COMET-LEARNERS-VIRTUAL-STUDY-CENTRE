
import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const createChatSession = (): Chat => {
  const chat: Chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: 'You are a friendly and encouraging AI tutor for students. Explain concepts clearly, provide examples, and answer questions to help them learn. Keep your responses concise and easy to understand.',
    },
  });
  return chat;
};
