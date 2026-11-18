import type { Metadata } from "next";
import Hero from "@/components/category-eligibility/Hero";
import CategoryFamilies from "@/components/category-eligibility/CategoryFamilies";
import SixChecks from "@/components/category-eligibility/SixChecks";
import ProofFirst from "@/components/category-eligibility/ProofFirst";
import RightsAudiences from "@/components/category-eligibility/RightsAudiences";
import MarketActivation from "@/components/category-eligibility/MarketActivation";
import EvidenceExamples from "@/components/category-eligibility/EvidenceExamples";
import CommercialContext from "@/components/category-eligibility/CommercialContext";
import EligibilityFAQ from "@/components/category-eligibility/EligibilityFAQ";
import RelatedGuidance from "@/components/category-eligibility/RelatedGuidance";
import FinalCTA from "@/components/category-eligibility/FinalCTA";

export const metadata: Metadata = {
  title: "Category Eligibility",
  description:
    "Which goods may be considered on Zoiko Surplus and what needs review: five educational category families and the separate ownership, condition, safety, brand, market and permission checks.",
};

export default function CategoryEligibilityPage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      <Hero />
      <CategoryFamilies />
      <SixChecks />
      <ProofFirst />
      <RightsAudiences />
      <MarketActivation />
      <EvidenceExamples />
      <CommercialContext />
      <EligibilityFAQ />
      <RelatedGuidance />
      <FinalCTA />
    </div>
  );
}
