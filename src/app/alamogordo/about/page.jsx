// src/app/alamogordo/page.jsx
import ParallaxHero from "@/app/parallax/ParallaxHero";
import GoogleReviews from "@/components/reviews/GoogleReviews";
import AboutUsSection from "@/components/about/AboutUsSection";

export const metadata = {
  title: "Effy Exotics – Alamogordo | Cannabis Dispensary",
  description:
    "Premium cannabis in Alamogordo, NM — curated flower, edibles, concentrates, and CBD with friendly guidance.",
  alternates: { canonical: "/alamogordo" },
  openGraph: {
    type: "website",
    url: "https://www.effyexotics.com/alamogordo",
    title: "Effy Exotics – Alamogordo | Cannabis Dispensary",
    description:
      "Premium cannabis in Alamogordo, NM — curated flower, edibles, concentrates, and CBD with friendly guidance.",
    siteName: "Effy Exotics",
    images: [{ url: "/img/social-preview.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Effy Exotics – Alamogordo",
    description:
      "Premium cannabis in Alamogordo, NM — curated flower, edibles, concentrates, and CBD.",
    images: ["/img/social-preview.jpg"],
  },
};

export default function AlamogordoHome() {
  return (
    <>
      <ParallaxHero />
      <section className="container mx-auto px-6 py-10">
        <GoogleReviews />
      </section>
      <AboutUsSection />
    </>
  );
}
