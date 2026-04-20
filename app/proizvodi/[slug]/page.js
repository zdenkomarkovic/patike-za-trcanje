import { notFound } from "next/navigation";
import Link from "next/link";
import { getImageUrl } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import ImageGallery from "@/app/components/ImageGalery";
import { PortableText } from "@portabletext/react";

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
    <div className="min-h-screen primarybg pt-20">
      {/* Proizvod detalji */}
      <div className="secondary primarytext min-h-screen ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informacije - PRIKAZUJE SE PRVO NA MOBILNOM */}
            <div className="space-y-10 text-center order-1 lg:order-2">
              <div>
                <h1 className="text-2xl md:text-5xl text font-bold mb-6">
                  {product.name}
                </h1>
                {product.category && (
                  <Link
                    href={`/kategorije/${product.category.slug.current}`}
                    className=" font-medium"
                  >
                    {product.category.name}
                  </Link>
                )}
              </div>
              {product.description && (
                <div className="prose max-w-none text-lg leading-relaxed">
                  <PortableText value={product.description} />
                </div>
              )}

              {product.longDescription && (
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-3">Opis</h3>
                  <p className=" leading-relaxed">{product.longDescription}</p>
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
                  href="https://www.instagram.com/direct/t/17842875777560468/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white w-fit mx-auto text-xl md:text-2xl flex items-center gap-2 primarybg px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg "
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Pošalji upit za ovaj model
                </a>
                <p className="text-base mt-1">Tu sam da pomognem oko izbora</p>
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

export const dynamic = "force-dynamic";
