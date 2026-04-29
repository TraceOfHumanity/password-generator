import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {PasswordGeneratorProvider} from '@/context/PasswordGeneratorContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PasswordGeneratorProvider>
      <App />
    </PasswordGeneratorProvider>
  </StrictMode>,
);
