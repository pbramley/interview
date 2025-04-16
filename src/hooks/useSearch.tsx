// useSearchUsers.ts
import { useState, useEffect } from 'react';
import type { SearchResult } from '../types/searchResult';

// Mocked response data
const mockData: SearchResult[] = [
   { id: '1', name: 'Alice', email: 'alice@example.com' },
   { id: '2', name: 'Bob', email: 'bob@example.com' },
   { id: '3', name: 'Charlie', email: 'charlie@example.com' },
];

/**
 * Interface defining the props to be provided to the {@code useSearch} hook below.
 */
export interface UseSearchProps {
   /**
    * Query string to be provided to the useSearch hook.
    */
   query?: string;
}

/**
 * Hook to perform a search, with the provided query string.
 * @param query search string
 */
export const useSearch = ({ query }: UseSearchProps) => {
   const [data, setData] = useState<SearchResult[] | null>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      setLoading(true);
      setError(null);

      // Simulate a server request with an artificial delay
      setTimeout(() => {
         // Filter out the mock data based on the provided query string.
         const filteredData = mockData.filter((user) => {
            return query ? user.name.toLowerCase().includes(query.toLowerCase()) : true;
         });

         if (filteredData.length === 0) {
            setError('No data found');
         }

         setData(filteredData);
         setLoading(false);
      }, 1000);
   }, [query]);

   return { data, loading, error };
};
