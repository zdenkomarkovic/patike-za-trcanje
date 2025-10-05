'use client';

import { useRouter } from 'next/navigation';

export default function SubcategorySelect({ category, selectedSubcategory }) {
  const router = useRouter();

  return (
    <select
      value={selectedSubcategory || ""}
      onChange={(e) => {
        const value = e.target.value;
        const url = value
          ? `/kategorije/${category.slug.current}?subcategory=${value}`
          : `/kategorije/${category.slug.current}`;
        router.push(url);
      }}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#494179] focus:border-transparent"
    >
      <option value="">Sve podkategorije</option>
      {category.subcategories
        .filter((sub) => sub.isActive !== false)
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .map((subcategory) => (
          <option
            key={subcategory._id}
            value={subcategory.slug.current}
          >
            {subcategory.name}
          </option>
        ))}
    </select>
  );
}
