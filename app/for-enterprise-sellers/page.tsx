import type { Metadata } from "next";
import {
  Hero,
  PreparationOverview,
  SellerAuthority,
  SevenControlPoints,
  DispositionChoices,
  CategoryConsiderations,
  PrivateAudiences,
  OptimizeFramework,
  MarketActivation,
  RolesAndResponsibility,
  SafetyPrivacyConfidentiality,
  EvidenceAndOutcomes,
  SellerFAQ,
  SellerCTA,
} from "@/components/for-enterprise-sellers";

export const metadata: Metadata = {
  title: "For Enterprise Sellers · Zoiko Surplus",
  description:
    "A controlled way to move surplus forward. Support inventory qualification, policy-led disposition decisions, seller-authorized business demand and documented outcomes.",
};

export default function ForEnterpriseSellersPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <PreparationOverview />
      <SellerAuthority />
      <SevenControlPoints />
      <DispositionChoices />
      <CategoryConsiderations />
      <PrivateAudiences />
      <OptimizeFramework />
      <MarketActivation />
      <RolesAndResponsibility />
      <SafetyPrivacyConfidentiality />
      <EvidenceAndOutcomes />
      <SellerFAQ />
      <SellerCTA />
    </div>
  );
}
