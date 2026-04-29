import {MatrixBackground} from './components/matrix-background';
import {PasswordGenerator} from './components/password-generator/password-generator';

function App() {
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <MatrixBackground />
      <PasswordGenerator>
        <PasswordGenerator.Header />
        <PasswordGenerator.LengthControl />
        <PasswordGenerator.Settings />
        <PasswordGenerator.GenerateButton />
        <PasswordGenerator.ReadyPassword />
      </PasswordGenerator>
    </div>
  );
}

export default App;
