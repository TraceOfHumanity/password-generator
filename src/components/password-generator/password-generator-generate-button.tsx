import {usePasswordGeneratorContext} from '@/context/password-generator-context';

export const GeneratePasswordButton = () => {
  const {generatePassword, isGenerationEnabled} = usePasswordGeneratorContext();

  return (
    <button
      className='rounded-lg border border-green p-2 duration-200 hover:bg-green hover:text-black disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-white'
      disabled={!isGenerationEnabled}
      onClick={generatePassword}>
      Generate Password
    </button>
  );
};
