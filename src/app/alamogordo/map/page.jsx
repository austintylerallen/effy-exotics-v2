// src/app/alamogordo/map/page.jsx
import { useLocation } from "@/core/LocationProvider";

export const metadata = { title: "Directions – Alamogordo | Effy Exotics" };

export default function MapPage() {
  const { location } = useLocation();
  const addr = location?.address;
  const q = encodeURIComponent(`${addr.street}, ${addr.city}, ${addr.region} ${addr.postalCode}`);
  return (
    <section className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-light">Directions — {location?.cityLabel}</h1>
      <div className="mt-3 text-white/80">
        <p>{addr.street}, {addr.city}, {addr.region} {addr.postalCode}</p>
        <p><a className="underline" href={`tel:${location?.phone.replace(/\D/g, "")}`}>{location?.phoneDisplay}</a></p>
        <p className="mt-2 text-sm">Hours: Sun 10:00–23:30 · Mon–Sat 07:00–23:30</p>
      </div>

      <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
        <iframe
          title="Map"
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${q}&output=embed`}
        />
      </div>
    </section>
  );
}
