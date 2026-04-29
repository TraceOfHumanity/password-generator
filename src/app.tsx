import Background from './components/background/background';
import Wrapper from './components/page-wrapper';
import {PasswordGenerator} from './components/password-generator/password-generator';

function App() {
  return (
    <Wrapper>
      <Background />
      <PasswordGenerator>
        <PasswordGenerator.Header />
        <PasswordGenerator.LengthControl />
        <PasswordGenerator.Settings />
        <PasswordGenerator.GenerateButton />
        <PasswordGenerator.ReadyPassword />
      </PasswordGenerator>
    </Wrapper>
  );
}

export default App;
