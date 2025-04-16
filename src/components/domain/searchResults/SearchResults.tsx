import React from 'react';
import type { SearchResult } from '../../../types/searchResult'; // Adjust path as needed

/**
 * Interface defining the props to be provided to the {@code SearchResults} component.
 */
export interface SearchResultsProps {
  loading: boolean;
  data: SearchResult[] | null;
  error: string | null;
}

/**
 * Component used to display a list of search results.
 * @param loading Whether or not the results are still being loaded asynchronously from the server.
 * @param data The data to be displayed.
 * @param error Whether or not an error has been returned from the server request.
 * @returns 
 */
export const SearchResults = ({ loading, data, error }: SearchResultsProps): React.JSX.Element => {
  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error loading results.</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};