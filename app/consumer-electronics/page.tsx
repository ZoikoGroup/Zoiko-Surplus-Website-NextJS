import type { Metadata } from "next";
import Hero from "@/components/consumer-electronics/Hero";
import CategoryAvailability from "@/components/consumer-electronics/CategoryAvailability";
import ProductFamilies from "@/components/consumer-electronics/ProductFamilies";
import InformationSecurity from "@/components/consumer-electronics/InformationSecurity";
import ConditionModel from "@/components/consumer-electronics/ConditionModel";
import BatteryElectrical from "@/components/consumer-electronics/BatteryElectrical";
import BuyerEligibility from "@/components/consumer-electronics/BuyerEligibility";
import EvidenceMatrix from "@/components/consumer-electronics/EvidenceMatrix";
import DispositionPathways from "@/components/consumer-electronics/DispositionPathways";
import LogisticsCustody from "@/components/consumer-electronics/LogisticsCustody";
import Exceptions from "@/components/consumer-electronics/Exceptions";
import SafetyDataFirst from "@/components/consumer-electronics/SafetyDataFirst";
import RelatedCategories from "@/components/consumer-electronics/RelatedCategories";
import ElectronicsFAQ from "@/components/consumer-electronics/ElectronicsFAQ";
import FinalCTA from "@/components/consumer-electronics/FinalCTA";

export const metadata: Metadata = {
  title: "Consumer Electronics Surplus",
  description:
    "How eligible surplus electronics may be qualified for seller-controlled business disposition, with attention to condition, safety, provenance and information security. A conditional overview, not a live market.",
};

export default function ConsumerElectronicsPage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      <Hero />
      <CategoryAvailability />
      <ProductFamilies />
      <ConditionModel />
      <InformationSecurity />
      <BatteryElectrical />
      <BuyerEligibility />
      <EvidenceMatrix />
      <DispositionPathways />
      <LogisticsCustody />
      <SafetyDataFirst />
      <Exceptions />
      <RelatedCategories />
      <ElectronicsFAQ />
      <FinalCTA />
    </div>
  );
}
