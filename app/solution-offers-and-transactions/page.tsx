import type { Metadata } from "next";
import Hero from "@/components/solution-offers-and-transactions/Hero";
import WhatAnOfferIs from "@/components/solution-offers-and-transactions/WhatAnOfferIs";
import WhoMayParticipate from "@/components/solution-offers-and-transactions/WhoMayParticipate";
import TransactionLifecycle from "@/components/solution-offers-and-transactions/TransactionLifecycle";
import SellerRulesBuyerPathway from "@/components/solution-offers-and-transactions/SellerRulesBuyerPathway";
import AcceptanceCommitment from "@/components/solution-offers-and-transactions/AcceptanceCommitment";
import PaymentFulfillmentBoundaries from "@/components/solution-offers-and-transactions/PaymentFulfillmentBoundaries";
import ClaimsIssuesDisputes from "@/components/solution-offers-and-transactions/ClaimsIssuesDisputes";
import EvidenceAuditability from "@/components/solution-offers-and-transactions/EvidenceAuditability";
import MarketAvailability from "@/components/solution-offers-and-transactions/MarketAvailability";
import TrustTransactionSafety from "@/components/solution-offers-and-transactions/TrustTransactionSafety";
import IllustrativeWorkflow from "@/components/solution-offers-and-transactions/IllustrativeWorkflow";
import OfferClosingCta from "@/components/solution-offers-and-transactions/OfferClosingCta";
import OffersFaq from "@/components/solution-offers-and-transactions/OffersFaq";
import FinalBanner from "@/components/solution-offers-and-transactions/FinalBanner";

export const metadata: Metadata = {
  title: "Offers & Transactions · Governed Proposals",
  description:
    "Understand how eligible businesses may make, review and complete offers within seller-approved surplus markets.",
};

export default function SolutionOffersAndTransactionsPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <WhatAnOfferIs />
      <WhoMayParticipate />
      <TransactionLifecycle />
      <SellerRulesBuyerPathway />
      <AcceptanceCommitment />
      <PaymentFulfillmentBoundaries />
      <ClaimsIssuesDisputes />
      <EvidenceAuditability />
      <MarketAvailability />
      <TrustTransactionSafety />
      <IllustrativeWorkflow />
      <OfferClosingCta />
      <OffersFaq />
      <FinalBanner />
    </div>
  );
}
