import React, { createContext, useContext, useState } from 'react';
import type { UserProfile, UserRole } from '../types/user.types';
import { loginAPI } from '../services/MockAuth';
import type { ReactNode } from 'react';

interface UserContextType {
  user: UserProfile | null;
  isLoading: boolean;
  // ВАЖНО: Указываем, что login возвращает Promise с пользователем или null
  login: (email: string) => Promise<UserProfile | null>; 
  logout: () => void;
  hasRole: (roles: UserRole[]) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // ВАЖНО: <UserProfile | null> исправляет ошибку "type 'never'"
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string): Promise<UserProfile | null> => {
    setIsLoading(true);
    try {
      const foundUser = await loginAPI(email);
      
      if (foundUser) {
        setUser(foundUser);
        setIsLoading(false);
        return foundUser; // Возвращаем пользователя для LoginPage
      }
    } catch (error) {
      console.error(error);
    }
    
    setIsLoading(false);
    return null;
  };

  const logout = () => {
    setUser(null);
  };

  const hasRole = (allowedRoles: UserRole[]) => {
    if (!user) return false;
    return allowedRoles.includes(user.role);
  };

  return (
    <UserContext.Provider value={{ user, isLoading, login, logout, hasRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};