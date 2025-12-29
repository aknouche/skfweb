/**
 * Button Component
 * Reusable button following SKF brand guidelines.
 */

import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
}

const baseStyles =
  'inline-flex items-center justify-center font-semibold no-underline transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2';

const variantStyles = {
  primary:
    'bg-skf-blue text-white hover:bg-skf-blue-700 focus-visible:outline-skf-yellow',
  secondary:
    'bg-white text-skf-blue border-2 border-skf-blue hover:bg-skf-blue-50 focus-visible:outline-skf-blue',
  accent:
    'bg-skf-yellow text-skf-blue hover:bg-skf-yellow-400 focus-visible:outline-skf-blue',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-6 py-3 text-base rounded-md',
  lg: 'px-8 py-4 text-lg rounded-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  type = 'button',
  disabled = false,
  children,
}: ButtonProps) {
  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '';

  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabledStyles,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
