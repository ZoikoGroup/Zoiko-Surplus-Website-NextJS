import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading, Section, WideImage, hanken, img } from "./shared";

const stages = [
  { title: "Qualify", body: "Condition, provenance, rights" },
  { title: "Govern", body: "Policy, safety, sanctions" },
  { title: "Match", body: "Verified, authorized demand" },
  { title: "Optimize", body: "Permitted routes" },
  { title: "Transact", body: "Authorized providers" },
  { title: "Prove", body: "Evidence & records" },
  { title: "Resolve", body: "Disputes & exceptions" },
];

export default function ControlMap() {
  return (
    <Section labelledBy="control-map-heading">
      <SectionHeading
        id="control-map-heading"
        num="03"
        label="Seven-stage control map"
        title="Controls at every stage."
        lead="The same governed sequence runs site-wide — each stage carries its own checks, and safety and policy run before matching."
        titleClassName="max-w-[780px]"
      />
      <div className="flex flex-col gap-5">
        <WideImage src={img("control-map.webp")} alt="Three colleagues in suits walking past warehouse racking" />
        {/* gap-px over a border-coloured background draws the cell dividers at every breakpoint. */}
        <ol
          className={`${hanken} grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#e6e9ef] bg-[#e6e9ef] sm:grid-cols-4 lg:grid-cols-7`}
        >
          {stages.map((s, i) => (
            <li key={s.title} className="flex flex-col items-center gap-1 bg-white px-3 pt-4 pb-6 text-center">
              <span className="flex size-7 items-center justify-center rounded-full bg-[#0f1f3a] text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="pt-1 text-sm font-bold text-[#0f1f3a]">{s.title}</h3>
              <p className="text-xs leading-4 text-[#7d8aa0]">{s.body}</p>
            </li>
          ))}
        </ol>
        <Link
          href="/how-it-works"
          className={`${hanken} inline-flex w-fit items-center gap-2 text-base font-semibold text-[#0b7a5c] hover:underline`}
        >
          See the seven stages in detail
          <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
        </Link>
      </div>
    </Section>
  );
}
