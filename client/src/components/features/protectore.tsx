import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import type { UserRole } from '../../types/user.types';

interface Props {
  children: React.ReactNode;
  allowedRoles: UserRole[]; // Массив ролей, которым МОЖНО сюда
}

export const ProtectedRoute: React.FC<Props> = ({ children, allowedRoles }) => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Загрузка...</div>;
  }

  // 1. Если не авторизован — на страницу входа
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Если роль не подходит (например, student пытается зайти к leader) — домой
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // 3. Все ок — показываем страницу
  return <>{children}</>;
};