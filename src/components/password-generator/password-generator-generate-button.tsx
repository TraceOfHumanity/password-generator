import {usePasswordGeneratorContext} from '@/context/password-generator-context';

export const GeneratePasswordButton = () => {
  const {generatePassword} = usePasswordGeneratorContext();

  return (
    <button
      className='rounded-lg border border-green p-2 duration-200 hover:bg-green hover:text-black'
      onClick={generatePassword}>
      Generate Password
    </button>
  );
};
