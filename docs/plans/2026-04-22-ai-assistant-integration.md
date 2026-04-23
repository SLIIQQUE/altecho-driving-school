# AI Assistant Integration Design

**Date:** 2026-04-22  
**Project:** Altecho Driving School Website  
**Status:** Approved

## Overview

Integrate a full-featured AI chat + voice assistant powered by Groq, integrated as a floating widget across all pages with prominent CTAs on the homepage.

## Architecture

- **Frontend**: Floating React widget component with chat UI + voice controls
- **AI Engine**: Groq API (Llama 3 model) with streaming responses
- **Voice**: Web Speech API (SpeechRecognition + SpeechSynthesis)
- **Knowledge Base**: Pre-loaded context about driving courses, pricing, FAQs, test prep

## Key Features

### 1. Chat Interface
- Message history with user/AI distinction
- Typing indicator during AI responses
- Quick suggestion chips (e.g., "Tell me about pricing", "Help me book")
- Timestamp display

### 2. Voice Features
- Microphone button for voice input
- Text-to-speech for AI responses
- Visual feedback during recording
- Language: English (US)

### 3. Floating Widget
- Expandable/collapsible chat window
- Stays visible on all pages
- Minimized state: chat bubble icon with unread indicator
- Sound notification option

### 4. Homepage CTA Section
- "Meet Your AI Driving Tutor" hero section
- Demo of AI capabilities
- "Try It Now" CTA to open widget
- Feature highlights (24/7, Voice, Learning)

### 5. Page Integration
- **Homepage**: Hero CTA + dedicated section
- **All Pages**: Floating widget (bottom-right)
- **Services/Pricing**: Quick-access buttons

## Visual Design

### Color Palette
- Primary: Gold (#d4af37)
- Background: Deep dark (#0a0a0a)
- Surface: Dark (#141414)
- Text: White (#ffffff) / Gray (#9ca3af)
- Accent: Gold glow

### Typography
- Headings: Playfair Display
- Body: DM Sans
- Chat messages: DM Sans, 14px

### Widget Dimensions
- Minimized: 60x60px circular button
- Expanded: 400px width, 500px max-height
- Position: Bottom-right, 24px from edges

## Knowledge Base Context

The AI assistant has context about:
- Driving courses offered (Beginner, Intensive, Refresher, Pass Plus)
- Pricing tiers and packages
- Service areas covered
- Booking process
- Theory test preparation
- Practical test tips
- FAQ common questions

## API Integration

### Groq API
- Model: llama-3.1-8b-instant (fast, cost-effective)
- Endpoint: https://api.groq.com/openai/v1/chat/completions
- Streaming: Enabled for real-time responses
- Temperature: 0.7 for balanced responses

### Environment Variables
```
GROQ_API_KEY=your_groq_api_key
```

## Components to Create

1. **AIChatWidget** - Main floating widget component
2. **AIChatWindow** - Expanded chat interface
3. **AIVoiceControls** - Voice input/output buttons
4. **AIHomepageCTA** - Homepage AI section

## Pages to Update

1. **Homepage** (`app/page.tsx`) - Add AI CTA section
2. **Layout** (`app/layout.tsx`) - Add widget to all pages

## Acceptance Criteria

- [ ] AI widget visible on all pages
- [ ] Chat messages send and receive responses
- [ ] Voice input converts speech to text
- [ ] Voice output reads AI responses
- [ ] Homepage has prominent AI section
- [ ] Widget expands/collapses smoothly
- [ ] Mobile responsive
- [ ] Graceful fallback if API unavailable
