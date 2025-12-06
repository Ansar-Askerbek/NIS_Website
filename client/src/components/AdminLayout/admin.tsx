import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import './admin.css';
import { shanyraksData } from '../../data/ShanyrakData'

type TabType = 'overview' | 'points' | 'shanyraks' | 'users' | 'permissions' | 'logs' | 'settings';

export const AdminDashboard: React.FC = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  // --- TABS CONTENT ---
  // (Оставляем функции рендера как есть, я их свернул для краткости, они не меняются)
  const renderOverview = () => (
    <>
      <div className="stats-grid">
        <div className="stat-card">
           <div className="stat-label">Всего Лидеров</div>
           <div className="stat-value">21</div>
        </div>
        <div className="stat-card">
           <div className="stat-label">Активность Сегодня</div>
           <div className="stat-value text-green-600">12</div>
        </div>
        <div className="stat-card">
           <div className="stat-label">Нарушения Сегодня</div>
           <div className="stat-value text-red-600">2</div>
        </div>
        <div className="stat-card">
           <div className="stat-label">Средний балл</div>
           <div className="stat-value">+102</div>
           <div className="stat-trend">↑ 12% vs last week</div>
        </div>
      </div>
      <div className="admin-section">
         <div className="section-header">
            <h2 className="section-title">Недавняя активность</h2>
         </div>
         <div className="table-container">
            <table>
               <thead>
                  <tr>
                     <th>Время</th>
                     <th>Ученик</th>
                     <th>Тип</th>
                     <th>Баллы</th>
                     <th>Статус</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>10:30</td>
                     <td className="name-cell">Алихан Б.</td>
                     <td>Волонтерство</td>
                     <td className="points-positive">+5</td>
                     <td><span className="status-badge status-approved">Approved</span></td>
                  </tr>
                  <tr>
                     <td>09:15</td>
                     <td className="name-cell">Диас К.</td>
                     <td>Опоздание</td>
                     <td className="points-negative">-2</td>
                     <td><span className="status-badge status-pending">Pending</span></td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
    </>
  );

  const renderPointsConfig = () => (
    <div className="admin-section">
       <div className="section-header">
          <h2 className="section-title">Настройка баллов</h2>
          <button className="btn btn-primary">Добавить правило</button>
       </div>
       <div className="table-container">
          <table>
             <thead>
                <tr>
                   <th>Категория</th>
                   <th>Подкатегория</th>
                   <th>Баллы</th>
                   <th>Действия</th>
                </tr>
             </thead>
             <tbody>
                <tr>
                   <td>Activity</td>
                   <td>Участие в мероприятии</td>
                   <td className="points-positive font-bold">+5</td>
                   <td><button className="btn btn-edit">Edit</button></td>
                </tr>
             </tbody>
          </table>
       </div>
    </div>
  );

  const renderShanyraks = () => {
     // 1. СОРТИРОВКА: Создаем копию массива и сортируем по убыванию баллов (b.score - a.score)
     // Тот, у кого больше баллов, встанет первым.
     const sortedShanyraks = [...shanyraksData].sort((a, b) => b.score - a.score);

     return (
        <div className="admin-section">
           <div className="section-header">
              <h2 className="section-title">Рейтинг Шаныраков</h2>
              <div className="section-actions">
                 <button className="btn btn-secondary">Неделя</button>
                 <button className="btn btn-primary">Год</button>
              </div>
           </div>
           
           <div className="shanyrak-grid">
              {/* 2. ИСПОЛЬЗУЕМ ОТСОРТИРОВАННЫЙ МАССИВ */}
              {sortedShanyraks.map((item, idx) => (
                 <div key={item.id} className="shanyrak-item">
                    <div className="shanyrak-header">
                       <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                           
                           {/* 
                               3. МЕСТО: idx + 1 
                               idx - это индекс массива (0, 1, 2...). 
                               Так как мы отсортировали, 0-й элемент - это 1-е место.
                           */}
                           <span className={`rank-badge rank-${idx + 1}`}>
                              {idx + 1}
                           </span>

                           <h3 className="shanyrak-name">{item.name}</h3>
                       </div>
                       <div className="shanyrak-score">
                           {item.score} 
                           <span className="score-label">баллов</span>
                       </div>
                    </div>
                    
                    {/* Остальной код карточки (Лидеры, детали...) */}
                    <div className="shanyrak-info-grid">
                        <div className="info-block">
                           <span className="info-label">Лидер</span>
                           <span className="info-value">{item.leader}</span>
                        </div>
                        <div className="info-block">
                           <span className="info-label">Куратор</span>
                           <span className="info-value">{item.curator}</span>
                        </div>
                        <div className="info-block">
                           <span className="info-label">Учеников</span>
                           <span className="info-value">{item.students}</span>
                        </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
     );
  };

  const renderUsers = () => (
     <div className="admin-section">
        <div className="section-header">
           <h2 className="section-title">Управление пользователями</h2>
           <button className="btn btn-primary">Добавить пользователя</button>
        </div>
        <div className="table-container">
           <table>
              <thead>
                 <tr>
                    <th>Имя</th>
                    <th>Роль</th>
                    <th>Шанырак</th>
                    <th>Email</th>
                    <th>Действия</th>
                 </tr>
              </thead>
              <tbody>
                 <tr>
                    <td className="name-cell">Амангали Н.</td>
                    <td>Leader</td>
                    <td>Samruk</td>
                    <td>leader1@nis.edu.kz</td>
                    <td><button className="btn btn-edit">Edit</button></td>
                 </tr>
              </tbody>
           </table>
        </div>
     </div>
  );

  const renderPermissions = () => (
     <div className="admin-section">
        <div className="section-header"><h2 className="section-title">Права доступа (Curator)</h2></div>
        <div className="permissions-grid">
           <div className="permission-row">
              <span>Просмотр логов</span>
              <label className="toggle-switch"><input type="checkbox" defaultChecked /><span className="toggle-slider"></span></label>
           </div>
        </div>
     </div>
  );

  return (
    <div id="admin-scope">
       
       <div className="admin-page-title-area">
          <h1>Панель Администратора</h1>
          <p>Управление системой HBALM Shanyrak</p>
       </div>

       {/* NAVIGATION TABS */}
       <nav className="nav-tabs">
          <div className="nav-tabs-content">
             <button className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Обзор</button>
             <button className={`nav-tab ${activeTab === 'points' ? 'active' : ''}`} onClick={() => setActiveTab('points')}>Баллы</button>
             <button className={`nav-tab ${activeTab === 'shanyraks' ? 'active' : ''}`} onClick={() => setActiveTab('shanyraks')}>Шаныраки</button>
             <button className={`nav-tab ${activeTab === 'users' ? 'active' : ''}`} onClick={() => setActiveTab('users')}>Пользователи</button>
             <button className={`nav-tab ${activeTab === 'permissions' ? 'active' : ''}`} onClick={() => setActiveTab('permissions')}>Права</button>
          </div>
       </nav>

       {/* MAIN CONTENT */}
       <main className="admin-main">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'points' && renderPointsConfig()}
          {activeTab === 'shanyraks' && renderShanyraks()}
          {activeTab === 'users' && renderUsers()}
          {activeTab === 'permissions' && renderPermissions()}
          {activeTab === 'settings' && <div className="empty-state">Настройки системы (в разработке)</div>}
       </main>
    </div>
  );
};