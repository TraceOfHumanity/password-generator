import {useEffect, useRef, useState} from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const [clipPath, setClipPath] = useState<string>("");

  // const updateClipPath = () => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     const cutSize = 20;

  //     const path = `
  //       polygon(
  //         ${cutSize}px 0,
  //         calc(100% - ${cutSize}px) 0,
  //         100% ${cutSize}px,
  //         100% calc(100% - ${cutSize}px),
  //         calc(100% - ${cutSize}px) 100%,
  //         ${cutSize}px 100%,
  //         0 calc(100% - ${cutSize}px),
  //         0 ${cutSize}px
  //       )
  //     `;

  //     setClipPath(path);
  //   }
  // };

  // useEffect(() => {
  //   updateClipPath();
  // }, []);

  return (
    <div
      className="passwordGeneratorWrapper fixed left-1/2 top-1/2 flex w-full max-w-xl -translate-x-1/2 -translate-y-1/2 transform flex-col gap-2 rounded-xl border-cyan-600 bg-white/10 p-3 shadow-[inset_0px_0px_4px_rgb(255,255,255)] backdrop-blur-sm"
      ref={ref}
      style={{clipPath}}>
      {children}
    </div>
  );
}

PasswordGenerator.Header = PasswordGeneratorHeader;
PasswordGenerator.LengthControl = PasswordGeneratorLengthControl;
PasswordGenerator.Settings = PasswordGeneratorSettings;
PasswordGenerator.GenerateButton = PasswordGeneratorGenerateButton;
PasswordGenerator.ReadyPassword = PasswordGeneratorReadyPassword;
