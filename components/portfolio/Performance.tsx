import { getTranslations } from "next-intl/server";

type Row = { desc: string; detail: string; value: string };

export default async function Performance() {
  const t = await getTranslations("performance");
  const rows = t.raw("rows") as Row[];
  const projectText = t("project", { project: t("projectName") });

  return (
    <section
      id="performance"
      className="border-b border-[var(--line)] py-22 px-6"
    >
      <div className="mx-auto max-w-[1040px]">
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.5rem,3vw,2rem)] font-medium">
            {t("heading")}
          </h2>
          <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--muted)]">
            03
          </span>
        </div>

        <p className="mb-7 text-[0.92rem] text-[var(--muted)]">
          {projectText}
        </p>

        {rows.map((row) => (
          <div
            key={row.desc}
            className="grid grid-cols-[1fr_auto] items-center gap-3 border-t border-[var(--line)] py-4 last:border-b"
          >
            <div className="text-[0.95rem]">
              {row.desc}
              <span className="mt-0.5 block text-[0.85rem] text-[var(--muted)]">
                {row.detail}
              </span>
            </div>
            <div className="whitespace-nowrap font-[family-name:var(--font-mono)] text-[0.95rem] text-[var(--ledger)]">
              {row.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
