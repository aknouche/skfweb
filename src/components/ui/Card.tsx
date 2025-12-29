/**
 * Card Component
 * Reusable card for content blocks (news, events, etc.)
 */

interface CardProps {
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({ className = '', padding = 'md', children }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
