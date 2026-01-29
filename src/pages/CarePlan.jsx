import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, AlertCircle, Clock, CheckCircle2, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CarePlan = () => {
    const navigate = useNavigate();

    return (
        <div className="p-4" style={{ paddingTop: '20px', paddingBottom: '100px' }}>
            {/* Header with Back Button */}
            <header style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                    onClick={() => navigate('/')}
                    style={{
                        background: 'none',
                        border: 'none',
                        padding: '4px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                >
                    <ChevronLeft size={28} color="var(--ios-blue)" />
                </button>
                <h1 className="text-title-2">План Заботы</h1>
            </header>

            {/* Introduction Card */}
            <div style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                marginBottom: '24px',
                boxShadow: 'var(--shadow-sm)'
            }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                    <div style={{
                        width: '40px', height: '40px',
                        borderRadius: '50%',
                        background: 'var(--ios-orange)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0
                    }}>
                        <span style={{ fontWeight: 'bold', color: 'white', fontSize: '18px' }}>3</span>
                    </div>
                    <div>
                        <h3 className="text-headline">Требует внимания</h3>
                        <p className="text-caption-1" style={{ marginTop: '4px' }}>
                            Это самые важные задачи на ближайшее время. Выполните их, чтобы повысить индекс заботы.
                        </p>
                    </div>
                </div>
            </div>

            {/* High Priority Section */}
            <h3 className="text-headline" style={{ marginBottom: '12px', color: 'var(--ios-red)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <AlertCircle size={16} />
                КРИТИЧНО
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                <TaskItem
                    title="Общий анализ крови (ОАК)"
                    subtitle="Ежегодный чекап"
                    date="Просрочено на 5 дней"
                    priority="critical"
                />
            </div>

            {/* Medium Priority Section */}
            <h3 className="text-headline" style={{ marginBottom: '12px', color: 'var(--ios-orange)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={16} />
                СКОРО (Февраль)
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                <TaskItem
                    title="Осмотр у Офтальмолога"
                    subtitle="Контроль зрения"
                    date="До 15 Февраля"
                    priority="high"
                />
                <TaskItem
                    title="Витамин D (Анализ)"
                    subtitle="Контроль дефицитов"
                    date="До 20 Февраля"
                    priority="high"
                />
            </div>

            {/* Routine Section */}
            <h3 className="text-headline" style={{ marginBottom: '12px', color: 'var(--ios-blue)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={16} />
                ПЛАНОВО (2026)
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <TaskItem
                    title="УЗИ Брюшной полости"
                    subtitle="Профилактика"
                    date="Март 2026"
                    priority="low"
                />
                <TaskItem
                    title="Стоматолог (Гигиена)"
                    subtitle="Каждые 6 месяцев"
                    date="Июнь 2026"
                    priority="low"
                />
            </div>

        </div>
    );
};

const TaskItem = ({ title, subtitle, date, priority }) => {
    let borderColor = 'transparent';
    let icon = null;
    let textColor = 'var(--text-secondary)';

    if (priority === 'critical') {
        borderColor = 'var(--ios-red)';
        icon = <AlertCircle size={20} color="var(--ios-red)" />;
        textColor = 'var(--ios-red)';
    } else if (priority === 'high') {
        borderColor = 'var(--ios-orange)';
        icon = <div style={{ width: 12, height: 12, borderRadius: '50%', border: '2px solid var(--ios-orange)' }} />;
        textColor = 'var(--ios-orange)';
    } else {
        borderColor = 'var(--ios-blue)'; // Low priority accent
        icon = <div style={{ width: 12, height: 12, borderRadius: '50%', border: '2px solid var(--ios-gray-4)' }} />;
    }

    return (
        <motion.div
            whileTap={{ scale: 0.98 }}
            style={{
                background: 'var(--bg-card)',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                borderLeft: `4px solid ${borderColor}`
            }}
        >
            <div style={{ flex: 1 }}>
                <h4 className="text-headline" style={{ marginBottom: '2px' }}>{title}</h4>
                <p className="text-caption-1" style={{ fontSize: '13px' }}>{subtitle}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
                <span className="text-caption-1" style={{ color: textColor, fontWeight: '500' }}>{date}</span>
            </div>
        </motion.div>
    );
}

export default CarePlan;
