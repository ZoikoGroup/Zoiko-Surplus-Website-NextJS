import { Building, CircleCheck, Globe, KeyRound, Lock, Scale } from "lucide-react";
import { GuideSection, TermGrid, type Term } from "./shared";

const terms: Term[] = [
  { icon: Building, term: "KYB", meaning: "Know-your-business review of an organization." },
  { icon: KeyRound, term: "Entitlement", meaning: "A seller's permission to see specific opportunities." },
  { icon: Lock, term: "Private market", meaning: "A seller-controlled audience of approved buyers." },
  { icon: Globe, term: "Corridor", meaning: "An approved route for trade between markets." },
  { icon: CircleCheck, term: "Activation", meaning: "Explicit approval that opens a market or category." },
  { icon: Scale, term: "Authorized account", meaning: "An account permitted to act within its scope." },
];

export default function Terms() {
  return (
    <GuideSection
      id="terms"
      num="13"
      label="Plain-English terms"
      title="Terms used in this guide."
      lead="Short definitions so each term means one thing."
    >
      <TermGrid terms={terms} />
    </GuideSection>
  );
}
