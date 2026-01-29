import React from 'react';
import { Search, MapPin, Star, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const Booking = () => {
    return (
        <div className="p-4" style={{ paddingTop: '20px' }}>
            <h1 className="text-large-title" style={{ marginBottom: '16px' }}>Запись</h1>

            {/* Search Bar */}
            <div style={{
                background: 'var(--ios-gray-6)',
                borderRadius: '12px',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '24px'
            }}>
                <Search size={20} color="var(--ios-gray)" />
                <input
                    type="text"
                    placeholder="Врач, клиника или специальность"
                    style={{
                        border: 'none',
                        background: 'transparent',
                        fontSize: '17px',
                        width: '100%',
                        outline: 'none'
                    }}
                />
                <Filter size={20} color="var(--ios-blue)" />
            </div>

            {/* Horizontal Categories */}
            <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '24px' }} className="no-scrollbar">
                <CategoryCard label="Терапевт" color="var(--ios-blue)" />
                <CategoryCard label="Кардиолог" color="var(--ios-red)" />
                <CategoryCard label="Стоматолог" color="var(--ios-teal)" />
                <CategoryCard label="Уролог" color="var(--ios-indigo)" />
            </div>

            {/* Top Doctors */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '16px' }}>
                <h2 className="text-title-2">Рекомендуемые</h2>
                <span style={{ color: 'var(--ios-blue)', fontSize: '15px' }}>Все</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <DoctorCard
                    name="Д-р Иванова Мария"
                    spec="Терапевт"
                    rating="4.9"
                    reviews="120"
                    price="45 BYN"
                    image="https://i.pravatar.cc/150?img=5"
                />
                <DoctorCard
                    name="Д-р Петров Сергей"
                    spec="Кардиолог"
                    rating="4.8"
                    reviews="85"
                    price="60 BYN"
                    image="https://i.pravatar.cc/150?img=11"
                />
                <DoctorCard
                    name="Д-р Смирнова Анна"
                    spec="Стоматолог"
                    rating="5.0"
                    reviews="210"
                    price="80 BYN"
                    image="https://i.pravatar.cc/150?img=9"
                />
            </div>

        </div>
    );
};

const CategoryCard = ({ label, color }) => (
    <div style={{
        minWidth: '100px',
        height: '60px',
        background: color,
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px',
        color: 'white',
        fontWeight: '600',
        fontSize: '14px',
        boxShadow: 'var(--shadow-sm)'
    }}>
        {label}
    </div>
);

const DoctorCard = ({ name, spec, rating, reviews, price, image }) => (
    <motion.div
        whileTap={{ scale: 0.98 }}
        style={{
            background: 'var(--bg-card)',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            gap: '16px'
        }}
    >
        <img src={image} alt={name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
        <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4 className="text-headline">{name}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={14} fill="var(--ios-yellow)" color="var(--ios-yellow)" />
                    <span style={{ fontSize: '14px', fontWeight: '600' }}>{rating}</span>
                </div>
            </div>
            <p className="text-caption-1" style={{ marginBottom: '8px' }}>{spec} • {reviews} отзывов</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={14} color="var(--ios-gray)" />
                    <span className="text-caption-1">Лодэ, Минск</span>
                </div>
                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{price}</span>
            </div>
        </div>
    </motion.div>
);

export default Booking;
