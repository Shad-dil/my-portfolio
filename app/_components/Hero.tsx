"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { BiDownArrowCircle } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="pt-32 pb-24 text-center bg-[#0e021b] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
        >
          {t("title1")} <span className="text-[#A26BFF]">{t("title2")}</span>{" "}
          {t("title3")}
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg text-gray-300 leading-relaxed"
        >
          {t("sub")}
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-[#A26BFF] text-black font-medium shadow-md hover:bg-transparent hover:text-white hover:border-white hover:border transition flex items-center justify-center gap-2"
          >
            {t("cta1")} <BsEye className="text-lg" />
          </a>

          <a
            href="/dev_resume.pdf"
            className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-[#A26BFF] hover:text-black transition flex items-center justify-center gap-2"
          >
            {t("cta2")} <BiDownArrowCircle className="text-lg" />
          </a>
        </motion.div>

        {/* SYSTEM PREVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-16 mx-auto max-w-5xl p-4 sm:p-6 rounded-2xl bg-[#0A0911] border border-white/10 shadow-[0px_0px_32px_rgba(162,107,255,0.12)]"
        >
          <p className="mb-3 text-sm text-gray-400 text-left">{t("example")}</p>

          <Image
            src="/dashboard_preview.png"
            alt="Frontend system preview showing data-intensive UI"
            className="w-full rounded-xl shadow-lg"
            width={500}
            height={500}
          />
        </motion.div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-162.5 h-162.5 bg-[#A26BFF]/20 blur-[180px] opacity-25" />
      </div>
    </section>
  );
}
