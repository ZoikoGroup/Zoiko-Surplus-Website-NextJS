import type { Metadata } from "next";
import {
  Hero,
  SafetyAndVerification,
  CoreSafetyRequirements,
  CategoryOverview,
  MarketAndCategoryDependence,
  ConditionVersusSafety,
  RestrictedGoodsAndHolds,
  RecallsHazardsAndResolution,
  EvidencePreparation,
  ResponsibleParties,
  ProductSafetyReportIssue,
  ProductSafetyFAQ,
  ProductSafetyRelatedGuidance,
  ProductSafetyCTA,
} from "@/components/product-safety";

export const metadata: Metadata = {
  title: "Product Safety · Zoiko Surplus",
  description:
    "Understand how condition, traceability, and category-specific requirements shape responsible surplus disposition on Zoiko Surplus.",
};

export default function ProductSafetyPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <SafetyAndVerification />
      <CoreSafetyRequirements />
      <CategoryOverview />
      <MarketAndCategoryDependence />
      <ConditionVersusSafety />
      <RestrictedGoodsAndHolds />
      <RecallsHazardsAndResolution />
      <EvidencePreparation />
      <ResponsibleParties />
      <ProductSafetyReportIssue />
      <ProductSafetyFAQ />
      <ProductSafetyRelatedGuidance />
      <ProductSafetyCTA />
    </div>
  );
}
