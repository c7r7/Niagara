import { GoogleGenAI, Type } from "@google/genai";
import { Product, AiRecommendationResponse } from '../types';
import { PRODUCTS } from '../constants';

const apiKey = process.env.API_KEY || '';

// Initialize properly with named parameter
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getGiftRecommendations = async (userQuery: string): Promise<AiRecommendationResponse> => {
  if (!ai) {
    console.error("API Key not found");
    return {
      recommendationText: "I'm sorry, I'm having trouble connecting to the shop inventory right now. Please browse our collection below!",
      recommendedProductIds: []
    };
  }

  const productContext = PRODUCTS.map(p => 
    `ID: ${p.id}, Name: ${p.name}, Price: $${p.price}, Category: ${p.category}, Desc: ${p.description}`
  ).join('\n');

  const systemInstruction = `
    You are a friendly, knowledgeable shop assistant at "Fallsside Treasures", a gift shop near Niagara Falls.
    Your goal is to help tourists and locals find the perfect item from our inventory.
    
    Here is our current inventory:
    ${productContext}

    When a user asks for a recommendation:
    1. Analyze their request (who is it for, budget, vibe).
    2. Select 1-3 most relevant products from the inventory.
    3. Write a short, warm, and inviting response explaining why these match. Mention the atmosphere of Niagara Falls if relevant.
    4. Return the IDs of the products you selected.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendationText: {
              type: Type.STRING,
              description: "A friendly message to the user recommending the products."
            },
            recommendedProductIds: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "The list of product IDs from the inventory that match the request."
            }
          },
          required: ["recommendationText", "recommendedProductIds"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const parsed: AiRecommendationResponse = JSON.parse(text);
    return parsed;

  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      recommendationText: "I'd love to help, but I'm feeling a bit misty-eyed right now. Why not check out our Popular Items section?",
      recommendedProductIds: []
    };
  }
};
