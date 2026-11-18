import { Building, KeyRound, Lock, Network, Scale } from "lucide-react";
import { AudienceGrid, GuideSection, exImg, type AudienceItem } from "./shared";

const audiences: AudienceItem[] = [
  {
    icon: Building,
    title: "Enterprise seller",
    body: "Understand control demand reach and approval rights.",
    image: exImg("audience-enterprise-seller.webp"),
    alt: "Two colleagues reviewing stock on a laptop in a warehouse",
  },
  {
    icon: KeyRound,
    title: "Prospective buyer",
    body: "See what verification, invitation and eligibility mean.",
    image: exImg("audience-prospective-buyer.webp"),
    alt: "Two professionals reviewing a laptop and folder",
  },
  {
    icon: Lock,
    title: "Qualified buyer",
    body: "Sign in to a protected area. Visibility may differ.",
    image: exImg("audience-qualified-buyer.webp"),
    alt: "Hands typing on a laptop",
  },
  {
    icon: Network,
    title: "Partner or advisor",
    body: "Understand the bounds of third-party participation.",
    image: exImg("audience-partner.webp"),
    alt: "Courier checking a delivery against a clipboard",
  },
  {
    icon: Scale,
    title: "Compliance reviewer",
    body: "Tell marketing statements from confirmed availability.",
    image: exImg("audience-compliance.webp"),
    alt: "Worker checking goods against a clipboard",
  },
];

export default function WhoTakesPart() {
  return (
    <GuideSection
      id="who"
      num="03"
      label="Who takes part"
      title="Five audiences, one set of rules."
      lead="Each audience has a different question. The page answers each without implying access."
    >
      <AudienceGrid items={audiences} />
    </GuideSection>
  );
}
