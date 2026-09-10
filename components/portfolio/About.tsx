import { getTranslations } from "next-intl/server";
import Image from "next/image";

type SkillItem = { name: string; desc: string };

export default async function About() {
  const t = await getTranslations("about");
  const tSkills = await getTranslations("skills");
  const skills = tSkills.raw("items") as SkillItem[];

  return (
    <section id="about" className="border-b border-[var(--line)] py-22 px-6">
      <div className="mx-auto max-w-[1040px]">
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.5rem,3vw,2rem)] font-medium">
            {t("heading")}
          </h2>
          <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--muted)]">
            01
          </span>
        </div>

        <div className="grid gap-10 md:grid-cols-[200px_1fr]">
          <div>
            <Image
              src="/Profile.jpg"
              alt="Portrait of Dilshad"
              className="h-35  rounded object-cover grayscale-45"
              width={135}
              height={135}
            />
            <div className="mt-2 flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.82rem] text-[var(--ledger)]">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-[var(--ledger)]" />
              {t("badge")}
            </div>
          </div>

          <div className="max-w-[760px]">
            <p className="mb-4">{t("paragraph1")}</p>
            <p className="mb-4">{t("paragraph2")}</p>
            <p className="text-[var(--muted)]">{t("paragraph3")}</p>
          </div>
        </div>

        <div className="mt-14">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="grid gap-1 border-t border-[var(--line)] py-4.5 last:border-b sm:grid-cols-[200px_1fr] sm:items-baseline sm:gap-5"
            >
              <div className="text-[0.98rem] font-semibold">{skill.name}</div>
              <div className="text-[0.95rem] text-[var(--muted)]">
                {skill.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
