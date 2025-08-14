"use client";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
  display: "swap",
});

export default function AboutUsSection() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        {/* Skinny title + animated Effy-yellow underline */}
        <div className="relative inline-block">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={outfit.className}
            style={{
              fontWeight: 100,
              letterSpacing: "0.06em",
              lineHeight: 1.05,
              fontSize: "clamp(28px, 4.2vw, 56px)",
            }}
          >
            About Effy
          </motion.h2>

          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full"
            style={{ backgroundColor: "#FFD36E", transformOrigin: "0% 50%" }}
          />
        </div>

        {/* Lead paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 max-w-3xl text-lg leading-relaxed text-white/90"
        >
          We’re a New Mexico–grown brand focused on clean, terpene-forward cannabis. From premium
          flower to carts and concentrates, we keep things transparent—fresh batches, clear COAs,
          and straightforward effects so you know exactly what you’re getting.
        </motion.p>

        {/* Feature chips */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureChip
            icon={<LeafIcon />}
            title="Terpene-Forward"
            body="Genetics chosen for flavor and consistency."
            delay={0}
          />
          <FeatureChip
            icon={<ShieldIcon />}
            title="Tested & Transparent"
            body="Third-party COAs for every batch."
            delay={0.05}
          />
          <FeatureChip
            icon={<HeartIcon />}
            title="Loved by Locals"
            body="Community-driven drops and fair pricing."
            delay={0.1}
          />
        </div>

        {/* Two cards: Our Story + Lab & Cultivation */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <CardLink
            href="/about"
            kicker="Our Story"
            title="From Las Cruces, with love"
            body="A small team obsessed with quality and community. Meet the people behind Effy."
            delay={0}
          />
          <CardLink
            href="/lab"
            kicker="Lab & Cultivation"
            title="How we keep it clean"
            body="Our process, testing, and controls—plus COAs and behind-the-scenes looks."
            delay={0.05}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable bits ---------- */

function FeatureChip({ icon, title, body, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.45, delay }}
      className="rounded-2xl border border-white/10 bg-white/5 p-4"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 grid place-items-center rounded-xl bg-white/10 p-2">
          {icon}
        </div>
        <div>
          <div className="text-sm uppercase tracking-widest text-white/70">{title}</div>
          <p className="text-white/85">{body}</p>
        </div>
      </div>
    </motion.div>
  );
}

function CardLink({ href, kicker, title, body, delay = 0 }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.45, delay }}
      href={href}
      className="group block rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
    >
      <div className="text-sm uppercase tracking-widest text-white/70">{kicker}</div>
      <div className="mt-2 text-xl font-semibold flex items-center gap-2">
        {title}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className="opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100"
          aria-hidden="true"
        >
          <path d="M5 12h12M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <p className="mt-1 text-white/80">{body}</p>
    </motion.a>
  );
}

/* ---------- Tiny inline icons (no deps) ---------- */

function LeafIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="text-white/90">
      <path
        d="M20 4s-5 0-9 4-5 9-5 9 5 0 9-4 5-9 5-9Zm-9 9-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="text-white/90">
      <path
        d="M12 3l8 4v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" fill="none" stroke="#FFD36E" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="text-white/90">
      <path
        d="M20.8 8.6a5 5 0 0 0-8-3.6L12 5.7l-.8-.7a5 5 0 0 0-8 3.6c0 3.7 3.4 6.2 8.8 10.1a1.5 1.5 0 0 0 1.8 0c5.4-3.9 8.8-6.4 8.8-10.1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
