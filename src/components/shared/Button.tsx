'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-label-md transition-all rounded-full',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-on-primary hover:opacity-80',
        outline: 'border border-outline text-on-surface hover:bg-surface-container transition-colors',
        ghost: 'text-on-surface-variant hover:text-primary transition-colors',
      },
      size: {
        default: 'px-6 py-2 text-sm',
        large: 'px-8 py-4 text-base',
        small: 'px-4 py-1.5 text-xs',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  href?: string;
  className?: string;
}

export function Button({ variant, size, children, href, className, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export { buttonVariants };