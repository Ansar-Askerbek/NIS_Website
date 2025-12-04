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
                    <p>Способствовать развитию высоконравственной интеллектуальной личности и воспитанию ответственного, деятельного гражданина, готового изменить мир к лучшему</p>
                </div>
                <div className="about-card">
                    <div className="about-icon">
                        💎
                    </div>
                    <h3>Ценности</h3>
                    <ol>
                      <li>Уважение по отношению к себе и окружающим</li>
                      <li>Сотрудничество</li>
                      <li>Ответственная гражданская позиция</li>
                      <li>Академическая честность</li>
                      <li>Обучение на протяжении всей жизни</li>
                      <li>Прозрачность</li>
                    </ol>
                </div>
                <div className="about-card">
                    <div className="about-icon">
                        🚀
                    </div>
                    <h3>Учебная программа</h3>
                    <p>Образовательная программа АОО «Назарбаев Интеллектуальные школы» NIS-Programme, разработанная совместно со стратегическим партнером АОО «Назарбаев Интеллектуальные школы» (далее – АОО) Советом оценивания Кембриджа по вопросам международного образования (СОКВМО), ориентирована на реализацию образовательного процесса по естественно-математическому направлению.</p>
                </div>
            </div>
        </div>
    </section>
  );
};
