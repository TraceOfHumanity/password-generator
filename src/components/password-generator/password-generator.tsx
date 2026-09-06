import {Header} from './header';
import {LengthControl} from './length-control';
import {ReadyPassword} from './ready-password';
import {Settings} from './settings/settings';
import Button from '../ui/button';
import {PasswordGeneratorContext} from '@/context/password-generator-context';
import {usePasswordGenerator} from '@/hooks/use-password-generator';
import Divider from '../ui/divider';
import Wrapper from './wrapper';

export const PasswordGenerator = () => {
  const value = usePasswordGenerator();

  return (
    <PasswordGeneratorContext.Provider value={value}>
      <Wrapper>
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
      </Wrapper>
    </PasswordGeneratorContext.Provider>
  );
};

PasswordGenerator.LengthControl = LengthControl;
PasswordGenerator.Settings = Settings;
