
import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import { SendIcon, StudyIcon } from '../components/icons/Icons';
import type { ChatMessage } from '../types';
import { createChatSession } from '../services/geminiService';

const StudyAssistant: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: 'Hello! I am your AI study assistant. How can I help you learn today?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatSessionRef = useRef(createChatSession());
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = async () => {
        if (input.trim() === '' || isLoading) return;

        const userMessage: ChatMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const stream = await chatSessionRef.current.sendMessageStream({ message: input });
            let modelResponse = '';
            
            // Add an empty model message to update in stream
            setMessages(prev => [...prev, { role: 'model', text: '' }]);

            for await (const chunk of stream) {
                modelResponse += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text = modelResponse;
                    return newMessages;
                });
            }
        } catch (error) {
            console.error("Gemini API error:", error);
            setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I encountered an error. Please try again.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)]">
            <Header title="AI Study Assistant" />
            <div className="flex-1 bg-white p-6 rounded-xl shadow-lg flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto pr-4 space-y-6">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                             {msg.role === 'model' && (
                                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 p-2 text-white">
                                    <StudyIcon />
                                </div>
                            )}
                            <div className={`max-w-xl px-4 py-3 rounded-2xl ${msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                <p style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                     {isLoading && messages[messages.length -1].role === 'user' && (
                         <div className="flex justify-start items-start gap-3">
                             <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 p-2 text-white">
                                <StudyIcon />
                            </div>
                            <div className="max-w-lg px-4 py-3 rounded-2xl bg-gray-200 text-gray-800">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <div className="mt-6 flex items-center border-t pt-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Ask a question about any subject..."
                        className="flex-grow px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={isLoading}
                        className="ml-4 p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <SendIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudyAssistant;