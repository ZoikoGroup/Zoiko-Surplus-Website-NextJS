import type { Metadata } from "next";
import {
  Hero,
  WhatAReportIs,
  IssueClassification,
  ProductSafetyRoute,
  BrandAndAbuseRoute,
  ConditionalIntake,
  WhatWeWouldAsk,
  EvidenceBoundary,
  SubmissionAndReceipt,
  FollowUpAndAccountCases,
  CommonSituations,
  IssueFAQ,
  RelatedGuidance,
  IssueCTA,
} from "@/components/report-an-issue";

export const metadata: Metadata = {
  title: "Report an Issue · Zoiko Surplus",
  description:
    "Report a trust, product safety, brand authenticity, or compliance concern on Zoiko Surplus.",
};

export default function ReportAnIssuePage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <WhatAReportIs />
      <IssueClassification />
      <ProductSafetyRoute />
      <BrandAndAbuseRoute />
      <ConditionalIntake />
      <WhatWeWouldAsk />
      <EvidenceBoundary />
      <SubmissionAndReceipt />
      <FollowUpAndAccountCases />
      <CommonSituations />
      <IssueFAQ />
      <RelatedGuidance />
      <IssueCTA />
    </div>
  );
}
