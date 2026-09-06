import {cn} from '@/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({className, type = 'text', ...props}: InputProps) => {
  return (
    <input
      className={cn(
        'h-8 w-full rounded-md border border-white/20 bg-black/20 px-2 text-xs outline-none focus:border-green',
        className,
      )}
      type={type}
      {...props}
    />
  );
};

export default Input;
