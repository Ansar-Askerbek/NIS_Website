import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export const Navbar: React.FC = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  // Функция проверки активной ссылки
  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  const getDashboardPath = () => {
    if (!user) return '/';
    switch (user.role) {
      case 'admin': return '/admin';
      case 'curator': return '/curator';
      case 'leader': return '/leader';
      case 'user': return '/';
      default: return '/';
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav>
      <div className="nav-container">
        
        {/* Логотип */}
        <Link to="/" className="nav-logo">
          <span>NIS Almaty</span>
        </Link>

        {/*Центральная часть*/}
        <div className="navbar-center">
           {/* --- ВОТ НОВАЯ КНОПКА --- */}
           <Link to="/leaderboard" className={`nav-link ${isActive('/leaderboard')}`}>
              <span className="icon-nav">🏆</span>
              <span className="text-nav">Рейтинг</span>
           </Link>
        </div>

        {/* Правая часть */}
        <div className="nav-actions">
          {user ? (
            /* Если вошел: показываем профиль */
            <div className="nav-profile-container">
              
              {/* Текст (скрываем на совсем мелких экранах через CSS если нужно) */}
              <div className="nav-user-info">
                <span className="nav-user-name">{user.fullName}</span>
                <span className="nav-user-role">{user.role}</span>
              </div>

              {/* Аватарка (кликабельная) */}
              <Link to={getDashboardPath()} className="nav-avatar" title="Личный кабинет">
                {user.avatarUrl || (user.fullName ? user.fullName[0] : 'U')}
              </Link>

              {/* Кнопка выход */}
              <button onClick={handleLogout} className="btn-logout" title="Выйти">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </button>
            </div>
          ) : (
            /* Если НЕ вошел: кнопка Войти */
            <button 
              className="btn-login-nav" 
              onClick={() => navigate('/login')}
            >
              Войти
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};