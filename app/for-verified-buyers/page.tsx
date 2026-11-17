import type { Metadata } from "next";
import Hero from "@/components/for-verified-buyers/Hero";
import WhoMayExplore from "@/components/for-verified-buyers/WhoMayExplore";
import FiveDecisions from "@/components/for-verified-buyers/FiveDecisions";
import OrganizationReview from "@/components/for-verified-buyers/OrganizationReview";
import MarketGate from "@/components/for-verified-buyers/MarketGate";
import SellerAudience from "@/components/for-verified-buyers/SellerAudience";
import InvitationStates from "@/components/for-verified-buyers/InvitationStates";
import Restrictions from "@/components/for-verified-buyers/Restrictions";
import Parties from "@/components/for-verified-buyers/Parties";
import SecurityPrivacy from "@/components/for-verified-buyers/SecurityPrivacy";
import BuyerFAQ from "@/components/for-verified-buyers/BuyerFAQ";
import RelatedResources from "@/components/for-verified-buyers/RelatedResources";
import FinalCTA from "@/components/for-verified-buyers/FinalCTA";
import GovernedModel from "@/components/how-the-model-works/GovernedModel";
import { fvbImg } from "@/components/for-verified-buyers/shared";

export const metadata: Metadata = {
  title: "For Verified Buyers",
  description:
    "How buyer qualification and permissioned access work on Zoiko Surplus: who may apply, the five separate decisions, market gates, seller invitations and the controls that apply to every buyer.",
};

export default function ForVerifiedBuyersPage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      <Hero />
      <WhoMayExplore />
      <FiveDecisions />
      <OrganizationReview />
      <MarketGate />
      <SellerAudience />
      <GovernedModel
        id="stages"
        num="06"
        label="Seven stages, from the buyer side"
        title="What each stage means for you."
        lead="An educational model only. Real operation needs a signed-in, approved workflow."
        imageOverrides={{
          qualify: { image: fvbImg("stage-qualify.webp"), alt: "Worker checking boxes against a clipboard" },
        }}
      />
      <InvitationStates />
      <Restrictions />
      <Parties />
      <SecurityPrivacy />
      <BuyerFAQ />
      <RelatedResources />
      <FinalCTA />
    </div>
  );
}
