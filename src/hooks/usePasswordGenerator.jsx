import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setAvoidDuplicates,
  setIncludeNumbers,
  setIncludeSymbols,
  setIncludeUppercase,
  setPassword,
} from '../redux/features/passwordSlice';

export const usePasswordGenerator = () => {
  const dispatch = useDispatch();
  const {
    passwordLength,
    includeUppercase,
    includeNumbers,
    includeSymbols,
    avoidDuplicates,
  } = useSelector((state) => state.password);

  const handleGeneratePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+=';

    let characterList = lowercase;
    if (includeUppercase) characterList += uppercase;
    if (includeNumbers) characterList += numbers;
    if (includeSymbols) characterList += symbols;

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterList.length);
      generatedPassword += characterList[randomIndex];
    }
    dispatch(setPassword(generatedPassword));
  };

  const passwordSettings = [
    {
      label: 'Include Uppercase',
      value: includeUppercase,
      onChange: () => dispatch(setIncludeUppercase(!includeUppercase)),
    },
    {
      label: 'Include Numbers',
      value: includeNumbers,
      onChange: () => dispatch(setIncludeNumbers(!includeNumbers)),
    },
    {
      label: 'Include Symbols',
      value: includeSymbols,
      onChange: () => dispatch(setIncludeSymbols(!includeSymbols)),
    },
  ];
  return { handleGeneratePassword, passwordSettings };
};
