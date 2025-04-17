import { useState } from 'react';

/**
 * Props to be provided to the {@code LookupForm} component.
 */
export interface LookupFormProps {
   /**
    *
    * @param searchString string to search for.
    * @returns
    */
   onSubmit: (searchString: string) => void;
}

/**
 * Component for a basic form to allow the user to perform some lookup behaviour.
 * @param onSubmit callback to be invoked when the form is submitted.
 * @returns
 */
export const LookupForm = ({ onSubmit }: LookupFormProps) => {
   const [input, setInput] = useState('');

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim()) {
         return;
      }

      onSubmit(input.trim());
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter search string"
         />
         <button type="submit">Search</button>
      </form>
   );
};
