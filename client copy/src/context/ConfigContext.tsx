import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { AppConfig } from '../types/config.types';
import { defaultConfig } from '../config/ThemeConfig';

interface ConfigContextType {
  config: AppConfig;
  updateConfig: (newConfig: Partial<AppConfig>) => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<AppConfig>(defaultConfig);

  // Simulating the elementSdk init from your original code
  useEffect(() => {
    // @ts-ignore - supporting the existing SDK injection if present
    if (window.elementSdk) {
        // @ts-ignore
        window.elementSdk.init({
            defaultConfig,
            onConfigChange: (newConfig: any) => setConfig((prev) => ({ ...prev, ...newConfig })),
            // ... mapToCapabilities omitted for brevity, can be added if needed
        });
    }
  }, []);

  return (
    <ConfigContext.Provider value={{ config, updateConfig: (c) => setConfig(prev => ({ ...prev, ...c })) }}>
      <div 
        style={{
            fontFamily: config.font_family,
            fontSize: `${config.font_size}px`,
            color: config.text_color,
            backgroundColor: config.background_color,
            minHeight: '100vh'
        }}
      >
        {children}
      </div>
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) throw new Error('useConfig must be used within a ConfigProvider');
  return context;
};