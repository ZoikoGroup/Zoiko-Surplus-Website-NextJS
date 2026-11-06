import Image from "next/image";
import { Building2, Globe } from "lucide-react";
import { footerOffices } from "@/lib/footer";
import { Note, SectionHeading, Section, hanken, img } from "./shared";

// Addresses come from the footer data so both stay in sync.
const offices = [
  {
    ...footerOffices[0],
    kind: "Headquarters",
    icon: Building2,
    image: img("office-hq.webp"),
    alt: "Open-plan office with rows of desks and monitors (placeholder image)",
  },
  {
    ...footerOffices[1],
    kind: "Regional",
    icon: Globe,
    image: img("office-regional.webp"),
    alt: "Bright office lounge with sofas, plants and desks (placeholder image)",
  },
];

export default function Offices() {
  return (
    <Section labelledBy="offices-heading">
      <SectionHeading
        id="offices-heading"
        num="12"
        label="Offices"
        title="Where we’re based."
        lead="Office locations are shown as placeholders until verified. No address here should be treated as a registered office unless confirmed."
        titleClassName="max-w-[780px]"
      />
      <div className="flex flex-col gap-4">
        <ul className={`${hanken} grid gap-4 md:grid-cols-2`}>
          {offices.map(({ label, inline, kind, icon: Icon, image, alt }) => (
            <li key={label} className="flex flex-col gap-4 rounded-2xl border border-[#e6e9ef] bg-white p-5 pb-8">
              <div className="relative aspect-[570/321] w-full overflow-hidden">
                <Image src={image} alt={alt} fill sizes="(min-width: 768px) 570px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-3 pt-3">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#0b7a5c]">
                  <Icon aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
                  {kind}
                </span>
                <div className="flex flex-col gap-1 pt-2">
                  <h3 className="text-base font-semibold text-[#0f1f3a]">{label}</h3>
                  <address className="text-base not-italic leading-6 text-[#556987]">{inline}</address>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Note>Addresses are placeholders and are not representations of a registered office until verified.</Note>
      </div>
    </Section>
  );
}
