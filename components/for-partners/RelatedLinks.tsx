import { Network, SlidersHorizontal, Truck, Users } from "lucide-react";
import { GuideSection, ImageTopGrid, fpImg, type PhotoCardItem } from "./shared";

// Not linked yet: per the design, each link goes live only once its destination is approved.
const related: PhotoCardItem[] = [
  {
    icon: Network,
    title: "Surplus Network",
    body: "What the Surplus Network covers.",
    image: fpImg("related-surplus-network.webp"),
    alt: "Workers in safety vests unloading boxes at a loading dock",
  },
  {
    icon: Truck,
    title: "Join Partner Network",
    body: "The partner inquiry route.",
    image: fpImg("related-join-partner-network.webp"),
    alt: "Two colleagues smiling at a laptop",
  },
  {
    icon: SlidersHorizontal,
    title: "How the Platform Works",
    body: "The seven governed stages.",
    image: fpImg("related-how-it-works.webp"),
    alt: "Colleagues pointing at a laptop screen",
  },
  {
    icon: Users,
    title: "Contact",
    body: "A general contact fallback.",
    image: fpImg("related-contact.webp"),
    alt: "Three colleagues chatting around a laptop",
  },
];

export default function RelatedLinks() {
  return (
    <GuideSection
      id="related"
      num="10"
      label="Related links"
      title="Where to go next."
      lead="Links go live only when each destination is approved."
    >
      <ImageTopGrid items={related} pending aspect="aspect-[295/130]" />
    </GuideSection>
  );
}
