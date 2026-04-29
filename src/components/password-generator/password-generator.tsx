import {GeneratePasswordButton} from './password-generator-generate-button';
import {Header} from './password-generator-header';
import {LengthControl} from './password-generator-length-control';
import {ReadyPassword} from './password-generator-ready-password';
import {Settings} from './password-generator-settings';
import {PasswordGeneratorContext} from '@/context/password-generator-context';
import {usePasswordGenerator} from '@/hooks/use-password-generator';

export const PasswordGenerator = ({children}: {children: React.ReactNode}) => {
  const value = usePasswordGenerator();

  return (
    <PasswordGeneratorContext.Provider value={value}>
      <div className='fixed left-1/2 top-1/2 flex w-full max-w-xl -translate-x-1/2 -translate-y-1/2 flex-col gap-4 p-3 backdrop-blur-xs rounded-xl bg-white/5 border-b-3 border-r border-white/30'>
        {children}
      </div>
    </PasswordGeneratorContext.Provider>
  );
};

PasswordGenerator.Header = Header;
PasswordGenerator.LengthControl = LengthControl;
PasswordGenerator.Settings = Settings;
PasswordGenerator.GenerateButton = GeneratePasswordButton;
PasswordGenerator.ReadyPassword = ReadyPassword;
