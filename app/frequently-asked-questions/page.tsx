import type { Metadata } from "next";
import {
  Hero,
  FindAnAnswer,
  WhatThePlatformIs,
  SellingSurplusInventory,
  AccessAndVerification,
  WhereAndWhat,
  MatchesMoneyDelivery,
  SafetyAndDisputes,
  JoiningAndAskingMore,
  ReviewedCopyNotClaims,
  FurtherHelpOptions,
  RelatedResources,
  BackToQuestionsBanner,
} from "@/components/frequently-asked-questions";

export const metadata: Metadata = {
  title: "Frequently Asked Questions · Zoiko Surplus",
  description:
    "Answers about business participation, access, safety and the operating model across the Zoiko Surplus ecosystem.",
};

export default function FrequentlyAskedQuestionsPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <FindAnAnswer />
      <WhatThePlatformIs />
      <SellingSurplusInventory />
      <AccessAndVerification />
      <WhereAndWhat />
      <MatchesMoneyDelivery />
      <SafetyAndDisputes />
      <JoiningAndAskingMore />
      <ReviewedCopyNotClaims />
      <FurtherHelpOptions />
      <RelatedResources />
      <BackToQuestionsBanner />
    </div>
  );
}
