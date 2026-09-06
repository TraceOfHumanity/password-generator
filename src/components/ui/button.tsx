import {cn} from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button = ({className, children}: ButtonProps) => {
  return (
    <button
      className={cn(
        'border-1 border-green rounded p-2 duration-200  hover:bg-green hover:text-black disabled:opacity-50',
        className,
      )}>
      {children}
    </button>
  );
};

export default Button;
