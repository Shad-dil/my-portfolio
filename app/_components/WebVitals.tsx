"use client";

import { motion } from "framer-motion";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function WebVitals() {
  return (
    <section
      id="webvitals"
      className="px-6 md:px-12 lg:px-20 py-20 bg-[#0f0f11] text-violet-400"
    >
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold mb-3 text-white">
          Core Web Vitals
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Real performance improvements that boosted Lighthouse scores and
          improved both user experience & SEO.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* ================= LEFT: BEFORE → AFTER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Lighthouse Score Improvement
            </h3>

            {/* MOBILE GRID */}
            <div className="grid grid-cols-2 gap-4 md:mt-[6rem]">
              <div className="text-center">
                <p className="mb-2 font-semibold text-gray-300">Before</p>
                <img
                  src="/before_mobil.png"
                  className="rounded-xl border border-gray-700 shadow-lg"
                  alt="Before performance"
                />
              </div>
              <div className="text-center">
                <p className="mb-2 font-semibold text-gray-300">After</p>
                <img
                  src="/after_mobil.png"
                  className="rounded-xl border border-gray-700 shadow-xl shadow-green-400/30"
                  alt="After performance"
                />
              </div>
            </div>

            {/* DESKTOP GRID */}
          </div>
        </motion.div>

        {/* ================= RIGHT: IMPROVEMENT DETAILS ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            What Was Improved?
          </h3>

          {/* BULLET LIST */}
          <ul className="space-y-6">
            {[
              {
                title: "Reduced CLS (Layout Shift)",
                desc: "Applied proper width/height attributes & optimized image loading.",
              },
              {
                title: "Improved LCP with optimized hero image",
                desc: "Compressed hero assets, converted to WebP, and used next/image.",
              },
              {
                title: "Reduced JS bundle size by ~40%",
                desc: "Code-splitting, dynamic imports, removed unused libraries.",
              },
              {
                title: "Improved FID by minimizing JS execution",
                desc: "Deferred heavy scripts and removed blocking resources.",
              },
              {
                title: "Better caching strategy",
                desc: "Used ISR, caching headers, and Next.js prefetching.",
              },
            ].map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <div className="text-green-400 mt-1">
                  <FaArrowTrendUp size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* SUMMARY CARD */}
          <div className="p-6 rounded-xl bg-green-500/10 border border-green-800">
            <h4 className="font-semibold text-xl text-green-300 mb-2">
              Final Results
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Achieved{" "}
              <span className="text-green-400 font-semibold">
                95+ Lighthouse scores
              </span>
              on both Mobile and Desktop by systematically optimizing Core Web
              Vitals. This resulted in:
              <br />• Faster loading
              <br />• Smoother interactions
              <br />• Higher SEO ranking
              <br />• Better user experience and retention
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
