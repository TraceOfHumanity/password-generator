import {useAppDispatch, useAppSelector} from "@/hooks";
import {setPasswordLength} from "@/redux/features/passwordSlice";

export const PasswordGeneratorLengthControl = () => {
  const {passwordLength} = useAppSelector((state) => state.password);
  const dispatch = useAppDispatch();
  return (
    <div className="w-full">
      <div>Password length: {passwordLength}</div>
      <input
        className="h-6 w-full cursor-pointer appearance-none rounded-2xl bg-gradient-to-r from-red-500 to-[#CAE0BA] to-60% font-bold transition-all duration-300 ease-in-out shadow-[inset_0_-1px_5px_5px_#0000002f]"
        type="range"
        value={passwordLength}
        min={8}
        max={32}
        onChange={(e) => dispatch(setPasswordLength(parseInt(e.target.value)))}
      />
    </div>
  );
};
