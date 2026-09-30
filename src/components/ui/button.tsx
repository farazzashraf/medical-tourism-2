import * as React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'lime' | 'dark';
  size?: 'default' | 'sm' | 'lg' | 'pill' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
    
    const variants = {
      default: 'bg-[#0b383e] text-white hover:bg-[#095458] active:bg-[#072b2e] shadow-sm',
      lime: 'bg-[#afd23f] text-[#0b383e] font-bold hover:bg-[#c8e165] shadow-md shadow-[#afd23f]/25 hover:shadow-lg hover:shadow-[#afd23f]/35 hover:-translate-y-0.5 active:translate-y-0',
      secondary: 'bg-[#f0f7f7] text-[#0b383e] hover:bg-[#d6ebe8]',
      outline: 'border-2 border-[#0b383e] text-[#0b383e] bg-transparent hover:bg-[#0b383e] hover:text-white',
      ghost: 'text-white hover:bg-white/10 active:bg-white/15',
      dark: 'bg-[#072b2e] text-white hover:bg-[#0b383e]',
      link: 'text-[#0b383e] underline-offset-4 hover:underline'
    };

    const sizes = {
      default: 'h-11 px-5 py-2.5 rounded-full',
      sm: 'h-9 px-3.5 text-xs rounded-full',
      lg: 'h-13 px-8 text-base rounded-full',
      pill: 'h-12 px-7 rounded-full',
      icon: 'h-10 w-10 rounded-full'
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
