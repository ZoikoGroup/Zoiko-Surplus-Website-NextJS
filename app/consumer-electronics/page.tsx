import type { Metadata } from "next";
import Hero from "@/components/consumer-electronics/Hero";
import CategoryAvailability from "@/components/consumer-electronics/CategoryAvailability";
import ProductFamilies from "@/components/consumer-electronics/ProductFamilies";
import ConditionModel from "@/components/consumer-electronics/ConditionModel";
import InformationSecurity from "@/components/consumer-electronics/InformationSecurity";
import HazardElectricalRecall from "@/components/consumer-electronics/HazardElectricalRecall";
import BuyerEligibility from "@/components/consumer-electronics/BuyerEligibility";
import EvidenceMatrix from "@/components/consumer-electronics/EvidenceMatrix";
import DispositionPathways from "@/components/consumer-electronics/DispositionPathways";
import LogisticsCustody from "@/components/consumer-electronics/LogisticsCustody";
import SafetyDataFirst from "@/components/consumer-electronics/SafetyDataFirst";
import ExceptionsCommercialBoundaries from "@/components/consumer-electronics/ExceptionsCommercialBoundaries";
import RelatedCategories from "@/components/consumer-electronics/RelatedCategories";
import ElectronicsFAQ from "@/components/consumer-electronics/ElectronicsFAQ";
import QualifyElectronicsCTA from "@/components/consumer-electronics/QualifyElectronicsCTA";

export const metadata: Metadata = {
  title: "Consumer Electronics Surplus · Zoiko Surplus",
  description:
    "Explore how eligible surplus electronics may be qualified for seller-controlled business disposition — with attention to product condition, safety, provenance and information security.",
};

export default function ConsumerElectronicsPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <CategoryAvailability />
      <ProductFamilies />
      <ConditionModel />
      <InformationSecurity />
      <HazardElectricalRecall />
      <BuyerEligibility />
      <EvidenceMatrix />
      <DispositionPathways />
      <LogisticsCustody />
      <SafetyDataFirst />
      <ExceptionsCommercialBoundaries />
      <RelatedCategories />
      <ElectronicsFAQ />
      <QualifyElectronicsCTA />
    </div>
  );
}
