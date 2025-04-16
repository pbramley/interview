import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
   it('renders without crashing and shows main header', () => {
      render(<App />);
      expect(screen.getByText(/home/i)).toBeVisible(); // Update this to match your App.tsx content
   });
});
