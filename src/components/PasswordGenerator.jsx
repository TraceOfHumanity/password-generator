import React from "react";
import { Checkbox } from "./Checkbox";
import { FiCopy } from "react-icons/fi";
import { FaArrowTurnDown } from "react-icons/fa6";

export const PasswordGenerator = () => {
  const [password, setPassword] = React.useState("");
  const [passwordLength, setPasswordLength] = React.useState(12);
  const [includeUppercase, setIncludeUppercase] = React.useState(false);
  const [includeNumbers, setIncludeNumbers] = React.useState(false);
  const [includeSymbols, setIncludeSymbols] = React.useState(false);
  const [avoidDuplicates, setAvoidDuplicates] = React.useState(false);

  const generatorWrapperRef = React.useRef(null);

  const handleGeneratePassword = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=";

    let characterList = lowercase;
    if (includeUppercase) characterList += uppercase;
    if (includeNumbers) characterList += numbers;
    if (includeSymbols) characterList += symbols;

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterList.length);
      generatedPassword += characterList[randomIndex];
    }

    setPassword(generatedPassword);
  };

  React.useEffect(() => {
    const childNodes = generatorWrapperRef.current.childNodes;
    childNodes.forEach((child, index) => {
      child.style.animation = `colorWave 5s ${index * 0.5}s infinite alternate`;
    });
  }, [password]);

  return (
    <div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-r-4 border-b-2 rounded-xl backdrop-blur-sm p-3 border-cyan-600 text-cyan-400 bg-black bg-opacity-50 flex flex-col gap-1 shadow-[-10px_-10px_20px_0px_rgba(8,145,178,0.2)] generatorWrapper"
      ref={generatorWrapperRef}
    >
      <h2 className="text-center font-bold text-2xl">Password Generator</h2>
      <div>
        <label>Password length: </label>
        <span>{passwordLength}</span>
      </div>
      <input
        className="w-full"
        type="range"
        value={passwordLength}
        min={8}
        max={32}
        onChange={(e) => setPasswordLength(e.target.value)}
      />
      <div className="flex items-center gap-2 justify-between">
        <label>Include Uppercase</label>
        <Checkbox
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
      </div>
      <div className="flex items-center gap-2 justify-between">
        <label>Include Numbers</label>
        <Checkbox
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
      </div>
      <div className="flex items-center gap-2 justify-between">
        <label>Include Symbols</label>
        <Checkbox
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
      </div>
      <div className="flex items-center gap-2 justify-between">
        <label>Avoid Duplicates</label>
        <Checkbox
          checked={avoidDuplicates}
          onChange={(e) => setAvoidDuplicates(e.target.checked)}
        />
      </div>
      <button
        className="rounded-2xl p-2 border-b border-t border-cyan-600 hover:bg-cyan-600 hover:text-white"
        onClick={handleGeneratePassword}
      >
        Generate Password
      </button>
      {password && (
        <>
          <div>
            <label className="flex items-center gap-2 mb-1">
              Password <FaArrowTurnDown className="relative top-2 " />
            </label>
          </div>
          <div className="flex justify-between gap-2">
            {/* <input type="text" value={password} readOnly /> */}
            <p>{password}</p>
            <button>
              <FiCopy />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
