import { EyeOff, FileText, Lock, Target } from "lucide-react";
import { ImageSplit } from "./ImageSplit";
import { img, type TileCardItem } from "./shared";

const items: TileCardItem[] = [
  { icon: Target, tone: "mint", title: "Purpose limitation", body: "Information is requested only for review." },
  { icon: Lock, title: "Security", body: "Sensitive documents are never collected on public pages." },
  { icon: EyeOff, tone: "mint", title: "No public status", body: "Applicant status is never shown publicly." },
  { icon: FileText, title: "Privacy notice", body: "Read it before submitting any form." },
];

export default function DataHandling() {
  return (
    <ImageSplit
      id="data-handling"
      num="10"
      label="Data handling"
      title="Only what is needed, handled with care."
      lead="This public page collects nothing. Forms elsewhere follow the current privacy notice."
      image={img("data-handling.webp")}
      alt="Worker checking goods against a clipboard"
      items={items}
    />
  );
}
