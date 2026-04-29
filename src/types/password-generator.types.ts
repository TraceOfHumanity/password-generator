export type PasswordGeneratorContextValue = {
  password: string;
  passwordLength: number;
  isIncludeLowercase: boolean;
  isIncludeUppercase: boolean;
  isIncludeNumbers: boolean;
  isIncludeSymbols: boolean;
  isIncludeCustomSymbols: boolean;
  customSymbols: string;
  setPasswordLength: (length: number) => void;
  setCustomSymbols: (symbols: string) => void;
  toggleIncludeLowercase: () => void;
  toggleIncludeUppercase: () => void;
  toggleIncludeNumbers: () => void;
  toggleIncludeSymbols: () => void;
  toggleIncludeCustomSymbols: () => void;
  isGenerationEnabled: boolean;
  generatePassword: () => void;
};
