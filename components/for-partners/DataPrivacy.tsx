import { EyeOff, FileCheck, Lock, Shield, Users } from "lucide-react";
import DarkRulesSection, { type Rule } from "./DarkRulesSection";
import { fpImg } from "./shared";

const rules: Rule[] = [
  { icon: EyeOff, title: "No seller data", body: "Never shown publicly." },
  { icon: Lock, title: "Secure handoff", body: "For signed partners only." },
  { icon: Users, title: "Need to know", body: "Access is scoped per task." },
  { icon: FileCheck, title: "Protected records", body: "Evidence lives in secure workflows." },
  { icon: Shield, title: "No public tickets", body: "No incident status is shown." },
];

export default function DataPrivacy() {
  return (
    <DarkRulesSection
      id="data-privacy"
      label="Data, privacy and security"
      title={
        <>
          No sensitive data
          <br className="hidden md:block" /> on public pages.
        </>
      }
      lead="Signed partners use a secure handoff. Public pages never carry seller data or ticket status."
      rules={rules}
      image={fpImg("security-privacy.webp")}
      alt="Two colleagues sitting in armchairs with a laptop and phone"
    />
  );
}
