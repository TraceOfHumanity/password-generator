import React from "react";
import {useDispatch} from "react-redux";

import {
  setIncludeNumbers,
  setIncludeSymbols,
  setIncludeUppercase,
  setPassword,
} from "../redux/slices/passwordSlice";
import {useAppSelector} from "./useReduxToolkit";

export const usePasswordGenerator = () => {
  const dispatch = useDispatch();
  const {
    passwordLength,
    includeUppercase,
    includeNumbers,
    includeSymbols,
  } = useAppSelector((state) => state.password);

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
    dispatch(setPassword(generatedPassword));
  };

  const passwordSettings = [
    {
      label: "Include Uppercase",
      value: includeUppercase,
      onChange: () => dispatch(setIncludeUppercase(!includeUppercase)),
    },
    {
      label: "Include Numbers",
      value: includeNumbers,
      onChange: () => dispatch(setIncludeNumbers(!includeNumbers)),
    },
    {
      label: "Include Symbols",
      value: includeSymbols,
      onChange: () => dispatch(setIncludeSymbols(!includeSymbols)),
    },
  ];
  return {handleGeneratePassword, passwordSettings};
};