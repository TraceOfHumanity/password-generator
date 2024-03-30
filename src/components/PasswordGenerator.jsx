import { usePasswordGenerator } from 'hooks/usePasswordGenerator';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { Button } from 'ui-elements/Button';
import { Checkbox } from 'ui-elements/Checkbox';
import { InputRange } from 'ui-elements/InputRange';
import { PasswordLength } from 'ui-elements/PasswordLength';

import { ReadyPassword } from '../ui-elements/ReadyPassword';

export const PasswordGenerator = () => {
  const generatorWrapperRef = useRef(null);
  const { password } = useSelector((state) => state.password);
  const { handleGeneratePassword, passwordSettings } = usePasswordGenerator();

  useEffect(() => {
    const childNodes = generatorWrapperRef.current.childNodes;
    childNodes.forEach((child, index) => {
      child.style.animation = `colorWave 5s ${index * 0.9}s infinite alternate`;
    });
  }, []);

  return (
    <div
      className="generatorWrapper fixed left-1/2 top-1/2 flex w-full max-w-xl -translate-x-1/2 -translate-y-1/2 transform flex-col gap-2 rounded-xl border-b-2 border-r-4 border-cyan-600 bg-black bg-opacity-50 p-3 text-cyan-400 shadow-[-10px_-10px_20px_0px_rgba(8,145,178,0.2)] backdrop-blur-sm"
      ref={generatorWrapperRef}
    >
      <h2 className="text-center text-2xl font-bold">Password Generator</h2>
      <PasswordLength />
      <InputRange />
      {passwordSettings.map((setting, index) => (
        <div className="flex items-center justify-between gap-2" key={index}>
          <span>{setting.label}</span>
          <Checkbox checked={setting.value} onChange={setting.onChange} />
        </div>
      ))}
      <Button onClick={() => handleGeneratePassword()}>
        Generate Password
      </Button>
      {password && <ReadyPassword />}
    </div>
  );
};
