import {Header} from './header';
import {LengthControl} from './password-generator-length-control';
import {ReadyPassword} from './ready-password';
import {Settings} from './settings/settings';
import Button from '../ui/button';
import {PasswordGeneratorContext} from '@/context/password-generator-context';
import {usePasswordGenerator} from '@/hooks/use-password-generator';
import Divider from '../ui/divider';

export const PasswordGenerator = () => {
  const value = usePasswordGenerator();

  return (
    <PasswordGeneratorContext.Provider value={value}>
      <div className='fixed left-1/2 top-1/2 flex w-xl -translate-x-1/2 -translate-y-1/2 flex-col gap-2 p-3 backdrop-blur-xs rounded-xl bg-white/5 border-b-3 border-r border-green/50 max-w-[95vw]'>
        <Header />
        <LengthControl />
        <Settings />
        <Divider />
        <ReadyPassword />
        <Button
          disabled={!value.isGenerationEnabled}
          onClick={value.generatePassword}>
          Generate Password
        </Button>
      </div>
    </PasswordGeneratorContext.Provider>
  );
};

PasswordGenerator.LengthControl = LengthControl;
PasswordGenerator.Settings = Settings;
