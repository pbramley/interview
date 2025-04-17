import React from 'react';
import styles from './HomePage.module.css';

/**
 * Default placeholder home page.
 * @returns
 */
export const HomePage = (): React.JSX.Element => {
   return (
      <div className={styles['home-page']}>
         <h1>Home</h1>
         <p>Select an option from the sidebar.</p>
      </div>
   );
};

export default HomePage;
