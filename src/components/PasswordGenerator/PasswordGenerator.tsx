import { createContext, useState } from "react"

type Password = {
  password: string;
  passwordLength: number;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

type PasswordGeneratorContext = {
  password: Password;
  setPassword: (password: Password) => void;
}

const PasswordGeneratorContext = createContext<PasswordGeneratorContext | undefined>(undefined)

export default function PasswordGenerator() {
  const [password, setPassword] = useState<Password>({
    password: "",
    passwordLength: 12,
    includeUppercase: false,
    includeNumbers: false,
    includeSymbols: false,
  })
  return (
    <PasswordGeneratorContext.Provider value={{password, setPassword}}>
      <h1>Password Generator</h1>
    </PasswordGeneratorContext.Provider>
  )
}