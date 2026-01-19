import type { UserProfile } from '../types/user.types';

// URL вашего будущего сервера
const API_URL = 'https://api.yoursite.com'; 

export const userService = {
  // Получить профиль текущего пользователя
  getMe: async (): Promise<UserProfile> => {
    // --- КОГДА БУДЕТ СЕРВЕР, РАСКОММЕНТИРУЙТЕ ЭТО: ---
    /*
    const token = localStorage.getItem('token'); // Если есть авторизация
    const response = await fetch(`${API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
    */

    // --- ПОКА СЕРВЕРА НЕТ (ИМИТАЦИЯ/MOCK): ---
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: '1',
          fullName: 'Бекарыс Қыдырбек', // Данные пришли "с сервера"
          shanyrak: 'Сарыарқа',
          className: '10 B',
          role: 'leader'
        });
      }, 1000); // Имитируем задержку сети 1 секунда
    });
  }
};