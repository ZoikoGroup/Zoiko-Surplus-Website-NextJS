import type { Metadata } from "next";
import Hero from "@/components/for-partners/Hero";
import PartnerRoles from "@/components/for-partners/PartnerRoles";
import ServiceBoundary from "@/components/for-partners/ServiceBoundary";
import PartnerReadiness from "@/components/for-partners/PartnerReadiness";
import Lifecycle from "@/components/for-partners/Lifecycle";
import GoodsRestrictions from "@/components/for-partners/GoodsRestrictions";
import Availability from "@/components/for-partners/Availability";
import DataPrivacy from "@/components/for-partners/DataPrivacy";
import PartnerSupport from "@/components/for-partners/PartnerSupport";
import PartnerFAQ from "@/components/for-partners/PartnerFAQ";
import RelatedLinks from "@/components/for-partners/RelatedLinks";
import FinalCTA from "@/components/for-partners/FinalCTA";
import GovernedModel from "@/components/how-the-model-works/GovernedModel";
import { fpImg } from "@/components/for-partners/shared";

export const metadata: Metadata = {
  title: "For Partners",
  description:
    "How qualified third-party service organizations may support governed surplus pathways on Zoiko Surplus: illustrative roles, the service boundary, partner readiness, the partner lifecycle and the controls that apply.",
};

export default function ForPartnersPage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      <Hero />
      <PartnerRoles />
      <ServiceBoundary />
      <PartnerReadiness />
      <Lifecycle />
      <GovernedModel
        id="stages"
        num="05"
        label="Seven stages, from the partner side"
        title="What each stage means for a partner."
        lead="A role-specific view of the seven-stage model."
        imageOverrides={{
          qualify: { image: fpImg("stage-qualify.webp"), alt: "Warehouse shelving stacked with labelled boxes" },
        }}
      />
      <GoodsRestrictions />
      <Availability />
      <DataPrivacy />
      <PartnerSupport />
      <PartnerFAQ />
      <RelatedLinks />
      <FinalCTA />
    </div>
  );
}
