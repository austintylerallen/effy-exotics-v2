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
            About Effy Exotics
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

        {/* Lead paragraph (matches the old site's intent/tone) */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 max-w-3xl text-lg leading-relaxed text-white/90"
        >
          Welcome to Effy Exotics—Las Cruces’ destination for top-quality cannabis. Whether you’re
          a seasoned connoisseur or just canna-curious, our goal is simple: pair you with the right
          product for how you want to feel. Expect a friendly, modern space, a curated menu, and a
          team that takes the time to guide you.
        </motion.p>

        {/* Supporting paragraph (quality, testing, local growers, community) */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-3 max-w-3xl text-base leading-relaxed text-white/80"
        >
          We’re built on passion, knowledge, and respect for the plant. Our menu leans into exotic
          genetics and crowd favorites alike, all sourced from trusted New Mexico partners. Every
          batch is tested for purity and potency, and our budtenders share straight-up, practical
          info so you can shop with confidence. More than a dispensary, Effy is a welcoming hub for
          the local community—education, good vibes, and consistently great cannabis.
        </motion.p>

        {/* Feature chips (reframed to match the old “About” themes) */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureChip
            icon={<LeafIcon />}
            title="Exotic & Classic Strains"
            body="A curated mix—from legendary cuts to new genetics."
            delay={0}
          />
          <FeatureChip
            icon={<ShieldIcon />}
            title="Quality You Can Trust"
            body="Strict sourcing + third-party testing for purity & potency."
            delay={0.05}
          />
          <FeatureChip
            icon={<HeartIcon />}
            title="Guidance, Not Gatekeeping"
            body="Knowledgeable budtenders, clear explanations, zero pressure."
            delay={0.1}
          />
        </div>

        {/* Two cards: Visit & Menu — aligned with old site sections (Directions/Menu) */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <CardLink
            href="/#visit"
            kicker="Visit Effy"
            title="Find us in Las Cruces"
            body="Swing by our modern shop—friendly faces, helpful guidance, and a relaxed vibe."
            delay={0}
          />
          <CardLink
            href="www.effyexotics.com/las-cruces/shop"
            kicker="Shop the Menu"
            title="Flower, edibles, carts & more"
            body="Browse our latest drops and trusted staples. Order online for fast pickup."
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
