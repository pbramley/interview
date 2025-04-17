import { useSearch } from '@hooks/useSearch';
import { SearchForm } from '../components/domain/form/SearchForm';
import React, { useState } from 'react';
import { SearchResultsTable } from '@components/domain/table/searchResults/SearchResultsTable';

/**
 * Default placeholder home page.
 * @returns
 */
export const HomePage = (): React.JSX.Element => {
   const [searchString, setSearchString] = useState<string | undefined>();

   // Perform search for data using the input search string
   const { data, error, loading } = useSearch({ query: searchString });

   /**
    * Callback function to invoke when our form is submitted.
    * @param searchString
    */
   const onSearchInputChange = (searchString: string): void => {
      setSearchString(searchString);
   };

   return (
      <div>
         <h1>Home</h1>
         <SearchForm onSearchInputChange={onSearchInputChange} />
         <SearchResultsTable loading={loading} data={data} error={error} />
      </div>
   );
};

export default HomePage;
