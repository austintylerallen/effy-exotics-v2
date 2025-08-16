"use client";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
  display: "swap",
});

/* Reusable skinny, underlined title */
function SectionTitle({
  as = "h2",
  children,
  size = "lg", // "xl" | "lg" | "md"
  className = "",
  underline = true,
}) {
  const M = motion[as]; // motion.h1/h2/h3
  const sizes = {
    xl: "clamp(32px, 5.2vw, 64px)",
    lg: "clamp(24px, 3.8vw, 40px)",
    md: "clamp(20px, 3vw, 30px)",
  };

  return (
    <div className="relative inline-block">
      <M
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`${outfit.className} ${className}`}
        style={{
          fontWeight: 100,
          letterSpacing: "0.06em",
          lineHeight: 1.05,
          fontSize: sizes[size],
        }}
      >
        {children}
      </M>

      {underline && (
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full"
          style={{ backgroundColor: "#FFD36E", transformOrigin: "0% 50%" }}
        />
      )}
    </div>
  );
}

export default function LabContent() {
  return (
    <main className="min-h-screen pb-16">
      {/* Hero — padding so fixed header never clips */}
      <section className="relative overflow-visible pt-28 pb-14 md:pt-32 md:pb-20">
        <div className="container mx-auto px-6">
          <SectionTitle as="h1" size="xl">
            Lab &amp; Cultivation
          </SectionTitle>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 max-w-3xl text-lg text-white/90"
          >
            Where clean inputs, tight controls, and transparent testing come together—
            so every jar with the Effy name hits the mark.
          </motion.p>
        </div>
      </section>

      {/* Process pillars */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Clean Inputs",
              body:
                "Genetics selected for terp expression and consistency. Filtered water, targeted nutrition, and media that let the plant speak—no shortcuts.",
            },
            {
              title: "Tight Controls",
              body:
                "Data-logged temp, humidity, VPD, CO₂, and airflow. Dialed per cultivar and tuned batch-to-batch for repeatable results.",
            },
            {
              title: "Verified Quality",
              body:
                "Every batch goes to a third-party lab. We publish COAs for potency, terpenes, and safety, so you can see exactly what’s inside.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-sm uppercase tracking-widest text-white/70">{c.title}</div>
              <p className="mt-2 text-white/90">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testing & COAs */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          <SectionTitle as="h2" size="lg">
            Testing &amp; COAs
          </SectionTitle>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-3 max-w-3xl text-white/90"
          >
            We work with state-certified labs on every batch and post results online and in-store.
            COAs aren’t marketing—they’re your window into what you’re buying.
          </motion.p>

          <ul className="mt-4 grid gap-2 max-w-3xl text-white/85">
            <li className="flex gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#FFD36E]" />
              <span><strong>Potency:</strong> THC, CBD, and total cannabinoids—no funny math.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#FFD36E]" />
              <span><strong>Terpenes:</strong> Full profile with the top contributors called out for flavor and effect.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#FFD36E]" />
              <span><strong>Safety:</strong> Microbials, heavy metals, pesticides, and residual solvents.</span>
            </li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center rounded-xl bg-[#FFD36E] px-5 py-2.5 font-semibold text-gray-900 hover:brightness-95 transition"
            >
              View Sample COA (PDF)
            </a>
            <a
              href="/shop"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 font-semibold hover:bg-white/10 transition"
            >
              Shop Current Batches
            </a>
          </div>
        </div>
      </section>

      {/* Sustainability / Process Story */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          <SectionTitle as="h2" size="lg">
            Smarter by Design
          </SectionTitle>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-3 max-w-3xl text-white/90"
          >
            We pair proven craft with modern controls—closed-loop environments, responsible water
            management, and energy-efficient systems. Less waste. More flavor. Better consistency.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          <SectionTitle as="h3" size="md" className="mb-1">
            Inside the Facility
          </SectionTitle>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((n, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-white/5"
              >
                <div className="w-full h-full grid place-items-center text-white/60">
                  Image {n}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionTitle as="h3" size="md">
            FAQ
          </SectionTitle>

          <div className="mt-4 divide-y divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {[
              {
                q: "Do you publish COAs for every batch?",
                a: "Yes. Each batch is third-party tested; COAs are linked online and scannable in-store via QR.",
              },
              {
                q: "Why do some strains feel different between lots?",
                a: "We keep genetics consistent and tune the environment for each cultivar, but natural variation (especially in terpene ratios) can change the experience slightly. COAs list the exact profile for transparency.",
              },
              {
                q: "How long do you cure flower?",
                a: "Typically 10–14 days plus a controlled burp/condition period. We track moisture activity to protect flavor and smoothness.",
              },
              {
                q: "What sustainability steps do you take?",
                a: "Responsible water management, energy-efficient climate control, and waste-reduction practices throughout post-harvest.",
              },
              {
                q: "Are all products grown in-house?",
                a: "Most are. When we collaborate, partners must meet our testing and transparency standards—the same COA rules apply.",
              },
            ].map((item, i) => (
              <details key={i} className="p-5 open:bg-white/5">
                <summary className="cursor-pointer select-none text-lg font-semibold">
                  {item.q}
                </summary>
                <p className="mt-2 text-white/80">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
