"use client";

import { useState, useRef, useEffect } from "react";
import { X, Mic, MicOff, Volume2, VolumeX, Send, Sparkles } from "lucide-react";

let globalOpen = false;

interface Message {
  id: string;
  role: "user" | "assistant";
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
- Service areas (Ipaja, Abeokuta, Sango, Ota, Agbado, Iyana-Itele, Egbeda, Dopemu)
- FAQs about driving lessons

Be helpful, friendly, and concise. Always recommend they contact the school for precise booking.`;

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hi! I'm your AI Driving Tutor. Ask me anything about driving lessons, courses, pricing, or test preparation!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };
    window.addEventListener("open-ai-chat", handleOpenChat);
    return () => window.removeEventListener("open-ai-chat", handleOpenChat);
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input.trim(),
          history: messages,
          context: KNOWLEDGE_CONTEXT,
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting. Please try again or use the contact form.",
          timestamp: new Date(),
        },
      ]);
    }

    setIsLoading(false);
  };

  const handleVoiceInput = () => {
    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {
      alert("Voice input not supported in this browser");
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

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

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <div className="w-[400px] h-[550px] bg-[#0a0a0a] border border-[#d4af37]/30 rounded-2xl shadow-2xl shadow-[#d4af37]/10 flex flex-col overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-[#d4af37] to-[#b8962e] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-black" />
            <span className="font-display font-bold text-black text-lg">
              AI Driving Tutor
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-black/70 hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#050505]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-2xl ${
                  msg.role === "user"
                    ? "bg-gradient-to-br from-[#d4af37] to-[#b8962e] text-black"
                    : "bg-[#1a1a1a] text-white border border-[#d4af37]/20"
                }`}
              >
                <p className="text-sm font-body leading-relaxed">
                  {msg.content}
                </p>
                {msg.role === "assistant" && (
                  <button
                    onClick={() => toggleSpeak(msg.content)}
                    className="mt-3 text-[#d4af37] hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    {isSpeaking ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                    <span className="text-xs">Listen</span>
                  </button>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-4 rounded-2xl">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-bounce" />
                  <span
                    className="w-2 h-2 bg-[#d4af37] rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  />
                  <span
                    className="w-2 h-2 bg-[#d4af37] rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-[#d4af37]/20 bg-[#0a0a0a]">
          <div className="flex gap-3">
            <button
              onClick={handleVoiceInput}
              className={`p-3 rounded-xl transition-all cursor-pointer ${
                isListening
                  ? "bg-red-500 text-white animate-pulse"
                  : "bg-[#1a1a1a] text-[#d4af37] hover:bg-[#252525]"
              }`}
            >
              {isListening ? (
                <MicOff className="w-5 h-5" />
              ) : (
                <Mic className="w-5 h-5" />
              )}
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about driving lessons..."
              className="flex-1 bg-[#1a1a1a] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-body focus:outline-none focus:border-[#d4af37] transition-colors"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="p-3 bg-gradient-to-br from-[#d4af37] to-[#b8962e] text-black rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity cursor-pointer"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}