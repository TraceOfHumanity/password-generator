import React, { useEffect, useRef, useState } from 'react';
import { FaArrowTurnDown } from 'react-icons/fa6';
import { FiCopy } from 'react-icons/fi';

import { Button } from 'ui-elements/Button';
import { Checkbox } from 'ui-elements/Checkbox';
import { InputRange } from 'ui-elements/InputRange';
import { PasswordLength } from 'ui-elements/PasswordLength';

export const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);

  const generatorWrapperRef = useRef(null);

  // const handleGeneratePassword = () => {
  //   const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  //   const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   const numbers = '0123456789';
  //   const symbols = '!@#$%^&*()_+=';

  //   let characterList = lowercase;
  //   if (includeUppercase) characterList += uppercase;
  //   if (includeNumbers) characterList += numbers;
  //   if (includeSymbols) characterList += symbols;

  //   let generatedPassword = '';
  //   for (let i = 0; i < passwordLength; i++) {
  //     const randomIndex = Math.floor(Math.random() * characterList.length);
  //     generatedPassword += characterList[randomIndex];
  //   }

  //   setPassword(generatedPassword);
  // };

  useEffect(() => {
    const childNodes = generatorWrapperRef.current.childNodes;
    childNodes.forEach((child, index) => {
      child.style.animation = `colorWave 5s ${index * 0.9}s infinite alternate`;
    });
  }, [password]);

  return (
    <div
      className="generatorWrapper fixed left-1/2 top-1/2 flex w-full max-w-xl -translate-x-1/2 -translate-y-1/2 transform flex-col gap-1 rounded-xl border-b-2 border-r-4 border-cyan-600 bg-black bg-opacity-50 p-3 text-cyan-400 shadow-[-10px_-10px_20px_0px_rgba(8,145,178,0.2)] backdrop-blur-sm"
      ref={generatorWrapperRef}
    >
      <h2 className="text-center text-2xl font-bold">Password Generator</h2>
      <PasswordLength passwordLength={passwordLength} />
      <InputRange
        min={8}
        max={32}
        value={passwordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
      />
      {/* <div className="flex items-center justify-between gap-2">
        <label>Include Uppercase</label>
        <Checkbox
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <label>Include Numbers</label>
        <Checkbox
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <label>Include Symbols</label>
        <Checkbox
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <label>Avoid Duplicates</label>
        <Checkbox
          checked={avoidDuplicates}
          onChange={(e) => setAvoidDuplicates(e.target.checked)}
        />
      </div> */}
      {/* <button
        className="rounded-2xl p-2 border-b border-t border-cyan-600 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out font-bold w-full"
        onClick={handleGeneratePassword}
      >
        Generate Password
      </button> */}
      {/* <Button onClick={handleGeneratePassword}>Generate Password</Button> */}
      {/* <div>
        <label className="flex items-center gap-2 mb-1">
          Password <FaArrowTurnDown className="relative top-2 " />
        </label>
      </div> */}
      <div className="flex justify-between gap-2">
        <p>{password}</p>
        <button className="group relative">
          <FiCopy />
          <div className="">copy</div>
        </button>
      </div>
    </div>
  );
};
