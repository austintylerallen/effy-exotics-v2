// src/app/page.jsx
import Link from "next/link";

export default function CityChooser() {
  return (
    <main className="min-h-[60vh] grid place-items-center px-6 py-24 text-center">
      <div>
        <h1 className="text-3xl md:text-5xl font-light tracking-wide">Choose your location</h1>
        <p className="mt-3 text-white/70">We’ll remember your choice for next time.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/las-cruces" className="rounded-lg bg-white/10 px-5 py-3 hover:bg-white/20">Las Cruces</Link>
          <Link href="/alamogordo" className="rounded-lg bg-white/10 px-5 py-3 hover:bg-white/20">Alamogordo</Link>
        </div>
      </div>
    </main>
  );
}
