import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import ImageGallery from "@/app/components/ImageGalery";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = await client.fetch(
    `
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
    `,
    { slug: slug }
  );

  if (!product) {
    notFound();
  }

  const mainImageUrl = product.image?.asset
    ? getImageUrl(product.image, 800)
    : product.image?.src || product.image;

  // Dodatne slike
  const additionalImages = product.images || [];
  const allImages = product.images || [];

  return (
    <div className="min-h-screen bg-gray-500 pt-20">
      {/* Proizvod detalji */}
      <div className="bg-gradient-to-br from-[#e6e0f8] to-white h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informacije - PRIKAZUJE SE PRVO NA MOBILNOM */}
            <div className="space-y-10 text-center order-1 lg:order-2">
              <div>
                <h1 className="text-2xl md:text-5xl text font-bold text-gray-900 mb-6">
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

              <div className="flex flex-col gap-1 text-center">
                <a
                  href="tel:+381643824647"
                  className="text-white w-fit mx-auto text-xl md:text-2xl flex items-center gap-2 bg-gradient-to-r from-[#f75760] to-[#954ffd] px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#954ffd] hover:to-[#f75760]"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +381643824647
                </a>
                <p className="text-base mt-1">
                  Pozovite nas za brzu konsultaciju
                </p>
              </div>
            </div>

            {/* Galerija slika - PRIKAZUJE SE DRUGO NA MOBILNOM */}
            <div className="order-2 lg:order-1">
              <ImageGallery
                images={product.images}
                productName={product.name}
              />
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
  title: "Proizvod - Saucony Shop",
  description: "Detaljne informacije o proizvodu",
};
