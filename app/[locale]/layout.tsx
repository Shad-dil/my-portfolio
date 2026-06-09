import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Cairo, Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});
const locales = ["en", "ar", "hi"];

export const metadata: Metadata = {
  metadataBase: new URL("https://dilshad.online"),
  title: "Dilshad | Frontend Developer — React, Next.js, GCC",
  description:
    "3+ years building enterprise banking UIs for UAE & KSA clients at Infosys.",
  openGraph: {
    title: "Dilshad — Frontend Developer",
    description: "GCC-experienced frontend engineer. Open to UAE / KSA roles.",
    images: ["/og-image.png"],
    url: "https://dilshad.online",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();
  const isRTL = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
