import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

/**
 * Context for the ThemeProvider. Includes a theme ('light'/'dark') and a mechanism
 * to toggle between the two.
 */
interface ThemeContextType {
   theme: Theme;
   toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Theme context provider, which supports toggling between light and dark mode in the
 * application.
 * @param children nested children JSX to be contained within the scope of the ThemeProvider.
 * @returns
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
   // Default to light mode.
   const [theme, setTheme] = useState<Theme>('light');

   /**
    * Toggle the theme between light and dark mode.
    */
   const toggleTheme = () => {
      setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
   };

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         <div className={theme}>{children}</div>
      </ThemeContext.Provider>
   );
};

/**
 * Context hook to gain access to the global theme.
 * @returns
 */
export const useTheme = () => {
   const context = useContext(ThemeContext);
   if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
   }

   return context;
};
