import React from 'react';
import { shanyraksData } from '../../data/ShanyrakData'; // Импорт ваших данных
import './shanyraks.css'; // Подключение стилей

export const ShanyrakRatingsPage: React.FC = () => {
  
  // 1. ЛОГИКА: Сортируем данные (от большего к меньшему)
  // Мы создаем копию массива [...shanyraksData], чтобы не мутировать оригинал
  const sortedLeaderboard = [...shanyraksData].sort((a, b) => b.score - a.score);

  return (
    <div className="leaderboard-container">
       <div className="leaderboard-header">
          <h1>Рейтинг Шаныраков</h1>
          <p>Актуальная таблица лидеров по баллам</p>
       </div>

       <div className="leaderboard-list">
          {sortedLeaderboard.map((item, index) => {
             // Определяем место (индекс + 1)
             const rank = index + 1;
             
             // Добавляем специальный класс для топ-3
             let specialClass = '';
             if (rank === 1) specialClass = 'top-1';
             if (rank === 2) specialClass = 'top-2';
             if (rank === 3) specialClass = 'top-3';

             return (
                <div key={item.id} className={`rank-card ${specialClass}`}>
                   <div className="rank-left">
                      <div className="rank-number">{rank}</div>
                      
                      <div className="rank-info">
                         <div className="rank-name">{item.name}</div>
                         {/* Можно добавить имя лидера мелким шрифтом */}
                         <div style={{fontSize: '12px', color: '#888'}}>
                            Лидер: {item.leader}
                         </div>
                      </div>
                   </div>

                   <div className="rank-score">
                      {item.score}
                   </div>
                </div>
             );
          })}
       </div>
    </div>
  );
};