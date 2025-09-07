import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import FeatureCard from '../ui/FeatureCard';

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Za sve nivoe",
      description: "Od početnika do profesionalnih trkača - imamo patike za svaki nivo iskustva i stil trčanja.",
      iconColor: "blue"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Dokazana kvalitet",
      description: "125+ godina iskustva u proizvodnji patika za trčanje. Prepoznat od strane Runners World magazina.",
      iconColor: "red"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Udobnost",
      description: "Napredne tehnologije amortizacije i materijali koji pružaju maksimalnu udobnost tokom trčanja.",
      iconColor: "green"
    }
  ];

  return (
    <Section background="gray">
      <SectionHeader
        title="Zašto izabrati Saucony?"
        description="Ključne karakteristike koje čine Saucony patike posebnima"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </Section>
  );
}