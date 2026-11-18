import type { Metadata } from "next";
import Hero from "@/components/recovery-guide/Hero";
import JumpNav from "@/components/recovery-guide/JumpNav";
import ExecutiveSummary from "@/components/recovery-guide/ExecutiveSummary";
import WhatCounts from "@/components/recovery-guide/WhatCounts";
import PathwayComparison from "@/components/recovery-guide/PathwayComparison";
import DecisionFactors from "@/components/recovery-guide/DecisionFactors";
import SellerPreparation from "@/components/recovery-guide/SellerPreparation";
import SevenStages from "@/components/recovery-guide/SevenStages";
import MarketActivation from "@/components/recovery-guide/MarketActivation";
import TradeOffs from "@/components/recovery-guide/TradeOffs";
import RestrictedGoods from "@/components/recovery-guide/RestrictedGoods";
import Privacy from "@/components/recovery-guide/Privacy";
import EvidenceRecords from "@/components/recovery-guide/EvidenceRecords";
import Scenario from "@/components/recovery-guide/Scenario";
import CommonMistakes from "@/components/recovery-guide/CommonMistakes";
import RecoveryFAQ from "@/components/recovery-guide/RecoveryFAQ";
import RelatedResources from "@/components/recovery-guide/RelatedResources";
import FinalCTA from "@/components/recovery-guide/FinalCTA";

export const metadata: Metadata = {
  title: "Surplus Recovery Guide",
  description:
    "How enterprises can assess surplus goods, compare potential recovery pathways and prepare for controlled disposition. Options depend on stock, approved counterparties, category rules and local activation.",
};

export default function RecoveryGuidePage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      <Hero />
      <JumpNav />
      <ExecutiveSummary />
      <WhatCounts />
      <PathwayComparison />
      <DecisionFactors />
      <SellerPreparation />
      <SevenStages />
      <MarketActivation />
      <TradeOffs />
      <RestrictedGoods />
      <Privacy />
      <EvidenceRecords />
      <Scenario />
      <CommonMistakes />
      <RecoveryFAQ />
      <RelatedResources />
      <FinalCTA />
    </div>
  );
}
