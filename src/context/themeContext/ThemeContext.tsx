import { createContext } from 'react';
import { Theme } from './themeConstants';

/**
 * Context for the ThemeProvider. Includes a theme ('light'/'dark') and a mechanism
 * to toggle between the two.
 */
interface ThemeContextType {
   theme: Theme;
   toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

