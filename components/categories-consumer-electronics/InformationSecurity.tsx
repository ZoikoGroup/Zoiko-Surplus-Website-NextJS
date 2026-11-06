import Image from "next/image";
import { Band, CheckItem, SectionHeading, SplitPhoto, hanken, img } from "./shared";

const points = [
  { term: "Owner-led sanitization", body: "data wiping is the owner’s responsibility, evidenced where required." },
  { term: "Activation / account locks", body: "lock status is assessed; locked devices aren’t treated as clear." },
  { term: "No identifiers shown", body: "serials, IMEIs and user information never appear publicly." },
];

export default function InformationSecurity() {
  return (
    <Band id="information-security" labelledBy="ce-infosec-heading" tone="dark">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
        <SplitPhoto>
          <Image
            src={img("ce-info-security.webp")}
            alt="Hand plugging a USB-C cable into a laptop beside external drives"
            fill
            sizes="(min-width: 768px) 596px, 100vw"
            className="object-cover"
          />
        </SplitPhoto>

        <div className="flex flex-col gap-9 md:flex-1">
          <SectionHeading
            id="ce-infosec-heading"
            label="Information security"
            tone="dark"
            title="Data-bearing devices carry an extra duty."
            lead="Any device that can store data must be handled so that personal and business information is addressed before disposition. Responsibility for sanitization sits with the owner — it isn’t assumed by a buyer."
          />
          <ul className={`${hanken} flex max-w-[460px] flex-col gap-4`}>
            {points.map((p) => (
              <CheckItem key={p.term} tone="dark">
                <strong className="font-semibold text-white">{p.term}</strong> — {p.body}
              </CheckItem>
            ))}
          </ul>
        </div>
      </div>
    </Band>
  );
}
