import Image from "next/image";
import { GuideSection, ImageTag, fpImg } from "./shared";

const topics = [
  { term: "Organization", meaning: "Legal entity and operating details." },
  { term: "Capabilities", meaning: "What you do and with what." },
  { term: "Coverage", meaning: "Where you can operate." },
  { term: "Qualified personnel", meaning: "People trained for the work." },
  { term: "Permits", meaning: "Licences where relevant." },
];

export default function PartnerReadiness() {
  return (
    <GuideSection
      id="partner-readiness"
      num="03"
      label="Partner readiness"
      title="Five things a reviewer may ask about."
      lead="Illustrative. Nothing is collected here, and no item is a legal threshold."
    >
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,860px)_minmax(0,1fr)] lg:gap-14">
        <div className="relative aspect-[860/370] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
          <Image
            src={fpImg("partner-readiness.webp")}
            alt="Two colleagues reviewing work together at a laptop"
            fill
            sizes="(min-width: 1440px) 860px, (min-width: 1024px) 65vw, 100vw"
            className="object-cover"
          />
          <span className="absolute bottom-3 left-3">
            <ImageTag>Illustrative imagery</ImageTag>
          </span>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {topics.map(({ term, meaning }) => (
            <div key={term} className="flex flex-col gap-1">
              <dt className="text-base font-semibold text-[#0f1f3a]">{term}</dt>
              <dd className="text-sm leading-6 text-[#556987]">{meaning}</dd>
            </div>
          ))}
        </dl>
      </div>
    </GuideSection>
  );
}
