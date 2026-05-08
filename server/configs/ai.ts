import { GoogleGenAI } from '@google/genai';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// {GoogleGenerativeAI}

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY as string
})

export default ai;