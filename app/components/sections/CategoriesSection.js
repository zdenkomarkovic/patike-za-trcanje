import CategoryCard from "../ui/CategoryCard";

export default function CategoriesSection({ categories }) {
  return (
    <div className="secondary">
      <div
        id="kategorije"
        className="container px-2 md:px-10 mx-auto py-8 md:py-16"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-[#494179] mb-4 text-center">
          Kategorije patika
        </h2>
        <p className="text-center pb-8 md:pb-16 text-[#494179]">
          Pronađite savršene patike za vaš stil trčanja i nivo iskustva.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
