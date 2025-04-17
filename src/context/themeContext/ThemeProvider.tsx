import { ReactNode, useState } from "react";
import { Theme } from "./themeConstants";
import { ThemeContext } from "./ThemeContext";

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
 