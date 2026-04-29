import {usePasswordGeneratorContext} from '@/context/password-generator-context';
import {Checkbox} from '../ui/checkbox';

export const Settings = () => {
  const {
    isIncludeLowercase,
    isIncludeUppercase,
    isIncludeNumbers,
    isIncludeSymbols,
    isIncludeCustomSymbols,
    customSymbols,
    setCustomSymbols,
    toggleIncludeLowercase,
    toggleIncludeUppercase,
    toggleIncludeNumbers,
    toggleIncludeSymbols,
    toggleIncludeCustomSymbols,
  } = usePasswordGeneratorContext();

  const passwordSettings = [
    {
      label: 'Lowercase',
      value: isIncludeLowercase,
      description: 'a-z',
      onChange: toggleIncludeLowercase,
    },
    {
      label: 'Uppercase',
      value: isIncludeUppercase,
      description: 'A-Z',
      onChange: toggleIncludeUppercase,
    },
    {
      label: 'Numbers',
      value: isIncludeNumbers,
      description: '0-9',
      onChange: toggleIncludeNumbers,
    },
    {
      label: 'Symbols',
      value: isIncludeSymbols,
      description: '!@#$%^&*()_+=',
      onChange: toggleIncludeSymbols,
    },
    {
      label: 'Custom Symbols',
      value: isIncludeCustomSymbols,
      onChange: toggleIncludeCustomSymbols,
      isCustomSymbols: true,
    },
  ];

  return (
    <div className='flex flex-col gap-2'>
      {passwordSettings.map((setting, index) => (
        <div
          className='flex items-center justify-between gap-2'
          key={index}>
          <p className='grid grid-cols-[auto_1fr] items-center gap-2 text-sm  w-full'>
            {setting.label}
            {setting.isCustomSymbols ? (
              <input
                className='h-8 w-full rounded-md border border-white/20 bg-black/20 px-2 text-xs outline-none focus:border-green'
                type='text'
                placeholder='Enter symbols'
                value={customSymbols}
                onChange={(e) => setCustomSymbols(e.target.value)}
              />
            ) : (
              <span className='text-xs text-green'>
                <span className='text-white/20'>(</span>
                {setting.description}
                <span className='text-white/20'>)</span>
              </span>
            )}
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
