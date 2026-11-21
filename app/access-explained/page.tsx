import type { Metadata } from "next";
import {
  Hero,
  FiveDecisionGates,
  WhoDecidesGateByGate,
  PermissionScopeAnatomy,
  AccessLifecycleLabels,
  RestrictionPrecedence,
  InvitationAndExpiry,
  LocaleInformsContent,
  CommonOutcomesAndHelp,
  AccessExplainedRelatedGuidance,
  AccessExplainedFAQ,
  AccessExplainedCTA,
} from "@/components/access-explained";

export const metadata: Metadata = {
  title: "Access Explained · Zoiko Surplus",
  description:
    "Applying, verifying your business, qualifying for a market and receiving seller permission are separate steps. Understand how the five gates work.",
};

export default function AccessExplainedPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <FiveDecisionGates />
      <WhoDecidesGateByGate />
      <PermissionScopeAnatomy />
      <AccessLifecycleLabels />
      <RestrictionPrecedence />
      <InvitationAndExpiry />
      <LocaleInformsContent />
      <CommonOutcomesAndHelp />
      {/* On desktop: Related Destinations (09) then FAQ (10). On mobile: FAQ then Related Destinations */}
      <div className="order-2 md:order-1">
        <AccessExplainedRelatedGuidance />
      </div>
      <div className="order-1 md:order-2">
        <AccessExplainedFAQ />
      </div>
      <div className="order-3 md:order-3">
        <AccessExplainedCTA />
      </div>
    </div>
  );
}
