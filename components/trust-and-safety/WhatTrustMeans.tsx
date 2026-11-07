import { FileSearch, FolderCheck, SlidersHorizontal } from "lucide-react";
import { CardGrid, SectionHeading, Section } from "./shared";

export default function WhatTrustMeans() {
  return (
    <Section labelledBy="trust-means-heading">
      <SectionHeading
        id="trust-means-heading"
        num="01"
        label="What trust means here"
        title="Trust is a set of controls not a promise."
        lead="“Trust & Safety” at Zoiko Surplus means qualification, policy and documentation working together. It reduces risk; it doesn’t remove it."
        titleClassName="max-w-[780px]"
      />
      <CardGrid
        cols={3}
        items={[
          {
            icon: FileSearch,
            title: "Qualification",
            body: "Sellers, buyers and goods are qualified in context before anything proceeds — not assumed.",
          },
          {
            icon: SlidersHorizontal,
            title: "Policy & permission",
            body: "Seller-controlled rules and category policy gate every step, before matching or ranking.",
          },
          {
            icon: FolderCheck,
            title: "Documented decisions",
            body: "Decisions and outcomes are recorded, with defined routes when something goes wrong.",
          },
        ]}
      />
    </Section>
  );
}
