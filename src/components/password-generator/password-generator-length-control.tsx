import {usePasswordGeneratorContext} from '@/context/password-generator-context';

export const LengthControl = () => {
  const {passwordLength, setPasswordLength} = usePasswordGeneratorContext();

  return (
    <div className='flex w-full flex-col gap-2'>
      <p className='text-sm'>
        Password Length:{' '}
        <span className='font-bold text-xl'>{passwordLength}</span>
      </p>
      <input
        className='h-3 w-full cursor-pointer appearance-none rounded-2xl bg-gradient-to-r from-red-500 to-green to-60% shadow-[inset_0_-1px_5px_5px_#0000002f]'
        type='range'
        min={8}
        max={64}
        value={passwordLength}
        onChange={(e) => setPasswordLength(Number(e.target.value))}
      />
    </div>
  );
};
