import {GeneratePasswordButton} from './PasswordGeneratorGenerateButton';
import {Header} from './PasswordGeneratorHeader';
import {LengthControl} from './PasswordGeneratorLengthControl';
import {ReadyPassword} from './PasswordGeneratorReadyPassword';
import {Settings} from './PasswordGeneratorSettings';

export const PasswordGenerator = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='fixed left-1/2 top-1/2 flex w-full max-w-xl -translate-x-1/2 -translate-y-1/2 flex-col gap-4 p-3 backdrop-blur-sm rounded-xl bg-white/5 border-b-3 border-r border-white/30'>
      {children}
    </div>
  );
};

PasswordGenerator.Header = Header;
PasswordGenerator.LengthControl = LengthControl;
PasswordGenerator.Settings = Settings;
PasswordGenerator.GenerateButton = GeneratePasswordButton;
PasswordGenerator.ReadyPassword = ReadyPassword;
