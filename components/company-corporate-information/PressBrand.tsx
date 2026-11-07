import { BadgeCheck, FileText, Image as ImageIcon, Scale } from "lucide-react";
import { CardGrid, SectionHeading, Section } from "./shared";

// Destinations aren't published yet, so links point to "#".
export default function PressBrand() {
  return (
    <Section labelledBy="press-heading">
      <SectionHeading
        id="press-heading"
        num="14"
        label="Press & brand"
        title="For media & partners."
        lead="Media, brand and reference resources. Links resolve once the destinations are published and brand ownership is verified."
        titleClassName="max-w-[780px]"
      />
      <CardGrid
        cols={4}
        tone="navy"
        items={[
          {
            icon: BadgeCheck,
            title: "Media enquiries",
            body: "Press and corporate communications contact.",
            link: { label: "Open", href: "#" },
          },
          {
            icon: ImageIcon,
            title: "Brand assets",
            body: "Logos and brand guidelines, available once published.",
            link: { label: "Open", href: "#" },
          },
          {
            icon: FileText,
            title: "Fact sheet",
            body: "A factual company overview for reference.",
            link: { label: "Open", href: "#" },
          },
          {
            icon: Scale,
            title: "Legal notices",
            body: "Terms, privacy, cookies and legal notices.",
            link: { label: "Open", href: "#" },
          },
        ]}
      />
    </Section>
  );
}
