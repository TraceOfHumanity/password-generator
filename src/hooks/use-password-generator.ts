import {useCallback, useMemo, useState} from 'react';
import {type PasswordGeneratorContextValue} from '@/types/password-generator.types';

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [isIncludeUppercase, setIsIncludeUppercase] = useState(false);
  const [isIncludeNumbers, setIsIncludeNumbers] = useState(false);
  const [isIncludeSymbols, setIsIncludeSymbols] = useState(false);

  const toggleIncludeUppercase = useCallback(() => {
    setIsIncludeUppercase((prev) => !prev);
  }, []);

  const toggleIncludeNumbers = useCallback(() => {
    setIsIncludeNumbers((prev) => !prev);
  }, []);

  const toggleIncludeSymbols = useCallback(() => {
    setIsIncludeSymbols((prev) => !prev);
  }, []);

  const generatePassword = useCallback(() => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+=';

    let characterList = lowercase;

    if (isIncludeUppercase) characterList += uppercase;
    if (isIncludeNumbers) characterList += numbers;
    if (isIncludeSymbols) characterList += symbols;

    let generatedPassword = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterList.length);
      generatedPassword += characterList[randomIndex];
    }

    setPassword(generatedPassword);
  }, [isIncludeNumbers, isIncludeSymbols, isIncludeUppercase, passwordLength]);

  const value = useMemo<PasswordGeneratorContextValue>(
    () => ({
      password,
      passwordLength,
      isIncludeUppercase,
      isIncludeNumbers,
      isIncludeSymbols,
      setPasswordLength,
      toggleIncludeUppercase,
      toggleIncludeNumbers,
      toggleIncludeSymbols,
      generatePassword,
    }),
    [
      password,
      passwordLength,
      isIncludeUppercase,
      isIncludeNumbers,
      isIncludeSymbols,
      toggleIncludeUppercase,
      toggleIncludeNumbers,
      toggleIncludeSymbols,
      generatePassword,
    ],
  );

  return value;
};
