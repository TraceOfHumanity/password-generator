import { PasswordGeneratorHeader } from "./PasswordGeneratorHeader";
import { PasswordGeneratorLengthControl } from "./PasswordGeneratorLengthControl";


export default function PasswordGenerator({ children }: { children: React.ReactNode }) {

  return (
    <div>
      {children}
    </div>
  )
}

PasswordGenerator.Header = PasswordGeneratorHeader

PasswordGenerator.LengthControl = PasswordGeneratorLengthControl