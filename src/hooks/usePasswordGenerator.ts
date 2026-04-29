import {useContext} from 'react';
import {PasswordGeneratorContext} from '@/context/PasswordGeneratorContext';

export const usePasswordGenerator = () => {
  const context = useContext(PasswordGeneratorContext);

  if (!context) {
    throw new Error(
      'usePasswordGenerator must be used within PasswordGeneratorProvider',
    );
  }

  return context;
};
