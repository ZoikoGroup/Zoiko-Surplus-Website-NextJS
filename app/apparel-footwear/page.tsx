import type { Metadata } from "next";
import OnThisPage from "@/components/apparel-footwear/OnThisPage";
import Hero from "@/components/apparel-footwear/Hero";
import CategoryDefinition from "@/components/apparel-footwear/CategoryDefinition";
import MarketStatus from "@/components/apparel-footwear/MarketStatus";
import WhyItMatters from "@/components/apparel-footwear/WhyItMatters";
import Scope from "@/components/apparel-footwear/Scope";
import EvidenceRightsProvenance from "@/components/apparel-footwear/EvidenceRightsProvenance";
import ConditionGrades from "@/components/apparel-footwear/ConditionGrades";
import SellerBuyerFlow from "@/components/apparel-footwear/SellerBuyerFlow";
import ChannelControls from "@/components/apparel-footwear/ChannelControls";
import DispositionRoutes from "@/components/apparel-footwear/DispositionRoutes";
import SafetyNotices from "@/components/apparel-footwear/SafetyNotices";
import RelatedCategories from "@/components/apparel-footwear/RelatedCategories";
import ApparelFAQ from "@/components/apparel-footwear/ApparelFAQ";
import FinalCTA from "@/components/apparel-footwear/FinalCTA";

export const metadata: Metadata = {
  title: "Apparel & Footwear Surplus",
  description:
    "How eligible businesses may qualify apparel and footwear surplus for controlled, seller-approved disposition pathways. A proposed seller-private B2B pilot category.",
};

export default function ApparelFootwearPage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      {/* Sidebar + main column; the sidebar stays sticky while sections 1–11 scroll. */}
      <div className="mx-auto flex w-full max-w-[1440px] items-start px-5 pt-10 md:px-10 lg:px-24 lg:pt-24">
        <OnThisPage />
        <div className="min-w-0 flex-1 lg:pl-24">
          <div className="mx-auto max-w-[862px]">
            <Hero />
            <CategoryDefinition />
            <MarketStatus />
            <WhyItMatters />
            <Scope />
            <EvidenceRightsProvenance />
            <ConditionGrades />
            <SellerBuyerFlow />
            <ChannelControls />
            <DispositionRoutes />
            <SafetyNotices />
            <RelatedCategories />
          </div>
        </div>
      </div>
      <ApparelFAQ />
      <FinalCTA />
    </div>
  );
}
