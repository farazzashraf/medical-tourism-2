import * as React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-14 w-full rounded-2xl border-2 border-gray-100 bg-gray-50/50 px-4 py-2 text-base text-[#131a1b] shadow-xs transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#9ba4a3] focus:bg-white focus-visible:outline-none focus-visible:border-[#afd23f] focus-visible:ring-4 focus-visible:ring-[#afd23f]/20 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
