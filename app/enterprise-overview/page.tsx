import type { Metadata } from "next";
import Hero from "@/components/enterprise-overview/Hero";
import SellerChallenge from "@/components/enterprise-overview/SellerChallenge";
import Coverage from "@/components/enterprise-overview/Coverage";
import ExploreCapability from "@/components/enterprise-overview/ExploreCapability";
import InventoryQualification from "@/components/enterprise-overview/InventoryQualification";
import PolicyControls from "@/components/enterprise-overview/PolicyControls";
import DispositionPlanning from "@/components/enterprise-overview/DispositionPlanning";
import RecoveryEvidence from "@/components/enterprise-overview/RecoveryEvidence";
import MarketStatus from "@/components/enterprise-overview/MarketStatus";
import SevenStages from "@/components/enterprise-overview/SevenStages";
import RolesPermissions from "@/components/enterprise-overview/RolesPermissions";
import GovernedByDesign from "@/components/enterprise-overview/GovernedByDesign";
import TrustSafetyLiability from "@/components/enterprise-overview/TrustSafetyLiability";
import Integrations from "@/components/enterprise-overview/Integrations";
import Results from "@/components/enterprise-overview/Results";
import Faq from "@/components/enterprise-overview/Faq";
import ClosingCta from "@/components/enterprise-overview/ClosingCta";

export const metadata: Metadata = { title: "Surplus Enterprise · Enterprise Overview" };

// Mobile and desktop stack four sections differently: on desktop "Market & category status" comes
// right after "Recovery & evidence" and the "Governed by design" band closes the roles block, while
// mobile runs seven stages → governed by design → roles → market status. The page is a flex column
// and each section takes its place with `order` (mobile, then md:desktop).
const sections = [
  { key: "hero", Section: Hero, order: "order-1 md:order-1" },
  { key: "seller-challenge", Section: SellerChallenge, order: "order-2 md:order-2" },
  { key: "coverage", Section: Coverage, order: "order-3 md:order-3" },
  { key: "explore-capability", Section: ExploreCapability, order: "order-4 md:order-4" },
  { key: "inventory-qualification", Section: InventoryQualification, order: "order-5 md:order-5" },
  { key: "policy-controls", Section: PolicyControls, order: "order-6 md:order-6" },
  { key: "disposition-planning", Section: DispositionPlanning, order: "order-7 md:order-7" },
  { key: "recovery-evidence", Section: RecoveryEvidence, order: "order-8 md:order-8" },
  { key: "seven-stages", Section: SevenStages, order: "order-9 md:order-10" },
  { key: "governed-by-design", Section: GovernedByDesign, order: "order-10 md:order-12" },
  { key: "roles-permissions", Section: RolesPermissions, order: "order-11 md:order-11" },
  { key: "market-status", Section: MarketStatus, order: "order-12 md:order-9" },
  { key: "trust-safety-liability", Section: TrustSafetyLiability, order: "order-13 md:order-13" },
  { key: "integrations", Section: Integrations, order: "order-14 md:order-14" },
  { key: "results", Section: Results, order: "order-15 md:order-15" },
  { key: "faq", Section: Faq, order: "order-16 md:order-16" },
  { key: "closing-cta", Section: ClosingCta, order: "order-17 md:order-17" },
];

export default function EnterpriseOverviewPage() {
  return (
    <div className="flex flex-col">
      {sections.map(({ key, Section, order }) => (
        <div key={key} className={order}>
          <Section />
        </div>
      ))}
    </div>
  );
}
