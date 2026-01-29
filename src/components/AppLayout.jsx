import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Home, FileText, Calendar, MessageSquare, User } from 'lucide-react';

const AppLayout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'var(--bg-secondary)' }}>
            {/* Main Content Area */}
            <main style={{ flex: 1, overflowY: 'auto', paddingBottom: '90px' }}>
                <Outlet />
            </main>

            {/* iOS Tab Bar */}
            <nav style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'var(--blur-md)',
                borderTop: '0.5px solid rgba(0,0,0,0.1)',
                display: 'flex',
                justifyContent: 'space-around',
                padding: '10px 0 24px 0', // Extra padding for Home Indicator
                zIndex: 1000
            }}>
                <TabItem to="/" icon={<Home size={24} />} label="Главная" />
                <TabItem to="/records" icon={<FileText size={24} />} label="Медкарта" />
                <TabItem to="/booking" icon={<Calendar size={24} />} label="Запись" />
                <TabItem to="/ai" icon={<MessageSquare size={24} />} label="AI" />
                <TabItem to="/profile" icon={<User size={24} />} label="Профиль" />
            </nav>
        </div>
    );
};

const TabItem = ({ to, icon, label }) => {
    return (
        <NavLink
            to={to}
            style={({ isActive }) => ({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                color: isActive ? 'var(--ios-blue)' : 'var(--ios-gray)',
                transition: 'color 0.2s ease'
            })}
        >
            <div style={{ marginBottom: '4px' }}>{icon}</div>
            <span style={{ fontSize: '10px', fontWeight: 500 }}>{label}</span>
        </NavLink>
    );
};

export default AppLayout;
