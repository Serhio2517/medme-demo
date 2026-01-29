import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User } from 'lucide-react';

const AIAssistant = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Здравствуйте! Я AI-ассистент MedMe. Расскажите, что вас беспокоит или загрузите фото анализов.", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Simulate AI response
        setTimeout(() => {
            const botMsg = {
                id: Date.now() + 1,
                text: "Я понял. Это может быть связано с усталостью. Рекомендую сдать ОАК (Общий анализ крови) и посетить терапевта для исключения анемии.",
                sender: 'bot'
            };
            setMessages(prev => [...prev, botMsg]);
        }, 1500);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Header */}
            <header className="p-4" style={{ borderBottom: '1px solid var(--ios-gray-5)', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 10 }}>
                <h1 className="text-headline" style={{ textAlign: 'center' }}>AI Ассистент</h1>
            </header>

            {/* Chat Area */}
            <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        style={{
                            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                            maxWidth: '80%',
                            display: 'flex',
                            gap: '8px'
                        }}
                    >
                        {msg.sender === 'bot' && (
                            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #00C6FF, #0072FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Bot size={18} color="white" />
                            </div>
                        )}
                        <div style={{
                            background: msg.sender === 'user' ? 'var(--ios-blue)' : 'var(--ios-gray-6)',
                            color: msg.sender === 'user' ? 'white' : 'black',
                            padding: '10px 14px',
                            borderRadius: '18px',
                            borderBottomRightRadius: msg.sender === 'user' ? '4px' : '18px',
                            borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '18px',
                            boxShadow: 'var(--shadow-sm)'
                        }}>
                            <p className="text-body" style={{ fontSize: '15px' }}>{msg.text}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div style={{ padding: '16px', background: 'white', borderTop: '1px solid var(--ios-gray-5)' }}>
                <div style={{
                    background: 'var(--ios-gray-6)',
                    borderRadius: '24px',
                    padding: '8px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <input
                        type="text"
                        placeholder="Сообщение..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        style={{
                            border: 'none',
                            background: 'transparent',
                            flex: 1,
                            fontSize: '16px',
                            outline: 'none',
                            padding: '4px 0'
                        }}
                    />
                    <button onClick={handleSend} style={{ border: 'none', background: 'transparent' }}>
                        <Send size={24} color={input ? 'var(--ios-blue)' : 'var(--ios-gray-3)'} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AIAssistant;
