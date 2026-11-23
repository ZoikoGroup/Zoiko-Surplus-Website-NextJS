import type { Metadata } from "next";
import {
  Hero,
  SearchHelpTopics,
  FourGoodNextSteps,
  PublicGuidanceCards,
  MarketAvailabilityInformation,
  AccountAccessHelp,
  AuthorizedAccountSupport,
  ReportAnIssue,
  ThreeWaysToStartConversation,
  KeepReadingResources,
  ContactSupportBanner,
} from "@/components/help-center";

export const metadata: Metadata = {
  title: "Help Center · Zoiko Surplus",
  description:
    "Find public guidance, platform instructions, role-specific resources and support across the Zoiko Surplus ecosystem.",
};

export default function HelpCenterPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <SearchHelpTopics />
      <FourGoodNextSteps />
      <PublicGuidanceCards />
      <MarketAvailabilityInformation />
      <AccountAccessHelp />
      <AuthorizedAccountSupport />
      <ReportAnIssue />
      <ThreeWaysToStartConversation />
      <KeepReadingResources />
      <ContactSupportBanner />
    </div>
  );
}
