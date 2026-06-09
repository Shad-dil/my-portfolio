"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

const LANGS = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ar", label: "عربي", flag: "🇦🇪" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
];

const LOCALE_PREFIXES = ["en", "ar", "hi"];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname(); // e.g. "/ar/about" or "/about"
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    const hasLocalePrefix = LOCALE_PREFIXES.includes(segments[0]);

    const cleanPath = hasLocalePrefix
      ? segments.slice(1).join("/")
      : segments.join("/");

    let newPath: string;
    if (newLocale === "en") {
      newPath = cleanPath ? `/en/${cleanPath}` : "/en"; // ← explicit /en, not /
    } else {
      newPath = cleanPath ? `/${newLocale}/${cleanPath}` : `/${newLocale}`;
    }

    console.log("clean:", cleanPath, "| newPath:", newPath);

    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <div className={`flex items-center gap-1 ${isPending ? "opacity-50" : ""}`}>
      {LANGS.map(({ code, label, flag }) => (
        <button
          key={code}
          onClick={() => switchLocale(code)}
          disabled={isPending}
          className={`
            px-2.5 py-1 rounded-full text-xs font-medium transition-all
            ${
              locale === code
                ? "bg-[#A26BFF] text-white"
                : "text-gray-400 hover:text-[#A26BFF] hover:bg-white/5"
            }
          `}
        >
          {flag} {label}
        </button>
      ))}
    </div>
  );
}
