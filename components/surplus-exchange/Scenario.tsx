import { GuideSection } from "./shared";

const steps = [
  { title: "Seller sets the audience", body: "A fictional seller picks a private market and invites a small group." },
  { title: "Buyers are checked", body: "Invited organizations have been verified and meet category conditions." },
  { title: "An opportunity is shown", body: "Only the invited, authorized buyers can see it." },
  { title: "Record is kept", body: "Decisions and confirmation are saved for later review." },
];

export default function Scenario() {
  return (
    <GuideSection
      id="scenario"
      num="17"
      label="Illustrative scenario"
      title={
        <>
          How one fictional
          <br className="hidden md:block" /> opportunity might move.
        </>
      }
      lead="A worked process with no brands, prices or results."
    >
      <div className="flex flex-col gap-4 rounded-2xl border-[1.5px] border-dashed border-[#d6c3a0] bg-white p-6 md:p-8">
        <span className="w-fit rounded-md bg-[#fde3df] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a3322b]">
          Fictional. Non-operational.
        </span>
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={`flex flex-col gap-1 ${i > 0 ? "lg:border-l lg:border-[#e2e6ec] lg:pl-4" : ""} lg:pr-4`}
            >
              <h3 className="text-base font-semibold text-[#0f1f3a]">{s.title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </GuideSection>
  );
}
