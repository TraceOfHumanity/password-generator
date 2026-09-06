import {Header} from './header';
import {LengthControl} from './length-control';
import {ReadyPassword} from './ready-password';
import {Settings} from './settings/settings';
import {GenerateButton} from './generate-button';
import Divider from '../ui/divider';
import Wrapper from './wrapper';

export const PasswordGenerator = () => {
  return (
    <Wrapper>
      <Header />
      <LengthControl />
      <Settings />
      <Divider />
      <ReadyPassword />
      <GenerateButton />
    </Wrapper>
  );
};
