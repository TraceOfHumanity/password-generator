import {createContext, useContext} from 'react';
import {type PasswordGeneratorContextValue} from '@/types/password-generator.types';

export const PasswordGeneratorContext = createContext<
  PasswordGeneratorContextValue | undefined
>(undefined);

export const usePasswordGeneratorContext = () => {
  const context = useContext(PasswordGeneratorContext);
  if (!context) {
    throw new Error(
      'usePasswordGeneratorContext must be used within PasswordGenerator',
    );
  }
  return context;
};
