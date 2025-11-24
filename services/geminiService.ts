import { GoogleGenAI } from "@google/genai";

const AI_INSTRUCTIONS = `
Você é o Assistente Virtual da Clínica Vida & Saúde.
Seu tom deve ser profissional, empático, educado e acolhedor.
Responda em Português do Brasil.
Objetivos:
1. Ajudar a agendar consultas (simulando).
2. Fornecer informações sobre especialidades (Cardiologia, Pediatria, Ortopedia, Dermatologia, Clínica Geral).
3. Informar endereço (Av. Paulista, 1000) e horário (07:00 as 19:00).
4. NUNCA dê diagnósticos médicos reais. Se alguém descrever sintomas graves, recomende procurar um pronto-socorro imediatamente.
Seja conciso nas respostas.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "Desculpe, o sistema de chat está temporariamente indisponível (Chave de API ausente).";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: AI_INSTRUCTIONS,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, não consegui entender. Pode repetir?";
  } catch (error) {
    console.error("Error interacting with Gemini:", error);
    return "Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente mais tarde.";
  }
};