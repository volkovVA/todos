import { createContext } from 'react';

interface ThemeContextProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);