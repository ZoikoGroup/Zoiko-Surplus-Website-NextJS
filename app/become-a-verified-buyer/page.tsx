import type { Metadata } from "next";
import Hero from "@/components/become-a-verified-buyer/Hero";
import WhatVerificationIsFor from "@/components/become-a-verified-buyer/WhatVerificationIsFor";
import MarketPreflight from "@/components/become-a-verified-buyer/MarketPreflight";
import CategoriesYouMayBuy from "@/components/become-a-verified-buyer/CategoriesYouMayBuy";
import WhoCanApply from "@/components/become-a-verified-buyer/WhoCanApply";
import WhatVerificationUnlocks from "@/components/become-a-verified-buyer/WhatVerificationUnlocks";
import QualificationJourney from "@/components/become-a-verified-buyer/QualificationJourney";
import ApplicationChecklist from "@/components/become-a-verified-buyer/ApplicationChecklist";
import BuyerApplicationForm from "@/components/become-a-verified-buyer/BuyerApplicationForm";
import IllustrativeJourney from "@/components/become-a-verified-buyer/IllustrativeJourney";
import WhatHappensNext from "@/components/become-a-verified-buyer/WhatHappensNext";
import AlreadyABuyer from "@/components/become-a-verified-buyer/AlreadyABuyer";
import BuyerTrustSafety from "@/components/become-a-verified-buyer/BuyerTrustSafety";
import HowBuyerAccessConnects from "@/components/become-a-verified-buyer/HowBuyerAccessConnects";
import YourInformationHandled from "@/components/become-a-verified-buyer/YourInformationHandled";
import BuyerFAQ from "@/components/become-a-verified-buyer/BuyerFAQ";
import FinalCTA from "@/components/become-a-verified-buyer/FinalCTA";

export const metadata: Metadata = {
  title: "Become a Verified Buyer · Zoiko Surplus",
  description:
    "Apply for business-buyer participation in approved Zoiko Surplus markets. Applications are reviewed, and eligibility, category access and seller permissions are assessed separately.",
};

export default function BecomeAVerifiedBuyerPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <WhatVerificationIsFor />
      <MarketPreflight />
      <CategoriesYouMayBuy />
      <WhoCanApply />
      <WhatVerificationUnlocks />
      <QualificationJourney />
      <ApplicationChecklist />
      <BuyerApplicationForm />
      <IllustrativeJourney />
      <WhatHappensNext />
      <AlreadyABuyer />
      <BuyerTrustSafety />
      <HowBuyerAccessConnects />
      <YourInformationHandled />
      <BuyerFAQ />
      <FinalCTA />
    </div>
  );
}
