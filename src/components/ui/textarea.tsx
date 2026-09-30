import * as React from 'react';
import { cn } from '../../lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[120px] w-full rounded-2xl border-2 border-gray-100 bg-gray-50/50 px-4 py-3 text-base text-[#131a1b] shadow-xs transition-all placeholder:text-[#9ba4a3] focus:bg-white focus-visible:outline-none focus-visible:border-[#afd23f] focus-visible:ring-4 focus-visible:ring-[#afd23f]/20 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
