import React from 'react';

import "../../styles/index.css";

export const ShanyrakSection: React.FC = () => {
  return (
    <section className="section shanyrak-section" id="shanyrak">
        <div className="section-container">
            <div className="section-header">
                <h2 id="shanyrak-title">Шанырақ жүйесі — цифровая рейтинг-платформа</h2>
                <p id="shanyrak-description">Лидеры вводят достижения. Кураторы подтверждают. Система автоматически считает баллы</p>
            </div>
            <div className="shanyrak-showcase">
                <div className="shanyrak-grid">
                    <div className="dashboard-mockup">
                        <div className="dashboard-header">
                            <div className="dashboard-title">
                                Рейтинг шанырақов
                            </div>
                            <div className="dashboard-badge">
                            Обновлено
                            </div>
                        </div>
                        <div className="ranking-list">
                            <div className="ranking-item">
                                <div className="ranking-info">
                                    <div className="ranking-number">
                                        1
                                    </div>
                                    <div className="ranking-name">
                                        Алатау Шанырағы
                                    </div>
                                </div>
                                <div className="ranking-points">
                                    2,450
                                </div>
                            </div>
                            <div className="ranking-item">
                                <div className="ranking-info">
                                    <div className="ranking-number">
                                        2
                                    </div>
                                    <div className="ranking-name">
                                        Жұлдыз Шанырақ
                                    </div>
                                </div>
                                <div className="ranking-points">
                                    2,320
                                </div>
                            </div>
                            <div className="ranking-item">
                                <div className="ranking-info">
                                    <div className="ranking-number">
                                        3
                                    </div>
                                    <div className="ranking-name">
                                        Алатау Шанырағы
                                    </div>
                                </div>
                                <div className="ranking-points">
                                    621
                                </div>
                            </div>
                            <div className="ranking-item">
                                <div className="ranking-info">
                                    <div className="ranking-number">
                                        4
                                    </div>
                                    <div className="ranking-name">
                                        Тұлпар Шанырақ
                                    </div>
                                </div>
                                <div className="ranking-points">
                                    555
                                </div>
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
                    <div className="shanyrak-button"><a href="#" className="btn btn-primary">Вход</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  );
};