import type { Metadata } from "next";
import Hero from "@/components/our-approach/Hero";
import ApproachSummary from "@/components/our-approach/ApproachSummary";
import ThePlatform from "@/components/our-approach/ThePlatform";
import GovernedNotOpen from "@/components/our-approach/GovernedNotOpen";
import SevenStages from "@/components/our-approach/SevenStages";
import SellerControlPrinciples from "@/components/our-approach/SellerControlPrinciples";
import CategoryGovernance from "@/components/our-approach/CategoryGovernance";
import ParticipationQualification from "@/components/our-approach/ParticipationQualification";
import InventoryIntegrity from "@/components/our-approach/InventoryIntegrity";
import MarketActivation from "@/components/our-approach/MarketActivation";
import TransactionBoundaries from "@/components/our-approach/TransactionBoundaries";
import RoleJourneys from "@/components/our-approach/RoleJourneys";
import EvidenceExceptions from "@/components/our-approach/EvidenceExceptions";
import ClaimsDiscipline from "@/components/our-approach/ClaimsDiscipline";
import DifferentiatorsProofGates from "@/components/our-approach/DifferentiatorsProofGates";
import ResponsibleOutcomes from "@/components/our-approach/ResponsibleOutcomes";
import PlainEnglishTerms from "@/components/our-approach/PlainEnglishTerms";
import OurApproachFAQ from "@/components/our-approach/OurApproachFAQ";
import ApproachCTA from "@/components/our-approach/ApproachCTA";

export const metadata: Metadata = {
  title: "Our Approach · Zoiko Surplus",
  description:
    "Zoiko Surplus connects inventory qualification, controlled business access, transaction workflows and outcome evidence in one configurable operating approach.",
};

export default function OurApproachPage() {
  return (
    <div className="flex flex-col bg-white">
      <div className="order-1"><Hero /></div>
      <div className="order-2"><ApproachSummary /></div>
      <div className="order-3"><ThePlatform /></div>
      <div className="order-4"><GovernedNotOpen /></div>
      <div className="order-5"><SevenStages /></div>
      <div className="order-6"><SellerControlPrinciples /></div>
      <div className="order-7"><CategoryGovernance /></div>
      <div className="order-8"><ParticipationQualification /></div>
      <div className="order-9"><InventoryIntegrity /></div>
      <div className="order-10"><MarketActivation /></div>
      <div className="order-11 md:hidden"><TransactionBoundaries /></div>
      <div className="order-12 md:order-12"><EvidenceExceptions /></div>
      <div className="order-[13] md:hidden"><ClaimsDiscipline /></div>
      <div className="order-[14] md:hidden"><DifferentiatorsProofGates /></div>
      <div className="order-[15] md:order-11"><RoleJourneys /></div>
      <div className="order-[16] md:order-[13]"><ResponsibleOutcomes /></div>
      <div className="order-[17] md:order-[14]"><PlainEnglishTerms /></div>
      <div className="order-[18] md:order-[15]"><OurApproachFAQ /></div>
      <div className="order-[19] md:order-[16]"><ApproachCTA /></div>
    </div>
  );
}
