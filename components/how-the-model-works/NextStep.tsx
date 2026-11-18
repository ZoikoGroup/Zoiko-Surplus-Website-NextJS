import { Building2, Truck, UserCheck } from "lucide-react";
import { GuideSection, PathCards, hmwImg, type PathCard } from "./shared";

const paths: PathCard[] = [
  {
    icon: Building2,
    title: "Enterprise seller",
    body: "Discuss mandate, release authority and evidence. A discussion is not service activation.",
    cta: "Request Enterprise Demo",
    href: "#",
    primary: true,
    image: hmwImg("path-enterprise-seller.webp"),
    alt: "Two colleagues reviewing stock on a laptop in a warehouse",
  },
  {
    icon: Truck,
    title: "Potential logistics partner",
    body: "See where your capabilities may fit. Not instant enrollment.",
    cta: "Explore Partner Pathways",
    href: "/partner-participation",
    image: hmwImg("path-logistics-partner.webp"),
    alt: "Logistics worker with a tablet at the back of a van",
  },
  {
    icon: UserCheck,
    title: "Eligible business buyer",
    body: "Delivery terms and returns depend on the approved transaction, not on a public promise.",
    cta: "Read buyer expectations",
    href: "/buyer-qualification",
    image: hmwImg("path-business-buyer.webp"),
    alt: "Professional with a tablet in a warehouse aisle",
  },
];

export default function NextStep() {
  return (
    <GuideSection id="next-step" num="05" label="Next step" title="Choose your path.">
      <PathCards items={paths} />
    </GuideSection>
  );
}
