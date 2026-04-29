import {usePasswordGenerator} from '@/hooks/usePasswordGenerator';
import {Checkbox} from '../ui/Checkbox';

export const Settings = () => {
  const {
    isIncludeUppercase,
    isIncludeNumbers,
    isIncludeSymbols,
    toggleIncludeUppercase,
    toggleIncludeNumbers,
    toggleIncludeSymbols,
  } = usePasswordGenerator();

  const passwordSettings = [
    {
      label: 'Include Uppercase',
      value: isIncludeUppercase,
      description: 'A-Z',
      onChange: toggleIncludeUppercase,
    },
    {
      label: 'Include Numbers',
      value: isIncludeNumbers,
      description: '0-9',
      onChange: toggleIncludeNumbers,
    },
    {
      label: 'Include Symbols',
      value: isIncludeSymbols,
      description: '!@#$%^&*()_+=',
      onChange: toggleIncludeSymbols,
    },
  ];

  return (
    <div className='flex flex-col gap-2'>
      {passwordSettings.map((setting, index) => (
        <div
          className='flex items-center justify-between'
          key={index}>
          <p className='flex items-center gap-2 text-sm'>
            {setting.label}
            <span className='text-xs text-green'>
              <span className='text-white/20'>(</span>
              {setting.description}
              <span className='text-white/20'>)</span>
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
