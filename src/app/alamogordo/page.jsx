import ParallaxHero from "@/app/parallax/ParallaxHero";
// import GoogleReviews from "@/components/reviews/GoogleReviews";
import AboutUsSection from "@/components/about/AboutUsSection";
import BrandsSpotlight from "@/components/brands/BrandsSpotlight";

export default function AlamogordoHome() {
  return (
    <>
      <ParallaxHero />

      {/* Uncomment once Alamogordo Place ID is wired up */}
      {/* <section className="py-10">
        <GoogleReviews />
      </section> */}

      {/* Brands on both cities */}
      <BrandsSpotlight />

      <AboutUsSection />
    </>
  );
}
