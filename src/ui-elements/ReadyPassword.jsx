import React from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';

export const ReadyPassword = () => {
  const { password } = useSelector((state) => state.password);
  return (
    <div className="flex items-center justify-between gap-2">
      <div>{password}</div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(password);
        }}
      >
        <IoCopyOutline />
      </button>
    </div>
  );
};
