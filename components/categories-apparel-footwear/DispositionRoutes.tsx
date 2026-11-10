import { Heart, Info, Recycle, Repeat } from "lucide-react";
import { SectionHeading, Section, hanken } from "./shared";

const routes = [
  {
    icon: Repeat,
    title: "Seller-private B2B resale",
    body: "Approved resale to verified business buyers in a private audience.",
    tag: "Policy-gated",
  },
  {
    icon: Recycle,
    title: "Textile recovery / recycling",
    body: "Permitted material recovery where resale isn’t appropriate.",
    tag: "Where enabled",
  },
  {
    icon: Heart,
    title: "Donation / redistribution",
    body: "Transfer to an eligible recipient via an authorized partner.",
    tag: "Where enabled",
  },
];

export default function DispositionRoutes() {
  return (
    <Section id="routes" labelledBy="routes-heading" className="flex flex-col gap-10 md:gap-14">
      <SectionHeading
        id="routes-heading"
        num="09"
        label="Disposition routes"
        title="Where qualified apparel can go."
        lead="Illustrative, policy-gated routes — none is confirmed as available, priced or executable on this page."
      />

      <ul className={`${hanken} grid gap-4 sm:grid-cols-3`}>
        {routes.map(({ icon: Icon, title, body, tag }) => (
          <li key={title} className="flex flex-col items-start gap-2 rounded-2xl border border-[#e6e9ef] bg-white p-[18px]">
            <span className="mb-1.5 flex size-[42px] items-center justify-center rounded-xl bg-[#ddf3ec]">
              <Icon aria-hidden="true" className="size-5 text-[#0b7a5c]" strokeWidth={1.75} />
            </span>
            <h3 className="text-[15px] font-bold text-[#0f1f3a]">{title}</h3>
            <p className="text-[13px] leading-5 text-[#556987]">{body}</p>
            <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-[#f5e7d6] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-[#7a4d0f]">
              <Info aria-hidden="true" className="size-3" strokeWidth={2} />
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
