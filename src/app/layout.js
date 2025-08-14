// src/app/layout.js
import "./globals.css";
import SmoothScrollProvider from "@/core/SmoothScrollProvider";
import Header from "@/core/Header";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { LocationProvider } from "@/core/LocationProvider";
import LocationGate from "@/components/location/LocationGate";

export const metadata = {
  title: "Effy Exotics",
  description: "Premium cannabis in New Mexico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LocationProvider>
          <Header />
          <LocationGate /> {/* optional modal prompt on first visit */}
          <SmoothScrollProvider>
            <ScrollProgressBar />
            {children}
          </SmoothScrollProvider>
        </LocationProvider>
      </body>
    </html>
  );
}
