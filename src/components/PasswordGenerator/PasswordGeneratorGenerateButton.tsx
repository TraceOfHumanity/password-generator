import {useAppDispatch, useAppSelector} from '@/hooks';
import {setPassword} from '@/redux/features/passwordSlice';

export const GeneratePasswordButton = () => {
  const dispatch = useAppDispatch();
  const {
    isIncludeUppercase,
    isIncludeNumbers,
    isIncludeSymbols,
    passwordLength,
  } = useAppSelector((state) => state.password);

  const handleGeneratePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+=';

    let characterList = lowercase;

    if (isIncludeUppercase) characterList += uppercase;
    if (isIncludeNumbers) characterList += numbers;
    if (isIncludeSymbols) characterList += symbols;

    let generatedPassword = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterList.length);
      generatedPassword += characterList[randomIndex];
    }

    dispatch(setPassword(generatedPassword));
  };

  return (
    <button
      className='rounded-lg border border-green p-2 duration-200 hover:bg-green hover:text-black'
      onClick={handleGeneratePassword}>
      Generate Password
    </button>
  );
};
