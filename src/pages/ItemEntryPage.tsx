import React from 'react';
import { ItemEntryForm } from '@components/domain/form/ItemEntryForm';

/**
 * Default placeholder item entry page.
 * @returns
 */
export const ItemEntryPage = (): React.JSX.Element => {
   return (
      <div>
         <h1>Home</h1>
         <ItemEntryForm />
      </div>
   );
};

export default ItemEntryPage;
