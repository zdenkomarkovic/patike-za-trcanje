import { SITE_CONFIG } from './constants/site';
import HeroSection from './components/sections/HeroSection';
import CategoriesSection from './components/sections/CategoriesSection';
import AboutSection from './components/sections/AboutSection';
import FeaturesSection from './components/sections/FeaturesSection';
import CTASection from './components/sections/CTASection';

export default function HomePage() {
  const heroData = {
    title: "Saucony Shop",
    subtitle: "Patike za trčanje",
    description: "Profesionalne patike za trčanje za početnike, rekreativce i napredne trkače. Saucony - jedan od najstarijih sportskih brendova na svetu.",
    primaryAction: {
      text: "Pogledaj proizvode",
      onClick: () => window.location.href = '/proizvodi'
    },
    secondaryAction: {
      text: "O brendu Saucony",
      onClick: () => window.location.href = '/o-brendu'
    },
    image: {
      src: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      alt: "Saucony patike za trčanje"
    },
    stats: [
      { value: "125+", label: "Godina tradicije" },
      { value: "1898", label: "Godina osnivanja" }
    ]
  };

  return (
    <div className="min-h-screen">
      <HeroSection {...heroData} />
      <CategoriesSection categories={SITE_CONFIG.categories} />
      <AboutSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}