import {cn} from '@/utils/cn';

type DividerProps = {
  variant?: 'horizontal' | 'vertical';
};

const Divider = ({variant = 'horizontal'}: DividerProps) => {
  return (
    <div
      className={cn(
        'border-b border-green opacity-30',
        variant === 'horizontal' ? 'w-full h-1' : 'h-full w-1',
      )}
    />
  );
};

export default Divider;
