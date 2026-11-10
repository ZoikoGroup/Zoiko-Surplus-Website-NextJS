import { Note, SectionHeading, Section, hanken } from "./shared";

const phases = [
  { title: "Architecture", body: "A global, governed platform architecture." },
  { title: "Pilots", body: "Proposed seller-private pilots, subject to approval." },
  { title: "Activation", body: "Market- and category-by-category activation." },
  { title: "Scale", body: "Broader participation as approvals allow." },
];

export default function Roadmap() {
  return (
    <Section labelledBy="roadmap-heading">
      <SectionHeading
        id="roadmap-heading"
        num="13"
        label="Roadmap"
        title="A phased, approval-led path."
        lead="An illustrative view of how the platform is intended to mature — concept phases only, with no dates or commitments."
        titleClassName="max-w-[780px]"
      />
      <div className="flex flex-col gap-4">
        <ol
          className={`${hanken} grid overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white sm:grid-cols-2 lg:grid-cols-4`}
        >
          {phases.map((p, i) => (
            <li
              key={p.title}
              className="flex flex-col gap-1.5 border-[#e6e9ef] p-5 pb-7 not-first:border-t sm:nth-2:border-t-0 sm:even:border-l lg:not-first:border-t-0 lg:not-first:border-l"
            >
              <span className="mb-2.5 flex size-[30px] items-center justify-center rounded-full bg-[#0f1f3a] text-xs font-bold text-white">
                {i + 1}
              </span>
              <h3 className="text-base font-semibold text-[#0f1f3a]">{p.title}</h3>
              <p className="max-w-[220px] text-sm leading-6 text-[#556987]">{p.body}</p>
            </li>
          ))}
        </ol>
        <Note>Illustrative phases, not a timeline or commitment. Each phase depends on approval, market activation and eligibility.</Note>
      </div>
    </Section>
  );
}
