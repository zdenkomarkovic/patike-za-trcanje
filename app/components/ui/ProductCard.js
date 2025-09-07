import Image from 'next/image';
import { cn } from '@/app/lib/utils';
import Card, { CardContent } from './Card';
import Button from './Button';

export default function ProductCard({ 
  product,
  className = '',
  onViewDetails,
  ...props 
}) {
  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(product);
    } else if (product.slug?.current) {
      window.location.href = `/proizvodi/${product.slug.current}`;
    }
  };

  return (
    <Card className={cn('overflow-hidden group', className)} {...props}>
      {product.images && product.images[0] && (
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.images[0].src || product.images[0]}
            alt={product.images[0].alt || product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Izdvojeno
            </div>
          )}
        </div>
      )}
      
      <CardContent>
        {product.brand && (
          <div className="text-sm text-gray-500 mb-2">{product.brand}</div>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
        {product.shortDescription && (
          <p className="text-gray-600 mb-4">{product.shortDescription}</p>
        )}
        
        {product.price && (
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-blue-600">
              {typeof product.price === 'object' ? (
                <>
                  {product.price.amount} {product.price.currency}
                  {product.price.unit && (
                    <span className="text-sm text-gray-500 ml-1">
                      {product.price.unit}
                    </span>
                  )}
                </>
              ) : (
                product.price
              )}
            </div>
            {product.inStock !== undefined && (
              <span className={cn(
                'text-sm font-medium',
                product.inStock ? 'text-green-600' : 'text-red-600'
              )}>
                {product.inStock ? 'Na stanju' : 'Nema na stanju'}
              </span>
            )}
          </div>
        )}

        <Button 
          variant="primary" 
          className="w-full"
          onClick={handleViewDetails}
        >
          Pogledaj detalje
        </Button>
      </CardContent>
    </Card>
  );
}