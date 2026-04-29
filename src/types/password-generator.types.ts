export type PasswordGeneratorContextValue = {
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
