import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt, language = 'ru' } = body;

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error("GEMINI_API_KEY is not set");
        return NextResponse.json({ error: 'Server configuration error: API Key missing' }, { status: 500 });
    }

    const languageNames: Record<string, string> = {
        ru: 'Russian',
        en: 'English',
        tr: 'Turkish'
    };

    const targetLang = languageNames[language] || 'Russian';

    const systemPrompt = `
      You are a Senior Solution Architect at Grozan Digital Agency.
      A potential client has shared this vision: "${prompt}".

      Your goal is to analyze their request and propose a structural plan for their website/project.
      Do NOT estimate prices, budgets, or specific pricing packages.
      Focus on the structure, user flow, and unique features that will make them stand out.

      Generate a structured response in Markdown format.

      Include:
      1. 💡 **Project Structure** (A breakdown of necessary pages/sections, e.g., Homepage, Catalog, About, etc., and what they should contain)
      2. 🚀 **Key Features & "Chips"** (Unique selling points, interactive elements, or cool features to impress users)
      3. 🛠 **Technical Approach** (Briefly mention technologies or approach, e.g., "Fast single-page application" or "Robust e-commerce platform")

      Keep it concise (under 250 words) and use a professional, helpful tone.
      Respond in ${targetLang} language.
    `;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: systemPrompt }] }],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API Error Details:", errorData);
      // Extract a more useful error message if possible
      const errorMessage = errorData?.error?.message || errorData?.error?.status || `API Error: ${response.status}`;
      return NextResponse.json({ error: errorMessage }, { status: response.status });
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
