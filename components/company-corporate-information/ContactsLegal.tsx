import Link from "next/link";
import { BadgeCheck, Building2, FileText, Lock, Scale, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { CardGrid, SectionHeading, Section, hanken } from "./shared";

// Destinations aren't published yet, so links point to "#".
const legalLinks = [
  { icon: FileText, label: "Terms", href: "#" },
  { icon: Lock, label: "Privacy", href: "#" },
  { icon: SlidersHorizontal, label: "Cookies", href: "#" },
  { icon: Scale, label: "Legal notices", href: "#" },
];

export default function ContactsLegal() {
  return (
    <Section labelledBy="contacts-heading">
      <SectionHeading
        id="contacts-heading"
        num="16"
        label="Contacts & legal library"
        title="Where to find the right information."
        lead="Routes to validated corporate, legal and policy information. Links resolve once the destinations are published."
        titleClassName="max-w-[780px]"
      />
      <div className="flex flex-col gap-7">
        <CardGrid
          cols={4}
          tone="navy"
          items={[
            {
              icon: Building2,
              title: "Enterprise",
              body: "Talk to the team about governed participation.",
              link: { label: "Request a demo", href: "#" },
            },
            {
              icon: BadgeCheck,
              title: "Press & media",
              body: "Media and corporate communications.",
              link: { label: "Press", href: "#" },
            },
            {
              icon: Scale,
              title: "Legal & compliance",
              body: "Terms, privacy, cookies and legal notices.",
              link: { label: "Legal library", href: "#" },
            },
            {
              icon: ShieldCheck,
              title: "Trust & Safety",
              body: "Controls, limits and responsibilities.",
              link: { label: "Trust & Safety", href: "/trust-and-safety" },
            },
          ]}
        />
        <ul className={`${hanken} flex flex-wrap gap-3`}>
          {legalLinks.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#e6e9ef] bg-white px-5 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
              >
                <Icon aria-hidden="true" className="size-4" strokeWidth={1.75} />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
