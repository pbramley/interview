const BASE_URL = 'https://example-api.com';

/**
 * Wrapper around the fetch API which helps us simplify requests.
 */
export const fetchApi = {
   /**
    *
    * @param url
    * @returns
    */
   get: async <T>(url: string): Promise<T> => {
      const res = await fetch(`${BASE_URL}${url}`);
      if (!res.ok) {
         throw new Error(`GET ${url} failed`);
      }

      return res.json();
   },

   /**
    * Wrapper supporting POST requests via the fetch api.
    * @param url The URL path to send the post request to (appended to the base path).
    * @param data The data being provided to the
    * @returns
    */
   post: async <T, U>(url: string, data: T): Promise<U> => {
      const res = await fetch(`${BASE_URL}${url}`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data),
      });
      
      if (!res.ok) {
         throw new Error(`POST ${url} failed`);
      }

      return res.json();
   },
};
