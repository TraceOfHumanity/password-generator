import {usePasswordGeneratorContext} from '@/context/password-generator-context';
import Button from '../ui/button';

export const GenerateButton = () => {
  const {generatePassword, isGenerationEnabled} = usePasswordGeneratorContext();

  return (
    <Button
      disabled={!isGenerationEnabled}
      onClick={generatePassword}>
      Generate Password
    </Button>
  );
};
