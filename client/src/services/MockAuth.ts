import type { UserProfile } from '../types/user.types';

// --- НАША "БАЗА ДАННЫХ" ---
const MOCK_USERS: UserProfile[] = [
  {
    id: '1',
    fullName: 'Super Admin',
    email: 'admin@hbalm.nis.edu.kz',
    shanyrak: 'Administration',
    role: 'admin'
  },
  {
    id: '2',
    fullName: 'Ансар Аскербек',
    email: 'leader@hbalm.nis.edu.kz',
    shanyrak: 'Алтын',
    className: '11 A',
    role: 'leader'
  },
  {
    id: '3',
    fullName: 'Жанна Кураторвна',
    email: 'curator@hbalm.nis.edu.kz',
    shanyrak: 'Алтын',
    role: 'curator'
  },
  {
    id: '4',
    fullName: 'Алихан Ученик',
    email: 'user@hbalm.nis.edu.kz',
    shanyrak: 'Тенгри',
    className: '10 B',
    role: 'user'
  }
];

// --- ФУНКЦИЯ ИМИТАЦИИ ВХОДА ---
export const loginAPI = (input: string): Promise<UserProfile> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lowerInput = input.toLowerCase().trim();

      // 1. Ищем точное совпадение по email
      const foundUser = MOCK_USERS.find(u => u.email === lowerInput);

      if (foundUser) {
        resolve(foundUser);
        return;
      }

      // 2. Если не нашли email, создаем временного ученика с введенным именем
      // (Чтобы можно было зайти просто под именем "Ансар", не вводя email)
      resolve({
        id: Date.now().toString(),
        fullName: input, // Используем то, что ввели
        email: 'guest@hbalm.nis.edu.kz',
        shanyrak: 'Guest',
        className: 'Guest Class',
        role: 'user' // По умолчанию всегда ученик
      });
    }, 800); // Задержка 0.8 сек
  });
};