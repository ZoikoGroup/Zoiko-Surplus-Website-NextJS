import { FileText, LockKeyhole, TriangleAlert, Users } from "lucide-react";
import { GuideSection, ImageTopGrid, racImg, type PhotoCardItem } from "./shared";

// Not linked yet: per the design, each route goes live only once its destination is approved.
const routes: PhotoCardItem[] = [
  {
    icon: TriangleAlert,
    title: "Safety, brand and misuse",
    body: "Product safety, counterfeit, suspicious activity or access misuse.",
    image: racImg("route-safety.webp"),
    alt: "Warehouse worker in a safety vest taping up a box",
  },
  {
    icon: LockKeyhole,
    title: "Privacy",
    body: "A privacy or personal information concern.",
    image: racImg("route-privacy.webp"),
    alt: "Workers in hairnets checking stock in a blue-lit storage area",
  },
  {
    icon: Users,
    title: "Accessibility",
    body: "A barrier or difficulty using the service.",
    image: racImg("route-accessibility.webp"),
    alt: "Hands unpacking jars from a cardboard box",
  },
  {
    icon: FileText,
    title: "Account and routine help",
    body: "Login, account, offers or orders; ordinary help.",
    image: racImg("route-account-help.webp"),
    alt: "Person at a desk with a login screen and a laptop",
  },
];

export default function Routes() {
  return (
    <GuideSection
      id="routes"
      num="02"
      label="Where each concern goes"
      title="Four routes, kept separate."
      lead="Each type has its own approved channel. This page does not replace them."
    >
      <ImageTopGrid items={routes} pending aspect="aspect-[295/140]" />
    </GuideSection>
  );
}
