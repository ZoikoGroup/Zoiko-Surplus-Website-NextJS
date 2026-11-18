import { Building, FileCheck, Globe, KeyRound, Lock, Scale } from "lucide-react";
import { GuideSection, TermGrid, type Term } from "./shared";

const terms: Term[] = [
  { icon: Building, term: "KYB", meaning: "Know-your-business review of an organization's identity, role and eligibility." },
  { icon: Lock, term: "Private market", meaning: "A seller-controlled audience that only approved buyers can see." },
  { icon: KeyRound, term: "Entitlement", meaning: "A seller's permission for a buyer to see specific opportunities." },
  { icon: Globe, term: "Corridor", meaning: "An approved route for trade between markets, with its own gates." },
  { icon: Scale, term: "Merchant of record", meaning: "The party legally responsible for a sale. Not Zoiko by default." },
  { icon: FileCheck, term: "Activation", meaning: "Explicit approval that opens one market, category or pathway." },
];

export default function Terms() {
  return (
    <GuideSection
      id="terms"
      num="19"
      label="Plain-English terms"
      title="Terms used on this page."
      lead="Short definitions so each term means one thing."
    >
      <TermGrid terms={terms} />
    </GuideSection>
  );
}
