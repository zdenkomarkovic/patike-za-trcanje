import { cn } from '@/app/lib/utils';
import Container from './Container';

export default function Section({ 
  children, 
  className = '', 
  containerSize = 'default',
  background = 'default',
  padding = 'default',
  ...props 
}) {
  const backgroundClasses = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-r from-blue-600 to-red-600 text-white',
    'gradient-br': 'bg-gradient-to-br from-blue-900 to-red-600 text-white'
  };

  const paddingClasses = {
    sm: 'py-12',
    default: 'py-20',
    lg: 'py-24'
  };

  return (
    <section
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}