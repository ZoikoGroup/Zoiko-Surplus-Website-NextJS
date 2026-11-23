import type { Metadata } from "next";
import {
  Hero,
  FiveDecisionGates,
  RoleSelectionGuide,
  OrganizationIdentity,
  RepresentativeAuthority,
  PurposeScopeAndScreening,
  ReviewLifecycle,
  PossibleDecisionsAndChange,
  AccessAndSafetyBoundaries,
  PrivacyAndReporting,
  BusinessVerificationFAQ,
  BusinessVerificationRelatedGuidance,
  BusinessVerificationCTA,
} from "@/components/business-verification";

export const metadata: Metadata = {
  title: "Business Verification · Zoiko Surplus",
  description:
    "Understand how business identity, representative authority and participation may be reviewed on Zoiko Surplus.",
};

export default function BusinessVerificationPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <FiveDecisionGates />
      <RoleSelectionGuide />
      <OrganizationIdentity />
      <RepresentativeAuthority />
      <PurposeScopeAndScreening />
      <ReviewLifecycle />
      <PossibleDecisionsAndChange />
      <AccessAndSafetyBoundaries />
      <PrivacyAndReporting />
      <BusinessVerificationFAQ />
      <BusinessVerificationRelatedGuidance />
      <BusinessVerificationCTA />
    </div>
  );
}
