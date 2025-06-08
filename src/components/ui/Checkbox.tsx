import {FaCheck} from 'react-icons/fa';

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const Checkbox = ({checked, onChange}: CheckboxProps) => {
  return (
    <label className='w-fit cursor-pointer'>
      <input
        className='hidden'
        type='checkbox'
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <span className='flex size-5 items-center justify-center rounded border border-white'>
        {checked && <FaCheck className='text-white size-4' />}
      </span>
    </label>
  );
};
