import { client } from "@/sanity/lib/client";
import {
  categoryBySlugQuery,
  productsByCategoryQuery,
  productsBySubcategoryQuery,
} from "@/sanity/lib/queries";
import { getImageUrl } from "@/sanity/lib/image";
import Button from "@/app/components/ui/Button";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/app/components/sections/CTASection";

export default async function CategoryPage({ params, searchParams }) {
  const { slug } = await params;
  const selectedSubcategory = searchParams?.subcategory;
  
  try {
    // Fetch category data
    const category = await client.fetch(categoryBySlugQuery, { slug });

    if (!category) {
      notFound();
    }

    // Fetch subcategories for this category
    const subcategories = await client.fetch(`
      *[_type == "subcategory" && parentCategory._ref == $categoryId && isActive == true] | order(order asc) {
        _id,
        name,
        slug,
        description,
        order,
        isActive
      }
    `, { categoryId: category._id });

    // Add subcategories to category object
    category.subcategories = subcategories;

    // Fetch products for this category or subcategory
    let products;
    if (selectedSubcategory) {
      // Filter products by subcategory
      const allProducts = await client.fetch(productsByCategoryQuery, {
        categoryId: category._id,
      });
      products = allProducts.filter(product => 
        product.subcategory && product.subcategory.slug.current === selectedSubcategory
      );
    } else {
      // Show all products in category
      products = await client.fetch(productsByCategoryQuery, {
        categoryId: category._id,
      });
    }

    return (
      <div className="min-h-screen secondary ">
        <section className="h-[70dvh] relative">
          <Image
            src={getImageUrl(category.image)}
            fill
            alt={category.image.alt || category.name}
            className="absolute inset-0 object-cover w-full h-full [object-position:50%_80%]"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 md:px-8 flex flex-col  justify-center items-start  h-full">
            <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold mb-6 text-white">
              {category.name}
            </h1>
            {category.description && (
              <p className="md:text-xl text-sm text-white  mx-auto">
                {category.description}
              </p>
            )}
          </div>
          
        </section>

        {/* Subcategories Section */}
        {category.subcategories && category.subcategories.length > 0 && (
        
          
              
              <div className="max-w-7xl  mx-auto px-4 flex flex-wrap justify-center gap-4 mt-4">
                {/* All products button */}
                <Link
                  href={`/kategorije/${category.slug.current}`}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    !selectedSubcategory
                      ? 'bg-[#494179] text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-[#494179] hover:text-[#494179]'
                  }`}
                >
                  Sve podkategorije
                </Link>
                
                {/* Subcategory buttons */}
                {category.subcategories && category.subcategories.length > 0 ? (
                  category.subcategories
                    .filter(sub => sub.isActive !== false) // Show all if isActive is undefined
                    .sort((a, b) => (a.order || 0) - (b.order || 0))
                    .map((subcategory) => (
                      <Link
                        key={subcategory._id}
                        href={`/kategorije/${category.slug.current}?subcategory=${subcategory.slug.current}`}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                          selectedSubcategory === subcategory.slug.current
                            ? 'bg-[#494179] text-white shadow-lg'
                            : 'bg-white text-gray-700 border border-gray-300 hover:border-[#494179] hover:text-[#494179]'
                        }`}
                      >
                        {subcategory.name}
                      </Link>
                    ))
                ) : (
                  <div className="text-gray-500 italic">
                    Nema podkategorija za ovu kategoriju
                  </div>
                )}
              </div>
 
    
        )}

        {/* Products Section */}
        <section className="py-20 secondary primarytext">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {products.length > 0 ? (
              <>
                {/* Products header */}
  
                
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
                            <div className="absolute top-4 left-4 primarybg text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Izdvojeno
                            </div>
                          )}
                        </div>
                      )}

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {product.name}
                        </h3>
                        {product.brand && (
                          <div className="text-sm mb-2">{product.brand}</div>
                        )}
                        {product.shortDescription && (
                          <p className=" mb-4">{product.shortDescription}</p>
                        )}

                        <Link
                          className="w-full text-center block mt-4 px-4 py-2 primarybg text-white rounded-lg"
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
              <div className="text-center py-16 primarytext">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 primarytext"
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
                <h3 className="text-2xl font-bold mb-4">
                  Nema proizvoda u ovoj kategoriji
                </h3>
                <p className=" mb-8">
                  Trenutno nema dostupnih proizvoda u kategoriji &quot;
                  {category.name}&quot;.
                </p>
              </div>
            )}
          </div>
        </section>

        <CTASection />
        <div className="py-1 secondary"></div>
        {/* CTA Section */}
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
