import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Bell, Calendar as CalendarIcon, FlaskConical, Stethoscope, Award, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    // Demo state: change this to simulate different statuses
    const overdueCount = 2;
    const currentCount = 1;

    // Calculate status
    let statusBadge = { icon: '🏆', title: 'Мастер заботы', subtitle: 'Нет просроченных задач', color: 'var(--ios-green)', bg: '#E8F5E9' };
    if (overdueCount > 0) {
        statusBadge = { icon: '🔔', title: 'Требует внимания', subtitle: `${overdueCount} просроченных задач`, color: 'var(--ios-red)', bg: '#FFEBEE' };
    } else if (currentCount > 0) {
        statusBadge = { icon: '⚡', title: 'На связи', subtitle: `${currentCount} задач на этот месяц`, color: 'var(--ios-orange)', bg: '#FFF3E0' };
    }

    return (
        <div className="p-4" style={{ paddingTop: '20px' }}>
            {/* Header with Dynamic Status */}
            <header style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <p className="text-caption-1" style={{ color: 'var(--ios-gray)', marginBottom: '4px' }}>Четверг, 30 января</p>
                    <h1 className="text-large-title" style={{ color: statusBadge.color }}>{statusBadge.title}</h1>
                </div>
                <div style={{ width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', background: '#eee', border: '2px solid var(--ios-gray-5)' }}>
                    <img src="https://i.pravatar.cc/150?img=68" alt="Profile" style={{ width: '100%', height: '100%' }} />
                </div>
            </header>

            {/* Status Badge Card */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => navigate('/care-plan')}
                style={{
                    background: statusBadge.bg,
                    borderRadius: 'var(--radius-lg)',
                    padding: '20px',
                    marginBottom: '24px',
                    cursor: 'pointer',
                    border: `1px solid ${statusBadge.color}22`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                }}
            >
                <div style={{ fontSize: '48px' }}>{statusBadge.icon}</div>
                <div style={{ flex: 1 }}>
                    <h2 className="text-title-2" style={{ marginBottom: '4px', color: statusBadge.color }}>{statusBadge.title}</h2>
                    <p className="text-body" style={{ color: 'var(--text-secondary)' }}>{statusBadge.subtitle}</p>
                </div>
                <ChevronRight size={24} color={statusBadge.color} />
            </motion.div>

            {/* Category Cards */}
            <h3 className="text-headline" style={{ marginBottom: '12px', color: 'var(--text-secondary)' }}>Категории</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <CategoryCard
                    icon={<FlaskConical size={24} color="var(--ios-blue)" />}
                    title="Обследования"
                    status="2 выполнено"
                    statusColor="var(--ios-green)"
                    detail="Следующее: УЗИ в Марте"
                />
                <CategoryCard
                    icon={<Stethoscope size={24} color="var(--ios-purple)" />}
                    title="Приёмы врачей"
                    status="1 запланирован"
                    statusColor="var(--ios-orange)"
                    detail="Стоматолог — до 5 Февраля"
                    hasWarning
                />
            </div>

            {/* Today's Reminders */}
            <h3 className="text-headline" style={{ marginBottom: '12px', color: 'var(--text-secondary)' }}>Сегодня</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <ReminderCard
                    icon={<Bell size={24} color="var(--ios-red)" />}
                    title="Принять Витамин D"
                    subtitle="После еды, 2000 МЕ"
                    time="14:00"
                />
                <ReminderCard
                    icon={<CalendarIcon size={24} color="var(--ios-blue)" />}
                    title="Запись к стоматологу"
                    subtitle="МЦ 'Лодэ', Доктор Иванова"
                    time="Завтра, 10:00"
                />
            </div>
        </div>
    );
};

const CategoryCard = ({ icon, title, status, statusColor, detail, hasWarning }) => (
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                <h4 className="text-headline">{title}</h4>
                {hasWarning && <AlertCircle size={16} color="var(--ios-orange)" />}
            </div>
            <p className="text-caption-1" style={{ color: 'var(--text-secondary)' }}>{detail}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
            <span className="text-caption-1" style={{ color: statusColor, fontWeight: '600' }}>{status}</span>
        </div>
    </motion.div>
);

const ReminderCard = ({ icon, title, subtitle, time }) => (
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
