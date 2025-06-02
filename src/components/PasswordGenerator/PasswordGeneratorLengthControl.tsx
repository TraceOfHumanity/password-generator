import { useAppDispatch, useAppSelector } from "@/hooks";
import { setPasswordLength } from "@/redux/features/passwordSlice";


export const PasswordGeneratorLengthControl = () => {
  const { passwordLength } = useAppSelector((state) => state.password);
  const dispatch = useAppDispatch();
  return (
    <div className="w-full">
      <input
        className="h-1.5 w-full cursor-pointer appearance-none rounded-2xl bg-gradient-to-r from-red-700 via-orange-500 to-green-600 font-bold transition-all duration-300 ease-in-out"
        type="range"
        value={passwordLength}
        min={8}
        max={32}
        onChange={(e) => dispatch(setPasswordLength(parseInt(e.target.value)))}
      />
    </div>
  );
};