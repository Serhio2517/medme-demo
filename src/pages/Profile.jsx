import React, { useState } from 'react';
import { User, Settings, CreditCard, Shield, ChevronRight, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const Profile = () => {
    const [activeProfile, setActiveProfile] = useState('me');

    return (
        <div className="p-4" style={{ paddingTop: '20px' }}>
            <h1 className="text-large-title" style={{ marginBottom: '24px' }}>Профиль</h1>

            {/* Family Switcher */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '4px' }}>
                <ProfileAvatar
                    name="Я"
                    active={activeProfile === 'me'}
                    onClick={() => setActiveProfile('me')}
                    img="https://i.pravatar.cc/150?img=68"
                />
                <ProfileAvatar
                    name="Алина"
                    active={activeProfile === 'wife'}
                    onClick={() => setActiveProfile('wife')}
                    img="https://i.pravatar.cc/150?img=44"
                />
                <ProfileAvatar
                    name="Максим"
                    active={activeProfile === 'son'}
                    onClick={() => setActiveProfile('son')}
                    img="https://i.pravatar.cc/150?img=12"
                />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.5 }}>
                    <div style={{
                        width: '60px', height: '60px', borderRadius: '50%',
                        border: '2px dashed var(--ios-gray)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <span style={{ fontSize: '24px', color: 'var(--ios-gray)' }}>+</span>
                    </div>
                    <span className="text-caption-1">Добавить</span>
                </div>
            </div>

            {/* Settings Sections */}
            <h2 className="text-headline" style={{ marginBottom: '8px', color: 'var(--ios-gray)' }}>НАСТРОЙКИ</h2>
            <div style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '24px' }}>
                <SettingItem icon={<User size={20} />} label="Личные данные" />
                <SettingItem icon={<CreditCard size={20} />} label="Способы оплаты" />
                <SettingItem icon={<Shield size={20} />} label="Безопасность" last />
            </div>

            <h2 className="text-headline" style={{ marginBottom: '8px', color: 'var(--ios-gray)' }}>ПРИЛОЖЕНИЕ</h2>
            <div style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '24px' }}>
                <SettingItem icon={<Settings size={20} />} label="Уведомления" />
                <SettingItem icon={<LogOut size={20} color="var(--ios-red)" />} label="Выйти" last color="var(--ios-red)" />
            </div>

            <p className="text-caption-1" style={{ textAlign: 'center', marginTop: '24px' }}>MedMe Версия 1.0 (Demo)</p>
        </div>
    );
};

const ProfileAvatar = ({ name, img, active, onClick }) => (
    <motion.div
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
    >
        <div style={{
            width: '64px', height: '64px',
            borderRadius: '50%',
            padding: '2px',
            border: active ? '2px solid var(--ios-blue)' : '2px solid transparent'
        }}>
            <img
                src={img}
                alt={name}
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '2px solid white' }}
            />
        </div>
        <span className="text-caption-1" style={{ fontWeight: active ? '600' : '400', color: active ? 'var(--ios-blue)' : 'var(--text-secondary)' }}>{name}</span>
    </motion.div>
);

const SettingItem = ({ icon, label, last, color }) => (
    <div style={{
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        borderBottom: last ? 'none' : '1px solid var(--ios-gray-6)',
        cursor: 'pointer'
    }}>
        <div style={{ color: color || 'var(--ios-gray)' }}>{icon}</div>
        <span className="text-body" style={{ flex: 1, color: color || 'var(--text-primary)' }}>{label}</span>
        {!last && <ChevronRight size={16} color="var(--ios-gray-4)" />}
    </div>
);

export default Profile;
