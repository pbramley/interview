// import { fetchApi } from "@services/fetchApi";
import { fetchApi } from '@services/fetchApi';
import { JSX, useState } from 'react';

// Constant regexes used for form validation.
const NAME_REGEX = /^[a-zA-Z0-9 &#()]+$/;
const THREE_DECIMALS_REGEX = /^\d+(\.\d{1,3})?$/;

/**
 * Form data object representing all the values in the form.
 */
interface FormData {
   name: string;
   quantity: number;
}

/**
 * Expected response data following submission of the form.
 */
interface ResponseData {
   status: string;
}

/**
 * Form used to enter basic item information.
 */
export const ItemEntryForm = (): JSX.Element => {
   const [name, setName] = useState('');
   const [quantity, setQuantity] = useState('');
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState(false);

   /**
    * Validate the form input.
    * @returns true if the form is valid - false otherwise.
    */
   const validateForm = (): boolean => {
      let isValid = true;

      // validation
      if (!NAME_REGEX.test(name)) {
         isValid = false;
         setError('Invalid name format.');
      }
      if (!THREE_DECIMALS_REGEX.test(quantity)) {
         isValid = false;
         setError('Value must be a number with up to 3 decimal places.');
      }

      return isValid;
   };

   /**
    * Handle form submission, send all data to the server.
    **/
   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const isValid = validateForm();

      if (!isValid) {
         return;
      }

      setError('');
      setSuccess(false);
      setLoading(true);

      try {
         const response = await fetchApi.post<FormData, ResponseData>('/record', {
            name: name,
            quantity: Number(quantity),
         });

         if(response.status === 'success') {
            setSuccess(true);
         }

         setSuccess(true);
      } catch (err) {
         setError('Failed to submit. Please try again.');
      } finally {
         setLoading(false);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label>Name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} disabled={loading} />
         </div>
         <div>
            <label>Value (max 3 decimals):</label>
            <input
               value={quantity}
               onChange={(e) => setQuantity(e.target.value)}
               disabled={loading}
            />
         </div>
         <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
         </button>
         {error && <p style={{ color: 'red' }}>{error}</p>}
         {success && <p style={{ color: 'green' }}>Submitted successfully!</p>}
      </form>
   );
};
