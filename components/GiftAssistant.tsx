import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, Bot } from 'lucide-react';
import { ChatMessage, Product } from '../types';
import { getGiftRecommendations } from '../services/geminiService';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const GiftAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hi! I'm your virtual shopping assistant. Tell me who you're shopping for (or if you want a souvenir for yourself!), and I'll find the perfect item from our shop."
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userText = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const response = await getGiftRecommendations(userText);
      
      const relatedProducts = response.recommendedProductIds
        .map(id => PRODUCTS.find(p => p.id === id))
        .filter((p): p is Product => !!p);

      setMessages(prev => [
        ...prev,
        { 
          role: 'model', 
          text: response.recommendationText,
          relatedProducts: relatedProducts
        }
      ]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a little trouble connecting to the falls right now. Please try again!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="assistant" className="py-20 bg-gradient-to-b from-mist-white to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-niagara-blue/10 rounded-full mb-4">
            <Sparkles className="text-niagara-blue" size={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 mb-4">
            AI Gift Assistant
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Not sure what to buy? Ask our intelligent assistant. Whether it's for a picky aunt, a rambunctious kid, or a keepsake for yourself, we'll help you choose.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 min-h-[500px] flex flex-col">
          {/* Chat Window */}
          <div className="flex-1 p-6 overflow-y-auto max-h-[600px] bg-slate-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-6 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] sm:max-w-[75%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                  <div className={`p-4 rounded-2xl shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-niagara-blue text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'
                  }`}>
                    {msg.role === 'model' && <Bot size={16} className="mb-2 text-niagara-light inline-block mr-2" />}
                    <span className="leading-relaxed">{msg.text}</span>
                  </div>
                  
                  {/* Render Product Suggestions if any */}
                  {msg.relatedProducts && msg.relatedProducts.length > 0 && (
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                      {msg.relatedProducts.map(product => (
                        <div key={product.id} className="transform scale-90 origin-top-left sm:scale-100">
                           <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-100 flex flex-col h-full hover:shadow-lg transition-shadow">
                            <div className="h-32 w-full overflow-hidden">
                              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-3">
                               <h4 className="font-bold text-sm text-slate-800 line-clamp-1">{product.name}</h4>
                               <p className="text-niagara-blue font-bold text-xs mt-1">${product.price.toFixed(2)}</p>
                            </div>
                           </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-6">
                 <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm flex items-center gap-2 text-slate-500">
                    <Loader2 className="animate-spin" size={16} />
                    <span className="text-sm">Browsing inventory...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: I need a warm gift for my mom under $50..."
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-niagara-blue/50 focus:border-niagara-blue transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !query.trim()}
                className="bg-niagara-blue hover:bg-niagara-light text-white p-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftAssistant;
