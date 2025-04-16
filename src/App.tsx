import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@pages/HomePage';

/**
 * Entry point for the React application. Sets up the basic routes, and allows us to launch
 * our application.
 * @returns 
 */
export const App = (): React.JSX.Element => {
   return (
      <Router>
         <div>
            <Routes>
               <Route path="/" element={<HomePage />} />
            </Routes>
         </div>
      </Router>
   );
};

export default App;
