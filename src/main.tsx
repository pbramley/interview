import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from '@context/themeContext/ThemeProvider';
import './styles/variables.css';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <ThemeProvider>
         <App />
      </ThemeProvider>
   </StrictMode>,
);
