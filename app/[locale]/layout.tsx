import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "../globals.css"; // make sure globals-portfolio-tokens.css is merged into this file

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dilshad — Frontend Developer, Enterprise Banking UI",
  description:
    "Frontend developer with 4 years building enterprise banking interfaces for UAE and KSA clients at Infosys.",
};

// Adjust this list to match the locales you already support in your i18n config.
const RTL_LOCALES = new Set(["ar"]);

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    notFound();
  }

  const messages = await getMessages();
  const dir = RTL_LOCALES.has(locale) ? "rtl" : "ltr";

  return (
    <NextIntlClientProvider messages={messages}>
      <div
        lang={locale}
        dir={dir}
        className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} bg-[var(--paper)] text-[var(--ink)] font-[family-name:var(--font-sans)] antialiased`}
      >
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
