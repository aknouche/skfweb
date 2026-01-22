/**
 * SectionHeader Component
 * Reusable section header with title and accent line.
 */

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  variant?: 'default' | 'light';
}

export function SectionHeader({
  title,
  subtitle,
  variant = 'default',
}: SectionHeaderProps) {
  const titleColor = variant === 'light' ? 'text-gray-900' : 'text-skf-blue';

  return (
    <div className="mb-12 text-center">
      <h2 className={`mb-4 text-3xl font-bold sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mb-4 max-w-2xl text-lg text-gray-600">
          {subtitle}
        </p>
      )}
      <div className="mx-auto h-1 w-16 bg-skf-yellow" />
    </div>
  );
}
