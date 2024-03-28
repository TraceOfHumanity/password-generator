import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPasswordLength } from '../redux/features/passwordSlice';

export const InputRange = () => {
  const { passwordLength } = useSelector((state) => state.password);
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <input
        className="h-1.5 w-full cursor-pointer appearance-none rounded-2xl bg-gradient-to-r from-red-700 via-orange-500 to-green-600 font-bold transition-all duration-300 ease-in-out"
        type="range"
        value={passwordLength}
        min={8}
        max={32}
        onChange={(e) => dispatch(setPasswordLength(e.target.value))}
      />
    </div>
  );
};
