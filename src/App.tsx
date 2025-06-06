import {MatrixBackground} from "./components/MatrixBackground";
import {PasswordGenerator} from "./components/PasswordGenerator";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden">
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
