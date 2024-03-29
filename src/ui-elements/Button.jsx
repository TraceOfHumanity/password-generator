import React from 'react';

export const Button = ({ children, onClick }) => {
  return (
    <button
      className="rounded-lg border border-cyan-800 p-2 duration-200 hover:bg-cyan-800 hover:bg-opacity-20"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
