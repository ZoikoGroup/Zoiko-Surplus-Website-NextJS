import type { Metadata } from "next";
import Hero from "@/components/logistics-coordination/Hero";
import OperatingModel from "@/components/logistics-coordination/OperatingModel";
import ActorResponsibilities from "@/components/logistics-coordination/ActorResponsibilities";
import LogisticsRoutes from "@/components/logistics-coordination/LogisticsRoutes";
import BeforeAnythingMoves from "@/components/logistics-coordination/BeforeAnythingMoves";
import ProviderQualification from "@/components/logistics-coordination/ProviderQualification";
import SafetyControls from "@/components/logistics-coordination/SafetyControls";
import CoordinationSequence from "@/components/logistics-coordination/CoordinationSequence";
import CustodyBoundaries from "@/components/logistics-coordination/CustodyBoundaries";
import HandoffEvidence from "@/components/logistics-coordination/HandoffEvidence";
import StatusExceptions from "@/components/logistics-coordination/StatusExceptions";
import Confidentiality from "@/components/logistics-coordination/Confidentiality";
import NextStep from "@/components/logistics-coordination/NextStep";
import RelatedGuidance from "@/components/logistics-coordination/RelatedGuidance";
import LogisticsFAQ from "@/components/logistics-coordination/LogisticsFAQ";
import PageGovernance from "@/components/logistics-coordination/PageGovernance";

export const metadata: Metadata = {
  title: "Logistics Coordination",
  description:
    "Where a logistics pathway is enabled, participating parties follow agreed conditions for preparation, custody handoffs, exceptions and proof of delivery. Zoiko does not own a carrier fleet or warehouses or take custody by default.",
};

export default function LogisticsCoordinationPage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      <Hero />
      <OperatingModel />
      <ActorResponsibilities />
      <LogisticsRoutes />
      <BeforeAnythingMoves />
      <ProviderQualification />
      <SafetyControls />
      <CoordinationSequence />
      <CustodyBoundaries />
      <HandoffEvidence />
      <StatusExceptions />
      <Confidentiality />
      <NextStep />
      <RelatedGuidance />
      <LogisticsFAQ />
      <PageGovernance />
    </div>
  );
}
