"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";
import styles from "./google-reviews.module.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
  display: "swap",
});

export default function GoogleReviews({ gSize = "clamp(32px, 4.2vw, 52px)" }) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/google-reviews", { cache: "no-store" });
        const json = await res.json();
        if (!cancelled) {
          if (json.error) setErr(json.error);
          else setData(json);
        }
      } catch {
        if (!cancelled) setErr("Unable to load reviews");
      }
    })();
    return () => { cancelled = true; };
  }, []);

  if (err) {
    return (
      <section className={styles.wrap} aria-label="Google Reviews">
        <div className={styles.inner}><p className={styles.status}>{err}</p></div>
      </section>
    );
  }
  if (!data) {
    return (
      <section className={styles.wrap} aria-label="Google Reviews">
        <div className={styles.inner}><p className={styles.status}>Loading reviews…</p></div>
      </section>
    );
  }

  return (
    <section className={styles.wrap} aria-label="Google Reviews">
      <div className={styles.inner} style={{ ["--g-size"]: gSize }}>
        <header className={styles.header}>
          <div className={styles.titleRow}>
            <motion.img
              src="/img/google-g.svg"
              alt=""
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={styles.gIcon}
            />
            <div className={styles.titleBlock}>
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`${outfit.className} ${styles.title}`}
              >
                Reviews
              </motion.h2>
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={styles.titleUnderline}
              />
            </div>
          </div>

          <div className={styles.score}>
            <Stars value={data.rating} size={18} />
            <span className={styles.num}>
              {Number(data.rating).toFixed(1)} · {data.total} reviews
            </span>
            {data.url && (
              <a className={styles.link} href={data.url} target="_blank" rel="noopener noreferrer">
                View on Google
              </a>
            )}
          </div>
        </header>

        <div className={styles.scroller}>
          <div aria-hidden className={styles.fadeLeft} />
          <div aria-hidden className={styles.fadeRight} />
          <ul className={styles.track} role="list">
            {(data.reviews || []).map((r, idx) => (
              <motion.li
                key={r.time ?? idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className={styles.slide}
                role="listitem"
              >
                <div className={styles.authorRow}>
                  {r.profilePhotoUrl && <img src={r.profilePhotoUrl} alt="" className={styles.avatar} />}
                  <div>
                    <div className={styles.author}>{r.authorName}</div>
                    <div className={styles.meta}>
                      <Stars value={r.rating} size={16} />
                      <span className={styles.time}>{r.relativeTime}</span>
                    </div>
                  </div>
                </div>

                {r.text && <p className={styles.text}>{r.text}</p>}
                {r.authorUrl && (
                  <a href={r.authorUrl} target="_blank" rel="noopener noreferrer" className={styles.authorLink}>
                    See original review
                  </a>
                )}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className={styles.attribution}>
          Reviews provided by <span>Google</span>.
        </div>
      </div>
    </section>
  );
}

function Stars({ value = 0, size = 16 }) {
  const rating = Math.max(0, Math.min(5, Math.round(value * 2) / 2));
  const full = Math.floor(rating);
  const hasHalf = rating - full === 0.5;

  return (
    <span className={styles.stars} aria-label={`${rating} out of 5`}>
      {[0,1,2,3,4].map(i => {
        const filled = i < full;
        const half = !filled && hasHalf && i === full;
        return <StarIcon key={i} filled={filled} half={half} size={size} />;
      })}
    </span>
  );
}

function StarIcon({ filled, half, size }) {
  const id = Math.random().toString(36).slice(2);
  const d = "M12 2.5l2.93 5.94 6.56.95-4.74 4.62 1.12 6.53L12 17.9 6.13 20.54l1.12-6.53L2.5 9.39l6.56-.95L12 2.5z";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={styles.starIcon} aria-hidden="true">
      <path d={d} fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.2" />
      {filled && <path d={d} fill="#FFD36E" />}
      {half && (
        <>
          <defs>
            <linearGradient id={`half-${id}`} x1="0" x2="1" y1="0" y2="0">
              <stop offset="50%" stopColor="#FFD36E" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d={d} fill={`url(#half-${id})`} />
        </>
      )}
    </svg>
  );
}
