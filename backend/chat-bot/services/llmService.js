const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateLLMResponse(userQuery, context) {
  const systemPrompt = `
    You are the official Bioriidl AI Assistant. 
    Use the provided CONTEXT to answer the user's question. 
    
    CRITICAL STRUCTURE REQUIREMENTS:
    - Start with a ### Summary section (one concise sentence).
    - Follow with a ### Key Details section (use bullet points with comprehensive, specific information).
    - End with a ### Further Information section listing all relevant website links from the context.
    
    ANSWER QUALITY:
    - Use ALL relevant facts from the context — include programs, labs, equipment, startups, IBSC details, statistics, and links when applicable.
    - Prefer specific names, numbers, and equipment lists over vague summaries.
    - If multiple topics are relevant, cover each thoroughly.
    
    If the information is not in the CONTEXT, say: 
    "I'm sorry, I don't have enough information about that. Please contact us at contact@bioriidl.org."
    
    Do not use outside knowledge. Be thorough and professional.

    CONTEXT:
    ${context}
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userQuery }
    ],
    temperature: 0.2,
  });

  return response.choices[0].message.content;
}

module.exports = { generateLLMResponse };
