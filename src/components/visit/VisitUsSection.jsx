"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";

const ADDRESS = "2153 W Picacho Ave, Las Cruces, NM 88007";
const EMBED_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""; // referrer-restricted public key

// Ultra-thin elegant font to match Reviews
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
  display: "swap",
});

export default function VisitUsSection() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/place-hours", { cache: "no-store" });
        const json = await res.json();
        if (!cancelled) {
          if (json.error) setErr(json.error);
          else setData(json);
        }
      } catch {
        if (!cancelled) setErr("Unable to load hours");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Build responsive embed URL that fills the card
  const mapSrc = useMemo(() => {
    const placeId = data?.id;
    if (EMBED_KEY) {
      if (placeId)
        return `https://www.google.com/maps/embed/v1/place?key=${EMBED_KEY}&q=place_id:${placeId}&zoom=15`;
      return `https://www.google.com/maps/embed/v1/place?key=${EMBED_KEY}&q=${encodeURIComponent(
        ADDRESS
      )}&zoom=15`;
    }
    return `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=15&output=embed`;
  }, [data]);

  // Today + status lines
  const today = useMemo(() => {
    if (!data?.weekdayDescriptions?.length) return null;
    const dowShort = new Date().toLocaleDateString("en-US", { weekday: "short" });
    const line = data.weekdayDescriptions.find((s) => s.startsWith(dowShort));
    if (!line) return null;
    const parts = line.split(":");
    return { label: dowShort, hours: parts.slice(1).join(":").trim() || "Hours unavailable" };
  }, [data]);

  const statusLine = useMemo(() => {
    if (!data) return "—";
    if (data.openNow) {
      const closeAt = toLocalTimeShort(data.nextCloseTime);
      return closeAt ? `Open now — closes ${closeAt}` : "Open now";
    }
    const openAt = toLocalTimeShort(data.nextOpenTime);
    return openAt ? `Closed — opens ${openAt}` : "Closed";
  }, [data]);

  // Compact CTA sizing
  const btnBase =
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition h-9 sm:h-10 text-xs sm:text-sm px-3 sm:px-4";
  const btnGhost = "border border-white/20 bg-white/5 hover:bg-white/10";
  const btnYellow = "bg-[#FFD36E] text-gray-900 hover:brightness-95";

  return (
    <section id="visit" className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        {/* SKINNY title (matches Reviews style) */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={outfit.className}
          style={{
            fontWeight: 100,                   // ultra-thin
            letterSpacing: "0.06em",           // airy
            lineHeight: 1.05,
            fontSize: "clamp(28px, 4.2vw, 56px)",
          }}
        >
          Visit Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-4 flex flex-wrap items-center gap-3 text-base md:text-lg"
        >
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold
              ${data?.openNow ? "bg-emerald-400/20 text-emerald-300" : "bg-rose-400/20 text-rose-300"}`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                data?.openNow ? "bg-emerald-300" : "bg-rose-300"
              }`}
            />
            {statusLine}
          </span>

          {today && (
            <span className="text-white/85">
              <strong>Today:</strong> {today.hours}
            </span>
          )}
        </motion.div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Map card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
          >
            <iframe
              title="Effy Exotics on Google Maps"
              src={mapSrc}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full h-[300px] sm:h-[360px] md:h-[420px] border-0"
            />
          </motion.div>

          {/* Details + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6"
          >
            {err && <p className="mb-3 text-rose-300">{err}</p>}

            <div className="space-y-4">
              <div>
                <div className="text-sm uppercase tracking-widest text-white/60">Address</div>
                <p className="text-base md:text-lg">{ADDRESS}</p>
              </div>

              <div>
                <div className="text-sm uppercase tracking-widest text-white/60">Weekly Hours</div>
                {!data?.weekdayDescriptions?.length && !err && (
                  <p className="text-white/70">Loading hours…</p>
                )}
                {data?.weekdayDescriptions?.length > 0 && (
                  <ul className="mt-1 grid grid-cols-1 gap-1 text-base md:text-lg leading-relaxed">
                    {data.weekdayDescriptions.map((line) => {
                      const [day, ...rest] = line.split(":");
                      return (
                        <li key={line} className="flex items-baseline justify-between gap-4">
                          <span className="text-white/70 w-32">{day}</span>
                          <span className="text-white/90 flex-1 text-right">
                            {rest.join(":").trim() || "—"}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              {/* CTAs — compact */}
              <div className="flex items-center gap-2 md:gap-3 pt-2 flex-nowrap">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnBase} ${btnYellow}`}
                >
                  Get Directions
                </a>

                {data?.url && (
                  <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnBase} ${btnGhost}`}
                  >
                    View on Google
                  </a>
                )}

                <a href="/shop" className={`${btnBase} ${btnGhost}`}>
                  Order Ahead
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Helpers
function toLocalTimeShort(rfc3339) {
  if (!rfc3339) return null;
  const d = new Date(rfc3339);
  if (isNaN(d.getTime())) return null;
  return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}
