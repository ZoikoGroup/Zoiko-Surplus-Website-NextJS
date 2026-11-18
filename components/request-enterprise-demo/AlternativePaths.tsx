import { FileText, Network, Truck, Users } from "lucide-react";
import { GuideSection, ImageTopGrid, redImg, type PhotoCardItem } from "./shared";

// Not linked yet: per the design, each link goes live only once its destination is approved.
const paths: PhotoCardItem[] = [
  {
    icon: Users,
    title: "Buyer application",
    body: "Business buyers use Buyer Access and qualification.",
    image: redImg("alt-buyer.webp"),
    alt: "Two colleagues reviewing paperwork in a stockroom",
  },
  {
    icon: FileText,
    title: "Support",
    body: "Existing accounts use Contact Support.",
    image: redImg("alt-support.webp"),
    alt: "Smiling worker in front of shelves of boxes",
  },
  {
    icon: Truck,
    title: "Partner participation",
    body: "Logistics and reuse providers use partner inquiry.",
    image: redImg("alt-partner.webp"),
    alt: "Two colleagues checking a tablet in a warehouse",
  },
  {
    icon: Network,
    title: "General contact",
    body: "Other questions use the general contact page.",
    image: redImg("alt-contact.webp"),
    alt: "Businessman on a phone call in a warehouse",
  },
];

export default function AlternativePaths() {
  return (
    <GuideSection
      id="alternative-paths"
      num="08"
      label="Alternative paths"
      title="Not an enterprise seller?"
      lead="Each link goes live only when its destination is approved."
    >
      <ImageTopGrid items={paths} pending aspect="aspect-[295/130]" />
    </GuideSection>
  );
}
