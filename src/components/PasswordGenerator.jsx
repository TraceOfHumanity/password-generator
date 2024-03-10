import React from "react";

export const PasswordGenerator = () => {
  const [password, setPassword] = React.useState("");
  const [passwordLength, setPasswordLength] = React.useState(8);
  const [includeUppercase, setIncludeUppercase] = React.useState(false);
  const [includeNumbers, setIncludeNumbers] = React.useState(false);
  const [includeSymbols, setIncludeSymbols] = React.useState(false);
  const [avoidDuplicates, setAvoidDuplicates] = React.useState(false);

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

  return (
    <div>
      <h2>Password Generator</h2>
      <div>
        <label>Password Length</label>
        <input
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </div>
      <div>
        <label>Include Uppercase</label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
      </div>
      <div>
        <label>Include Numbers</label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
      </div>
      <div>
        <label>Include Symbols</label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
      </div>
      <div>
        <label>Avoid Duplicates</label>
        <input
          type="checkbox"
          checked={avoidDuplicates}
          onChange={(e) => setAvoidDuplicates(e.target.checked)}
        />
      </div>
      <button onClick={handleGeneratePassword}>Generate Password</button>
      <div>
        <label>Password: </label>
        <input type="text" value={password} readOnly />
      </div>
    </div>
  );
};
