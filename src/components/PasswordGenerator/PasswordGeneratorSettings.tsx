import {useAppDispatch, useAppSelector} from '@/hooks';
import {
  setIsIncludeNumbers,
  setIsIncludeSymbols,
  setIsIncludeUppercase,
} from '@/redux/features/passwordSlice';
import {Checkbox} from '../ui/Checkbox';

export const PasswordGeneratorSettings = () => {
  const dispatch = useAppDispatch();
  const {isIncludeUppercase, isIncludeNumbers, isIncludeSymbols} =
    useAppSelector((state) => state.password);

  const passwordSettings = [
    {
      label: 'Include Uppercase',
      value: isIncludeUppercase,
      description: 'A-Z',
      onChange: () => dispatch(setIsIncludeUppercase(!isIncludeUppercase)),
    },
    {
      label: 'Include Numbers',
      value: isIncludeNumbers,
      description: '0-9',
      onChange: () => dispatch(setIsIncludeNumbers(!isIncludeNumbers)),
    },
    {
      label: 'Include Symbols',
      value: isIncludeSymbols,
      description: '!@#$%^&*()_+=',
      onChange: () => dispatch(setIsIncludeSymbols(!isIncludeSymbols)),
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
