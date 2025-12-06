import React from 'react';
import "../../styles/index.css";

export const Footer: React.FC = () => {

  return (
    <footer id="contacts">
        <div className="footer-container">
            <div className="footer-grid">
                <div className="footer-section">
                    <h4>Школа</h4><a href="https://www.nis.edu.kz/ru/page/qurylu-tarixy" target="_blank">О NIS</a> <a href="https://www.nis.edu.kz/ru/news" target="_blank">Новости</a>
                </div>
                <div className="footer-section">
                    <h4>Ученикам</h4><a href="https://hba.edupage.org/timetable/" target="_blank">Расписание</a> <a href="https://sms.hbalm.nis.edu.kz/Root/Account/Login" target="_blank">Электронный журнал</a>
                </div>
                <div className="footer-section">
                    <h4>Родителям</h4><a href="https://www.nis.edu.kz/ru/page/konkurs-zoninde-xabarlama" target="_blank">Поступление</a> <a href="https://www.nis.edu.kz/ru/page/qurylu-tarixy" target="_blank">Информация</a>
                </div>
                <div className="footer-section">
                    <h4>Контакты</h4>
                    <a href="https://2gis.kz/almaty/branches/9429948591090617/firm/70000001019875428/76.801579%2C43.209803?m=76.893175%2C43.218359%2F11.72" target="_blank">г. Алматы<br />район Наурызбайский</a><a href="tel:+77273300000">+7 (717) 223-57-00</a> <a href="mailto:info@nis-almaty.kz">info@nis.edu.kz</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 NIS Almaty–Nauryzbay. Smart School Platform</p>
                <div className="footer-authors">
                    <p>Авторы сайта:</p>
                    <p><strong>Кыдырбек Бекарыс</strong></p>
                    <p><strong>Аскербек Ансар</strong></p>
                </div>
                <div className="footer-authors">
                    <p>Наставник:</p>
                    <p><strong>Турат Нурдаулет</strong></p>
                </div>
            </div>
        </div>
    </footer>
  );
};