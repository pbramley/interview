import { useSearch } from '@hooks/useSearch';
import { LookupForm } from '../components/shared/form/LookupForm';
import React, { useState } from 'react';
import { SearchResults } from '@components/domain/searchResults/SearchResults';

/**
 * Default placeholder home page.
 * @returns
 */
export const HomePage = (): React.JSX.Element => {
   const [searchString, setSearchString] = useState<string | undefined>();


   // Perform search for data using the input search string
   const { data, error, loading } = useSearch({ query: searchString});

   /**
    * Callback function to invoke when our form is submitted.
    * @param searchString
    */
   const handleSearch = (searchString: string): void => {
      setSearchString(searchString);
   };

   return (
      <div>
         <h1>Home</h1>
         <LookupForm onSubmit={handleSearch} />
         <SearchResults loading={loading} data={data} error={error} />
      </div>
   );
};

export default HomePage;
