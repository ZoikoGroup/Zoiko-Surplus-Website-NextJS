import type { Metadata } from "next";
import {
  Hero,
  RightsAndOwnership,
  AuthenticityAndProvenance,
  BrandAssetUse,
  SellerControlledAudiences,
  PermittedRoutesAndArrangements,
  FiveSeparateDecisions,
  PolicyBeforeOptimization,
  CategoryVariations,
  ThreePartiesDuties,
  RightsChangeAndConfidentiality,
  BrandProtectionFAQ,
  BrandProtectionRelatedGuidance,
  BrandProtectionCTA,
} from "@/components/brand-protection";

export const metadata: Metadata = {
  title: "Brand Protection · Zoiko Surplus",
  description:
    "Govern how surplus goods are disclosed and distributed. Brand protection combines seller-authorized disclosure, documented rights and permitted routes.",
};

export default function BrandProtectionPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <RightsAndOwnership />
      <AuthenticityAndProvenance />
      <BrandAssetUse />
      <SellerControlledAudiences />
      <PermittedRoutesAndArrangements />
      <FiveSeparateDecisions />
      <PolicyBeforeOptimization />
      <CategoryVariations />
      <ThreePartiesDuties />
      <RightsChangeAndConfidentiality />
      <BrandProtectionFAQ />
      <BrandProtectionRelatedGuidance />
      <BrandProtectionCTA />
    </div>
  );
}
