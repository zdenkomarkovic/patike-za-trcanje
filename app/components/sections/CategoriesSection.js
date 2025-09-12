
import SectionHeader from "../ui/SectionHeader";
import CategoryCard from "../ui/CategoryCard";

export default function CategoriesSection({ categories }) {
  return (
    <div id="kategorije" className="container px-2 md:px-10 mx-auto py-8 md:py-16">
      <SectionHeader
        title="Kategorije patika"
        description="Pronađite savršene patike za vaš stil trčanja i nivo iskustva"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
}
