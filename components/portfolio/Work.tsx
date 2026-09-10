import { getTranslations } from "next-intl/server";
import Image from "next/image";

type Decision = { title: string; desc: string };

function DecisionItem({ decision }: { decision: Decision }) {
  return (
    <div className="mb-4 border-s-2 border-[var(--line)] ps-4">
      <strong className="mb-0.5 block text-[0.95rem]">{decision.title}</strong>
      <span className="text-[0.92rem] text-[var(--muted)]">
        {decision.desc}
      </span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm border border-[var(--line)] px-2.5 py-1.5 font-[family-name:var(--font-mono)] text-[0.78rem] text-[var(--muted)]">
      {children}
    </span>
  );
}

export default async function Work() {
  const t = await getTranslations("work");
  const jp = await getTranslations("work.jobpilot");
  const pb = await getTranslations("work.pulseboard");
  const other = await getTranslations("work.other");

  const jpDecisions = jp.raw("decisions") as Decision[];
  const pbDecisions = pb.raw("decisions") as Decision[];

  return (
    <section id="work" className="border-b border-[var(--line)] py-22 px-6">
      <div className="mx-auto max-w-[1040px]">
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.5rem,3vw,2rem)] font-medium">
            {t("heading")}
          </h2>
          <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--muted)]">
            02
          </span>
        </div>

        {/* --- JobPilot (featured / live product) --- */}
        <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-12">
          <div className="rounded border border-[var(--line)] bg-[var(--paper-dim)] overflow-hidden">
            <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--paper)] px-3.5 py-2.5">
              <span className="h-2 w-2 rounded-full bg-[var(--line)]" />
              <span className="h-2 w-2 rounded-full bg-[var(--line)]" />
              <span className="h-2 w-2 rounded-full bg-[var(--line)]" />
              <span className="ms-1.5 font-[family-name:var(--font-mono)] text-[0.78rem] text-[var(--muted)]">
                {jp("url")}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3 p-4">
              <Image
                src="/jobPilot1.png"
                alt="JobPilot resume analysis interface"
                width={900}
                height={600}
                sizes="(min-width: 768px) 500px, calc(100vw - 48px)"
                className="h-auto w-full rounded-sm border border-[var(--line)] object-cover"
              />
              <Image
                src="/jobPilot2.png"
                alt="JobPilot job matching interface"
                width={900}
                height={600}
                sizes="(min-width: 768px) 500px, calc(100vw - 48px)"
                className="h-auto w-full rounded-sm border border-[var(--line)] object-cover"
              />
            </div>
          </div>

          <div>
            <span className="mb-2.5 block font-[family-name:var(--font-mono)] text-[0.78rem] text-[var(--ledger)]">
              {jp("kicker")}
            </span>
            <h3 className="mb-3.5 font-[family-name:var(--font-serif)] text-[1.4rem] font-medium">
              {jp("title")}
            </h3>
            <p className="mb-5 text-[var(--muted)]">{jp("problem")}</p>

            {jpDecisions.map((d) => (
              <DecisionItem key={d.title} decision={d} />
            ))}

            <div className="my-5 flex flex-wrap gap-2">
              {[
                "Next.js 15",
                "React",
                "TypeScript",
                "MySQL",
                "Prisma",
                "Vercel AI SDK",
                "NextAuth / Better Auth",
                "Zod",
              ].map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2.5">
              <a
                href="https://jobpilot.dilshad.online"
                className="rounded-sm bg-[var(--ink)] px-4 py-2.5 text-sm font-medium text-[var(--paper)] transition-colors hover:bg-[var(--brass-dim)]"
              >
                {jp("liveDemo")}
              </a>
            </div>

            <div className="mt-5 border-t border-dashed border-[var(--line)] pt-4.5 text-[0.92rem] text-[var(--muted)]">
              <strong className="text-[var(--ink)]">
                {jp("whatNextLabel")}
              </strong>{" "}
              {jp("whatNextBody")}
            </div>
          </div>
        </div>

        <hr className="my-18 border-t border-[var(--line)]" />

        {/* --- PulseBoard (secondary case study) --- */}
        <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-12">
          <div>
            <Image
              src="/dashboard_preview.png"
              alt="PulseBoard dashboard interface showing KPI charts and data tables"
              className="w-full rounded border border-[var(--line)]"
              width={900}
              height={600}
              sizes="(min-width: 768px) 500px, calc(100vw - 48px)"
            />
          </div>

          <div>
            <span className="mb-2.5 block font-[family-name:var(--font-mono)] text-[0.78rem] text-[var(--ledger)]">
              {pb("kicker")}
            </span>
            <h3 className="mb-3.5 font-[family-name:var(--font-serif)] text-[1.4rem] font-medium">
              {pb("title")}
            </h3>
            <p className="mb-5 text-[var(--muted)]">{pb("problem")}</p>

            {pbDecisions.map((d) => (
              <DecisionItem key={d.title} decision={d} />
            ))}

            <div className="my-5 flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Prisma",
                "NeonDB",
                "React Query",
                "Tailwind CSS",
                "shadcn/ui",
                "Chart.js",
              ].map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2.5">
              <a
                href="https://pulse-board-5u2d.vercel.app/dashboard"
                className="rounded-sm bg-[var(--ink)] px-4 py-2.5 text-sm font-medium text-[var(--paper)] transition-colors hover:bg-[var(--brass-dim)]"
              >
                {pb("liveDemo")}
              </a>
              <a
                href="https://github.com/Shad-dil/pulse-board"
                className="rounded-sm border border-[var(--ink)] px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
              >
                {pb("github")}
              </a>
            </div>

            <div className="mt-5 border-t border-dashed border-[var(--line)] pt-4.5 text-[0.92rem] text-[var(--muted)]">
              <strong className="text-[var(--ink)]">
                {pb("whatNextLabel")}
              </strong>{" "}
              {pb("whatNextBody")}
            </div>
          </div>
        </div>

        {/* --- Other projects --- */}
        <div className="mt-16">
          <h3 className="mb-4.5 text-[1.05rem] font-semibold text-[var(--muted)]">
            {other("heading")}
          </h3>

          <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            <div className="flex items-center gap-4 bg-[var(--paper)] p-5">
              {/* <Image
                src="https://dilshad.online/klimate.png"
                alt="Klimate weather app interface"
                className="h-16 w-16 shrink-0 rounded object-cover"
              /> */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded bg-[var(--ledger)] font-[family-name:var(--font-serif)] text-xl text-[var(--paper)]">
                KL
              </div>
              <div>
                <h4 className="mb-1 font-[family-name:var(--font-serif)] text-[1.05rem] font-medium">
                  {other("klimate.name")}
                </h4>
                <p className="mb-1 text-[0.88rem] text-[var(--muted)]">
                  {other("klimate.desc")}
                </p>
                <a
                  href="https://github.com/Shad-dil"
                  className="font-[family-name:var(--font-mono)] text-[0.78rem] text-[var(--brass-dim)] underline"
                >
                  {other("githubLink")} ↗
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[var(--paper)] p-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded bg-[var(--ledger)] font-[family-name:var(--font-serif)] text-xl text-[var(--paper)]">
                IO
              </div>
              <div>
                <h4 className="mb-1 font-[family-name:var(--font-serif)] text-[1.05rem] font-medium">
                  {other("instituteOS.name")}
                </h4>
                <p className="mb-1 text-[0.88rem] text-[var(--muted)]">
                  {other("instituteOS.desc")}
                </p>
                <a
                  href="https://github.com/Shad-dil"
                  className="font-[family-name:var(--font-mono)] text-[0.78rem] text-[var(--brass-dim)] underline"
                >
                  {other("githubLink")} ↗
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[var(--paper)] p-5 sm:col-span-2">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded bg-[var(--brass-dim)] font-[family-name:var(--font-serif)] text-xl text-[var(--paper)]">
                ED
              </div>
              <div>
                <h4 className="mb-1 font-[family-name:var(--font-serif)] text-[1.05rem] font-medium">
                  {other("eventDrop.name")}
                </h4>
                <p className="mb-1 text-[0.88rem] text-[var(--muted)]">
                  {other("eventDrop.desc")}
                </p>
                <a
                  href="https://github.com/Shad-dil"
                  className="font-[family-name:var(--font-mono)] text-[0.78rem] text-[var(--brass-dim)] underline"
                >
                  {other("githubLink")} ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
