import React from 'react';
import { useSelector } from 'react-redux';

export const PasswordLength = () => {
  const { passwordLength } = useSelector((state) => state.password);
  return <div>Password length: {passwordLength}</div>;
};
