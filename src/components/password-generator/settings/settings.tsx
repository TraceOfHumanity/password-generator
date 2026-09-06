import {usePasswordGeneratorContext} from '@/context/password-generator-context';
import Input from '../../ui/input';
import {SettingRow} from './setting-row';
import {SettingDescription} from './setting-description';

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
      {passwordSettings.map((setting) => (
        <SettingRow
          key={setting.label}
          label={setting.label}
          checked={setting.value}
          onChange={setting.onChange}>
          {setting.isCustomSymbols ? (
            <Input
              placeholder='Enter symbols'
              value={customSymbols}
              onChange={(e) =>
                setCustomSymbols(e.target.value.replace(/\s+/g, ''))
              }
            />
          ) : (
            <SettingDescription>{setting.description}</SettingDescription>
          )}
        </SettingRow>
      ))}
    </div>
  );
};
