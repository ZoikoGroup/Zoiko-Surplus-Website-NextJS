import { FileText, Flag, LockKeyhole, Users } from "lucide-react";
import { GuideSection, ImageTopGrid, racImg, type PhotoCardItem } from "./shared";

// Not linked yet: per the design, each link goes live only once its destination is approved.
const related: PhotoCardItem[] = [
  {
    icon: FileText,
    title: "Help Center",
    body: "Public guidance and routes.",
    image: racImg("related-help-center.webp"),
    alt: "Support agent wearing a headset, helped by a colleague with a tablet",
  },
  {
    icon: Flag,
    title: "Report an Issue",
    body: "Trust and safety concerns.",
    image: racImg("related-report-an-issue.webp"),
    alt: "Concerned woman looking at a laptop as a colleague points at it",
  },
  {
    icon: Users,
    title: "Accessibility",
    body: "Accessibility statement.",
    image: racImg("related-accessibility.webp"),
    alt: "Hands typing on a laptop showing a padlock and password field",
  },
  {
    icon: LockKeyhole,
    title: "Privacy Notice",
    body: "How personal information is handled.",
    image: racImg("related-privacy-notice.webp"),
    alt: "Person holding a phone beside a padlock shield graphic",
  },
];

export default function RelatedHelp() {
  return (
    <GuideSection
      id="related"
      num="09"
      label="Related help"
      title="Where to go next."
      lead="Links go live only when each destination is approved."
    >
      <ImageTopGrid items={related} pending aspect="aspect-[295/130]" />
    </GuideSection>
  );
}
