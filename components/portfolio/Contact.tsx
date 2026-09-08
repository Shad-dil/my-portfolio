import { getTranslations } from "next-intl/server";

export default async function Contact() {
  const t = await getTranslations("contact");

  const links = [
    { href: "mailto:helloshad3@gmail.com", label: t("email") },
    { href: "https://www.linkedin.com/in/frontend-dev-shad", label: t("linkedin") },
    { href: "https://github.com/Shad-dil", label: t("github") },
    { href: "/dev_resume.pdf", label: t("resume") },
  ];

  return (
    <section id="contact" className="py-22 px-6">
      <div className="mx-auto max-w-[1040px]">
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.5rem,3vw,2rem)] font-medium">
            {t("heading")}
          </h2>
          <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--muted)]">
            05
          </span>
        </div>

        <p className="mb-1 max-w-[60ch] text-[var(--muted)]">{t("line")}</p>
        <div className="mt-2.5 flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-[0.85rem] text-[var(--muted)]">
          <span className="inline-block h-[7px] w-[7px] rounded-full bg-[var(--brass)]" />
          {t("status")}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-sm border border-[var(--line)] px-4.5 py-3 text-sm transition-colors hover:border-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
