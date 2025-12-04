import React from 'react';
import "../../styles/index.css";

export const Footer: React.FC = () => {

  return (
    <footer id="contacts">
        <div className="footer-container">
            <div className="footer-grid">
                <div className="footer-section">
                    <h4>Школа</h4><a href="#">О NIS</a> <a href="#">Руководство</a> <a href="#">Документы</a> <a href="#">Новости</a>
                </div>
                <div className="footer-section">
                    <h4>Ученикам</h4><a href="#">Расписание</a> <a href="#">Электронный журнал</a> <a href="#">Библиотека</a> <a href="#">Мероприятия</a>
                </div>
                <div className="footer-section">
                    <h4>Родителям</h4><a href="#">Поступление</a> <a href="#">Информация</a> <a href="#">FAQ</a> <a href="#">Контакты</a>
                </div>
                <div className="footer-section">
                    <h4>Контакты</h4>
                    <p>г. Алматы<br />район Наурызбайский</p><a href="tel:+77273300000">+7 (727) 330-00-00</a> <a href="mailto:info@nis-almaty.kz">info@nis-almaty.kz</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 NIS Almaty–Nauryzbay. Smart School Platform</p>
                <div className="footer-authors">
                    <p>Авторы сайта:</p>
                    <p><strong>Қыдырбек Бекарыс</strong></p>
                    <p><strong>Әскербек Аңсар</strong></p>
                </div>
            </div>
        </div>
    </footer>
  );
};