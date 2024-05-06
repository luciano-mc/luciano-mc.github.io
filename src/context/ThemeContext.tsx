import { createContext, useContext, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

// Types
type Theme = 'light' | 'dark';
type Language = 'en' | 'es';

type ThemeContextType = {
  theme: Theme,
  handleTheme: () => void;
  language: Language,
  handleLanguage: () => void;
}

type ThemeContextProviderType = {
  children: ReactNode
}

// Initial value
const initialThemeContext : ThemeContextType = {
  theme: 'light',
  handleTheme: () => {},
  language: 'en',
  handleLanguage: () => {},
}

// Context
export const ThemeContext = createContext<ThemeContextType | null>(initialThemeContext);

// Provider
export const ThemeContextProvider = ({children}: ThemeContextProviderType) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('en');
  const { i18n } = useTranslation();

  const handleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  const handleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
    i18n.changeLanguage(language);
  }

  return (
    <ThemeContext.Provider value={{theme, handleTheme, language, handleLanguage}}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom Hook
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error ("useThemeContext must be used within a ThemeContextProvider")
  };
  return context;
}