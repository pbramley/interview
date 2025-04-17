import { SearchForm } from '@components/domain/form/SearchForm';
import { SearchResultsTable } from '@components/domain/table/searchResults/SearchResultsTable';
import { useSearch } from '@hooks/useSearch';
import React, { useState } from 'react';

/**
 * Default placeholder home page.
 * @returns
 */
export const SearchPage = (): React.JSX.Element => {
    const [ queryString, setQueryString] = useState<string>('');
    const { loading, data, error } = useSearch({query: queryString});
    
    /**
     * Update the query string to filter the result set.
     * @param queryString 
     */
    const onSearchInputChange = (queryString: string): void => {
        setQueryString(queryString);
    }

   return (
      <div>
         <h1>Search Page</h1>
         <SearchForm onSearchInputChange={onSearchInputChange} />
         <SearchResultsTable loading={loading} data={data} error={error} />
      </div>
   );
};

export default SearchPage;
