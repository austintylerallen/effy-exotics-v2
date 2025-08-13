import ParallaxHero from "./parallax/ParallaxHero";
import BrandsSpotlight from "@/components/brands/BrandsSpotlight";
import StatsStrip from "./sections/StatsStrip";
import Standards from "./sections/Standards";

export const metadata = {
  title: "Effy Exotics",
  description: "Premium cannabis in New Mexico",
};

export default function HomePage() {
  return (
    <>
      <ParallaxHero />
      <BrandsSpotlight />   {/* <- added here, right after the hero */}
      <StatsStrip />
      <Standards />
      {/* Next up: Featured products, Locations, Education, Newsletter CTA */}
    </>
  );
}
