"use client";

import { motion } from "framer-motion";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function WebVitals() {
  return (
    <section
      id="webvitals"
      className="px-6 md:px-12 lg:px-20 py-20 bg-[#0f0f11] text-violet-500"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-semibold mb-2">Core Web Vitals</h2>
        <p className="text-gray-400 dark:text-gray-400 text-lg">
          Performance improvements that significantly boosted Lighthouse scores
        </p>
      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-2 gap-14">
        {/* LEFT: BEFORE → AFTER IMAGES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* MOBILE RESULTS */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Performance Improvements
            </h3>
            <div className="grid grid-cols-2 gap-4 md:mt-20">
              <div className="text-center">
                <p className="mb-2 font-medium">Before</p>
                <img
                  src="/before_mobil.png"
                  className="rounded-xl border dark:border-gray-700"
                  alt="Before performance"
                />
              </div>
              <div className="text-center">
                <p className="mb-2 font-medium">After</p>
                <img
                  src="/after_mobil.png"
                  className="rounded-xl border dark:border-gray-700 shadow-lg shadow-green-400/30"
                  alt="After performance"
                />
              </div>
            </div>
          </div>

          {/* DESKTOP RESULTS */}
        </motion.div>

        {/* RIGHT: PERFORMANCE METRICS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h3 className="text-2xl font-semibold mb-4">
            What Improvements Were Made?
          </h3>

          {/* METRICS LIST */}
          <ul className="space-y-6">
            {[
              {
                title: "Reduced CLS by fixing layout shifts",
                desc: "Added proper width/height attributes, used next/image, avoided dynamic size jumps.",
              },
              {
                title: "Improved LCP with image optimization",
                desc: "Compressed hero images and served webp automatically.",
              },
              {
                title: "Minimized JS bundle by code-splitting",
                desc: "Used dynamic imports & reduced unused components.",
              },
              {
                title: "Improved FID by removing heavy script execution",
                desc: "Deferred non-critical scripts and removed blocking resources.",
              },
              {
                title: "Enhanced caching strategy",
                desc: "Implemented Next.js ISR, prefetching, and proper caching headers.",
              },
            ].map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <div className="text-green-500 mt-1">
                  <FaArrowTrendUp size={20} />
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* SUMMARY CARD */}
          <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-800">
            <h4 className="font-semibold text-xl mb-2">Final Results</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Achieved **95+ Lighthouse scores** on both Mobile and Desktop by
              systematically optimizing Core Web Vitals, resulting in smoother
              interactions, faster load times, and improved SEO.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
