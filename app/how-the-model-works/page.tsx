import type { Metadata } from "next";
import { Clock, Globe, Scale, User } from "lucide-react";
import Hero from "@/components/how-the-model-works/Hero";
import GovernedModel from "@/components/how-the-model-works/GovernedModel";
import StageByStage from "@/components/how-the-model-works/StageByStage";
import RoleMap from "@/components/how-the-model-works/RoleMap";
import HoldPaths from "@/components/how-the-model-works/HoldPaths";
import Boundaries from "@/components/how-the-model-works/Boundaries";
import NextStep from "@/components/how-the-model-works/NextStep";
import RelatedGuidance from "@/components/how-the-model-works/RelatedGuidance";
import ModelFAQ from "@/components/how-the-model-works/ModelFAQ";
import { GovernanceStrip } from "@/components/logistics-coordination/PageGovernance";

export const metadata: Metadata = {
  title: "How the Model Works",
  description:
    "From inventory qualification to evidence and resolution, Zoiko Surplus connects seven governed stages. Each action depends on eligibility, seller instructions and activated market capabilities.",
};

export default function HowTheModelWorksPage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      <Hero />
      <GovernedModel />
      <StageByStage />
      <RoleMap />
      <HoldPaths />
      <Boundaries />
      <NextStep />
      <RelatedGuidance />
      <ModelFAQ />
      <GovernanceStrip
        facts={[
          { icon: User, label: "Owner", value: "Named at approval" },
          { icon: Scale, label: "Reviewers", value: "Legal, security, product, QA" },
          { icon: Clock, label: "Claims expiry", value: "Review date set at approval" },
          { icon: Globe, label: "Market status", value: "Informational" },
        ]}
      />
    </div>
  );
}
