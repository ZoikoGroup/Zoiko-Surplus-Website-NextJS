"use client";

import { BadgeCheck, FolderCheck, Scale, ShieldCheck } from "lucide-react";
import IconAccordion, { type AccordionItem } from "./IconAccordion";
import { SectionHeading, Section } from "./shared";

// Body copy is drafted from this page's own content — confirm wording with the content owner.
const areas: AccordionItem[] = [
  {
    icon: ShieldCheck,
    title: "Policy & compliance",
    body: "Platform policies, eligibility rules and category-specific requirements are defined centrally and applied before any listing, invitation or route is offered.",
  },
  {
    icon: BadgeCheck,
    title: "Roles & accountability",
    body: "Sellers, buyers, partners and the platform each hold distinct, recorded roles. Decisions are attributed to the role with the authority to make them.",
  },
  {
    icon: FolderCheck,
    title: "Evidence & audit",
    body: "Qualification, approval and outcome records are kept so that decisions can be reviewed and explained after the fact.",
  },
  {
    icon: Scale,
    title: "Legal & regulatory",
    body: "The platform operates within applicable law. Legal obligations for goods, title and transport remain with the accountable parties.",
  },
];

export default function Governance() {
  return (
    <Section labelledBy="governance-heading">
      <SectionHeading
        id="governance-heading"
        num="09"
        label="Governance"
        title="How the platform is governed."
        lead="A high-level view of the governance model. This is informational and not a statement of specific corporate-governance filings."
        titleClassName="max-w-[780px]"
      />
      <IconAccordion items={areas} />
    </Section>
  );
}
