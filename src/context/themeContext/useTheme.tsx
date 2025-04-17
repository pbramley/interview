import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

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