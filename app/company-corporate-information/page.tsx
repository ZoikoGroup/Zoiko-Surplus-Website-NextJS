import type { Metadata } from "next";
import Hero from "@/components/company-corporate-information/Hero";
import AtAGlance from "@/components/company-corporate-information/AtAGlance";
import OperatingModel from "@/components/company-corporate-information/OperatingModel";
import WhatWeDo from "@/components/company-corporate-information/WhatWeDo";
import CorporateStructure from "@/components/company-corporate-information/CorporateStructure";
import LegalRole from "@/components/company-corporate-information/LegalRole";
import CorporateRecord from "@/components/company-corporate-information/CorporateRecord";
import OperatingPrinciples from "@/components/company-corporate-information/OperatingPrinciples";
import MarketActivation from "@/components/company-corporate-information/MarketActivation";
import FocusedPlatform from "@/components/company-corporate-information/FocusedPlatform";
import Governance from "@/components/company-corporate-information/Governance";
import Responsibility from "@/components/company-corporate-information/Responsibility";
import Compliance from "@/components/company-corporate-information/Compliance";
import Offices from "@/components/company-corporate-information/Offices";
import Roadmap from "@/components/company-corporate-information/Roadmap";
import PressBrand from "@/components/company-corporate-information/PressBrand";
import Careers from "@/components/company-corporate-information/Careers";
import ContactsLegal from "@/components/company-corporate-information/ContactsLegal";
import OfficialChannels from "@/components/company-corporate-information/OfficialChannels";
import RelatedPages from "@/components/company-corporate-information/RelatedPages";
import CorporateFAQ from "@/components/company-corporate-information/CorporateFAQ";
import FinalCTA from "@/components/company-corporate-information/FinalCTA";

export const metadata: Metadata = {
  title: "Corporate Information",
  description:
    "How Zoiko Surplus fits within Zoiko Supply Group Inc. and the Zoiko Group, how the platform is structured, and where to find authoritative corporate and policy information.",
};

export default function CorporateInformationPage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      <Hero />
      <AtAGlance />
      <OperatingModel />
      <WhatWeDo />
      <CorporateStructure />
      <LegalRole />
      <CorporateRecord />
      <OperatingPrinciples />
      <MarketActivation />
      <FocusedPlatform />
      <Governance />
      <Responsibility />
      <Compliance />
      <Offices />
      <Roadmap />
      <PressBrand />
      <Careers />
      <ContactsLegal />
      <OfficialChannels />
      <RelatedPages />
      <CorporateFAQ />
      <FinalCTA />
    </div>
  );
}
