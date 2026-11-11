import Image from "next/image";
import { EyeOff, FileCheck, Info, ListChecks, ShieldCheck, type LucideIcon } from "lucide-react";
import { Section, SectionHeading, SandTile, hanken, img } from "./shared";

const principles: { icon: LucideIcon; title: string; body: string; image: string; alt: string }[] = [
  {
    icon: ShieldCheck,
    title: "Verified participation",
    body: "Identity, role and eligibility checks the transaction relies on.",
    image: img("trust-verified.webp"),
    alt: "Team checking items together at a workbench",
  },
  {
    icon: EyeOff,
    title: "Controlled visibility",
    body: "Confidential inventory, prices and audiences stay protected from public view.",
    image: img("trust-visibility.webp"),
    alt: "Storage shelving in a warehouse",
  },
  {
    icon: ListChecks,
    title: "Policy and product safety",
    body: "Country, category, corridor and brand controls apply at the relevant action gates.",
    image: img("trust-policy.webp"),
    alt: "Person labelling a box at a packing table",
  },
  {
    icon: FileCheck,
    title: "Records and resolution",
    body: "Documented orders and evidence, with governed handling of holds and disputes.",
    image: img("trust-records.webp"),
    alt: "Workers handing boxes between a truck and a loading bay",
  },
];

export default function TrustPrinciples() {
  return (
    <Section labelledBy="kc-trust-heading">
      <SectionHeading
        id="kc-trust-heading"
        num="07"
        label="Trust and transaction principles"
        title="Trust is a process, not a badge."
        lead="Four disciplines keep transactions accountable. None of them, on its own, is a guarantee."
        titleClassName="max-w-none"
      />
      <div className={`${hanken} flex flex-col gap-6`}>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <li key={p.title} className="flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white">
              <div className="relative aspect-[297/110] w-full bg-[#16263f]">
                <Image src={p.image} alt={p.alt} fill sizes="(min-width: 1024px) 297px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="relative flex flex-col gap-2 px-6 pt-10 pb-7">
                <span className="absolute -top-6 left-5 rounded-2xl border-4 border-white">
                  <SandTile icon={p.icon} />
                </span>
                <h3 className="text-lg font-semibold text-[#0f1f3a]">{p.title}</h3>
                <p className="text-sm leading-6 text-[#556987]">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-start gap-3 rounded-xl border border-[#e6e9ef] bg-white px-5 py-4 text-sm leading-6 text-[#556987]">
          <Info aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#8a5a14]" strokeWidth={1.75} />
          <p>
            We distinguish information supplied by sellers from information independently verified by an authorized
            provider. Verification, legality, title and product safety are separate things, and verification is not a
            safety guarantee.
          </p>
        </div>
      </div>
    </Section>
  );
}
