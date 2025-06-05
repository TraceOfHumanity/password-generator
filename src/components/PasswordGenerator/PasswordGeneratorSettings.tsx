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
      description: "A-Z",
      onChange: () => dispatch(setIncludeUppercase(!includeUppercase)),
    },
    {
      label: "Include Numbers",
      value: includeNumbers,
      description: "0-9",
      onChange: () => dispatch(setIncludeNumbers(!includeNumbers)),
    },
    {
      label: "Include Symbols",
      value: includeSymbols,
      description: "!@#$%^&*()_+=",
      onChange: () => dispatch(setIncludeSymbols(!includeSymbols)),
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      {passwordSettings.map((setting, index) => (
        <div
          className="flex items-center justify-between"
          key={index}>
          <p className="flex items-center gap-2 text-sm">
            {setting.label}
            <span className="text-xs text-green">
              <span className="text-white/20">(</span>
              {setting.description}
              <span className="text-white/20">)</span>
            </span>
          </p>
          <Checkbox
            checked={setting.value}
            onChange={setting.onChange}
          />
        </div>
      ))}
    </div>
  );
};
