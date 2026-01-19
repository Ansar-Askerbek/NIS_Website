import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';

// Тип записи
interface Entry {
  id: string;
  date: string;
  category: string;
  subcategory: string;
  points: number;
  status: 'pending' | 'approved' | 'rejected';
}

// Данные категорий
const SUBCATEGORIES: Record<string, { value: string; label: string; points: number }[]> = {
  activity: [{ value: 'event', label: 'Участие в школьном мероприятии', points: 1 }],
  achievement: [
    { value: 'first', label: 'Победа на олимпиаде — 1 место', points: 5 },
    { value: 'second', label: 'Победа на олимпиаде — 2 место', points: 4 },
    { value: 'third', label: 'Победа на олимпиаде — 3 место', points: 3 }
  ]
};

export const LeaderDashboard: React.FC = () => {
  const { user, isLoading } = useUser();
  
  // Состояние истории записей
  const [entries, setEntries] = useState<Entry[]>([]);
  
  // Состояние формы
  const [formData, setFormData] = useState({
    category: '',
    subcategory: '',
    points: 0,
    description: '',
    date: new Date().toISOString().split('T')[0],
  });

  // Проверка загрузки
  if (isLoading) return <div className="leader-container text-center pt-32 text-gray-500">Загрузка...</div>;
  if (!user) return <div className="leader-container text-center pt-32 text-gray-500">Нет доступа</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Создаем новую запись
    const newEntry: Entry = {
        id: Date.now().toString(),
        date: formData.date,
        category: formData.category,
        subcategory: formData.subcategory,
        points: formData.points,
        status: 'pending'
    };

    // Добавляем в начало списка
    setEntries([newEntry, ...entries]);
    
    // Очищаем форму
    setFormData({
        category: '',
        subcategory: '',
        points: 0,
        description: '',
        date: new Date().toISOString().split('T')[0],
    });
    
    alert("Запись добавлена!");
  };

  return (
    <div className="leader-container">
      {/* 1. Шапка профиля */}
      <header className="flex justify-between items-center border-b border-gray-200 pb-6 mb-8">
          <div>
              <h1 className="text-2xl font-bold text-[#1a1a1a]">Leader Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
               <div className="hidden sm:block text-right">
                  <div className="font-bold text-[#1a1a1a]">{user.fullName}</div>
                  <div className="text-xs text-gray-500">{user.shanyrak} · {user.className}</div>
               </div>
          </div>
      </header>

      {/* 2. Форма добавления (Сразу видна) */}
      <div className="dashboard-card">
        <h2 className="dashboard-header-row">
            <span className="text-2xl">🏆</span> Добавить баллы
        </h2>

        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                {/* Категория */}
                <div>
                    <label className="dashboard-label">Категория</label>
                    <select 
                        className="dashboard-input"
                        value={formData.category}
                        onChange={e => setFormData({...formData, category: e.target.value, subcategory: '', points: 0})}
                        required
                    >
                        <option value="">Выберите категорию</option>
                        {Object.keys(SUBCATEGORIES).map(k => (
                            <option key={k} value={k}>{k.toUpperCase()}</option>
                        ))}
                    </select>
                </div>

                {/* Подкатегория */}
                <div>
                    <label className="dashboard-label">Подкатегория</label>
                    <select 
                        className="dashboard-input"
                        value={formData.subcategory}
                        onChange={e => {
                            const sub = SUBCATEGORIES[formData.category]?.find(s => s.value === e.target.value);
                            setFormData({
                                ...formData, 
                                subcategory: e.target.value,
                                points: sub ? sub.points : 0
                            });
                        }}
                        disabled={!formData.category}
                        required
                    >
                        <option value="">Выберите подкатегорию</option>
                        {formData.category && SUBCATEGORIES[formData.category]?.map(s => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                    </select>
                </div>

                {/* Дата */}
                <div>
                    <label className="dashboard-label">Дата</label>
                    <input 
                        type="date" 
                        className="dashboard-input"
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                        required 
                    />
                </div>

                {/* Баллы */}
                <div>
                    <label className="dashboard-label">Баллы</label>
                    <input 
                        type="number" 
                        className="dashboard-input"
                        value={formData.points}
                        readOnly 
                    />
                </div>

                {/* Описание */}
                <div className="col-span-full">
                    <label className="dashboard-label">Описание</label>
                    <textarea 
                        className="dashboard-input h-24 resize-none"
                        value={formData.description}
                        onChange={e => setFormData({...formData, description: e.target.value})}
                        placeholder="Опишите достижение..."
                        required
                    ></textarea>
                </div>
            </div>

            <button type="submit" className="btn-submit">
                Сохранить запись
            </button>
        </form>
      </div>

      {/* 3. Таблица истории (Сразу видна) */}
      <div className="history-card">
          <h2 className="history-title">История записей</h2>
          
          {entries.length === 0 ? (
              <div className="empty-history"> {/* <-- Было: className="text-center py-12 text-gray-400" */}
                  <div style={{ fontSize: '20px', marginBottom: '10px', opacity: 0.3 }}>📋</div>
                  <p>История пуста</p>
              </div>
          ) : (
              <div className="overflow-x-auto">
                  <table className="history-table">
                      <thead>
                          <tr>
                              <th>Дата</th>
                              <th>Категория</th>
                              <th>Баллы</th>
                              <th>Статус</th>
                          </tr>
                      </thead>
                      <tbody>
                          {entries.map(entry => (
                              <tr key={entry.id}>
                                  <td>{entry.date}</td>
                                  <td>{entry.category.toUpperCase()}</td>
                                  <td className="text-[#0A5F32] font-bold">
                                      +{entry.points}
                                  </td>
                                  <td>
                                      <span className={`status-badge status-${entry.status}`}>
                                          {entry.status}
                                      </span>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          )}
      </div>
    </div>
  );
};