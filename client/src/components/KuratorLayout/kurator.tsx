import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import './kurator.css';

// Типы данных
interface Entry {
  id: string;
  date: string;
  time?: string;
  studentName: string;
  leaderName: string;
  shanyrak: string;
  category: string;
  subcategory: string;
  points: number;
  description: string;
  fileName?: string;
  status: 'pending' | 'approved' | 'rejected';
  curatorNote?: string;
  reviewedAt?: string;
}

// Тестовые данные
const MOCK_ENTRIES: Entry[] = [
  {
    id: '1',
    date: '2025-12-05',
    time: '14:30',
    studentName: 'Алихан Б.',
    leaderName: 'Бекарыс К.',
    shanyrak: 'Samruk',
    category: 'activity',
    subcategory: 'Волонтерство',
    points: 5,
    description: 'Помощь в организации школьного концерта',
    status: 'pending'
  },
  {
    id: '2',
    date: '2025-12-04',
    time: '09:15',
    studentName: 'Диас К.',
    leaderName: 'Бекарыс К.',
    shanyrak: 'Samruk',
    category: 'violation',
    subcategory: 'Опоздание',
    points: -2,
    description: 'Опоздание на первый урок на 15 минут',
    status: 'pending'
  },
  {
    id: '3',
    date: '2025-12-01',
    time: '10:00',
    studentName: 'Аружан М.',
    leaderName: 'Айгерим Т.',
    shanyrak: 'Samruk',
    category: 'achievement',
    subcategory: 'Олимпиада',
    points: 10,
    description: '1 место в районной олимпиаде по физике',
    status: 'approved',
    reviewedAt: '2025-12-02T10:00:00'
  }
];

