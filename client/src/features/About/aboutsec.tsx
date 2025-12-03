import React from 'react';
import { useConfig } from '../../context/ConfigContext';

export const AboutSection: React.FC = () => {
  return (
    <section className="section about-section" id="about">
        <div className="section-container">
            <div className="about-hero-visual">
                🎓
            </div>
            <div className="section-header">
                <h2 id="about-title">О школе</h2>
                <p>Инновационная образовательная экосистема будущего</p>
            </div>
            <div className="about-grid">
                <div className="about-card">
                    <div className="about-icon">
                        🎯
                    </div>
                    <h3>Миссия</h3>
                    <p>Формирование интеллектуальной элиты через создание передовой образовательной среды с применением современных технологий</p>
                </div>
                <div className="about-card">
                    <div className="about-icon">
                        💎
                    </div>
                    <h3>Ценности</h3>
                    <p>Академическое превосходство, инновационный подход, критическое мышление и глобальная ответственность</p>
                </div>
                <div className="about-card">
                    <div className="about-icon">
                        🚀
                    </div>
                    <h3>Учебная программа</h3>
                    <p>Интегрированная программа STEM, гуманитарные науки, многоязычное образование и проектная деятельность</p>
                </div>
            </div>
        </div>
    </section>
  );
};