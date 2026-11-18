import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CircleCheck, Clock, Lock } from "lucide-react";
import Hero from "@/components/seller-overview/Hero";
import SurplusKinds from "@/components/seller-overview/SurplusKinds";
import Capabilities from "@/components/seller-overview/Capabilities";
import SellerAuthority from "@/components/seller-overview/SellerAuthority";
import StockFacts from "@/components/seller-overview/StockFacts";
import CategoryChecks from "@/components/seller-overview/CategoryChecks";
import BuyerGates from "@/components/seller-overview/BuyerGates";
import RecoveryRoutes from "@/components/seller-overview/RecoveryRoutes";
import TrustBoundaries from "@/components/seller-overview/TrustBoundaries";
import SellerFAQ from "@/components/seller-overview/SellerFAQ";
import NextSteps from "@/components/seller-overview/NextSteps";
import GovernedModel from "@/components/how-the-model-works/GovernedModel";
import MarketActivation from "@/components/category-eligibility/MarketActivation";
import ImageCTA from "@/components/for-partners/ImageCTA";
import { soImg } from "@/components/seller-overview/shared";

export const metadata: Metadata = {
  title: "Seller Overview",
  description:
    "How organizations can prepare eligible excess, returned or imperfect goods, engage qualified demand and evaluate permitted disposition options on Zoiko Surplus while keeping seller-controlled commercial decisions.",
};

// Full-width cream band behind a section; the extra padding keeps content clear of the band's edges.
function Band({ children }: { children: ReactNode }) {
  return <div className="bg-[#fffaf6] py-8 md:py-12">{children}</div>;
}

export default function SellerOverviewPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <SurplusKinds />
      <Capabilities />
      <Band>
        <SellerAuthority />
      </Band>
      <StockFacts />
      <Band>
        <CategoryChecks />
      </Band>
      <GovernedModel
        id="stages"
        num="06"
        label="How the model works"
        title="Seven stages. One governed model."
        lead="Names only. The detailed sequence lives on the For Enterprise Sellers page."
        imageOverrides={{
          qualify: { image: soImg("stage-qualify.webp"), alt: "Warehouse shelving stacked with labelled boxes" },
        }}
      />
      <BuyerGates />
      <RecoveryRoutes />
      <Band>
        <TrustBoundaries />
      </Band>
      <MarketActivation
        id="market"
        num="10"
        label="Market and category availability"
        title={
          <>
            Global by architecture.
            <br className="hidden md:block" /> Local by activation.
          </>
        }
        lead="Choosing a market only changes what this page says. It never activates anything."
        gates={[
          {
            icon: CircleCheck,
            tone: "mint",
            pill: "Proposed pilot",
            title: "UK domestic apparel and footwear",
            body: "Proposed first configuration, not a verified launch.",
          },
          { icon: Clock, tone: "sand", pill: "Configured later", title: "Other markets", body: "Opened market by market." },
          {
            icon: Lock,
            tone: "slate",
            pill: "Separately gated",
            title: "Food",
            body: "Sealed ambient food needs its own approval.",
          },
        ]}
      />
      <SellerFAQ />
      <NextSteps />
      <ImageCTA
        id="so-cta-heading"
        image={soImg("cta-bg.webp")}
        title={
          <>
            Start with a human
            <br className="hidden sm:block" /> conversation.
          </>
        }
        primary={{ label: "Request Enterprise Demo", href: "/request-enterprise-demo" }}
        secondary={{ label: "Seller Readiness", href: "/seller-readiness-guide" }}
      />
    </div>
  );
}
