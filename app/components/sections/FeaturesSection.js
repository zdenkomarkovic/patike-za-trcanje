import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import FeatureCard from "../ui/FeatureCard";

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Za sve nivoe",
      description:
        "Od početnika do profesionalnih trkača - imamo patike svih brendova za svaki nivo iskustva i stil trčanja.",
      iconColor: "blue",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Pružamo najbolje.",
      description:
        "Dugogodišnje iskustvo u prodaji, a pre svega u trčanju, nas izdvaja kao kompetentne za davanje saveta u kupovini patika za trčanje.",
      iconColor: "red",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Raznovrsnost",
      description:
        "Kod nas možete pronaći najtraženije i najkvalitetnije patike svih brendova, sa naprednim tehnologijama amortizacije za maksimalnu udobnost tokom trčanja.",
      iconColor: "green",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#e6e0f8] to-white py-8 md:py-16">
      <div className="container mx-auto px-2 md:px-10">
        <SectionHeader
          title="Zašto izabrati Saucony Shop?"
          description="Dugogodisnje iskustvo u prodaji a jos duze u trcanju"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
