"use client";
import { motion } from "framer-motion";

export default function LabContent() {
  return (
    <main className="min-h-screen pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Lab & Cultivation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 max-w-3xl text-lg text-white/90"
          >
            A closer look at how we grow, process, and test—so every jar hits the mark.
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
                "Genetics chosen for flavor and consistency. Media and nutrients tuned for terp expression.",
            },
            {
              title: "Tight Controls",
              body:
                "Environmental controls for temp, humidity, CO₂, and airflow—dialed for each cultivar.",
            },
            {
              title: "Verified Quality",
              body:
                "Third-party testing with transparent COAs for potency, terps, and contaminants.",
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
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-bold tracking-tight"
          >
            Testing & COAs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-3 max-w-3xl text-white/90"
          >
            Every batch is tested by third-party labs. We publish COAs with each product so you can
            verify potency, terpene profile, and cleanliness. {/* Link real files when ready */}
          </motion.p>

          <div className="mt-4 flex flex-wrap gap-3">
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

      {/* Gallery (optional placeholder images) */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-3xl font-semibold tracking-tight"
          >
            Inside the Facility
          </motion.h3>
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
                {/* Replace with real images: /img/lab/1.jpg etc. */}
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
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-3xl font-semibold tracking-tight"
          >
            FAQ
          </motion.h3>
          <div className="mt-4 divide-y divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {[
              {
                q: "Do you publish COAs for every batch?",
                a: "Yes—scannable in-store and linked online alongside products.",
              },
              {
                q: "How do you select genetics?",
                a: "We test for consistency, terp expression, and desired effects, then scale what resonates.",
              },
              {
                q: "Any sustainability practices?",
                a: "We track water and energy usage and optimize environmental controls to reduce waste.",
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
