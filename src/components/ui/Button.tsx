import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const Button = ({children, onClick}: ButtonProps) => {
  return (
    <button
      className="rounded-lg border border-cyan-800 p-2 duration-200 hover:bg-cyan-800 hover:bg-opacity-20"
      onClick={onClick}
    >
      {children}
    </button>
  );
};