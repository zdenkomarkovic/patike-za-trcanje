import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/app/lib/utils';

export default function CategoryCard({ 
  category,
  className = '',
  ...props 
}) {
  const href = category.slug?.current ? `/kategorije/${category.slug.current}` : '#';

  return (
    <Link href={href} className={cn('group cursor-pointer block', className)} {...props}>
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
        <div className="aspect-w-16 aspect-h-12 relative h-48">
          <Image
            src={category.image?.src || category.image}
            alt={category.image?.alt || category.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{category.name}</h3>
          <p className="text-sm text-gray-200">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}