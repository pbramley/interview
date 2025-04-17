import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import styles from './App.module.css';
import { useTheme } from '@context/themeContext/useTheme';

/**
 * Entry point for the React application. Sets up the basic routes, and allows us to launch
 * our application.
 * @returns
 */
export const App = (): React.JSX.Element => {
   const { theme, toggleTheme } = useTheme();

   return (
      <div className={styles[theme]}>
         <button onClick={toggleTheme}>Toggle theme</button>
         <Router>
            <div>
               <Routes>
                  <Route path="/" element={<HomePage />} />
               </Routes>
            </div>
         </Router>
      </div>
   );
};

export default App;
