import { SearchResult } from '../types/searchResult';

// Constants
let fakeId = 100;
const LATENCY_MS = 500;


/**
 * Fake response to mimic results from an endpoint.
 */
const serverItems: SearchResult[] = [
  { id: 1, name: 'Test User 1', email: 'testemail1.com' },
  { id: 2, name: 'Test User 2', email: 'testemail2.com' },
  { id: 3, name: 'Test User 3', email: 'testemail3.com' },
];

/**
 * Wrapper function which returns after a configured delay.
 * @param ms milliseconds to wait before promise is resolved.
 * @returns a Promise, after the configured delay.
 */
export const delay = (ms = LATENCY_MS): Promise<void> => {
  return new Promise(res => setTimeout(res, ms));
}

/**
 * Mimics the request to fetch results from the server.
 * @returns 
 */
export const fetchSearchResults = async (): Promise<SearchResult[]> => {
  await delay(LATENCY_MS);
  return [...serverItems];
}

/**
 * Mimics pushing data to the server.
 * @param name Name prop to be provided to the new item.
 * @param email Email prop to be set on the new item.
 * @returns Promise with the newly created SearchResult.
 */
export const createSearchResult = async (name: string, email: string): Promise<SearchResult> => {
  // Mimic server delay.
  await delay(LATENCY_MS); 

  const newItem: SearchResult = {
    id: ++fakeId,
    name,
    email: email,
  };
  
  serverItems.push(newItem);
  return newItem;
}
