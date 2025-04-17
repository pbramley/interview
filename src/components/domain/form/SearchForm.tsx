import { useEffect, useState } from 'react';

// Delay to wait after user input entry, before actually updating the search.
const DEBOUNCE_TIMER = 350;

/**
 * Props to be provided to the {@code LookupForm} component.
 */
export interface SearchFormProps {
   /**
    *
    * @param searchString string to search for.
    * @returns
    */
   onSearchInputChange: (searchString: string) => void;
}

/**
 * Component for a basic form to allow the user to perform some lookup behaviour.
 * @param onSubmit callback to be invoked when the form is submitted.
 * @returns
 */
export const SearchForm = ({ onSearchInputChange }: SearchFormProps) => {
   const [input, setInput] = useState('');
   const [debouncedInput, setDebouncedInput] = useState('');
   
   /**
    * Listens to changes to the input, debounces with a delay to have more natural
    * delay for user input changes.
    */
   useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedInput(input);
      }, DEBOUNCE_TIMER);
  
      return () => {
        clearTimeout(handler);
      };
    }, [input]);

    /**
     * Once the debounced input is registered, updates the search input as having changed.
     */
    useEffect(() => {
      onSearchInputChange(debouncedInput);
    }, [debouncedInput, onSearchInputChange]);
 
   return (
     <input
       value={input}
       onChange={(e) => setInput(e.target.value)}
       placeholder="Enter search string"
     />
   );
};
