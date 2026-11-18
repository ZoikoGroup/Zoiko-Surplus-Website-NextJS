import { Flag, Globe, ListChecks, Lock, Scale, Shield } from "lucide-react";
import { GuideSection, PhotoCardGrid, ceImg, type PhotoCardItem } from "./shared";

const checks: PhotoCardItem[] = [
  {
    icon: ListChecks,
    title: "Taxonomy",
    body: "Which category the goods fall into.",
    image: ceImg("check-taxonomy.webp"),
    alt: "Colleagues in suits gathered around a desk with box models",
  },
  {
    icon: Scale,
    title: "Lawful title",
    body: "You hold title and a legally effective disposal mandate.",
    image: ceImg("check-lawful-title.webp"),
    alt: "Two colleagues reviewing a laptop beside warehouse racking",
  },
  {
    icon: Shield,
    title: "Safety",
    body: "No unresolved recall, hazard or restriction.",
    image: ceImg("check-safety.webp"),
    alt: "Hand taking a boxed product from a pharmacy shelf",
  },
  {
    icon: Flag,
    title: "Brand",
    body: "Brand and channel rights are in place.",
    image: ceImg("check-brand.webp"),
    alt: "Trainers on store shelving beside a mannequin in a jacket",
  },
  {
    icon: Globe,
    title: "Local activation",
    body: "Market, category and corridor are enabled.",
    image: ceImg("check-local-activation.webp"),
    alt: "Large warehouse hall with racking",
  },
  {
    icon: Lock,
    title: "Actor and action rights",
    body: "The people involved hold current rights.",
    image: ceImg("check-actor-rights.webp"),
    alt: "Courier with a clipboard beside boxes in a van",
  },
];

export default function SixChecks() {
  return (
    <GuideSection
      id="six-checks"
      num="02"
      label="Six independent checks"
      title="Six checks. None implies another."
      lead="Passing one never passes the rest."
    >
      <PhotoCardGrid eyebrow="Check" items={checks} />
    </GuideSection>
  );
}
