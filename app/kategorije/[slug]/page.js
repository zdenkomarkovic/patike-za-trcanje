import { client } from "@/sanity/lib/client";
import {
  categoryBySlugQuery,
  productsByCategoryQuery,
} from "@/sanity/lib/queries";
import { getImageUrl } from "@/sanity/lib/image";
import Button from "@/app/components/ui/Button";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  try {
    // Fetch category data
    const category = await client.fetch(categoryBySlugQuery, { slug });

    if (!category) {
      notFound();
    }

    // Fetch products for this category
    const products = await client.fetch(productsByCategoryQuery, {
      categoryId: category._id,
    });

    return (
      <div className="min-h-screen bg-gray-50">
        <section className="h-[70dvh] relative">
          <Image src={getImageUrl(category.image)} fill alt={category.image.alt || category.name} className="absolute inset-0 object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end md:justify-center items-start  h-full">
            <h1 className="md:text-4xl text-2xl lg:text-5xl font-bold mb-6 text-white">
              {category.name}
            </h1>
            {category.description && (
                <p className="md:text-xl text-sm text-blue-100  mx-auto">
                  {category.description}
                </p>
              )}
          </div>
        </section>
        {/* Hero Section */}
        {/* <section className="bg-gradient-to-br from-blue-900 to-red-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {category.name}
              </h1>
              {category.description && (
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  {category.description}
                </p>
              )}
            </div>
          </div>
        </section> */}



        {/* Products Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {products.length > 0 ? (
              <>
        
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map((product) => (
                    <div
                      key={product._id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      {product.images && product.images[0] && (
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={getImageUrl(product.images[0], 600)}
                            alt={product.images[0].alt || product.name}
                            className="absolute object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                          />
                          {product.featured && (
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Izdvojeno
                            </div>
                          )}
                        </div>
                      )}

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        {product.brand && (
                          <div className="text-sm text-gray-500 mb-2">
                            {product.brand}
                          </div>
                        )}
                        {product.shortDescription && (
                          <p className="text-gray-600 mb-4">
                            {product.shortDescription}
                          </p>
                        )}

       
                        <Link
                          className="w-full text-center block mt-4 px-4 py-2 bg-gradient-to-r from-[#fc5859] to-[#9053F9] text-white rounded-lg hover:bg-blue-700 transition"
                          href={`/proizvodi/${product.slug.current}`}
                        >
                          Pogledaj detalje
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Nema proizvoda u ovoj kategoriji
                </h3>
                <p className="text-gray-600 mb-8">
                  Trenutno nema dostupnih proizvoda u kategoriji &quot;
                  {category.name}&quot;.
                </p>
                <Link
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  href="/kategorije"
                >
                  Pogledaj sve kategorije
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Trebate pomoć u izboru?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Kontaktirajte nas za personalizovanu preporuku patika
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Pozovite: +381 64 382 4647
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="border-2 border-white/30 hover:border-white"
              >
                Pošaljite upit
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error("Error fetching category:", error);
    notFound();
  }
}

// Server-side: generate static paths
export async function generateStaticParams() {
  try {
    const categories = await client.fetch(`
      *[_type == "category" && isActive == true] {
        "slug": slug.current
      }
    `);

    return categories.map((category) => ({
      slug: category.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
