import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Activity, Search } from 'lucide-react';

const Records = () => {
    const [activeTab, setActiveTab] = useState('history');

    return (
        <div className="p-4" style={{ paddingTop: '20px' }}>
            <header style={{ marginBottom: '24px' }}>
                <h1 className="text-large-title">Медкарта</h1>
            </header>

            {/* Health Passport Card */}
            <motion.div
                whileTap={{ scale: 0.98 }}
                style={{
                    background: 'linear-gradient(135deg, var(--ios-blue), var(--ios-indigo))',
                    borderRadius: 'var(--radius-lg)',
                    padding: '20px',
                    color: 'white',
                    marginBottom: '24px',
                    boxShadow: 'var(--shadow-md)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <div style={{ position: 'absolute', top: -20, right: -20, opacity: 0.1 }}>
                    <Activity size={120} color="white" />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                    <div>
                        <h3 className="text-headline" style={{ opacity: 0.9 }}>Медпаспорт</h3>
                        <p className="text-caption-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Нажмите для полного вида</p>
                    </div>
                    <Activity size={24} color="white" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                        <span style={{ fontSize: '12px', opacity: 0.7, display: 'block' }}>Группа крови</span>
                        <span style={{ fontSize: '20px', fontWeight: '700' }}>A(II) Rh+</span>
                    </div>
                    <div>
                        <span style={{ fontSize: '12px', opacity: 0.7, display: 'block' }}>Аллергии</span>
                        <span style={{ fontSize: '15px', fontWeight: '600' }}>Пенициллин</span>
                    </div>
                </div>
            </motion.div>

            {/* Search */}
            <div style={{
                background: 'var(--ios-gray-6)',
                borderRadius: '10px',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '20px'
            }}>
                <Search size={18} color="var(--ios-gray)" />
                <input
                    type="text"
                    placeholder="Поиск по анализам и врачам"
                    style={{
                        border: 'none',
                        background: 'transparent',
                        fontSize: '17px',
                        width: '100%',
                        outline: 'none',
                        color: 'var(--text-primary)'
                    }}
                />
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', borderBottom: '1px solid var(--ios-gray-5)' }}>
                <TabButton label="История" active={activeTab === 'history'} onClick={() => setActiveTab('history')} />
                <TabButton label="Анализы" active={activeTab === 'labs'} onClick={() => setActiveTab('labs')} />
                <TabButton label="Документы" active={activeTab === 'docs'} onClick={() => setActiveTab('docs')} />
            </div>

            {/* List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {activeTab === 'history' && (
                    <>
                        <HistoryItem
                            date="29 Янв 2026"
                            doctor="Терапевт"
                            clinic="ЛЗ 'Лодэ'"
                            diagnosis="ОРВИ, острый ринит"
                            badge="Новое"
                        />
                        <HistoryItem
                            date="15 Дек 2025"
                            doctor="Стоматолог"
                            clinic="Скайдент"
                            diagnosis="Проф. гигиена полости рта"
                        />
                        <HistoryItem
                            date="10 Ноя 2025"
                            doctor="Эндокринолог"
                            clinic="Нордин"
                            diagnosis="Плановый осмотр"
                        />
                    </>
                )}
                {activeTab === 'labs' && (
                    <div className="text-body" style={{ color: 'var(--ios-gray)', textAlign: 'center', padding: '20px' }}>
                        Нет новых анализов
                    </div>
                )}
            </div>

        </div>
    );
};

const TabButton = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        style={{
            background: 'none',
            border: 'none',
            padding: '0 0 10px 0',
            fontSize: '16px',
            fontWeight: active ? '600' : '400',
            color: active ? 'var(--ios-blue)' : 'var(--ios-gray)',
            borderBottom: active ? '2px solid var(--ios-blue)' : '2px solid transparent',
            transition: 'all 0.2s'
        }}
    >
        {label}
    </button>
);

const HistoryItem = ({ date, doctor, clinic, diagnosis, badge }) => (
    <div style={{
        background: 'var(--bg-card)',
        padding: '16px',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        gap: '16px'
    }}>
        <div style={{
            width: '50px', height: '50px',
            background: 'var(--ios-gray-6)',
            borderRadius: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0
        }}>
            <FileText size={24} color="var(--ios-blue)" />
        </div>
        <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span className="text-headline">{doctor}</span>
                <span className="text-caption-1">{date}</span>
            </div>
            <p className="text-caption-1" style={{ fontSize: '13px', marginBottom: '4px' }}>{clinic}</p>
            <p className="text-body" style={{ fontSize: '15px' }}>{diagnosis}</p>
        </div>
        {badge && (
            <div style={{ alignSelf: 'start', padding: '2px 8px', background: 'var(--ios-red)', borderRadius: '10px' }}>
                <span style={{ fontSize: '10px', color: 'white', fontWeight: '600' }}>!</span>
            </div>
        )}
    </div>
);

export default Records;
