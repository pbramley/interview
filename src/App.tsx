import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import SearchPage from '@pages/SearchPage';
import ItemEntryPage from '@pages/ItemEntryPage';
import styles from './App.module.css';
import { useTheme } from '@context/themeContext/useTheme';

/**
 * Entry point for the React application. Sets up the basic routes, and allows us to launch
 * our application.
 * @returns
 */
export const App = (): React.JSX.Element => {
   const { theme, toggleTheme } = useTheme();

   /**
    * Listens to changes in theme from the context provider, and sets the data-theme 
    * for the overall application.
    */
   useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
   }, [theme]);

   return (
      <div className={styles[theme]}>
         <button onClick={toggleTheme}>Toggle theme</button>
         <Router>
            <div>
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/create" element={<ItemEntryPage />} />
               </Routes>
            </div>
         </Router>
      </div>
   );
};

export default App;
