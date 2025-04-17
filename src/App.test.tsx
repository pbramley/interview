import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from '@context/themeContext/ThemeProvider';

export const TestComponent = (): React.JSX.Element => {
   return (
      <ThemeProvider>
         <App></App>
      </ThemeProvider>
   );
};

describe('App', () => {
   it('renders without crashing and shows main header', () => {
      render(<TestComponent />);
      expect(screen.getByText(/home/i)).toBeVisible(); // Update this to match your App.tsx content
   });
});
