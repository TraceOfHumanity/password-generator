import {Checkbox} from '../../ui/checkbox';

type SettingRowProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
};

export const SettingRow = ({
  label,
  checked,
  onChange,
  children,
}: SettingRowProps) => {
  return (
    <div className='flex items-center justify-between gap-2'>
      <p className='grid w-full grid-cols-[auto_1fr] items-center gap-2 text-sm'>
        {label}
        {children}
      </p>
      <Checkbox
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};
