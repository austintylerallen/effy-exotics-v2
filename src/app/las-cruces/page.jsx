import ParallaxHero from "@/app/parallax/ParallaxHero";
import GoogleReviews from "@/components/reviews/GoogleReviews";
import AboutUsSection from "@/components/about/AboutUsSection";
import StatsStrip from "@/app/sections/StatsStrip";
import BrandsSpotlight from "@/components/brands/BrandsSpotlight";
import VisitUsSection from "@/components/visit/VisitUsSection";

export const metadata = {
  title: "Effy Exotics – Las Cruces | Cannabis Dispensary",
  description:
    "Premium cannabis in Las Cruces, NM — curated flower, edibles, concentrates, and CBD with friendly guidance.",
  alternates: { canonical: "/las-cruces" },
};

export default function LasCrucesHome() {
  return (
    <>
      <ParallaxHero />

       {/* Brands on both cities */}
       <BrandsSpotlight />

       <AboutUsSection />


      {/* Stats only on Las Cruces */}
      <StatsStrip />

      {/* Reviews without container to avoid left offset */}
      <section className="py-10">
        <GoogleReviews />
      </section>

     

      
      {/* Visit Us section (id="visit") just before footer */}
      <VisitUsSection />
    </>
  );
}
