import type { Metadata } from "next";
import Hero from "@/components/buyer-qualification/Hero";
import Intro from "@/components/buyer-qualification/Intro";
import ThreeDecisions from "@/components/buyer-qualification/ThreeDecisions";
import WhoItsFor from "@/components/buyer-qualification/WhoItsFor";
import MarketScope from "@/components/buyer-qualification/MarketScope";
import Statuses from "@/components/buyer-qualification/Statuses";
import PreparationChecklist from "@/components/buyer-qualification/PreparationChecklist";
import Ownership from "@/components/buyer-qualification/Ownership";
import ComplianceGates from "@/components/buyer-qualification/ComplianceGates";
import SellerControlled from "@/components/buyer-qualification/SellerControlled";
import AccessOutcomes from "@/components/buyer-qualification/AccessOutcomes";
import Assistance from "@/components/buyer-qualification/Assistance";
import DataHandling from "@/components/buyer-qualification/DataHandling";
import ApplicationHandoff from "@/components/buyer-qualification/ApplicationHandoff";
import DecisionLedger from "@/components/buyer-qualification/DecisionLedger";
import RelatedLearning from "@/components/buyer-qualification/RelatedLearning";
import Terms from "@/components/buyer-qualification/Terms";
import QualificationFAQ from "@/components/buyer-qualification/QualificationFAQ";
import FinalCTA from "@/components/buyer-qualification/FinalCTA";

export const metadata: Metadata = {
  title: "Buyer Qualification Guide",
  description:
    "How organizational buyer qualification may work on Zoiko Surplus, what information may be needed, and why access to a private market requires separate authorization.",
};

export default function BuyerQualificationPage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      <Hero />
      <Intro />
      <ThreeDecisions />
      <WhoItsFor />
      <MarketScope />
      <Statuses />
      <PreparationChecklist />
      <Ownership />
      <ComplianceGates />
      <SellerControlled />
      <AccessOutcomes />
      <Assistance />
      <DataHandling />
      <ApplicationHandoff />
      <DecisionLedger />
      <RelatedLearning />
      <Terms />
      <QualificationFAQ />
      <FinalCTA />
    </div>
  );
}
