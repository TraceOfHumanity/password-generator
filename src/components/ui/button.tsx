import {cn} from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button = ({className, children, ...props}: ButtonProps) => {
  return (
    <button
      className={cn(
        'border-1 border-green rounded p-2 duration-200  hover:bg-green hover:text-black disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white',
        className,
      )}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
