import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getImageUrl } from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client';
import Button from '@/app/components/ui/Button';
import ImageGallery from '@/app/components/ImageGalery';

export default async function ProductPage({ params }) {
    const { slug } = await params;

    const product = await client.fetch(`
        *[_type == "product" && slug.current == $slug][0] {
          _id,
          name,
          slug,
          price,
          description,
          images[]{
            asset->{
              _id,
              url
            }
          },
          category->{
            _id,
            name,
            slug
          },
          features,
          sizes,
          colors,
          longDescription
        }
    `, { slug: slug });

  if (!product) {
    notFound();
  }


  const mainImageUrl = product.image?.asset ? getImageUrl(product.image, 800) : product.image?.src || product.image;
  
  // Dodatne slike
  const additionalImages = product.images || [];
  const allImages = product.images || [];

  // Formatiranje cene


  return (
    <div className="min-h-screen bg-gray-500 pt-20">
      {/* Breadcrumb */}


      {/* Proizvod detalji */}
   <div className="bg-gray-100 h-full">

   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

{/* Galerija slika */}
<ImageGallery    images={product.images} productName={product.name} />

          {/* Informacije */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              {product.category && (
                <Link 
                  href={`/kategorije/${product.category.slug.current}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {product.category.name}
                </Link>
              )}
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.longDescription && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">Opis</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>
            )}

            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Karakteristike</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}



            <div className="flex space-x-4">
              <Button className="flex-1">
                Dodaj u korpu
              </Button>
              <Button variant="outline" className="flex-1">
                Dodaj u listu želja
              </Button>
            </div>

            {/* Dodatne informacije */}

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export async function generateStaticParams() {
  const products = await client.fetch(`
    *[_type == "product"] {
      "slug": slug.current
    }
  `);

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export const metadata = {
  title: 'Proizvod - Saucony Shop',
  description: 'Detaljne informacije o proizvodu',
};