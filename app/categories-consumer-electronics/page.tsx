import type { Metadata } from "next";
import Hero from "@/components/categories-consumer-electronics/Hero";
import CategoryAvailability from "@/components/categories-consumer-electronics/CategoryAvailability";
import ProductFamilies from "@/components/categories-consumer-electronics/ProductFamilies";
import InformationSecurity from "@/components/categories-consumer-electronics/InformationSecurity";
import ConditionModel from "@/components/categories-consumer-electronics/ConditionModel";
import BatteryElectrical from "@/components/categories-consumer-electronics/BatteryElectrical";
import BuyerEligibility from "@/components/categories-consumer-electronics/BuyerEligibility";
import EvidenceMatrix from "@/components/categories-consumer-electronics/EvidenceMatrix";
import DispositionPathways from "@/components/categories-consumer-electronics/DispositionPathways";
import LogisticsCustody from "@/components/categories-consumer-electronics/LogisticsCustody";
import Exceptions from "@/components/categories-consumer-electronics/Exceptions";
import SafetyDataFirst from "@/components/categories-consumer-electronics/SafetyDataFirst";
import RelatedCategories from "@/components/categories-consumer-electronics/RelatedCategories";
import ElectronicsFAQ from "@/components/categories-consumer-electronics/ElectronicsFAQ";
import FinalCTA from "@/components/categories-consumer-electronics/FinalCTA";

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
