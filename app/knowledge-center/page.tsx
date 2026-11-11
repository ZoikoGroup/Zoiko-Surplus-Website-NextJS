import type { Metadata } from "next";
import Hero from "@/components/knowledge-center/Hero";
import StartHere from "@/components/knowledge-center/StartHere";
import FeaturedFoundation from "@/components/knowledge-center/FeaturedFoundation";
import SevenStages from "@/components/knowledge-center/SevenStages";
import ResourceCategories from "@/components/knowledge-center/ResourceCategories";
import SellerBuyerResources from "@/components/knowledge-center/SellerBuyerResources";
import CategoryGuidance from "@/components/knowledge-center/CategoryGuidance";
import MarketAvailability from "@/components/knowledge-center/MarketAvailability";
import TrustPrinciples from "@/components/knowledge-center/TrustPrinciples";
import ResourceCatalog from "@/components/knowledge-center/ResourceCatalog";
import ArticlePattern from "@/components/knowledge-center/ArticlePattern";
import KnowledgeFAQ from "@/components/knowledge-center/KnowledgeFAQ";
import FinalCTA from "@/components/knowledge-center/FinalCTA";

export const metadata: Metadata = {
  title: "Knowledge Center",
  description:
    "Public guidance on surplus disposition, buyer qualification and the controls that shape participation on Zoiko Surplus. Market and category availability depend on local activation and eligibility.",
};

export default function KnowledgeCenterPage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      <Hero />
      <StartHere />
      <FeaturedFoundation />
      <SevenStages />
      <ResourceCategories />
      <SellerBuyerResources />
      <CategoryGuidance />
      <MarketAvailability />
      <TrustPrinciples />
      <ResourceCatalog />
      <ArticlePattern />
      <KnowledgeFAQ />
      <FinalCTA />
    </div>
  );
}
