import { cn } from '@/app/lib/utils';
import Card, { CardContent } from './Card';

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  iconColor = 'blue',
  className = '',
  ...props 
}) {
  const iconColorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    red: 'bg-red-100 text-red-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600'
  };

  return (
    <Card className={cn('hover:shadow-xl transition-shadow', className)} {...props}>
      <CardContent className="p-8">
        <div className={cn(
          'w-16 h-16 rounded-xl flex items-center justify-center mb-6',
          iconColorClasses[iconColor]
        )}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}