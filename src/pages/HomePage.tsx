import React from 'react';
import { ItemEntryForm } from '@components/domain/form/ItemEntryForm';

/**
 * Default placeholder home page.
 * @returns
 */
export const HomePage = (): React.JSX.Element => {
   return (
      <div>
         <h1>Home</h1>
         <ItemEntryForm />
         {/* <SearchForm onSearchInputChange={onSearchInputChange} /> */}
         {/* <SearchResultsTable loading={loading} data={data} error={error} /> */}
      </div>
   );
};

export default HomePage;
