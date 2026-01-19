import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from './context/ConfigContext';
import { Navbar } from './components/MainLayout/Navbar';
import { Footer } from './components/MainLayout/Footer';
import { ShanyrakSection } from './components/MainLayout/shanyraksec';
import { AboutSection } from './components/MainLayout/aboutsec';
import { LeaderDashboard } from './components/LeaderLayout/Leader'; // Мы создадим это
import { UserProvider } from './context/UserContext';
import { LoginPage } from "./components/features/auth"
import "./styles/index.css";
import { ProtectedRoute } from './components/features/protectore';
import { CuratorDashboard } from './components/KuratorLayout/kurator'; // Панель куратора
import { AdminDashboard } from './components/AdminLayout/admin'; // Панель администратора
import { ShanyrakRatingsPage } from './components/leaderboard/ShanyrakLeader'; // Новая страница рейтинга

// Компонент главной страницы (Landing Page)
const LandingPage = () => (
  <>
    <ShanyrakSection />
    <AboutSection />
  </>
);

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <UserProvider>
        <Router>
          <div className="min-h-screen w-full flex flex-col overflow-x-hidden bg-white text-[#0a0a0a]">
            {/* Навигация будет видна везде */}
            <Navbar />
            
            <main className="flex-grow pt-[100px]"> {/* Отступ сверху для фиксированного навбара */}
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/leader" element={
                  <ProtectedRoute allowedRoles={['admin', 'leader', 'curator']}>
                    <LeaderDashboard />
                  </ProtectedRoute>
                } />
                {/* Маршрут Куратора */}
                <Route 
                  path="/curator" 
                  element={
                    <ProtectedRoute allowedRoles={['curator', 'admin']}>
                      <CuratorDashboard />
                    </ProtectedRoute>
                  } 
                />
                {/* АДМИН ПАНЕЛЬ */}
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/leaderboard" element={<ShanyrakRatingsPage />} />
              </Routes>
            </main>
            
            <Footer />
          </div>
        </Router>
      </UserProvider>
    </ConfigProvider>
  );
};

export default App;