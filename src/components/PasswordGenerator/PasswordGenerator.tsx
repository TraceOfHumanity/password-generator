import { PasswordGeneratorGenerateButton } from "./PasswordGeneratorGenerateButton";
import {PasswordGeneratorHeader} from "./PasswordGeneratorHeader";
import {PasswordGeneratorLengthControl} from "./PasswordGeneratorLengthControl";
import { PasswordGeneratorReadyPassword } from "./PasswordGeneratorReadyPassword";
import { PasswordGeneratorSettings } from "./PasswordGeneratorSettings";

export default function PasswordGenerator({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="generatorWrapper fixed left-1/2 top-1/2 flex w-full max-w-xl -translate-x-1/2 -translate-y-1/2 transform flex-col gap-2 rounded-xl border-b border-cyan-600 bg-black/50 p-3 text-cyan-400 shadow-[-10px_-10px_20px_0px_rgba(8,145,178,0.2)] backdrop-blur-sm">
      {children}
    </div>
  );
}

PasswordGenerator.Header = PasswordGeneratorHeader;
PasswordGenerator.LengthControl = PasswordGeneratorLengthControl;
PasswordGenerator.Settings = PasswordGeneratorSettings;
PasswordGenerator.GenerateButton = PasswordGeneratorGenerateButton;
PasswordGenerator.ReadyPassword = PasswordGeneratorReadyPassword;
