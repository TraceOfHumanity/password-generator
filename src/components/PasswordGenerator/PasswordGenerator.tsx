import { PasswordGeneratorBackground } from "./PasswordGeneratorBackground";
import {PasswordGeneratorGenerateButton} from "./PasswordGeneratorGenerateButton";
import {PasswordGeneratorHeader} from "./PasswordGeneratorHeader";
import {PasswordGeneratorLengthControl} from "./PasswordGeneratorLengthControl";
import {PasswordGeneratorReadyPassword} from "./PasswordGeneratorReadyPassword";
import {PasswordGeneratorSettings} from "./PasswordGeneratorSettings";

export default function PasswordGenerator({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed left-1/2 top-1/2 flex w-full max-w-xl -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 p-3">
      <PasswordGeneratorBackground />
      {children}
    </div>
  );
}

PasswordGenerator.Header = PasswordGeneratorHeader;
PasswordGenerator.LengthControl = PasswordGeneratorLengthControl;
PasswordGenerator.Settings = PasswordGeneratorSettings;
PasswordGenerator.GenerateButton = PasswordGeneratorGenerateButton;
PasswordGenerator.ReadyPassword = PasswordGeneratorReadyPassword;
