import Image from "next/image";
import { Info } from "lucide-react";
import { SectionHeading, Section, hanken, img } from "./shared";

// Values wrapped in ‹…› are unverified placeholders and render monospace.
const record = [
  { label: "Platform name", value: "Zoiko Surplus" },
  { label: "Operating entity", value: "Zoiko Supply Group Inc. ‹legal name to be verified›", mono: true },
  { label: "Group", value: "Zoiko Group" },
  { label: "Company type", value: "‹entity type / jurisdiction — to be verified›", mono: true },
  { label: "Registration number", value: "‹to be verified›", mono: true },
  { label: "Registered office", value: "‹registered address — to be verified›", mono: true },
  { label: "Business model", value: "Asset-light B2B surplus commerce & disposition platform" },
  { label: "Primary markets", value: "Activated market-by-market; see Market activation" },
];

export default function CorporateRecord() {
  return (
    <Section labelledBy="record-heading" innerClassName="flex flex-col gap-12">
      <SectionHeading
        id="record-heading"
        num="06"
        label="Company identity facts"
        title="The corporate record."
        lead="Authoritative company facts. Values marked ‹…› are placeholders shown only until verified for publication — nothing here invents a registration or address."
        titleClassName="max-w-[780px]"
      />

      <div className="flex flex-col gap-4">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,710px)_1fr] lg:gap-5">
          <dl className={`${hanken} overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white`}>
            {record.map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col gap-1 px-5 py-4 text-sm leading-6 sm:flex-row sm:gap-3 ${
                  i > 0 ? "border-t border-[#e6e9ef]" : ""
                }`}
              >
                <dt className="font-semibold text-[#0f1f3a] sm:w-[260px] sm:shrink-0">{row.label}</dt>
                <dd className={`text-[#556987] ${row.mono ? "font-mono text-[13px]" : ""}`}>{row.value}</dd>
              </div>
            ))}
          </dl>
          <div className="relative aspect-[519/389] w-full overflow-hidden rounded-[20px]">
            <Image
              src={img("corporate-record.webp")}
              alt="Two workers in hard hats and masks beside stacked shipping containers"
              fill
              sizes="(min-width: 1024px) 519px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <p
          className={`${hanken} flex items-start gap-2.5 rounded-xl border border-dashed border-[#e8dcc6] bg-[#faf6ef] px-4 py-3.5 text-sm leading-5 text-[#556987]`}
        >
          <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#926016]" strokeWidth={1.75} />
          Placeholder values are never presented as verified. Legal parties, registrations and registered offices are
          published only after verification.
        </p>
      </div>
    </Section>
  );
}
