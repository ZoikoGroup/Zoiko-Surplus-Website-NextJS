import type { Metadata } from "next";
import { Clock, Globe, Scale, User } from "lucide-react";
import Hero from "@/components/buyer-access/Hero";
import FourLayerAccess from "@/components/buyer-access/FourLayerAccess";
import MarketScope from "@/components/buyer-access/MarketScope";
import WhoCanApply from "@/components/buyer-access/WhoCanApply";
import RolePermissions from "@/components/buyer-access/RolePermissions";
import SellerInvitations from "@/components/buyer-access/SellerInvitations";
import Journey from "@/components/buyer-access/Journey";
import SafetyBoundaries from "@/components/buyer-access/SafetyBoundaries";
import Glossary from "@/components/buyer-access/Glossary";
import Troubleshooting from "@/components/buyer-access/Troubleshooting";
import AccessFAQ from "@/components/buyer-access/AccessFAQ";
import RelatedResources from "@/components/buyer-access/RelatedResources";
import FinalCTA from "@/components/buyer-access/FinalCTA";
import { GovernanceStrip } from "@/components/logistics-coordination/PageGovernance";

export const metadata: Metadata = {
  title: "Buyer Access",
  description:
    "How buyer access decisions work on Zoiko Surplus: four separate checks, market and category scope, seller invitations and what a prospective buyer can do next.",
};

export default function BuyerAccessPage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      <Hero />
      <FourLayerAccess />
      <MarketScope />
      <WhoCanApply />
      <RolePermissions />
      <SellerInvitations />
      <Journey />
      <SafetyBoundaries />
      <Glossary />
      <Troubleshooting />
      <AccessFAQ />
      <RelatedResources />
      <FinalCTA />
      <GovernanceStrip
        facts={[
          { icon: User, label: "Owner", value: "Named at approval" },
          { icon: Scale, label: "Reviewers", value: "Legal, privacy, security" },
          { icon: Clock, label: "Review date", value: "Set at approval" },
          { icon: Globe, label: "Market status", value: "Informational" },
        ]}
      />
    </div>
  );
}
