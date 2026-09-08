"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const links = [
    { href: "#about", label: t("about") },
    { href: "#work", label: t("work") },
    { href: "#experience", label: t("experience") },
    { href: "#contact", label: t("contact") },
  ];

  const switchLocale = (nextLocale: "en" | "ar") => {
    const pathWithoutLocale = pathname.replace(/^\/(en|ar)(?=\/|$)/, "");
    const nextPath = `/${nextLocale}${pathWithoutLocale || ""}`;

    startTransition(() => router.replace(nextPath));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1040px] items-center justify-between px-6 py-4">
        <a href="#top" className="font-[family-name:var(--font-serif)] text-lg">
          Dilshad<span className="text-[var(--brass)]">.dev</span>
        </a>

        <ul className="hidden gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm transition-colors hover:text-[var(--brass-dim)] focus-visible:text-[var(--brass-dim)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div
            className={`flex items-center gap-1 border-e border-[var(--line)] pe-3 ${isPending ? "opacity-50" : ""}`}
            aria-label="Language"
          >
            {(["en", "ar"] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-current={locale === option ? "page" : undefined}
                disabled={isPending || locale === option}
                onClick={() => switchLocale(option)}
                className={`rounded-sm px-2 py-1 text-xs font-medium transition-colors ${
                  locale === option
                    ? "bg-[var(--ink)] text-[var(--paper)]"
                    : "text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href="/dev_resume.pdf"
            className="hidden rounded-sm border border-[var(--ink)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)] md:inline-block"
          >
            {t("resume")}
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex items-center rounded border border-[var(--line)] p-2 md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-[18px] w-[18px] stroke-[var(--ink)]"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-b border-[var(--line)] px-6 pb-6 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
