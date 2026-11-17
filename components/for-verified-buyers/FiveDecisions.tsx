import { CircleCheck, FileText, Globe, Lock, Users } from "lucide-react";
import { GuideSection, PhotoCardGrid, fvbImg, type PhotoCardItem } from "./shared";

const decisions: PhotoCardItem[] = [
  {
    icon: FileText,
    title: "Apply",
    body: "Submitted details may enter a review path.",
    image: fvbImg("decision-apply.webp"),
    alt: "Hands holding a pen over a laptop keyboard",
  },
  {
    icon: CircleCheck,
    title: "Verify",
    body: "Organization identity and representative authority can be checked.",
    image: fvbImg("decision-verify.webp"),
    alt: "Worker checking stock on a tablet in a warehouse aisle",
  },
  {
    icon: Globe,
    title: "Qualify",
    body: "Policy can restrict market, corridor, category and product scope.",
    image: fvbImg("decision-qualify.webp"),
    alt: "Industrial robotic arm",
  },
  {
    icon: Users,
    title: "Invite",
    body: "Seller and platform controls may authorize a specific audience.",
    image: fvbImg("decision-invite.webp"),
    alt: "Team gathered around a workbench reviewing a task",
  },
  {
    icon: Lock,
    title: "Act",
    body: "Specific offers and orders need current legal, contractual and policy permission.",
    image: fvbImg("decision-act.webp"),
    alt: "Courier unloading parcels from a van",
  },
];

export default function FiveDecisions() {
  return (
    <GuideSection
      id="five-decisions"
      num="02"
      label="Five independent decisions"
      title={
        <>
          Applied. Verified. Eligible.
          <br className="hidden md:block" /> Invited. Authorized.
        </>
      }
      lead="Five different decisions, made by different parties. None implies the next."
    >
      <PhotoCardGrid eyebrow="Decision" items={decisions} />
    </GuideSection>
  );
}
