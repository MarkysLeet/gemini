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
        return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
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

      Your goal is to inspire them and "sell" the realization of this project.
      Generate a structured, professional, and exciting response in Markdown format.

      Include:
      1. 💡 **Project Vision** (A short, inspiring summary of what this could become)
      2. 🚀 **Recommended Tech Stack** (List 3-4 modern tools like React, Next.js, AI, etc.)
      3. ⭐ **Key MVP Features** (3 bullet points on what matters most)
      4. 📦 **Suggested Grozan Package** (Suggest one: "Start", "Base", or "Profi" based on complexity) & **Estimated Budget Range** (if enough info is present, otherwise a rough estimate).

      Keep it concise (under 250 words) and use a confident, expert, and inspiring tone.
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
      return NextResponse.json({ error: `API Error: ${response.status}` }, { status: response.status });
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
