import { Building2, Truck, UserCheck } from "lucide-react";
import { GuideSection, PathCards, hmwImg, type PathCard } from "./shared";

const related: PathCard[] = [
  {
    icon: Building2,
    title: "Enterprise seller",
    body: "Talk through how your inventory would be governed.",
    cta: "Request Enterprise Demo",
    href: "#",
    primary: true,
    image: hmwImg("path-enterprise-seller.webp"),
    alt: "Two colleagues reviewing stock on a laptop in a warehouse",
  },
  {
    icon: UserCheck,
    title: "Qualified buyer",
    body: "Apply for verification. Applying is not approval or access.",
    cta: "Become a Verified Buyer",
    href: "/become-a-verified-buyer",
    image: hmwImg("related-qualified-buyer.webp"),
    alt: "Professional with a tablet in a warehouse aisle",
  },
  {
    icon: Truck,
    title: "Potential partner",
    body: "See where your participation could be relevant.",
    cta: "Partner Participation",
    href: "/partner-participation",
    image: hmwImg("related-partner.webp"),
    alt: "Workers in hi-vis vests moving boxes at a loading bay",
  },
];

export default function RelatedGuidance() {
  return (
    <GuideSection id="related" num="06" label="Related guidance" title="Keep learning.">
      <PathCards items={related} />
    </GuideSection>
  );
}
