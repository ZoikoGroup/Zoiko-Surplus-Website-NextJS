import type { Metadata } from "next";
import Hero from "@/components/solution-surplus-network/Hero";
import PathwaySelector from "@/components/solution-surplus-network/PathwaySelector";
import ServicesCoordination from "@/components/solution-surplus-network/ServicesCoordination";
import SevenStageIntegration from "@/components/solution-surplus-network/SevenStageIntegration";
import EligibilityMandates from "@/components/solution-surplus-network/EligibilityMandates";
import SafetyExceptions from "@/components/solution-surplus-network/SafetyExceptions";
import AuthorityRoleMatrix from "@/components/solution-surplus-network/AuthorityRoleMatrix";
import CustodyEvidence from "@/components/solution-surplus-network/CustodyEvidence";
import CoordinationLayer from "@/components/solution-surplus-network/CoordinationLayer";
import CommercialBoundaries from "@/components/solution-surplus-network/CommercialBoundaries";
import RegionsAvailability from "@/components/solution-surplus-network/RegionsAvailability";
import PartnerQualification from "@/components/solution-surplus-network/PartnerQualification";
import NetworkClosingCta from "@/components/solution-surplus-network/NetworkClosingCta";
import RiskExceptions from "@/components/solution-surplus-network/RiskExceptions";
import IllustrativeOutcomes from "@/components/solution-surplus-network/IllustrativeOutcomes";
import PrivacyConfidentiality from "@/components/solution-surplus-network/PrivacyConfidentiality";
import NetworkFaq from "@/components/solution-surplus-network/NetworkFaq";
import FinalBanner from "@/components/solution-surplus-network/FinalBanner";

export const metadata: Metadata = {
  title: "Surplus Network · Permitted Pathways",
  description:
    "Explore how seller-approved inventory can be directed toward permitted third-party services — with qualification, oversight and evidence at every applicable step.",
};

const sections = [
  { key: "hero", Section: Hero, order: "order-1 md:order-1" },
  { key: "coordination-layer", Section: CoordinationLayer, order: "order-2 md:order-9" },
  { key: "services-coordination", Section: ServicesCoordination, order: "order-3 md:order-3" },
  { key: "eligibility-mandates", Section: EligibilityMandates, order: "order-4 md:order-5" },
  { key: "seven-stage-integration", Section: SevenStageIntegration, order: "order-5 md:order-4" },
  { key: "pathway-selector", Section: PathwaySelector, order: "order-6 md:order-2" },
  { key: "authority-role-matrix", Section: AuthorityRoleMatrix, order: "order-7 md:order-7" },
  { key: "safety-exceptions", Section: SafetyExceptions, order: "order-8 md:order-6" },
  { key: "custody-evidence", Section: CustodyEvidence, order: "order-9 md:order-8" },
  { key: "commercial-boundaries", Section: CommercialBoundaries, order: "order-10 md:order-10" },
  { key: "regions-availability", Section: RegionsAvailability, order: "order-11 md:order-11" },
  { key: "partner-qualification", Section: PartnerQualification, order: "order-12 md:order-12" },
  { key: "risk-exceptions", Section: RiskExceptions, order: "order-13 md:order-14" },
  { key: "network-closing-cta", Section: NetworkClosingCta, order: "order-14 md:order-13" },
  { key: "illustrative-outcomes", Section: IllustrativeOutcomes, order: "order-15 md:order-15" },
  { key: "privacy-confidentiality", Section: PrivacyConfidentiality, order: "order-16 md:order-16" },
  { key: "network-faq", Section: NetworkFaq, order: "order-17 md:order-17" },
  { key: "final-banner", Section: FinalBanner, order: "order-18 md:order-18" },
];

export default function SolutionSurplusNetworkPage() {
  return (
    <div className="flex flex-col bg-white">
      {sections.map(({ key, Section, order }) => (
        <div key={key} className={order}>
          <Section />
        </div>
      ))}
    </div>
  );
}
