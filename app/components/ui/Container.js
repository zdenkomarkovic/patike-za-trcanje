import { cn } from '@/app/lib/utils';

export default function Container({ children, className = '', size = 'default', ...props }) {
  const sizeClasses = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-8xl'
  };

  return (
    <div
      className={cn(
        sizeClasses[size],
        'mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}