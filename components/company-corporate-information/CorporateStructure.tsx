import { Fragment } from "react";
import { Boxes, Building2, ChevronDown, Package } from "lucide-react";
import { Container, Eyebrow, Note, hanken, sora } from "./shared";

const tiers = [
  {
    icon: Building2,
    name: "Zoiko Group",
    body: "The wider group of companies.",
    badge: "Group",
    iconStyle: "bg-[#0f1f3a] text-white",
  },
  {
    icon: Boxes,
    name: "Zoiko Supply Group Inc.",
    body: "The legal entity that operates the platform.",
    badge: "Parent entity",
    iconStyle: "bg-[#f1f4f8] text-[#556987]",
  },
  {
    icon: Package,
    name: "Zoiko Surplus",
    body: "The governed B2B surplus commerce platform.",
    badge: "Platform",
    iconStyle: "bg-[#e3f4ee] text-[#0b7a5c]",
    highlight: true,
  },
];

export default function CorporateStructure() {
  return (
    <section aria-labelledby="structure-heading" className="bg-[#0f2140] py-16 md:py-24">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <Eyebrow num="04" label="Corporate structure" tone="dark" />
          <h2
            id="structure-heading"
            className={`${sora} text-[32px] font-semibold leading-[1.17] tracking-[-0.02em] text-white md:text-5xl`}
          >
            A three-tier structure.
          </h2>
          <p className={`${sora} max-w-[880px] text-base leading-7 text-[#d5dceb] md:text-xl md:leading-8`}>
            Zoiko Surplus sits within a parent entity and a wider group. Each tier has a distinct role.
          </p>
        </div>

        <div className="flex w-full max-w-[560px] flex-col gap-2.5">
          <ol className={`${hanken} flex flex-col items-center gap-3`}>
            {tiers.map(({ icon: Icon, name, body, badge, iconStyle, highlight }, i) => (
              <Fragment key={name}>
                {i > 0 && (
                  <li aria-hidden="true" className="list-none">
                    <ChevronDown className="size-4 text-[#d5dceb]" strokeWidth={1.75} />
                  </li>
                )}
                <li
                  className={`relative flex w-full items-center gap-3.5 rounded-xl bg-white px-5 py-5 ${
                    highlight ? "ring-2 ring-[#2bb38a]" : ""
                  }`}
                >
                  <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${iconStyle}`}>
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.67} />
                  </span>
                  <div className="flex flex-col gap-0.5 pr-20">
                    <h3 className="text-base font-bold text-[#0f1f3a]">{name}</h3>
                    <p className="text-sm text-[#556987]">{body}</p>
                  </div>
                  <span className="absolute top-3.5 right-3.5 text-[10px] font-bold uppercase tracking-wide text-[#0f1f3a]">
                    {badge}
                  </span>
                </li>
              </Fragment>
            ))}
          </ol>
          <Note tone="dark">
            <span className="text-[#d5dceb]">
              Entity names describe placement. Specific registrations and legal parties are shown only once verified.
            </span>
          </Note>
        </div>
      </Container>
    </section>
  );
}
