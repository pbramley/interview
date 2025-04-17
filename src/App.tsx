import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from '@pages/HomePage';

import styles from './App.module.css';
import { useTheme } from '@context/themeContext/useTheme';
import SearchPage from '@pages/SearchPage';
import ItemEntryPage from '@pages/CreatePage';

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
      <Router>
         <div className={`${styles.container} ${styles[theme]}`}>
            <aside className={styles['side-nav']}>
               <h2>Menu</h2>
               <nav>
                  <ul>
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/search">Search items</Link>
                     </li>
                     <li>
                        <Link to="/create">Create items</Link>
                     </li>
                  </ul>
               </nav>
            </aside>

            <main className={styles['content']}>
               <button onClick={toggleTheme}>Toggle theme</button>
               <div>
                  <Routes>
                     <Route path="/" element={<HomePage />} />
                     <Route path="/search" element={<SearchPage />} />
                     <Route path="/create" element={<ItemEntryPage />} />
                  </Routes>
               </div>
            </main>
         </div>
      </Router>
   );
};

export default App;
