import {usePasswordGenerator} from '@/hooks/use-password-generator';

export const GeneratePasswordButton = () => {
  const {generatePassword} = usePasswordGenerator();

  return (
    <button
      className='rounded-lg border border-green p-2 duration-200 hover:bg-green hover:text-black'
      onClick={generatePassword}>
      Generate Password
    </button>
  );
};
