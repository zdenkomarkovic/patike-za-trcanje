import { client } from "@/sanity/lib/client";
import {
  categoryBySlugQuery,
  productsByCategoryQuery,
  productsBySubcategoryQuery,
  productsByCategoryCountQuery,
  productsBySubcategoryCountQuery,
} from "@/sanity/lib/queries";
import { getImageUrl } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/app/components/sections/CTASection";
import SubcategorySelect from "@/app/components/SubcategorySelect";

const PRODUCTS_PER_PAGE = 9;

export default async function CategoryPage({ params, searchParams }) {
  const { slug } = await params;
  const awaitedSearchParams = await searchParams;
  const selectedSubcategory = awaitedSearchParams?.subcategory;
  const currentPage = parseInt(awaitedSearchParams?.page || "1", 10);

  try {
    // Fetch category data
    const category = await client.fetch(categoryBySlugQuery, { slug });

    if (!category) {
      notFound();
    }

    // Fetch subcategories for this category
    const subcategories = await client.fetch(
      `
      *[_type == "subcategory" && parentCategory._ref == $categoryId && isActive == true] | order(order asc) {
        _id,
        name,
        slug,
        description,
        order,
        isActive
      }
    `,
      { categoryId: category._id }
    );

    // Add subcategories to category object
    category.subcategories = subcategories;

    // Calculate pagination
    const offset = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const limit = offset + PRODUCTS_PER_PAGE;

    // Fetch products for this category or subcategory
    let products;
    let totalProducts;

    if (selectedSubcategory) {
      // Fetch products filtered by selected subcategory using GROQ (supports multiple subcategories)
      const sub = await client.fetch(
        `*[_type == "subcategory" && slug.current == $slug][0]{ _id }`,
        { slug: selectedSubcategory }
      );
      if (sub) {
        products = await client.fetch(productsBySubcategoryQuery, {
          subcategoryId: sub._id,
          offset,
          limit,
        });
        totalProducts = await client.fetch(productsBySubcategoryCountQuery, {
          subcategoryId: sub._id,
        });
      } else {
        products = [];
        totalProducts = 0;
      }
    } else {
      // Show all products in category
      products = await client.fetch(productsByCategoryQuery, {
        categoryId: category._id,
        offset,
        limit,
      });
      totalProducts = await client.fetch(productsByCategoryCountQuery, {
        categoryId: category._id,
      });
    }

    const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

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
          <>
            {/* Desktop - Buttons */}
            <div className="max-w-7xl mx-auto px-4 hidden md:flex flex-wrap justify-center gap-4 mt-4">
              {/* All products button */}
              <Link
                href={`/kategorije/${category.slug.current}`}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  !selectedSubcategory
                    ? "bg-[#494179] text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-[#494179] hover:text-[#494179]"
                }`}
              >
                Sve podkategorije
              </Link>

              {/* Subcategory buttons */}
              {category.subcategories
                .filter((sub) => sub.isActive !== false)
                .sort((a, b) => (a.order || 0) - (b.order || 0))
                .map((subcategory) => (
                  <Link
                    key={subcategory._id}
                    href={`/kategorije/${category.slug.current}?subcategory=${subcategory.slug.current}`}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                      selectedSubcategory === subcategory.slug.current
                        ? "bg-[#494179] text-white shadow-lg"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-[#494179] hover:text-[#494179]"
                    }`}
                  >
                    {subcategory.name}
                  </Link>
                ))}
            </div>

            {/* Mobile - Dropdown */}
            <div className="max-w-7xl mx-auto px-4 md:hidden mt-4">
              <SubcategorySelect
                category={category}
                selectedSubcategory={selectedSubcategory}
              />
            </div>
          </>
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

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12 px-4">
                    {/* Previous button */}
                    {currentPage > 1 ? (
                      <Link
                        href={`/kategorije/${category.slug.current}${selectedSubcategory ? `?subcategory=${selectedSubcategory}&page=${currentPage - 1}` : `?page=${currentPage - 1}`}`}
                        className="px-3 sm:px-4 py-2 rounded-lg bg-white border border-gray-300 hover:border-[#494179] hover:text-[#494179] transition-all duration-200 text-center"
                      >
                        <span className="hidden sm:inline">← Prethodna</span>
                        <span className="sm:hidden">←</span>
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="px-3 sm:px-4 py-2 rounded-lg bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
                      >
                        <span className="hidden sm:inline">← Prethodna</span>
                        <span className="sm:hidden">←</span>
                      </button>
                    )}

                    {/* Page numbers */}
                    <div className="flex gap-1 sm:gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => {
                          // Show first page, last page, current page and pages around current
                          if (
                            page === 1 ||
                            page === totalPages ||
                            (page >= currentPage - 1 && page <= currentPage + 1)
                          ) {
                            return (
                              <Link
                                key={page}
                                href={`/kategorije/${category.slug.current}${selectedSubcategory ? `?subcategory=${selectedSubcategory}&page=${page}` : `?page=${page}`}`}
                                className={`px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                                  page === currentPage
                                    ? "bg-[#494179] text-white"
                                    : "bg-white border border-gray-300 hover:border-[#494179] hover:text-[#494179]"
                                }`}
                              >
                                {page}
                              </Link>
                            );
                          } else if (
                            page === currentPage - 2 ||
                            page === currentPage + 2
                          ) {
                            return (
                              <span
                                key={page}
                                className="px-1 sm:px-2 py-2 text-sm sm:text-base"
                              >
                                ...
                              </span>
                            );
                          }
                          return null;
                        }
                      )}
                    </div>

                    {/* Next button */}
                    {currentPage < totalPages ? (
                      <Link
                        href={`/kategorije/${category.slug.current}${selectedSubcategory ? `?subcategory=${selectedSubcategory}&page=${currentPage + 1}` : `?page=${currentPage + 1}`}`}
                        className="px-3 sm:px-4 py-2 rounded-lg bg-white border border-gray-300 hover:border-[#494179] hover:text-[#494179] transition-all duration-200 text-center"
                      >
                        <span className="hidden sm:inline">Sledeća →</span>
                        <span className="sm:hidden">→</span>
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="px-3 sm:px-4 py-2 rounded-lg bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
                      >
                        <span className="hidden sm:inline">Sledeća →</span>
                        <span className="sm:hidden">→</span>
                      </button>
                    )}
                  </div>
                )}
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
