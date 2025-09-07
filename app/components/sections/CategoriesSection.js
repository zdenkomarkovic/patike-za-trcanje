import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import CategoryCard from '../ui/CategoryCard';

export default function CategoriesSection({ categories }) {
  return (
    <Section background="gray">
      <SectionHeader
        title="Kategorije patika"
        description="Pronađite savršene patike za vaš stil trčanja i nivo iskustva"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </Section>
  );
}