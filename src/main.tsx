import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './app.tsx';
import {PasswordGeneratorProvider} from '@/context/password-generator-context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PasswordGeneratorProvider>
      <App />
    </PasswordGeneratorProvider>
  </StrictMode>,
);
