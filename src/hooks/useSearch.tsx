// useSearchUsers.ts
import { useState, useEffect } from 'react';
import type { SearchResult } from '../types/searchResult';
import { fetchSearchResults } from '@services/myService';

/**
 * Interface defining the props to be provided to the {@code useSearch} hook below.
 */
export interface UseSearchProps {
   /**
    * Query string to be used for filtering the result set.
    */
   query?: string;
}

/**
 * Hook to perform a search, with the provided query string.
 * @param query Query string to be used for filtering the result set.
 */
export const useSearch = ({ query }: UseSearchProps) => {
   const [data, setData] = useState<SearchResult[] | null>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         setError(null);

         try {
            const results = await fetchSearchResults();

            // Filter results using the query string.
            const filtered = query
               ? results.filter((user) =>
                    user.name.toLowerCase().includes(query.toLowerCase())
                 )
               : results;

            if (filtered.length === 0) {
               setError('No data found');
            }

            setData(filtered);
         } catch (err) {
            setError('Failed to fetch data: ' + err );
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, [query]);

   return { data, loading, error };
};