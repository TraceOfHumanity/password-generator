import React from "react";

export const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      className="appearance-none bg-white bg-check h-4 w-4 border border-gray-300 rounded-full checked:bg-cyan-600 checked:border-transparent focus:outline-none checked:ring-1 checked:ring-cyan-600 checked:ring-offset-1 checked:ring-offset-white checked:ring-offset-opacity-50"
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};
