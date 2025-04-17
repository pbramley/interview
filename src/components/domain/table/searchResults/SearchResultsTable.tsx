import React from 'react';
import type { SearchResult } from '../../../../types/searchResult'; // Adjust path as needed
import styles from './SearchResultsTable.module.css';

/**
 * Interface defining the props to be provided to the {@code SearchResults} component.
 */
export interface SearchResultsTableProps {
  /**
   * Flag to indicate that the results are still loading.
   */
  loading: boolean;
  /**
   * The list of search results to be rendered in the table.
   */
  data: SearchResult[] | null;
  
  /**
   * Error string, to be used in cases that the data could not be retrieved.
   */
  error: string | null;
}

/**
 * Component used to display a table of search results
 * @param loading Whether or not the results are still being loaded asynchronously from the server.
 * @param data The data to be displayed.
 * @param error Whether or not an error has been returned from the server request.
 * @returns 
 */
export const SearchResultsTable = ({ loading, data, error }: SearchResultsTableProps): React.JSX.Element => {
  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error loading results.</div>;
  }

  return (
    <table className={styles['table']}>
      <thead>
        <tr>
          <th className={styles['th']}>ID</th>
          <th className={styles['th']}>Name</th>
          <th className={styles['th']}>Email</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((result) => (
          <tr className={styles['tr']} key={result.id}>
            <td className={styles['td']}>{result.id}</td>
            <td className={styles['td']}>{result.name}</td>
            <td className={styles['td']}>{result.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};