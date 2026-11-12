import {
  JoinPartnerNetwork,
  PartnerRoles,
  WherePartnersFit,
  PartnerCapabilityCards,
  MarketAndCategoryBoundary,
  ExcludedClaimsAndGoods,
  PartnerReviewLifecycle,
  QualificationExpectations,
  CustodyResponsibilityAndData,
  PartnerInquiry,
  ExistingApprovedPartner,
  FaqSection,
  RelatedRoutes,
  CallToActionBanner,
} from "@/components/join-partner-network";

export default function JoinPartnerNetworkPage() {
  return (
    <main>
      <JoinPartnerNetwork />
      <PartnerRoles />
      <WherePartnersFit />
      <PartnerCapabilityCards />
      <MarketAndCategoryBoundary />
      <ExcludedClaimsAndGoods />
      <PartnerReviewLifecycle />
      <QualificationExpectations />
      <CustodyResponsibilityAndData />
      <PartnerInquiry />
      <ExistingApprovedPartner />
      <FaqSection />
      <RelatedRoutes />
      <CallToActionBanner />
    </main>
  );
}