export const CuratorDashboard: React.FC = () => {
  const { user } = useUser();
  
  const [entries, setEntries] = useState<Entry[]>(MOCK_ENTRIES);
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null);
  const [curatorNote, setCuratorNote] = useState('');

  const pendingEntries = entries.filter(e => e.status === 'pending');
  
  const stats = {
    pending: pendingEntries.length,
    approvedToday: entries.filter(e => e.status === 'approved' && e.reviewedAt?.startsWith(new Date().toISOString().split('T')[0])).length,
    total: entries.length
  };

  const handleReview = (id: string, status: 'approved' | 'rejected', note: string = '') => {
    setEntries(prev => prev.map(entry => {
      if (entry.id === id) {
        return { ...entry, status, curatorNote: note, reviewedAt: new Date().toISOString() };
      }
      return entry;
    }));
    if (selectedEntry) {
      setSelectedEntry(null);
      setCuratorNote('');
    }
  };

  const getCategoryLabel = (cat: string) => {
      const map: any = { activity: 'Активность', violation: 'Нарушение', achievement: 'Достижение' };
      return map[cat] || cat;
  };

  return (
    <div id="curator-scope">
            <div className="curator-main">
                
                {/* Header */}
                <div className="curator-header rounded-2xl">
                  <div>
                      <h1>Панель Куратора</h1>
                      <p>NIS Almaty–Nauryzbay</p>
                  </div>
                  <div className="text-right hidden sm:block">
                      <h2 className="text-lg font-bold">{user?.fullName || 'Куратор'}</h2>
                      <p className="text-sm text-gray-500">Управление: {user?.shanyrak || 'Все'}</p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                  <div className="stat-card">
                      <div className="stat-label">Ожидают проверки</div>
                      <div className="stat-value text-orange-600">{stats.pending}</div>
                  </div>
                  <div className="stat-card">
                      <div className="stat-label">Одобрено сегодня</div>
                      <div className="stat-value text-green-600">{stats.approvedToday}</div>
                  </div>
                  <div className="stat-card">
                      <div className="stat-label">Всего записей</div>
                      <div className="stat-value">{stats.total}</div>
                  </div>
                </div>

                {/* Pending Entries Table */}
                <div className="curator-section">
                  <div className="section-header">
                      <h2 className="section-title">Записи на проверку</h2>
                      <span className="badge">{stats.pending}</span>
                  </div>

                  {pendingEntries.length === 0 ? (
                      <div className="empty-state"> {/* <-- ИСПРАВЛЕНО: верный класс */}
                          <div className="empty-state-icon">✓</div>
                          <p className="empty-state-title">Все проверено</p>
                          <p className="empty-state-text">Нет записей, ожидающих проверки</p>
                      </div>
                  ) : (
                      <div className="table-wrapper">
                      <table className="curator-table">
                          <thead>
                          <tr>
                              <th>Дата</th>
                              <th>Ученик</th>
                              <th>Категория</th>
                              <th>Баллы</th>
                              <th>Действия</th>
                          </tr>
                          </thead>
                          <tbody>
                          {pendingEntries.map(entry => (
                              <tr key={entry.id} onClick={() => setSelectedEntry(entry)}>
                              <td>{entry.date}</td>
                              <td>
                                  <div className="student-cell">{entry.studentName}</div>
                                  <div className="leader-cell">от: {entry.leaderName}</div>
                              </td>
                              <td>{getCategoryLabel(entry.category)}</td>
                              <td className={entry.points > 0 ? 'points-positive' : 'points-negative'}>
                                  {entry.points > 0 ? '+' : ''}{entry.points}
                              </td>
                              <td onClick={(e) => e.stopPropagation()}>
                                  <div className="action-buttons">
                                  <button className="btn-sm btn-approve" onClick={() => handleReview(entry.id, 'approved')}>✓</button>
                                  <button className="btn-sm btn-reject" onClick={() => handleReview(entry.id, 'rejected')}>✕</button>
                                  </div>
                              </td>
                              </tr>
                          ))}
                          </tbody>
                      </table>
                      </div>
                  )}
                </div>

                {/* Shanyrak Overview Grid */}
                <div className="curator-section">
                  <h2 className="section-title mb-6">Мой Шанырак</h2>
                  
                  <div className="shanyrak-grid">
                      {/* Карточка 1: Общая информация */}
                      <div className="shanyrak-card">
                          <div className="shanyrak-header">
                              <h3 className="shanyrak-name">{user?.shanyrak || 'Samruk'}</h3>
                              <div className="shanyrak-points">+124</div>
                          </div>
                          <div className="shanyrak-content">
                              <div className="info-row">
                                <span className="info-label">Лидер</span>
                                <span className="info-val">Бекарыс К.</span>
                              </div>
                              <div className="info-row">
                                <span className="info-label">Классы</span>
                                <span className="info-val">10В, 8К, 8D</span>
                              </div>
                              <div className="info-row">
                                <span className="info-label">За неделю</span>
                                <span className="info-val text-green-600">+18</span>
                              </div>
                          </div>
                      </div>
                      
                      {/* Карточка 2: Нарушения */}
                      <div className="shanyrak-card">
                          <div className="shanyrak-header">
                              <h3 className="shanyrak-name">Нарушения</h3>
                              <div className="shanyrak-points text-red-600">-12</div>
                          </div>
                          <div className="shanyrak-content">
                              <div className="info-row">
                                  <span className="info-val">Алихан Б.</span>
                                  <span className="text-red-600 font-bold">-5 (Опоздание)</span>
                              </div>
                              <div className="info-row">
                                  <span className="info-val">Диас К.</span>
                                  <span className="text-red-600 font-bold">-2 (Форма)</span>
                              </div>
                              <div className="info-row">
                                  <span className="info-val">Аружан М.</span>
                                  <span className="text-red-600 font-bold">-5 (ПВР)</span>
                              </div>
                          </div>
                      </div>

                      {/* Карточка 3: Добавление баллов (ВОССТАНОВЛЕНО) */}
                      <div className="shanyrak-card">
                          <div className="shanyrak-header">
                              <h3 className="shanyrak-name">Добавление баллов</h3>
                              <div className="shanyrak-points">+30</div>
                          </div>
                          <div className="shanyrak-content">
                              <div className="info-row">
                                  <span className="info-val">Данияр С.</span>
                                  <span className="text-green-600 font-bold">+10 (Олимпиада)</span>
                              </div>
                              <div className="info-row">
                                  <span className="info-val">Айгерим Т.</span>
                                  <span className="text-green-600 font-bold">+5 (Волонтерство)</span>
                              </div>
                              <div className="info-row">
                                  <span className="info-val">Санжар М.</span>
                                  <span className="text-green-600 font-bold">+15 (Спорт)</span>
                              </div>
                          </div>
                      </div>

                  </div>
                </div>

            </div>

            {/* MODAL */}
            {selectedEntry && (
                <div className="modal-overlay" onClick={() => setSelectedEntry(null)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                    <h3 className="text-xl font-bold">Детали записи</h3>
                    </div>
                    <div className="modal-body">
                        <div className="detail-row">
                        <div className="detail-label">Ученик</div>
                        <div className="detail-value">{selectedEntry.studentName}</div>
                        </div>
                        <div className="detail-row">
                        <div className="detail-label">Категория</div>
                        <div className="detail-value">{getCategoryLabel(selectedEntry.category)} — {selectedEntry.subcategory}</div>
                        </div>
                        <div className="detail-row">
                        <div className="detail-label">Описание</div>
                        <div className="detail-value p-3 bg-gray-50 rounded-lg">{selectedEntry.description}</div>
                        </div>
                        <div className="detail-row">
                        <div className="detail-label">Баллы</div>
                        <div className={`detail-value font-bold text-lg ${selectedEntry.points > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {selectedEntry.points}
                        </div>
                        </div>
                        
                        {selectedEntry.status === 'pending' && (
                            <div className="detail-row">
                            <div className="detail-label">Примечание</div>
                            <textarea 
                                className="w-full border p-3 rounded-lg mt-1" 
                                placeholder="Комментарий куратора..."
                                value={curatorNote}
                                onChange={e => setCuratorNote(e.target.value)}
                            />
                            </div>
                        )}
                    </div>
                    <div className="modal-footer">
                    {selectedEntry.status === 'pending' ? (
                        <>
                            <button className="btn-sm btn-reject px-6 py-3" onClick={() => handleReview(selectedEntry.id, 'rejected', curatorNote)}>Отклонить</button>
                            <button className="btn-sm btn-approve px-6 py-3" onClick={() => handleReview(selectedEntry.id, 'approved', curatorNote)}>Одобрить</button>
                        </>
                    ) : (
                        <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300" onClick={() => setSelectedEntry(null)}>Закрыть</button>
                    )}
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};