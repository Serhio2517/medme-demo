import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Bell, Calendar as CalendarIcon } from 'lucide-react';

const Home = () => {
    return (
        <div className="p-4" style={{ paddingTop: '20px' }}>
            {/* Header */}
            <header style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="text-large-title">Сегодня</h1>
                    <p className="text-body" style={{ color: 'var(--ios-gray)' }}>Среда, 29 января</p>
                </div>
                <div style={{ width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', background: '#eee' }}>
                    <img src="https://i.pravatar.cc/150?img=68" alt="Profile" style={{ width: '100%', height: '100%' }} />
                </div>
            </header>

            {/* Health Ring Widget */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    background: 'var(--bg-card)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '16px',
                    boxShadow: 'var(--shadow-md)',
                    marginBottom: '24px',
                }}
            >
                <h2 className="text-headline" style={{ marginBottom: '12px', textAlign: 'center' }}>Моя Забота</h2>

                <div style={{ position: 'relative', width: '150px', height: '150px', margin: '0 auto 16px' }}>
                    <svg width="150" height="150" style={{ transform: 'rotate(-90deg)' }}>
                        <circle cx="75" cy="75" r="60" stroke="var(--ios-gray-5)" strokeWidth="12" fill="transparent" />
                        <circle
                            cx="75" cy="75" r="60"
                            stroke="var(--ios-green)"
                            strokeWidth="12"
                            fill="transparent"
                            strokeDasharray="377"
                            strokeDashoffset="49" /* 87% filled */
                            strokeLinecap="round"
                        />
                    </svg>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <span style={{ fontSize: '42px', fontWeight: '800', color: 'var(--ios-green)' }}>87%</span>
                    </div>
                </div>

                {/* Status & Action */}
                <motion.div
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.hash = '#/care-plan'}
                    style={{
                        background: 'var(--ios-gray-6)',
                        borderRadius: 'var(--radius-md)',
                        padding: '12px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                            width: '24px', height: '24px',
                            borderRadius: '50%',
                            background: 'var(--ios-orange)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 2px 4px rgba(255, 149, 0, 0.3)'
                        }}>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'white' }}>3</span>
                        </div>
                        <div>
                            <span className="text-headline" style={{ fontSize: '15px', color: 'var(--text-primary)', display: 'block' }}>К выполнению: 3</span>
                            <span className="text-caption-1" style={{ color: 'var(--ios-orange)' }}>Требует внимания</span>
                        </div>
                    </div>
                    <ChevronRight size={20} color="var(--ios-gray-2)" />
                </motion.div>
            </motion.div>

            {/* Reminders / Actions */}
            <h3 className="text-title-2" style={{ marginBottom: '16px' }}>Напоминания</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <ActionCard
                    icon={<Bell size={24} color="var(--ios-red)" />}
                    title="Принять Витамин D"
                    subtitle="После еды, 2000 МЕ"
                    time="14:00"
                    isDone={false}
                />
                <ActionCard
                    icon={<CalendarIcon size={24} color="var(--ios-blue)" />}
                    title="Запись к стоматологу"
                    subtitle="МЦ 'Лодэ', Доктор Иванова"
                    time="Завтра, 10:00"
                    isDone={false}
                />
            </div>
        </div>
    );
};

const ActionCard = ({ icon, title, subtitle, time, isDone }) => (
    <motion.div
        whileTap={{ scale: 0.98 }}
        style={{
            background: 'var(--bg-card)',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        }}
    >
        <div style={{
            width: '48px', height: '48px',
            borderRadius: '12px',
            background: 'var(--ios-gray-6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            {icon}
        </div>
        <div style={{ flex: 1 }}>
            <h4 className="text-headline">{title}</h4>
            <p className="text-caption-1">{subtitle}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
            <span className="text-caption-1" style={{ display: 'block' }}>{time}</span>
            <ChevronRight size={20} color="var(--ios-gray-3)" style={{ marginTop: '4px' }} />
        </div>
    </motion.div>
);

export default Home;
