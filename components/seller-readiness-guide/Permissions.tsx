import { CircleCheck, Lock, ReceiptText, Users } from "lucide-react";
import { GuideSection, ImageTopGrid, srImg, type PhotoCardItem } from "./shared";

const permissions: PhotoCardItem[] = [
  {
    icon: ReceiptText,
    title: "Seller eligibility",
    body: "Whether your organization and goods may take part.",
    image: srImg("permission-seller-eligibility.webp"),
    alt: "Colleagues pointing at stock on stockroom shelving",
  },
  {
    icon: CircleCheck,
    title: "Business verification",
    body: "A separate review of the business.",
    image: srImg("permission-business-verification.webp"),
    alt: "Woman with a clipboard in an archive of boxes",
  },
  {
    icon: Users,
    title: "Audience invitation",
    body: "You choose who may see your goods.",
    image: srImg("permission-audience.webp"),
    alt: "Audience applauding at an event",
  },
  {
    icon: Lock,
    title: "Action rights",
    body: "Current permission for each action.",
    image: srImg("permission-action-rights.webp"),
    alt: "Worker checking a parcel on a stockroom shelf",
  },
];

export default function Permissions() {
  return (
    <GuideSection
      id="permissions"
      num="07"
      label="Seller and buyer permissions"
      title="Four separate permissions."
      lead="None implies another. Each is decided separately."
    >
      <ImageTopGrid items={permissions} aspect="aspect-[295/130]" />
    </GuideSection>
  );
}
