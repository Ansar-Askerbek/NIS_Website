import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const { login, isLoading } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // 1. Ждем завершения входа и получения данных
    const loggedUser = await login(email);

    // 2. Если вход успешен — проверяем роль и перенаправляем
    if (loggedUser) {
      if (loggedUser.role === 'user') {
        navigate('/'); // Ученики -> на главную
      } else if (loggedUser.role === 'curator') {
        navigate('/curator'); // <--- КУРАТОРЫ -> СЮДА
      } else if (loggedUser.role === 'leader') {
        navigate('/leader'); // Лидеры/Админы -> в панель лидера
      } else if (loggedUser.role === 'admin') {
        navigate('/admin'); // Администраторы -> в панель администратора
      } else {
        navigate('/'); // На всякий случай
      }
    } else {
      alert("Пользователь не найден (попробуйте curator@hbalm.nis.edu.kz)");
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        <div className="auth-icon-wrapper">
          <span role="img" aria-label="lock">🔐</span>
        </div>
        
        <h1 className="auth-title">Вход в систему</h1>
        <p className="auth-subtitle">
          NIS Almaty–Nauryzbay
        </p>

        <form onSubmit={handleSubmit}>
          <div className="auth-input-group">
            <input
              type="text"
              placeholder="Email (например: curator@hbalm.nis.edu.kz)"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="btn-auth-submit"
          >
            {isLoading ? 'Вход...' : 'Войти'}
          </button>
        </form>
        
        <div className="mt-4 text-xs text-gray-400 text-left">
           <p>Тестовые аккаунты:</p>
           <p>• curator@hbalm.nis.edu.kz</p>
           <p>• leader@hbalm.nis.edu.kz</p>
           <p>• admin@hbalm.nis.edu.kz</p>
        </div>
      </div>
    </div>
  );
};