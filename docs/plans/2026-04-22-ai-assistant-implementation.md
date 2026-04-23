# AI Assistant Integration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Integrate a Groq-powered AI chat + voice assistant as a floating widget across all pages, with a prominent CTA section on homepage.

**Architecture:** Floating React widget with Groq API integration for chat, Web Speech API for voice input/output, pre-loaded driving school knowledge base context.

**Tech Stack:** Next.js, React, Groq API (Llama 3), Web Speech API, Tailwind CSS

---

## Task 1: Create AI Chat Widget Component

**Files:**
- Create: `components/AIChatWidget.tsx`
- Modify: `app/layout.tsx`

**Step 1: Create AIChatWidget.tsx with basic structure**

```tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Mic, MicOff, Volume2, VolumeX, Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const KNOWLEDGE_CONTEXT = `You are Altecho's AI Driving Tutor for Altecho Driving School. 
You help with:
- Driving course information (Beginner, Intensive, Refresher, Pass Plus)
- Pricing and packages
- Booking process and availability
- Theory test preparation tips
- Practical test advice
- Service areas (West London, Hillingdon, Harrow, Barnet, Brentford)
- FAQs about driving lessons

Be helpful, friendly, and concise. Always recommend they contact the school for precise booking.`;

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm your AI Driving Tutor. Ask me anything about driving lessons, courses, pricing, or test preparation!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: input.trim(),
          history: messages,
          context: KNOWLEDGE_CONTEXT
        })
      });
      
      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'assistant',
        content: "Sorry, I'm having trouble connecting. Please try again or call us directly.",
        timestamp: new Date()
      }]);
    }
    
    setIsLoading(false);
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice input not supported in this browser');
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };
    
    recognition.start();
  };

  const toggleSpeak = (content: string) => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(content);
      utterance.onend = () => setIsSpeaking(false);
      setIsSpeaking(true);
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8962e] shadow-lg shadow-[#d4af37]/30 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        >
          <Sparkles className="w-7 h-7 text-black" />
        </button>
      ) : (
        <div className="w-[380px] h-[520px] bg-[#0a0a0a] border border-[#d4af37]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#d4af37] to-[#b8962e] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-black" />
              <span className="font-display font-semibold text-black">AI Driving Tutor</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black hover:opacity-70 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl ${
                  msg.role === 'user' 
                    ? 'bg-[#d4af37] text-black' 
                    : 'bg-[#1a1a1a] text-white border border-[#d4af37]/20'
                }`}>
                  <p className="text-sm font-body">{msg.content}</p>
                  {msg.role === 'assistant' && (
                    <button 
                      onClick={() => toggleSpeak(msg.content)}
                      className="mt-2 text-[#d4af37] hover:text-white transition-colors cursor-pointer"
                    >
                      {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-3 rounded-xl">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <div className="p-4 border-t border-[#d4af37]/20">
            <div className="flex gap-2">
              <button
                onClick={handleVoiceInput}
                className={`p-3 rounded-xl transition-colors cursor-pointer ${
                  isListening ? 'bg-red-500 text-white' : 'bg-[#1a1a1a] text-[#d4af37] hover:bg-[#252525]'
                }`}
              >
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about driving lessons..."
                className="flex-1 bg-[#1a1a1a] border border-[#d4af37]/20 rounded-xl px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="p-3 bg-[#d4af37] text-black rounded-xl hover:bg-[#b8962e] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
```

**Step 2: Add widget to layout.tsx**

Modify `app/layout.tsx` to import and include the widget:
```tsx
import AIChatWidget from '@/components/AIChatWidget';
```

Add before closing body tag:
```tsx
<AIChatWidget />
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

---

## Task 2: Create API Route for Groq

**Files:**
- Create: `app/api/ai-chat/route.ts`

**Step 1: Create API route with Groq integration**

```ts
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
```

**Step 2: Create example .env.local**

```env
GROQ_API_KEY=your_groq_api_key_here
```

**Step 3: Test API route exists**

Run: `curl -X POST http://localhost:3000/api/ai-chat -H "Content-Type: application/json" -d '{"message":"Hello","context":"test"}'`
Expected: JSON response

---

## Task 3: Add Homepage CTA Section

**Files:**
- Modify: `app/page.tsx`
- Create: `components/AIHomepageCTA.tsx`

**Step 1: Create AIHomepageCTA component**

```tsx
'use client';

import { Sparkles, Mic, BookOpen, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AIHomepageCTA() {
  const features = [
    { icon: Mic, title: 'Voice Enabled', desc: 'Speak naturally to get instant answers' },
    { icon: Clock, title: '24/7 Available', desc: 'Learn anytime, anywhere' },
    { icon: BookOpen, title: 'Test Prep', desc: 'Practice theory questions' },
  ];

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent" />
      
      <div className="container-main relative z-10">
        <div className="text-center mb-16">
          <span className="badge-consistent inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered Learning
          </span>
          <h2 className="section-header__title">
            Meet Your <span className="text-[#d4af37]">AI Driving Tutor</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-body">
            Get instant answers about driving courses, practice theory tests, 
            and prepare for your exam with our intelligent AI assistant.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, i) => (
            <div key={i} className="card-consistent p-6 text-center group hover:border-[#d4af37]/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d4af37]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="font-display text-lg text-white mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm font-body">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Try AI Tutor Now
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-gray-500 text-sm mt-4 font-body">
            Free to use • No account required • Instant answers
          </p>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to homepage**

Modify `app/page.tsx` to import and add before CTA section:
```tsx
import AIHomepageCTA from '@/components/AIHomepageCTA';
```

Add component:
```tsx
<AIHomepageCTA />
<CTA />
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

---

## Task 4: Test & Verify

**Step 1: Test widget appears**

Run: `npm run dev`
Navigate: http://localhost:3000
Verify: Gold sparkles button visible in bottom-right corner

**Step 2: Test widget expands**

Click: Gold button
Verify: Chat window opens with welcome message

**Step 3: Verify homepage CTA**

Navigate: Homepage
Verify: "Meet Your AI Driving Tutor" section visible

---

## Task 5: Commit

```bash
git add components/AIChatWidget.tsx components/AIHomepageCTA.tsx app/api/ai-chat/route.ts app/page.tsx app/layout.tsx
git commit -m "feat: integrate AI chat assistant with Groq and voice support"
```

---

## Summary

- **Task 1**: AIChatWidget component with chat, voice input/output
- **Task 2**: API route connecting to Groq
- **Task 3**: Homepage CTA section
- **Task 4**: Testing
- **Task 5**: Commit

**Prerequisites:**
- Groq API key (get free at https://console.groq.com)
- Add to .env.local: `GROQ_API_KEY=your_key`

**Total Estimated Time:** 30-45 minutes
