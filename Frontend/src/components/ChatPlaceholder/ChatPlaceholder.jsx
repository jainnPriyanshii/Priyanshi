import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiMessageSquare, FiUser, FiCpu } from 'react-icons/fi';
import { LuSparkles } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = 'https://loyal-reprieve-production-eb16.up.railway.app';

export default function ChatPlaceholder() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    const handleAskAi = (e) => {
      const text = e.detail;
      const inputEl = document.querySelector('input[placeholder*="Ask me anything"]');
      if (inputEl) {
        inputEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
          inputEl.focus();
          handleSend(text);
        }, 800);
      }
    };

    window.addEventListener('ask-ai', handleAskAi);
    return () => window.removeEventListener('ask-ai', handleAskAi);
  }, [messages]);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'ai', text: data.answer }]);
    } catch (error) {
      console.error('Chat API error:', error);
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: "Sorry, I'm having trouble connecting right now. Please make sure the backend server is running and try again.",
        },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend(inputValue);
    }
  };

  return (
    <div className="w-full max-w-[720px] mx-auto flex flex-col gap-4">
      {/* Chat Messages Screen */}
      <AnimatePresence>
        {messages.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full max-h-[260px] overflow-y-auto bg-card/40 border border-secondary/20 rounded-2xl p-4 flex flex-col gap-3 scrollbar-thin"
          >
            {messages.map((msg, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={idx}
                className={`flex gap-3 max-w-[85%] ${
                  msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.sender === 'user' ? 'bg-accent text-background' : 'bg-secondary/20 text-accent'
                }`}>
                  {msg.sender === 'user' ? <FiUser size={16} /> : <FiCpu size={16} />}
                </div>
                <div className={`rounded-2xl p-3 text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-accent text-background font-medium rounded-tr-none' 
                    : 'bg-card text-text-primary border border-secondary/15 rounded-tl-none whitespace-pre-line'
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <div className="flex gap-3 max-w-[80%] self-start">
                <div className="w-8 h-8 rounded-full bg-secondary/20 text-accent flex items-center justify-center flex-shrink-0">
                  <FiCpu size={16} />
                </div>
                <div className="bg-card text-text-primary border border-secondary/15 rounded-2xl rounded-tl-none p-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Input Bar */}
      <div className="relative group w-full">
        <div className="bg-card border border-secondary/30 rounded-full flex items-center px-4 py-2 chat-glow transition-all duration-300">
          <FiMessageSquare className="text-accent/60 mr-3 flex-shrink-0" size={20} />
          <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask me anything — my projects, my stack, or why I'm the right hire →"
            className="bg-transparent border-none focus:outline-none focus:ring-0 w-full text-text-primary placeholder:text-secondary/50 font-sans text-sm md:text-base py-2 pr-10"
          />
          <button 
            onClick={() => handleSend(inputValue)}
            disabled={isTyping}
            className="absolute right-4 w-9 h-9 bg-accent hover:bg-accent/90 text-background rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send query"
          >
            <FiSend size={16} />
          </button>
        </div>
      </div>

      {/* Suggestion Chips */}
      <div className="flex flex-wrap justify-center gap-2 mt-1">
        <button 
          onClick={() => handleSend("What have you built?")}
          disabled={isTyping}
          className="font-mono text-[10px] md:text-xs px-4 py-2 rounded-full border border-secondary/20 bg-card/60 text-secondary hover:border-accent/50 hover:text-accent hover:bg-card transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          What have you built?
        </button>
        <button 
          onClick={() => handleSend("Tell me about your AI work")}
          disabled={isTyping}
          className="font-mono text-[10px] md:text-xs px-4 py-2 rounded-full border border-secondary/20 bg-card/60 text-secondary hover:border-accent/50 hover:text-accent hover:bg-card transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Tell me about your AI work
        </button>
        <button 
          onClick={() => handleSend("Are you open to work?")}
          disabled={isTyping}
          className="font-mono text-[10px] md:text-xs px-4 py-2 rounded-full border border-secondary/20 bg-card/60 text-secondary hover:border-accent/50 hover:text-accent hover:bg-card transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Are you open to work?
        </button>
      </div>
    </div>
  );
}
