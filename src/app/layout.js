// src/app/layout.js
import "./globals.css";

import Header from "@/core/Header";
import LocationGate from "@/components/location/LocationGate";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Footer from "@/components/footer/Footer";

import Providers from "./providers"; // client wrappers (City/Location/SmoothScroll/Analytics)

export const metadata = {
  metadataBase: new URL("https://www.effyexotics.com"),
  title: "Effy Exotics",
  description: "Premium cannabis in New Mexico",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.effyexotics.com/",
    title: "Effy Exotics",
    description: "Premium cannabis in New Mexico",
    siteName: "Effy Exotics",
    images: [{ url: "/img/social-preview.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Effy Exotics",
    description: "Premium cannabis in New Mexico",
    images: ["/img/social-preview.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black/60 text-white px-3 py-2 rounded"
        >
          Skip to content
        </a>
        <Providers>
          <Header />
          <ScrollProgressBar />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
