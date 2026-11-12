import type { Metadata } from "next";
import Hero from "@/components/surplus-exchange/Hero";
import Intro from "@/components/surplus-exchange/Intro";
import TwoSidedValue from "@/components/surplus-exchange/TwoSidedValue";
import Categories from "@/components/surplus-exchange/Categories";
import WhoTakesPart from "@/components/surplus-exchange/WhoTakesPart";
import AccessSequence from "@/components/surplus-exchange/AccessSequence";
import ExchangeVsOpen from "@/components/surplus-exchange/ExchangeVsOpen";
import SellerControlledModel from "@/components/surplus-exchange/SellerControlledModel";
import QualifiedBuyers from "@/components/surplus-exchange/QualifiedBuyers";
import Confidentiality from "@/components/surplus-exchange/Confidentiality";
import TransactionModel from "@/components/surplus-exchange/TransactionModel";
import SafetyGates from "@/components/surplus-exchange/SafetyGates";
import OperatingContext from "@/components/surplus-exchange/OperatingContext";
import Platform from "@/components/surplus-exchange/Platform";
import ControlLedger from "@/components/surplus-exchange/ControlLedger";
import EvidenceRecords from "@/components/surplus-exchange/EvidenceRecords";
import Availability from "@/components/surplus-exchange/Availability";
import NextInSolutions from "@/components/surplus-exchange/NextInSolutions";
import TrustBoundary from "@/components/surplus-exchange/TrustBoundary";
import Scenario from "@/components/surplus-exchange/Scenario";
import BeforeYouApply from "@/components/surplus-exchange/BeforeYouApply";
import Terms from "@/components/surplus-exchange/Terms";
import ExchangeFAQ from "@/components/surplus-exchange/ExchangeFAQ";
import FinalCTA from "@/components/surplus-exchange/FinalCTA";

export const metadata: Metadata = {
  title: "Surplus Exchange",
  description:
    "Surplus Exchange is the governed participation layer of Zoiko Surplus, designed to connect eligible business buyers with seller-authorized surplus opportunities in activated markets.",
};

export default function SurplusExchangePage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      <Hero />
      <Intro />
      <TwoSidedValue />
      <Categories />
      <WhoTakesPart />
      <AccessSequence />
      <ExchangeVsOpen />
      <SellerControlledModel />
      <QualifiedBuyers />
      <Confidentiality />
      <TransactionModel />
      <SafetyGates />
      <OperatingContext />
      <Platform />
      <ControlLedger />
      <EvidenceRecords />
      <Availability />
      <NextInSolutions />
      <TrustBoundary />
      <Scenario />
      <BeforeYouApply />
      <Terms />
      <ExchangeFAQ />
      <FinalCTA />
    </div>
  );
}
