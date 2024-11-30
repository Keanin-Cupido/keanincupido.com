import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Base button styles with improved accessibility and modern design
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        // Primary button with gradient
        default: 
          'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 hover:from-blue-600 hover:to-blue-800',
        
        // Modern gradient style
        defaultGradient:
          'bg-gradient-to-b from-blue-400/75 to-blue-600/50 text-white shadow-lg shadow-blue-300/10 border border-white/10 hover:border-white/20 hover:from-blue-400/90 hover:to-blue-700/75 hover:shadow-xl hover:shadow-blue-400/20',
        
        // Danger/Warning button
        destructive:
          'bg-destructive text-destructive-foreground shadow hover:bg-destructive/90 hover:shadow-destructive/25',
        
        // Outlined style
        outline:
          'border-2 border-blue-500/50 bg-transparent text-blue-500 hover:bg-blue-500/10 hover:border-blue-500',
        
        // Secondary style
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-secondary/25',
        
        // Ghost style
        ghost: 
          'hover:bg-accent/50 hover:text-accent-foreground data-[state=open]:bg-accent/50',
        
        // Link style
        link: 
          'text-primary underline-offset-4 hover:underline decoration-blue-500',
      },
      size: {
        default: 'h-10 px-4 py-2 text-[clamp(13px,0.9vw,15px)]',
        sm: 'h-9 rounded-md px-2 text-[clamp(12px,0.85vw,14px)]',
        md: 'h-11 rounded-md px-5 text-[clamp(13px,0.9vw,15px)]',
        lg: 'h-12 rounded-md px-7 text-[clamp(14px,0.95vw,16px)]',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = React.forwardRef(({ 
  className, 
  variant, 
  size, 
  asChild = false, 
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants };
