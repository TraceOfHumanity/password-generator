import {useCallback, useMemo, useState} from 'react';
import {type PasswordGeneratorContextValue} from '@/types/password-generator.types';

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [isIncludeLowercase, setIsIncludeLowercase] = useState(true);
  const [isIncludeUppercase, setIsIncludeUppercase] = useState(false);
  const [isIncludeNumbers, setIsIncludeNumbers] = useState(true);
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

  const isGenerationEnabled =
    isIncludeLowercase ||
    isIncludeUppercase ||
    isIncludeNumbers ||
    isIncludeSymbols ||
    isIncludeCustomSymbols;

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

    const uniqueCharacters = [...new Set(characterList.split(''))];
    const targetLength = Math.min(passwordLength, uniqueCharacters.length);
    let generatedPassword = '';

    for (let i = 0; i < targetLength; i++) {
      const randomIndex = Math.floor(Math.random() * uniqueCharacters.length);
      generatedPassword += uniqueCharacters[randomIndex];
      uniqueCharacters.splice(randomIndex, 1);
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
      isGenerationEnabled,
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
      isGenerationEnabled,
      generatePassword,
    ],
  );

  return value;
};
