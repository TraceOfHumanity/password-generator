import {createContext, useMemo, useState} from 'react';

type PasswordGeneratorContextValue = {
  password: string;
  passwordLength: number;
  isIncludeUppercase: boolean;
  isIncludeNumbers: boolean;
  isIncludeSymbols: boolean;
  setPasswordLength: (length: number) => void;
  toggleIncludeUppercase: () => void;
  toggleIncludeNumbers: () => void;
  toggleIncludeSymbols: () => void;
  generatePassword: () => void;
};

export const PasswordGeneratorContext =
  createContext<PasswordGeneratorContextValue | null>(null);

export const PasswordGeneratorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [isIncludeUppercase, setIsIncludeUppercase] = useState(false);
  const [isIncludeNumbers, setIsIncludeNumbers] = useState(false);
  const [isIncludeSymbols, setIsIncludeSymbols] = useState(false);

  const toggleIncludeUppercase = () => {
    setIsIncludeUppercase((prev) => !prev);
  };

  const toggleIncludeNumbers = () => {
    setIsIncludeNumbers((prev) => !prev);
  };

  const toggleIncludeSymbols = () => {
    setIsIncludeSymbols((prev) => !prev);
  };

  const generatePassword = () => {
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
  };

  const value = useMemo(
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
    ],
  );

  return (
    <PasswordGeneratorContext.Provider value={value}>
      {children}
    </PasswordGeneratorContext.Provider>
  );
};
