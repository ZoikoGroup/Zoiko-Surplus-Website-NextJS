import { ArrowLeftRight, Network, ReceiptText } from "lucide-react";
import { GuideSection, ImageTopGrid, soImg, type PhotoCardItem } from "./shared";

const capabilities: PhotoCardItem[] = [
  {
    icon: ReceiptText,
    title: "Surplus Enterprise",
    body: "Qualification, seller-led disposition and auditability.",
    image: soImg("capability-enterprise.webp"),
    alt: "Three colleagues in safety vests walking through a warehouse aisle",
  },
  {
    icon: ArrowLeftRight,
    title: "Surplus Exchange",
    body: "Verified, qualified demand and private, seller-approved audiences.",
    image: soImg("capability-exchange.webp"),
    alt: "Business owner standing with arms crossed among stacked boxes",
  },
  {
    icon: Network,
    title: "Surplus Network",
    body: "Approved logistics, distribution or donation partner routes, where permitted.",
    image: soImg("capability-network.webp"),
    alt: "Team of warehouse staff and managers standing together",
  },
];

export default function Capabilities() {
  return (
    <GuideSection
      id="capabilities"
      num="02"
      label="Three connected capabilities"
      title="One ecosystem. Three parts."
      lead="Each is a separate capability with its own availability. None is promised live."
    >
      <ImageTopGrid
        eyebrow="Capability"
        items={capabilities}
        aspect="aspect-[401/180]"
        cols="md:grid-cols-3"
        sizes="(min-width: 1024px) 401px, (min-width: 768px) 33vw, 100vw"
      />
    </GuideSection>
  );
}
