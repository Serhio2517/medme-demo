import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, AlertCircle, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CarePlan = () => {
    const navigate = useNavigate();

    return (
        <div className="p-4" style={{ paddingTop: '20px', paddingBottom: '100px' }}>
            {/* Header */}
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

            {/* Introduction */}
            <div style={{ marginBottom: '32px' }}>
                <h2 className="text-large-title" style={{ marginBottom: '8px' }}>Внимание</h2>
                <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
                    Выполните просроченные задачи, чтобы вернуть индекс заботы в зеленую зону.
                </p>
            </div>

            {/* 1. OVERDUE (The only penalty) */}
            <SectionHeader icon={<AlertCircle size={20} />} title="ПРОСРОЧЕНО" color="var(--ios-red)" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                <TaskItem
                    title="Общий анализ крови (ОАК)"
                    subtitle="Ежегодный чекап"
                    date="Просрочено 5 дней"
                    status="overdue"
                    actionLabel="Сдать сейчас"
                />
                <TaskItem
                    title="Запись к Стоматологу"
                    subtitle="Гигиена 1 раз в 6 месяцев"
                    date="Просрочено 2 дня"
                    status="overdue"
                    actionLabel="Записаться"
                />
            </div>

            {/* 2. CURRENT (The active quests) */}
            <SectionHeader icon={<Clock size={20} />} title="АКТУАЛЬНО (Январь)" color="var(--ios-orange)" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                <TaskItem
                    title="Витамин D (Анализ)"
                    subtitle="Контроль дефицитов"
                    date="До 31 Января"
                    status="urgent"
                    actionLabel="Записаться"
                />
            </div>

            {/* 3. FUTURE (The Safe Zone) */}
            <SectionHeader icon={<Calendar size={20} />} title="ПЛАН (Будущее)" color="var(--ios-gray)" />
            <p className="text-caption-1" style={{ marginBottom: '12px', color: 'var(--text-secondary)' }}>
                Новые назначения попадают сюда и не влияют на рейтинг, пока не наступит их срок.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <TaskItem
                    title="УЗИ Брюшной полости"
                    subtitle="По назначению врача"
                    date="Март 2026"
                    status="future"
                />
                <TaskItem
                    title="Осмотр у Офтальмолога"
                    subtitle="Ежегодный контроль"
                    date="Июнь 2026"
                    status="future"
                />
            </div>

        </div>
    );
};

const SectionHeader = ({ icon, title, color }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: color }}>
        {icon}
        <span className="text-headline" style={{ fontSize: '15px', letterSpacing: '0.5px' }}>{title}</span>
    </div>
);

const TaskItem = ({ title, subtitle, date, status, actionLabel }) => {
    let borderColor = 'transparent';
    let bgColor = 'var(--bg-card)';
    let dateColor = 'var(--text-secondary)';
    let titleColor = 'var(--text-primary)';

    if (status === 'overdue') {
        borderColor = 'var(--ios-red)';
        dateColor = 'var(--ios-red)';
        bgColor = '#FFF5F5'; // Light red tint
    } else if (status === 'urgent') {
        borderColor = 'var(--ios-orange)';
        dateColor = 'var(--ios-orange)';
    } else if (status === 'future') {
        borderColor = 'transparent';
        dateColor = 'var(--ios-gray)';
        titleColor = 'var(--ios-gray)'; // Muted title for future
    }

    return (
        <motion.div
            whileTap={{ scale: 0.98 }}
            style={{
                background: bgColor,
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-sm)',
                borderLeft: `4px solid ${borderColor}`,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                    <h4 className="text-headline" style={{ marginBottom: '2px', color: titleColor }}>{title}</h4>
                    <p className="text-caption-1" style={{ fontSize: '13px' }}>{subtitle}</p>
                </div>
                <span className="text-caption-1" style={{ color: dateColor, fontWeight: '600', fontSize: '12px', whiteSpace: 'nowrap' }}>{date}</span>
            </div>

            {actionLabel && (
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '12px', marginTop: '4px' }}>
                    <span style={{ color: 'var(--ios-blue)', fontWeight: '600', fontSize: '14px' }}>{actionLabel}</span>
                </div>
            )}
        </motion.div>
    );
}

export default CarePlan;
