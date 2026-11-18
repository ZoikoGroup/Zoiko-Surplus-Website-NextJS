import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CircleCheck, Clock, Lock } from "lucide-react";
import Hero from "@/components/seller-readiness-guide/Hero";
import PillarDetails from "@/components/seller-readiness-guide/PillarDetails";
import ReadinessPillars from "@/components/seller-readiness-guide/ReadinessPillars";
import HoldConditions from "@/components/seller-readiness-guide/HoldConditions";
import OwnersAndContext from "@/components/seller-readiness-guide/OwnersAndContext";
import Permissions from "@/components/seller-readiness-guide/Permissions";
import UploadBoundary from "@/components/seller-readiness-guide/UploadBoundary";
import RelatedGuidance from "@/components/seller-readiness-guide/RelatedGuidance";
import CategoryFamilies from "@/components/category-eligibility/CategoryFamilies";
import MarketActivation from "@/components/category-eligibility/MarketActivation";
import EligibilityFAQ from "@/components/category-eligibility/EligibilityFAQ";
import ImageCTA from "@/components/for-partners/ImageCTA";
import { srImg } from "@/components/seller-readiness-guide/shared";

export const metadata: Metadata = {
  title: "Seller Readiness Guide",
  description:
    "What needs review before you sell surplus on Zoiko Surplus: six readiness pillars, category requirements, stop and hold conditions, internal review owners and the separate permissions involved.",
};

// Full-width cream band behind a section; the extra padding keeps content clear of the band's edges.
const CREAM = "bg-[#fffaf6]";
function Band({ children }: { children: ReactNode }) {
  return <div className={`${CREAM} py-8 md:py-12`}>{children}</div>;
}

export default function SellerReadinessGuidePage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      <Hero />
      <Band>
        <PillarDetails />
      </Band>
      <ReadinessPillars />
      <CategoryFamilies
        id="category-branch"
        num="03"
        label="Category branch"
        title={
          <>
            Requirements differ by
            <br className="hidden md:block" /> product and market.
          </>
        }
        lead="Food, electronics, industrial and other regulated goods may need extra specialized evidence and separate activation."
      />
      <HoldConditions />
      <Band>
        <OwnersAndContext />
      </Band>
      <MarketActivation
        id="market"
        num="06"
        label="Market and availability"
        title={
          <>
            Global by architecture.
            <br className="hidden md:block" /> Local by activation.
          </>
        }
        lead="Local status appears only when verified. Choosing a market never activates one."
        gates={[
          {
            icon: CircleCheck,
            tone: "mint",
            pill: "Proposed pilot",
            title: "UK domestic apparel and footwear",
            body: "Proposed first configuration, not a verified launch.",
          },
          { icon: Clock, tone: "sand", pill: "Configured later", title: "Other markets", body: "Opened market by market." },
          { icon: Lock, tone: "slate", pill: "Separately gated", title: "Food", body: "Needs its own approval." },
        ]}
      />
      <Band>
        <Permissions />
      </Band>
      <UploadBoundary />
      <EligibilityFAQ num="08" bg={CREAM} />
      <RelatedGuidance />
      <ImageCTA
        id="sr-cta-heading"
        image={srImg("cta-bg.webp")}
        title={
          <>
            Check the full resource.
            <br className="hidden sm:block" /> Then talk to us if it fits.
          </>
        }
        primary={{ label: "Open Full Readiness Checklist", href: "#pillar-details" }}
        secondary={{ label: "Request Enterprise Demo", href: "/request-enterprise-demo" }}
      />
    </div>
  );
}
