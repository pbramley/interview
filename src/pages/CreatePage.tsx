import React from 'react';
import { CreateItemForm } from '@components/domain/form/CreateItemForm';

/**
 * Default placeholder item entry page.
 * @returns
 */
export const ItemEntryPage = (): React.JSX.Element => {
   return (
      <div>
         <h1>Create Item</h1>
         <CreateItemForm />
      </div>
   );
};

export default ItemEntryPage;
