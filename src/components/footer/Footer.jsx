// src/components/footer/Footer.jsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useCity } from "@/core/CityContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const city = useCity();

  return (
    <footer className="mt-16 border-t border-white/10 bg-white/5 backdrop-blur-md text-white/80">
      <div className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <Link href={`/${city.slug}`} className="inline-flex items-center gap-3">
            <Image src="/img/favicon.png" alt="Effy Exotics" width={36} height={36} className="opacity-90" />
            <span className="text-lg font-semibold text-white">Effy Exotics</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-white/70">
            Premium cannabis in {city.cityLabel}. Curated menu and friendly guidance.
          </p>
          <p className="mt-3 text-xs text-white/60">
            {city.license}
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/60">Explore</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href={`/${city.slug}/shop`} className="hover:text-white">Shop</Link></li>
              <li><Link href={`/${city.slug}/about`} className="hover:text-white">About</Link></li>
              <li><Link href={`/${city.slug}/the_lab`} className="hover:text-white">The Lab</Link></li>
              <li><Link href={`/${city.slug}/map`} className="hover:text-white">Directions</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-white/60">Legal</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/returns" className="hover:text-white">Returns & Refunds</Link></li>
              <li><Link href="/accessibility" className="hover:text-white">Accessibility</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-white/60">Contact</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li>{city.address.street}, {city.address.city}, {city.address.region} {city.address.postalCode}</li>
              <li><a href={`tel:${city.phone.replace(/\D/g, "")}`} className="hover:text-white">{city.phoneDisplay}</a></li>
              <li><a href="mailto:info@effyexotics.com" className="hover:text-white">info@effyexotics.com</a></li>
              <li><a href="https://www.instagram.com/effyexotics" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="border-t border-white/10" />
      <div className="container mx-auto px-6 py-6">
        <p className="text-sm font-medium text-white">Please Consume Responsibly.</p>
        <ul className="mt-2 space-y-1 text-xs leading-relaxed text-white/70">
          <li>For use only by adults 21 and older.</li>
          <li>Keep out of reach of children.</li>
          <li>This product is not approved by the FDA to treat, cure, or prevent any disease.</li>
          <li>Do not drive a motor vehicle or operate machinery while under the influence of cannabis.</li>
          <li>There may be long-term adverse health effects, including risks during pregnancy/breastfeeding.</li>
        </ul>
      </div>

      <div className="border-t border-white/10 bg-white/5 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/70">© {year} Effy Exotics. All rights reserved.</p>
          <p className="text-[11px] text-white/60">
            By using this site you agree to our <Link href="/terms" className="underline hover:text-white">Terms</Link> and{" "}
            <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}
