import Image from "next/image";
import Link from "next/link";
import { ArrowRight, EyeOff, ShieldCheck, BadgeCheck } from "lucide-react";
import { Band, Note, SectionHeading, SplitPhoto, hanken, img } from "./shared";

const criteria = [
  {
    icon: BadgeCheck,
    title: "Verified business buyers",
    body: "Electronics buyers are verified for the categories and markets they operate in.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible-handling fit",
    body: "Buyers must be able to handle data-bearing and hazard-class items appropriately.",
  },
  {
    icon: EyeOff,
    title: "No public catalog",
    body: "Confidential stock, serials, prices and identities are never exposed publicly.",
  },
];

export default function BuyerEligibility() {
  return (
    <Band id="buyer-eligibility" labelledBy="ce-buyers-heading" tone="dark">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
        <SplitPhoto>
          <Image
            src={img("ce-buyer-eligibility.webp")}
            alt="Card being tapped on a contactless payment reader"
            fill
            sizes="(min-width: 768px) 596px, 100vw"
            className="object-cover"
          />
        </SplitPhoto>

        <div className={`${hanken} flex flex-col gap-9 md:flex-1`}>
          <SectionHeading
            id="ce-buyers-heading"
            label="Buyer eligibility"
            tone="dark"
            title="Who can be considered to buy."
            lead="Electronics adds responsible-handling expectations on top of standard buyer verification."
          />

          <ul className="flex flex-col gap-5">
            {criteria.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex items-start gap-3.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/8">
                  <Icon aria-hidden="true" className="size-5 text-[#5fd0ad]" strokeWidth={1.75} />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-[21px] text-[#d5dceb]">{body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4">
            <Link
              href="/become-a-verified-buyer"
              className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-[#a16207] px-6 text-base font-semibold text-white transition-colors hover:bg-[#b4700c]"
            >
              Become a Verified Buyer
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Note tone="dark">
              A definition of scope — not a claim of authenticity, legal entitlement or guaranteed acceptance. Every lot
              is qualified individually.
            </Note>
          </div>
        </div>
      </div>
    </Band>
  );
}
