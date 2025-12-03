import React from 'react';
import { ConfigProvider } from './context/ConfigContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ShanyrakSection } from './features/Shanyrak/shanyraksec';
import { AboutSection } from './features/About/aboutsec';

import "./styles/index.css";

// Ensure basic styles are reset via Tailwind in index.css
const App: React.FC = () => {
  return (
    <ConfigProvider>
      <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <ShanyrakSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
};

export default App;