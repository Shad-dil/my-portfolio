import { getTranslations } from "next-intl/server";

type Phase = { year: string; title: string; items: string[] };

export default async function Experience() {
  const t = await getTranslations("experience");
  const phases = t.raw("phases") as Phase[];

  return (
    <section
      id="experience"
      className="border-b border-[var(--line)] py-22 px-6"
    >
      <div className="mx-auto max-w-[1040px]">
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.5rem,3vw,2rem)] font-medium">
            {t("heading")}
          </h2>
          <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--muted)]">
            04
          </span>
        </div>

        <h3 className="mb-1 font-[family-name:var(--font-serif)] text-[1.25rem] font-medium">
          {t("role")}
        </h3>
        <p className="mb-7 font-[family-name:var(--font-mono)] text-[0.82rem] text-[var(--muted)]">
          {t("meta")}
        </p>

        {phases.map((phase) => (
          <div
            key={phase.year}
            className="grid grid-cols-1 gap-1.5 border-t border-[var(--line)] py-5 last:border-b sm:grid-cols-[120px_1fr] sm:gap-5"
          >
            <div className="pt-0.5 font-[family-name:var(--font-mono)] text-[0.85rem] text-[var(--brass-dim)]">
              {phase.year}
            </div>
            <div>
              <h4 className="mb-2.5 text-[1rem] font-semibold">
                {phase.title}
              </h4>
              <ul className="ms-4.5 list-disc space-y-1.5 text-[0.94rem] text-[var(--muted)] marker:text-[var(--line)]">
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="mt-6 rounded-sm border-s-2 border-[var(--brass)] bg-[var(--paper-dim)] px-4.5 py-4 text-[0.88rem] text-[var(--muted)]">
          <strong className="text-[var(--ink)]">{t("leadNoteLabel")}</strong>{" "}
          {t("leadNoteBody")}
        </div>
      </div>
    </section>
  );
}
