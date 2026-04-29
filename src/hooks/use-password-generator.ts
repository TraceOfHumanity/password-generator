import {useCallback, useMemo, useState} from 'react';
import {type PasswordGeneratorContextValue} from '@/types/password-generator.types';

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [isIncludeLowercase, setIsIncludeLowercase] = useState(false);
  const [isIncludeUppercase, setIsIncludeUppercase] = useState(false);
  const [isIncludeNumbers, setIsIncludeNumbers] = useState(false);
  const [isIncludeSymbols, setIsIncludeSymbols] = useState(false);
  const [isIncludeCustomSymbols, setIsIncludeCustomSymbols] = useState(false);
  const [customSymbols, setCustomSymbols] = useState('');

  const toggleIncludeLowercase = useCallback(() => {
    setIsIncludeLowercase((prev) => !prev);
  }, []);

  const toggleIncludeUppercase = useCallback(() => {
    setIsIncludeUppercase((prev) => !prev);
  }, []);

  const toggleIncludeNumbers = useCallback(() => {
    setIsIncludeNumbers((prev) => !prev);
  }, []);

  const toggleIncludeSymbols = useCallback(() => {
    setIsIncludeSymbols((prev) => !prev);
  }, []);

  const toggleIncludeCustomSymbols = useCallback(() => {
    setIsIncludeCustomSymbols((prev) => !prev);
  }, []);

  const generatePassword = useCallback(() => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+=';

    let characterList = '';

    if (isIncludeLowercase) characterList += lowercase;
    if (isIncludeUppercase) characterList += uppercase;
    if (isIncludeNumbers) characterList += numbers;
    if (isIncludeSymbols) characterList += symbols;
    if (isIncludeCustomSymbols && customSymbols) characterList += customSymbols;

    if (!characterList) {
      setPassword('');
      return;
    }

    let generatedPassword = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterList.length);
      generatedPassword += characterList[randomIndex];
    }

    setPassword(generatedPassword);
  }, [
    customSymbols,
    isIncludeCustomSymbols,
    isIncludeLowercase,
    isIncludeNumbers,
    isIncludeSymbols,
    isIncludeUppercase,
    passwordLength,
  ]);

  const value = useMemo<PasswordGeneratorContextValue>(
    () => ({
      password,
      passwordLength,
      isIncludeLowercase,
      isIncludeUppercase,
      isIncludeNumbers,
      isIncludeSymbols,
      isIncludeCustomSymbols,
      customSymbols,
      setPasswordLength,
      setCustomSymbols,
      toggleIncludeLowercase,
      toggleIncludeUppercase,
      toggleIncludeNumbers,
      toggleIncludeSymbols,
      toggleIncludeCustomSymbols,
      generatePassword,
    }),
    [
      password,
      passwordLength,
      isIncludeLowercase,
      isIncludeUppercase,
      isIncludeNumbers,
      isIncludeSymbols,
      isIncludeCustomSymbols,
      customSymbols,
      setCustomSymbols,
      toggleIncludeLowercase,
      toggleIncludeUppercase,
      toggleIncludeNumbers,
      toggleIncludeSymbols,
      toggleIncludeCustomSymbols,
      generatePassword,
    ],
  );

  return value;
};
