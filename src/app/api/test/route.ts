import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try {
        const prompt = "Say 'Hello, world!' in multiple languages.";
        const uniqueParam = new Date().getTime();
        const payload = {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful." },
                { role: "user", content: prompt },
                { role: "system", content: `unique_param: ${uniqueParam}` },
            ],
            temperature: 0.9,
            max_tokens: 30,
        };

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            method: "POST",
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonResponse = await response.json() as any;
        const content = jsonResponse.choices[0].message.content;

        console.log(content);

        return NextResponse.json({ message: "Response", data: content });
    } catch (error) {
        return NextResponse.json(`Server Error: ${error}`);
    }
}