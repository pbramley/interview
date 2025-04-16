import { fetchApi } from './fetchApi';

/**
 * Interface definition representing the object type we're trying to send/receive from the server.
 */
interface MyData {
   // Piece of data.
   data: string;
}

/**
 * Fetches user data from the /user endpoint.
 * @returns
 */
export const fetchData = () => {
   fetchApi.get<MyData>('/data');
};

/**
 * Creates user data by posting to the /user endpoint.
 * @param user
 * @returns
 */
export const createData = (data: Partial<MyData>) => {
   fetchApi.post('/myData', data);
};
