"use client";
import { useEffect, useState } from "react";
import { useLocation } from "@/core/LocationProvider";

export default function LocationGate() {
  const { hasChoice, setLocation } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!hasChoice) setOpen(true);
  }, [hasChoice]);

  if (!open) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4"
    >
      <div className="w-full max-w-md rounded-2xl border border-white/15 bg-[#0b0e14]/95 p-6 shadow-xl">
        <h3 className="text-2xl font-bold tracking-tight">Choose your store</h3>
        <p className="mt-1 text-white/80">We’ll send you to the right menu and keep this for next time.</p>

        <div className="mt-5 grid gap-3">
          <button
            className="rounded-xl bg-[#FFD36E] text-gray-900 font-semibold px-4 py-3 hover:brightness-95 transition"
            onClick={() => { setLocation("las-cruces"); setOpen(false); }}
          >
            Las Cruces
          </button>
          <button
            className="rounded-xl border border-white/20 bg-white/5 font-semibold px-4 py-3 hover:bg-white/10 transition"
            onClick={() => { setLocation("alamogordo"); setOpen(false); }}
          >
            Alamogordo
          </button>
        </div>

        <button
          className="mt-4 text-sm text-white/70 underline underline-offset-2 hover:text-white"
          onClick={() => setOpen(false)}
        >
          Decide later
        </button>
      </div>
    </div>
  );
}
