import {
  BadgeCheck,
  FolderCheck,
  Globe,
  Info,
  Lock,
  Package,
  Scale,
  ShieldAlert,
  SlidersHorizontal,
  Truck,
} from "lucide-react";
import { IconTile, SectionHeading, Section, WideImage, hanken, img } from "./shared";

// Each control is shown with its stated limit underneath.
const domains = [
  {
    icon: SlidersHorizontal,
    title: "Seller controls",
    body: "Audience permissions, approved routes and brand rules are seller-defined and revocable.",
    limit: "Seller authority is not a Zoiko guarantee of outcome.",
  },
  {
    icon: BadgeCheck,
    title: "Buyer verification",
    body: "KYB, business identity and role eligibility are checked in context.",
    limit: "Verification is not a safety, title or quality guarantee.",
  },
  {
    icon: Package,
    title: "Inventory integrity",
    body: "Condition, provenance and category requirements are documented per lot.",
    limit: "Seller-declared and reviewer-assessed — not a Zoiko inspection.",
  },
  {
    icon: Globe,
    title: "Market & category activation",
    body: "Country, corridor and category controls gate where goods may go.",
    limit: "Availability is configured; a selector never activates trading.",
  },
  {
    icon: Lock,
    title: "Privacy & confidentiality",
    body: "Public pages carry information only; records sit behind authorized access.",
    limit: "Confidential data is never public or indexed.",
  },
  {
    icon: Scale,
    title: "Transactions & financial roles",
    body: "Authorized payment providers are used where transactions are enabled.",
    limit: "No escrow or custody of funds by default.",
  },
  {
    icon: Truck,
    title: "Delivery, custody & partners",
    body: "Logistics and custody are performed by separately contracted partners.",
    limit: "Zoiko operates no warehouse or fleet.",
  },
  {
    icon: FolderCheck,
    title: "Evidence & auditability",
    body: "Records, timestamps and versions support auditable decisions.",
    limit: "Supporting records — not certifications or live figures.",
  },
  {
    icon: ShieldAlert,
    title: "Fraud & misuse prevention",
    body: "Suspicious activity is screened, and misuse is acted on.",
    limit: "Screening reduces risk; it doesn’t eliminate it.",
  },
];

export default function ControlDomains() {
  return (
    <Section labelledBy="domains-heading">
      <SectionHeading
        id="domains-heading"
        num="04"
        label="Control domains"
        title="Nine areas of control."
        lead="The controls that shape participation — each stated with its limit in plain sight. None, on its own, is a guarantee."
        titleClassName="max-w-[780px]"
      />
      <div className="flex flex-col gap-5">
        <WideImage
          src={img("control-domains.webp")}
          alt="Shopper tapping a phone on a card terminal to pay"
          ratio="sm:aspect-[1240/532]"
        />
        <ul className={`${hanken} grid gap-4 sm:grid-cols-2 lg:grid-cols-3`}>
          {domains.map(({ icon, title, body, limit }) => (
            <li key={title} className="flex flex-col rounded-2xl border border-[#e6e9ef] bg-white p-5">
              <IconTile icon={icon} />
              <h3 className="pt-3.5 text-base font-semibold text-[#0f1f3a]">{title}</h3>
              <p className="max-w-[300px] pt-2 pb-3 text-sm leading-[22px] text-[#556987]">{body}</p>
              <p className="mt-auto flex items-start gap-1.5 border-t border-[#e6e9ef] pt-3 text-xs leading-5 text-[#7a4d0f]">
                <Info aria-hidden="true" className="mt-[3px] size-3.5 shrink-0" strokeWidth={1.75} />
                {limit}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
