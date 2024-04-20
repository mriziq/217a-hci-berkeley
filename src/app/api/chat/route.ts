import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    let body;
    try {
        body = await req.json(); // Parses incoming JSON safely
    } catch (error) {
        return NextResponse.json({ error: "Bad request, invalid JSON" });
    }
    const { prompt } = body;

    try {
        // const requestData = await req.json(); // This parses the JSON body
        // console.log("From API: " + requestData)
        // const prompt = requestData.prompt; // Now you can access the prompt property
        // console.log("From API: " + prompt)
        const uniqueParam = new Date().getTime();
        const payload = {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful." },
                { role: "user", content: prompt },
                { role: "system", content: `unique_param: ${uniqueParam}` },
            ],
            temperature: 0.9,
            max_tokens: 300,
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

        return NextResponse.json({ data: content });
    } catch (error) {
        return NextResponse.json(`Server Error: ${error}`);
    }
}