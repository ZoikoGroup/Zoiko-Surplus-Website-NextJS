import { ListChecks, Shield, SlidersHorizontal, Users } from "lucide-react";
import { GuideSection, ImageTopGrid, srImg, type PhotoCardItem } from "./shared";

// Not linked yet: per the design, each link goes live only once its destination is approved.
const related: PhotoCardItem[] = [
  {
    icon: ListChecks,
    title: "Full Readiness Checklist",
    body: "The granular, nonbinding checklist.",
    image: srImg("related-checklist.webp"),
    alt: "Hand ticking items on a clipboard checklist",
  },
  {
    icon: Shield,
    title: "Category Eligibility",
    body: "Category and market considerations.",
    image: srImg("related-category-eligibility.webp"),
    alt: "Person with a tablet inspecting packaged goods",
  },
  {
    icon: SlidersHorizontal,
    title: "How the Platform Works",
    body: "The seven governed stages.",
    image: srImg("related-how-it-works.webp"),
    alt: "Man holding a laptop in a stockroom",
  },
  {
    icon: Users,
    title: "Support",
    body: "Help via the approved route.",
    image: srImg("related-support.webp"),
    alt: "Four smiling warehouse workers standing together",
  },
];

export default function RelatedGuidance() {
  return (
    <GuideSection
      id="related"
      num="09"
      label="Related guidance"
      title="Where to go next."
      lead="Links go live only when each destination is approved."
    >
      <ImageTopGrid items={related} pending aspect="aspect-[295/130]" />
    </GuideSection>
  );
}
