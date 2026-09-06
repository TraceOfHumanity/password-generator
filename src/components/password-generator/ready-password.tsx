import {usePasswordGeneratorContext} from '@/context/password-generator-context';
import {useEffect, useState} from 'react';
import {FaCheck} from 'react-icons/fa';
import {IoCopyOutline} from 'react-icons/io5';
import Button from '../ui/button';

export const ReadyPassword = () => {
  const {password} = usePasswordGeneratorContext();
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (isCopied) {
      timeoutId = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isCopied]);

  if (!password) return null;

  return (
    <div className='flex items-start gap-2'>
      <p className='min-w-0 flex-1 break-all text-xl font-bold'>{password}</p>
      <Button
        className='relative ml-auto shrink-0 self-start after:absolute after:-left-1/2 after:top-0 after:z-10 after:-translate-x-1/2 after:-translate-y-full after:transform after:rounded-md after:bg-black after:px-2 after:py-1 after:text-xs after:text-white after:opacity-0 after:transition-all after:duration-300 after:ease-in-out after:content-[attr(data-tooltip)] hover:after:opacity-100'
        data-tooltip={isCopied ? 'Copied!' : 'Copy'}
        onClick={() => {
          navigator.clipboard.writeText(password);
          setIsCopied(true);
        }}>
        {isCopied ? <FaCheck /> : <IoCopyOutline />}
      </Button>
    </div>
  );
};
