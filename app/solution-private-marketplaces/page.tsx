import type { Metadata } from "next";
import Hero from "@/components/solution-private-marketplaces/Hero";
import WhatPrivateMeans from "@/components/solution-private-marketplaces/WhatPrivateMeans";
import WhoCanParticipate from "@/components/solution-private-marketplaces/WhoCanParticipate";
import EligibilityStages from "@/components/solution-private-marketplaces/EligibilityStages";
import SellerGovernance from "@/components/solution-private-marketplaces/SellerGovernance";
import ProtectedDiscoveryModel from "@/components/solution-private-marketplaces/ProtectedDiscoveryModel";
import AvailabilityAndMarketRules from "@/components/solution-private-marketplaces/AvailabilityAndMarketRules";
import VerificationVsSafety from "@/components/solution-private-marketplaces/VerificationVsSafety";
import PrivacyAndConfidentiality from "@/components/solution-private-marketplaces/PrivacyAndConfidentiality";
import TradingStepsPreview from "@/components/solution-private-marketplaces/TradingStepsPreview";
import InvitationAndOffboarding from "@/components/solution-private-marketplaces/InvitationAndOffboarding";
import AccessJourney from "@/components/solution-private-marketplaces/AccessJourney";
import PrivateMarketplacesFAQ from "@/components/solution-private-marketplaces/PrivateMarketplacesFAQ";
import FinalCTA from "@/components/solution-private-marketplaces/FinalCTA";

export const metadata: Metadata = {
  title: "Private Marketplaces · Controlled by Eligibility",
  description:
    "Zoiko Surplus is designed to help enterprises direct surplus opportunities toward qualified business audiences under seller-defined and market-specific rules.",
};

export default function SolutionPrivateMarketplacesPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <WhatPrivateMeans />
      <WhoCanParticipate />
      <EligibilityStages />
      <SellerGovernance />
      <ProtectedDiscoveryModel />
      <AvailabilityAndMarketRules />
      <VerificationVsSafety />
      <PrivacyAndConfidentiality />
      <TradingStepsPreview />
      <InvitationAndOffboarding />
      <AccessJourney />
      <PrivateMarketplacesFAQ />
      <FinalCTA />
    </div>
  );
}
