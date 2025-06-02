import {Checkbox} from "@/components/ui/Checkbox";
import {
  setIncludeNumbers,
  setIncludeSymbols,
  setIncludeUppercase,
} from "@/redux/features/passwordSlice";
import {useAppSelector} from "@/hooks";
import {useDispatch} from "react-redux";

export const PasswordGeneratorSettings = () => {
  const dispatch = useDispatch();
  const {includeUppercase, includeNumbers, includeSymbols} = useAppSelector(
    (state) => state.password,
  );

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

  return (
    <div>
      {passwordSettings.map((setting, index) => (
        <div
          className="flex items-center justify-between gap-2"
          key={index}>
          <span>{setting.label}</span>
          <Checkbox
            checked={setting.value}
            onChange={setting.onChange}
          />
        </div>
      ))}
    </div>
  );
};
