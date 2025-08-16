// src/app/alamogordo/layout.js
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";
import CityRouteInitializer from "../CityRouteInitializer";

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

export default function AlamogordoLayout({ children }) {
  const biz = {
    name: "Effy Exotics – Alamogordo",
    phone: "+1-575-000-0000",
    priceRange: "$$",
    street: "123 Main St",
    city: "Alamogordo",
    region: "NM",
    postalCode: "88310",
    country: "US",
    latitude: 32.8995,
    longitude: -105.9603,
    hours: [
      { days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens:"07:00", closes:"23:30" },
      { days: ["Sunday"], opens:"10:00", closes:"23:30" },
    ],
    sameAs: [
      "https://www.facebook.com/effyexotics",
      "https://www.instagram.com/effyexotics",
    ],
    menuUrl: "https://dutchie.com/api/v2/embedded-menu/XXXXXXXXXXXXXXXXXXXX.js",
  };

  return (
    <>
      <CityRouteInitializer slug="alamogordo" />
      <LocalBusinessJsonLd business={biz} />
      {children}
    </>
  );
}
