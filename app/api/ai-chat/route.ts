import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message, history, context } = await req.json();
    
    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json({ 
        message: "AI service not configured. Please contact the school for assistance." 
      });
    }

    const systemMessage = {
      role: 'system',
      content: context
    };

    const conversationHistory = history
      .slice(-10)
      .map((msg: any) => ({
        role: msg.role,
        content: msg.content
      }));

    const messages = [systemMessage, ...conversationHistory, { role: 'user', content: message }];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages,
        temperature: 0.7,
        max_tokens: 500,
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error('Failed to get AI response');
    }

    const data = await response.json();
    const aiMessage = data.choices[0]?.message?.content || "I couldn't understand that. Can you try again?";

    return NextResponse.json({ message: aiMessage });
  } catch (error) {
    console.error('AI Chat error:', error);
    return NextResponse.json({ 
      message: "Sorry, I'm having trouble connecting right now. Please try again later." 
    }, { status: 500 });
  }
}