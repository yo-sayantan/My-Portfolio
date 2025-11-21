
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Sparkles, Loader2, User, Bot, Trash2, ChevronRight } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "What are your core skills?",
  "Tell me about your experience at Experian.",
  "Show me your personal projects.",
  "How can I contact you?",
  "Do you know Java & Microservices?"
];

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Sayantan's AI assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent, textOverride?: string) => {
    if (e) e.preventDefault();
    const text = textOverride || inputText;
    
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Failed to send message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting right now. Please try again later.",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        text: "Chat cleared. How else can I help you?",
        sender: 'ai',
        timestamp: new Date()
      }
    ]);
  };

  // Simple parser to handle **bold** text and newlines
  const renderMessageText = (text: string) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line.split(/(\*\*.*?\*\*)/).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="font-bold text-inherit">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
        {i < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      <div 
        className={`
          pointer-events-auto origin-bottom-right transition-all duration-300 ease-out
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'}
          w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh]
          bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl 
          border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden mb-4
        `}
      >
        {/* Header */}
        <div className="p-4 bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="p-2 bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl shadow-lg shadow-primary-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white dark:border-slate-900"></span>
              </span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Portfolio Assistant</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Powered by Gemini AI</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
             <button 
                onClick={handleClearChat}
                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                title="Clear Chat"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-white/10
                ${msg.sender === 'ai' 
                  ? 'bg-gradient-to-br from-primary-500 to-blue-600 text-white' 
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}
              `}>
                {msg.sender === 'ai' ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div className={`
                max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm
                ${msg.sender === 'user' 
                  ? 'bg-primary-600 text-white rounded-br-sm' 
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-bl-sm'}
              `}>
                {renderMessageText(msg.text)}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex items-end gap-2 animate-in fade-in duration-300">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                 <Bot size={16} className="text-white" />
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Suggestions Chips */}
        {messages.length < 3 && (
            <div className="px-4 pb-2">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Suggested Questions</p>
               <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none mask-gradient">
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(undefined, q)}
                      disabled={isLoading}
                      className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200 dark:hover:border-primary-800 transition-all flex-shrink-0"
                    >
                      {q}
                    </button>
                  ))}
               </div>
            </div>
        )}

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-4 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-700 shrink-0 backdrop-blur-sm">
          <div className="flex items-center gap-2 relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type a message..."
              className="w-full pl-4 pr-12 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all placeholder:text-slate-400 shadow-sm"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="absolute right-1.5 p-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          </div>
        </form>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl shadow-slate-900/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
      >
        <div className="absolute inset-0 rounded-full bg-inherit opacity-0 group-hover:opacity-10 transition-opacity" />
        
        {/* Notification Dot */}
        {!isOpen && (
             <span className="absolute top-0 right-0 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white dark:border-slate-900"></span>
            </span>
        )}

        <div className="relative transition-transform duration-500 ease-in-out transform group-hover:rotate-12">
            {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </div>
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-full mr-4 px-4 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-primary-500" />
            Ask AI about me
            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-inherit rotate-45 -translate-y-1/2 border-t border-r border-inherit"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default AIChatbot;
