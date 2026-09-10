import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("hero");
  const s = await getTranslations("strip");

  const stripItems = [
    { label: s("experienceLabel"), value: s("experienceValue") },
    { label: s("focusLabel"), value: s("focusValue") },
    { label: s("marketsLabel"), value: s("marketsValue") },
    { label: s("statusLabel"), value: s("statusValue") },
  ];

  return (
    <div id="top">
      <div className="mx-auto max-w-[1040px] px-6 pt-16">
        <h1 className=" max-w-[14ch] font-[family-name:var(--font-serif)] text-[clamp(2rem,4.6vw,3.2rem)] font-medium leading-[1.15]">
          {t("title")}
        </h1>
        <p
          className=" mt-5 max-w-[56ch] text-[1.08rem] text-[var(--muted)]"
          style={{ animationDelay: "0.12s" }}
        >
          {t("subtitle")}
        </p>
        <div
          className=" mt-8 flex flex-wrap gap-3.5"
          style={{ animationDelay: "0.22s" }}
        >
          <a
            href="#work"
            className="rounded-sm bg-var(--ink) px-5 py-3 text-sm font-medium text-var(--paper) transition-colors hover:bg-[var(--brass-dim)]"
          >
            {t("ctaPrimary")}
          </a>
          <a
            href="/dev_resume.pdf"
            className="rounded-sm border border-[var(--ink)] px-5 py-3 text-sm font-medium transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
          >
            {t("ctaSecondary")}
          </a>
        </div>
      </div>

      <div
        className="animate-rise mt-14 border-y border-[var(--line)]"
        style={{ animationDelay: "0.32s" }}
      >
        <div className="mx-auto grid max-w-[1040px] grid-cols-2 md:grid-cols-4">
          {stripItems.map((item, i) => (
            <div
              key={item.label}
              className={[
                "border-[var(--line)] px-6 py-4",
                i % 2 === 0 ? "border-e" : "",
                "border-b md:border-b-0",
                i < 2 ? "md:border-b-0" : "",
                i !== stripItems.length - 1 ? "md:border-e" : "",
              ].join(" ")}
            >
              <div className="mb-1.5 text-[0.78rem] text-[var(--muted)]">
                {item.label}
              </div>
              <div className="font-[family-name:var(--font-mono)] text-[0.92rem]">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
