import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function gerarDescricaoComGemini(imageBuffer) {
  const prompt = `
    Analise a imagem a seguir e forneça as seguintes informações em forma de texto direto  sem bullets e começar o texto sempre de uma forma diferente, o texto deve ter no máximo 250 caracters sobre a formiga:

    * **Nome científico:**
    * **Localização:**
    * **Habitat:**
    * **Nome popular:**
    * **Curiosidades:** (2-3)
  `;

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: "image/png",
      },
    };
    const res = await model.generateContent([prompt, image]);
    return res.response.text() || "Alt-text não disponível.";
  } catch (erro) {
    console.error("Erro ao obter alt-text:", erro.message, erro);
    throw new Error("Erro ao obter o alt-text do Gemini.");
  }
}
