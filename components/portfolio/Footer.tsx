import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations();
  return (
    <footer className="px-6 py-8 text-center font-[family-name:var(--font-mono)] text-[0.8rem] text-[var(--muted)]">
      {t("footer")}
    </footer>
  );
}
