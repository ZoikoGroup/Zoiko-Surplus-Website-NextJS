import { CircleDollarSign, EyeOff, FileText, Lock, Users } from "lucide-react";
import DarkRulesSection, { type Rule } from "@/components/for-partners/DarkRulesSection";
import { srImg } from "./shared";

const rules: Rule[] = [
  { icon: EyeOff, title: "No inventory files", body: "This page accepts none." },
  { icon: FileText, title: "No contracts", body: "Keep them in your own systems." },
  { icon: Users, title: "No buyer names", body: "Audiences are private." },
  { icon: CircleDollarSign, title: "No stock prices", body: "No prices are collected." },
  { icon: Lock, title: "Secure channel later", body: "After qualification." },
];

export default function UploadBoundary() {
  return (
    <DarkRulesSection
      id="upload-boundary"
      label="No-public-upload boundary"
      title={
        <>
          Please do not send
          <br className="hidden md:block" /> stock data through this
          <br className="hidden md:block" /> page.
        </>
      }
      lead="Do not submit confidential inventory files, contracts, buyer names or stock prices through this public page."
      rules={rules}
      image={srImg("upload-boundary.webp")}
      alt="Person resting their head on their hands at a desk surrounded by parcels"
    />
  );
}
