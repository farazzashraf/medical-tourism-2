import * as React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'lime' | 'mint' | 'outline' | 'secondary';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const base = 'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wide transition-colors';
  const variants = {
    default: 'bg-[#0b383e] text-white',
    lime: 'bg-[#f4fae1] text-[#0b383e] border border-[#afd23f]/50',
    mint: 'bg-[#eef7f5] text-[#0b383e] border border-[#b9dcd5]',
    secondary: 'bg-[#f8fafa] text-[#404948] border border-[#e1e6e5]',
    outline: 'border border-[#0b383e] text-[#0b383e]'
  };

  return <div className={cn(base, variants[variant], className)} {...props} />;
}

export { Badge };
