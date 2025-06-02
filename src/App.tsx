import {MatrixBg} from "./components/MatrixBg";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* <MatrixBg /> */}
      <PasswordGenerator>
        <PasswordGenerator.Header />
        <PasswordGenerator.LengthControl />
      </PasswordGenerator>
    </div>
  );
}

export default App;
