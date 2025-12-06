import React from 'react';
import { Link } from 'react-router-dom';
import { shanyraksData } from '../../data/ShanyrakData';

import "../../styles/index.css";

export const ShanyrakSection: React.FC = () => {
  const topShanyraks = [...shanyraksData]
    .sort((a, b) => b.score - a.score) // Сортировка от большего к меньшему
    .slice(0, 4); // Берем только первые 4 (индексы 0, 1, 2, 3)

  return (
    <section className="section shanyrak-section" id="shanyrak">
        <div className="section-container">
            <div className="section-header">
                <h2 id="shanyrak-title">Система Шаныраков — цифровая рейтинг-платформа</h2>
                <p id="shanyrak-description">Лидеры вводят достижения. Кураторы подтверждают. Система автоматически считает баллы</p>
            </div>
            <div className="shanyrak-showcase">
                <div className="shanyrak-grid">
                    <div className="dashboard-mockup">
                        <div className="dashboard-header">
                            <div className="dashboard-title">
                                Рейтинг шаныраков
                            </div>
                            <div className="dashboard-badge">
                            Обновлено
                            </div>
                        </div>
                        <div className="ranking-list">
                            <div className="ranking-list">
                                {topShanyraks.map((item, index) => (
                                <div key={item.id} className="ranking-item">
                                    <div className="ranking-info">
                                        {/* Номер места (1, 2, 3, 4) */}
                                        <div className="ranking-number">{index + 1}</div>
                                        <span className="ranking-name">{item.name}</span>
                                    </div>
                                    <div className="ranking-points">
                                        {item.score}
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="shanyrak-info">
                        <h3>Умная система учёта</h3>
                        <p>Прозрачная цифровая платформа для отслеживания достижений и формирования рейтинга в режиме реального времени</p>
                        <div className="feature-list">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    ✨
                                </div>
                                <div className="feature-text">
                                    Автоматический подсчёт баллов
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">
                                    📊
                                </div>
                            <div className="feature-text">
                                Аналитика и статистика
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                🔒
                            </div>
                            <div className="feature-text">
                                Система верификации
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                ⚡
                            </div>
                            <div className="feature-text">
                                Обновление в реальном времени
                            </div>
                        </div>
                    </div>
                    <div className="shanyrak-button"><Link to="/login" className="btn btn-primary">Вход</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  );
};