import "./globals.css";
import SmoothScrollProvider from "@/components/core/SmoothScrollProvider";
import Header from "@/components/core/Header";

export const metadata = {
  title: "Effy Exotics",
  description: "Premium cannabis in New Mexico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
