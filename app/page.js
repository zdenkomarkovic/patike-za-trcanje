import HeroSection from "./components/sections/HeroSection";
import CategoriesSection from "./components/sections/CategoriesSection";
import AboutSection from "./components/sections/AboutSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import CTASection from "./components/sections/CTASection";
import { getCategories } from "../sanity/lib/data";
import TrailSection from "./components/sections/TrailSection";
import Runners from "./components/sections/Runners";
import AboutMe from "./components/sections/AboutMe";

export default async function HomePage() {
  // Dohvatanje kategorija iz Sanity CMS-a
  const categories = await getCategories();

  const heroData = {
    title: "Sesame Shop",
    subtitle: "Patike za trčanje",
    description:
      "Profesionalne patike za trčanje za početnike, rekreativce i napredne trkače.",
    primaryAction: {
      text: "Pogledaj proizvode",
      href: "/proizvodi",
    },
    image: {
      src: "/20251004_220326.jpg",
      alt: "Saucony patike za trčanje",
    },
  };

  return (
    <div className="">
      <HeroSection {...heroData} />
      <CategoriesSection categories={categories} />
      <CTASection />
      <FeaturesSection />
      <Runners />
      <TrailSection />
      <AboutMe />
      <AboutSection />
    </div>
  );
}
