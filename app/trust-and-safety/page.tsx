import type { Metadata } from "next";
import Hero from "@/components/trust-and-safety/Hero";
import WhatTrustMeans from "@/components/trust-and-safety/WhatTrustMeans";
import Roles from "@/components/trust-and-safety/Roles";
import ControlMap from "@/components/trust-and-safety/ControlMap";
import ControlDomains from "@/components/trust-and-safety/ControlDomains";
import RegulatedGoods from "@/components/trust-and-safety/RegulatedGoods";
import Privacy from "@/components/trust-and-safety/Privacy";
import Disputes from "@/components/trust-and-safety/Disputes";
import FraudPrevention from "@/components/trust-and-safety/FraudPrevention";
import Claims from "@/components/trust-and-safety/Claims";
import HonestByDesign from "@/components/trust-and-safety/HonestByDesign";
import Coverage from "@/components/trust-and-safety/Coverage";
import WhereTrustShowsUp from "@/components/trust-and-safety/WhereTrustShowsUp";
import TrustFAQ from "@/components/trust-and-safety/TrustFAQ";
import FinalCTA from "@/components/trust-and-safety/FinalCTA";

export const metadata: Metadata = {
  title: "Trust & Safety",
  description:
    "How Zoiko Surplus is designed around qualified business participation, seller-controlled markets, category-specific requirements and documented decisions — and where each control stops.",
};

export default function TrustAndSafetyPage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      <Hero />
      <WhatTrustMeans />
      <Roles />
      <ControlMap />
      <ControlDomains />
      <RegulatedGoods />
      <Privacy />
      <Disputes />
      <FraudPrevention />
      <Claims />
      <HonestByDesign />
      <Coverage />
      <WhereTrustShowsUp />
      <TrustFAQ />
      <FinalCTA />
    </div>
  );
}
