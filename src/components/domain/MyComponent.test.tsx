import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
   test('renders MyComponent', () => {
      render(<MyComponent />);
      const linkElement = screen.getByText(/my component/i);
      expect(linkElement).toBeInTheDocument();
   });
});
