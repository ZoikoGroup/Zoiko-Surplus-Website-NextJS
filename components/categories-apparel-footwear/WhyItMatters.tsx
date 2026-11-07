import { EyeOff, FolderCheck, Recycle } from "lucide-react";
import { SectionHeading, hanken } from "./shared";

const reasons = [
  {
    icon: Recycle,
    title: "Keep usable goods in use",
    body: "Governed disposition helps overstock, returns and end-of-line apparel reach a responsible outcome instead of being written off.",
  },
  {
    icon: EyeOff,
    title: "Protect the brand",
    body: "Private, seller-approved routes keep pricing, channels and presentation under the brand owner’s control.",
  },
  {
    icon: FolderCheck,
    title: "Defensible decisions",
    body: "Evidence of condition, rights and outcome means an apparel disposition can be explained and stood behind.",
  },
];

// Not listed in the "On this page" sidebar, so it has no anchor id.
export default function WhyItMatters() {
  return (
    <section aria-labelledby="why-heading" className="flex flex-col gap-10 py-10 md:gap-14 md:py-16">
      <SectionHeading
        id="why-heading"
        num="03"
        label="Why it matters"
        title="Why governed apparel disposition."
        lead="Three reasons the controlled path exists for apparel & footwear — described qualitatively, with no performance claims."
      />

      <ul className={`${hanken} grid gap-8 sm:grid-cols-3 sm:gap-6`}>
        {reasons.map(({ icon: Icon, title, body }) => (
          <li key={title} className="flex items-start gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl">
              <Icon aria-hidden="true" className="size-5 text-[#2bb38a]" strokeWidth={1.85} />
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-base font-bold leading-6 text-[#0f1f3a]">{title}</h3>
              <p className="text-sm leading-[22px] text-[#556987]">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
