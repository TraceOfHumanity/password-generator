import {PasswordGeneratorGenerateButton} from './PasswordGeneratorGenerateButton';
import {PasswordGeneratorHeader} from './PasswordGeneratorHeader';
import {PasswordGeneratorLengthControl} from './PasswordGeneratorLengthControl';
import {PasswordGeneratorReadyPassword} from './PasswordGeneratorReadyPassword';
import {PasswordGeneratorSettings} from './PasswordGeneratorSettings';

export const PasswordGenerator = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='fixed left-1/2 top-1/2 flex w-full max-w-xl -translate-x-1/2 -translate-y-1/2 flex-col gap-4 p-3 backdrop-blur-sm rounded-xl bg-white/5 border-b-3 border-r border-white/30'>
      {children}
    </div>
  );
};

PasswordGenerator.Header = PasswordGeneratorHeader;
PasswordGenerator.LengthControl = PasswordGeneratorLengthControl;
PasswordGenerator.Settings = PasswordGeneratorSettings;
PasswordGenerator.GenerateButton = PasswordGeneratorGenerateButton;
PasswordGenerator.ReadyPassword = PasswordGeneratorReadyPassword;
