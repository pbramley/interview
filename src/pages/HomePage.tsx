import { LookupForm } from '../components/shared/form/LookupForm';
import React from 'react';

/**
 * Default placeholder page.
 * @returns
 */
export const HomePage = (): React.JSX.Element => {

  /**
   * Callback function to invoke when our form is submitted.
   */
  const handleSearch = (): void => {
    console.log('Ready to perform the search');
  };

  return (
    <div>
      <h1>Home</h1>
      <LookupForm onSubmit={handleSearch} />
    </div>
  );
};

export default HomePage;
