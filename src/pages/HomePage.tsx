import React from 'react';

/**
 * Default placeholder home page.
 * @returns
 */
export const HomePage = (): React.JSX.Element => {
   
   const onSearch = (): void => {
      console.log('Navigating to search page.');
      Route
   }
   
   return (
      <div>
         <h1>Home</h1>
         <button>Search items</button>
         <button>Create items</button>
      </div>
   );
};

export default HomePage;
