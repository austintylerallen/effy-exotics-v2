import ParallaxHero from "./parallax/ParallaxHero";
import BrandsSpotlight from "@/components/brands/BrandsSpotlight";
import StatsStrip from "./sections/StatsStrip";
import Standards from "./sections/Standards";
import GoogleReviews from "@/components/reviews/GoogleReviews";
import VisitUsSection from "@/components/visit/VisitUsSection";
import AboutUsSection from "@/components/about/AboutUsSection";
import Script from "next/script";

export const metadata = {
  title: "Effy Exotics",
  description: "Premium cannabis in New Mexico",
};

export default function HomePage() {
  return (
    <>
      {/* Google Places API for any UI features that need it */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="afterInteractive"
      />

      <ParallaxHero />
      <BrandsSpotlight />
      <AboutUsSection />
      <StatsStrip />

      <GoogleReviews />

      {/* New sections */}
      <VisitUsSection />
      

      {/* <Standards /> */}
      {/* Next up: Featured products, Locations, Education, Newsletter CTA */}
    </>
  );
}
