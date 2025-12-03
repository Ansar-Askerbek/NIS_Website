import React from 'react';

import "../../styles/index.css";

export const Navbar: React.FC = () => {

  return (
    <nav>
        <div className="nav-container">
            <div className="nav-logo">
                NIS Almaty–Nauryzbay
            </div>
            <ul className="nav-menu">
                <li><a href="#shanyrak">Шанырақ</a></li>
                <li><a href="#about">О школе</a></li>
                <li><a href="#contacts">Контакты</a></li>
            </ul>
        </div>
    </nav>
  );
};