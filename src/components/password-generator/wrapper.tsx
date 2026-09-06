import {PasswordGeneratorContext} from '@/context/password-generator-context';
import {usePasswordGenerator} from '@/hooks/use-password-generator';

const Wrapper = ({children}: {children: React.ReactNode}) => {
  const value = usePasswordGenerator();

  return (
    <PasswordGeneratorContext.Provider value={value}>
      <div className='fixed left-1/2 top-1/2 flex w-xl -translate-x-1/2 -translate-y-1/2 flex-col gap-2 p-3 backdrop-blur-xs rounded-xl bg-black/50 border-b-3 border-r border-green/50 max-w-[95vw]'>
        {children}
      </div>
    </PasswordGeneratorContext.Provider>
  );
};

export default Wrapper;
