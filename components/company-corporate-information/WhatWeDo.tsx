import { Package, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { CardGrid, SectionHeading, Section } from "./shared";

export default function WhatWeDo() {
  return (
    <Section labelledBy="what-we-do-heading">
      <SectionHeading
        id="what-we-do-heading"
        num="03"
        label="What we do"
        title="A governed, asset-light platform."
        lead="Zoiko Surplus provides the governance, matching and evidence layer for surplus commerce — it doesn’t own or move the goods."
        titleClassName="max-w-[780px]"
      />
      <CardGrid
        cols={3}
        items={[
          {
            icon: Package,
            title: "Governed surplus commerce",
            body: "A controlled B2B marketplace layer connecting qualified supply with verified demand.",
          },
          {
            icon: SlidersHorizontal,
            title: "Disposition & recovery",
            body: "Coordination of seller-approved, permitted disposition pathways.",
          },
          {
            icon: ShieldCheck,
            title: "Asset-light & governed",
            body: "No owned inventory, warehouses or fleets — governance, matching and evidence.",
          },
        ]}
      />
    </Section>
  );
}
