import type { Metadata } from "next";
import {
  Hero,
  PlatformFamily,
  SevenStages,
  ThreeJourneys,
  SafetyCategoryGating,
  MarketAndLocale,
  RolesAndCustody,
  DocumentedExceptions,
  EvidenceBeforeClaims,
  PlainLimits,
  PlatformFAQ,
  RelatedLearning,
  ExplorePathwayCTA,
} from "@/components/how-the-platform-works";

export const metadata: Metadata = {
  title: "How the Platform Works · Zoiko Surplus",
  description:
    "A governed path from surplus to outcome. Explore how Zoiko Surplus qualifies surplus goods, applies controls, and connects verified participants.",
};

export default function HowThePlatformWorksPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <PlatformFamily />
      <SevenStages />
      <ThreeJourneys />
      <SafetyCategoryGating />
      <MarketAndLocale />
      <RolesAndCustody />
      <DocumentedExceptions />
      <EvidenceBeforeClaims />
      <PlainLimits />
      <PlatformFAQ />
      <RelatedLearning />
      <ExplorePathwayCTA />
    </div>
  );
}
