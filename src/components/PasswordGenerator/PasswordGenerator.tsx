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
    <div className="passwordGeneratorWrapper fixed left-1/2 top-1/2 flex w-full max-w-xl -translate-x-1/2 -translate-y-1/2 transform flex-col gap-2 rounded-xl border-cyan-600 bg-white/10 p-3 shadow-[inset_0px_0px_4px_rgb(255,255,255)] backdrop-blur-sm">
      {children}
    </div>
  );
}

PasswordGenerator.Header = PasswordGeneratorHeader;
PasswordGenerator.LengthControl = PasswordGeneratorLengthControl;
PasswordGenerator.Settings = PasswordGeneratorSettings;
PasswordGenerator.GenerateButton = PasswordGeneratorGenerateButton;
PasswordGenerator.ReadyPassword = PasswordGeneratorReadyPassword;
