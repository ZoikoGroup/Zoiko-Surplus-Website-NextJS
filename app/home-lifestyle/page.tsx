import type { Metadata } from "next";
import Hero from "@/components/home-lifestyle/Hero";
import CategoryStatus from "@/components/home-lifestyle/CategoryStatus";
import SubcategoryFamilies from "@/components/home-lifestyle/SubcategoryFamilies";
import ScopeExclusions from "@/components/home-lifestyle/ScopeExclusions";
import QualificationProvenance from "@/components/home-lifestyle/QualificationProvenance";
import LogisticsCustody from "@/components/home-lifestyle/LogisticsCustody";
import SafetyProductRestrictions from "@/components/home-lifestyle/SafetyProductRestrictions";
import ConditionUncertainty from "@/components/home-lifestyle/ConditionUncertainty";
import CategoryDefinition from "@/components/home-lifestyle/CategoryDefinition";
import ControlledMatching from "@/components/home-lifestyle/ControlledMatching";
import DispositionOptions from "@/components/home-lifestyle/DispositionOptions";
import EvidenceReporting from "@/components/home-lifestyle/EvidenceReporting";
import SafetySubcategoryBanner from "@/components/home-lifestyle/SafetySubcategoryBanner";
import ExceptionsEscalation from "@/components/home-lifestyle/ExceptionsEscalation";
import RelatedCategories from "@/components/home-lifestyle/RelatedCategories";
import HomeLifestyleFAQ from "@/components/home-lifestyle/HomeLifestyleFAQ";
import QualifyHomeLifestyleCTA from "@/components/home-lifestyle/QualifyHomeLifestyleCTA";

export const metadata: Metadata = {
  title: "Home & Lifestyle Surplus · Zoiko Surplus",
  description:
    "Explore how eligible surplus home and lifestyle goods may be reviewed for controlled business-to-business disposition — subject to product, market and participant approvals.",
};

export default function HomeLifestylePage() {
  return (
    <div className="flex flex-col bg-white">
      <div className="order-1"><Hero /></div>
      <div className="order-2"><CategoryStatus /></div>
      <div className="order-3 md:order-9"><CategoryDefinition /></div>
      <div className="order-4 md:order-3"><SubcategoryFamilies /></div>
      <div className="order-5 md:order-4"><ScopeExclusions /></div>
      <div className="order-6 md:order-5"><QualificationProvenance /></div>
      <div className="order-7 md:order-7"><SafetyProductRestrictions /></div>
      <div className="order-8 md:order-8"><ConditionUncertainty /></div>
      <div className="order-9 md:order-10"><ControlledMatching /></div>
      <div className="order-10 md:order-11"><DispositionOptions /></div>
      <div className="order-11 md:order-6"><LogisticsCustody /></div>
      <div className="order-12 md:order-12"><EvidenceReporting /></div>
      <div className="order-13 md:order-13"><SafetySubcategoryBanner /></div>
      <div className="order-14 md:order-14"><ExceptionsEscalation /></div>
      <div className="order-15 md:order-15"><RelatedCategories /></div>
      <div className="order-16 md:order-16"><HomeLifestyleFAQ /></div>
      <div className="order-17 md:order-17"><QualifyHomeLifestyleCTA /></div>
    </div>
  );
}
