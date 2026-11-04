import {
  PartnerParticipation,
  WhatParticipationMeans,
  PartnerPathways,
  OrganizationsWeWorkWith,
  PotentialFitAndExclusions,
  IntegrationAndDataBoundary,
  OperatingBoundaries,
  EvidenceAndAssurance,
  PartnerAvailability,
  CategoryAndMarketConfiguration,
  FoodAndRegulatedExceptions,
  IllustrativeExampleAndForm,
  RelatedPartnerships,
  PartnerFAQ,
  InterestIsEarnedCTA,
} from "@/components/partner-participation";

export default function PartnerParticipationPage() {
  return (
    <main>
      <PartnerParticipation />
      <WhatParticipationMeans />
      <PartnerPathways />
      <OrganizationsWeWorkWith />
      <PotentialFitAndExclusions />
      <IntegrationAndDataBoundary />
      <OperatingBoundaries />
      <EvidenceAndAssurance />
      <PartnerAvailability />
      <CategoryAndMarketConfiguration />
      <FoodAndRegulatedExceptions />
      <IllustrativeExampleAndForm />
      <RelatedPartnerships />
      <PartnerFAQ />
      <InterestIsEarnedCTA />
    </main>
  );
}
