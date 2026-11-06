"use client";

import { BadgeCheck, FolderCheck, ShieldAlert, X } from "lucide-react";
import IconAccordion, { type AccordionItem } from "@/components/company-corporate-information/IconAccordion";
import { SectionHeading, Section } from "./shared";

// Body copy is drafted from this page's own content — confirm wording with the content owner.
const items: AccordionItem[] = [
  {
    icon: ShieldAlert,
    title: "Suspicious-activity screening",
    body: "Accounts, listings and activity are screened for signals of fraud or misuse. Screening reduces risk; it doesn’t eliminate it, and no detection is perfect.",
  },
  {
    icon: BadgeCheck,
    title: "Identity & eligibility",
    body: "Business identity (KYB) and role eligibility are checked in context before participation. Verification confirms identity and eligibility, nothing more.",
  },
  {
    icon: X,
    title: "Enforcement",
    body: "Where misuse is found, access can be restricted, suspended or removed, and affected activity can be held or escalated to the accountable role.",
  },
  {
    icon: FolderCheck,
    title: "Evidence-led action",
    body: "Enforcement decisions are based on recorded evidence and documented, so they can be reviewed and explained.",
  },
];

export default function FraudPrevention() {
  return (
    <Section labelledBy="fraud-heading">
      <SectionHeading
        id="fraud-heading"
        num="08"
        label="Fraud & misuse prevention"
        title="Reducing misuse, honestly."
        lead="Screening and enforcement reduce fraud and misuse — they don’t eliminate risk, and no detection is perfect."
        titleClassName="max-w-[780px]"
      />
      <IconAccordion items={items} tone="sand" />
    </Section>
  );
}
