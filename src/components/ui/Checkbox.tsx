import {FaCheck} from "react-icons/fa6";

import {cn} from "@/utils/cn";

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
};

export const Checkbox = ({checked, onChange}: CheckboxProps) => {
  return (
    <label className="w-fit cursor-pointer">
      <input
        className="absolute hidden h-0 w-0"
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <span
        className={cn(
          "flex size-5 items-center justify-center rounded border border-cyan-600",
        )}>
        {checked && <FaCheck className="h-4 w-4 text-white" />}
      </span>
    </label>
  );
};
