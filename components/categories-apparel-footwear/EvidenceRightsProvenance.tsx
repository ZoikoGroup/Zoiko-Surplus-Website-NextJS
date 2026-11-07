import Image from "next/image";
import { CircleCheck, FileCheck, GitBranch } from "lucide-react";
import { CheckItem, Note, SectionHeading, Section, hanken, img } from "./shared";

const blocks = [
  {
    // "Evidence" sidebar link targets the whole section; "Brand rights" targets its own row.
    anchor: undefined,
    icon: FileCheck,
    kicker: "Evidence",
    title: "Evidence requirements",
    body: "A lot is described consistently so a reviewer can assess it — before any audience ever sees it.",
    points: [
      "Declared condition and defect notes",
      "Quantities, sizes and composition where applicable",
      "Supporting documents and references",
    ],
    image: "af-evidence.webp",
    alt: "Boutique clothing rails with jackets and shirts on hangers",
  },
  {
    anchor: "brand-rights",
    icon: CircleCheck,
    kicker: "Brand rights",
    title: "Brand & resale rights",
    body: "Authenticity and the legal right to resell are separate assertions — each with its own evidence and reviewer status.",
    points: [
      "Trademark and brand-authorization checks",
      "Permitted distribution and resale channels",
      "Authenticity treated apart from seller declaration",
    ],
    image: "af-brand-rights.webp",
    alt: "Rust-coloured bomber jacket held up on a hanger",
  },
  {
    anchor: undefined,
    icon: GitBranch,
    kicker: "Provenance",
    title: "Provenance & audit",
    body: "Source and chain-of-custody assertions are recorded so decisions and outcomes can be reconstructed later.",
    points: ["Source and ownership steps", "Batch / lot references where relevant", "An audit trail for decisions"],
    image: "af-provenance.webp",
    alt: "Two people reviewing paperwork beside open laptops",
  },
];

export default function EvidenceRightsProvenance() {
  return (
    <Section id="evidence" labelledBy="evidence-heading" className="flex flex-col gap-10 md:gap-14">
      <SectionHeading
        id="evidence-heading"
        num="05"
        label="Evidence, rights & provenance"
        title="What a qualified apparel lot must show."
        lead="Three things, assessed separately: the evidence a lot carries, the brand rights behind it, and its provenance trail."
      />

      <div className={`${hanken} flex flex-col border-t border-[#e9edf2]`}>
        {blocks.map(({ anchor, icon: Icon, kicker, title, body, points, image, alt }) => (
          <article
            key={title}
            id={anchor}
            className="grid scroll-mt-28 items-center gap-6 border-b border-[#e9edf2] py-8 md:grid-cols-2 md:gap-11"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#1c2a40]">
              <Image src={img(image)} alt={alt} fill sizes="(min-width: 768px) 404px, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#0b7a5c]">
                <Icon aria-hidden="true" className="size-3.5" strokeWidth={2} />
                {kicker}
              </p>
              <h3 className="text-2xl font-semibold leading-8 text-[#0f1f3a] md:text-[26px]">{title}</h3>
              <p className="text-base leading-7 text-[#556987] md:text-[17px]">{body}</p>
              <ul className="flex flex-col gap-2 pt-1">
                {points.map((p) => (
                  <CheckItem key={p}>{p}</CheckItem>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <Note>
        Verification of identity or documents is not a guarantee of authenticity, legality or safety — those remain
        separate obligations.
      </Note>
    </Section>
  );
}
