import type { Metadata } from "next";
import Hero from "@/components/contact/Hero";
import AvailabilityClarification from "@/components/contact/AvailabilityClarification";
import ContactPaths from "@/components/contact/ContactPaths";
import GeneralInquiry from "@/components/contact/GeneralInquiry";
import AfterYouSend from "@/components/contact/AfterYouSend";
import SupportEscalation from "@/components/contact/SupportEscalation";
import CorporateIdentityLegal from "@/components/contact/CorporateIdentityLegal";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact · Zoiko Surplus",
  description:
    "Connect with the right team about enterprise surplus, buyer participation, partner inquiries or general questions.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <AvailabilityClarification />
      <ContactPaths />
      <GeneralInquiry />
      <AfterYouSend />
      <SupportEscalation />
      <CorporateIdentityLegal />
      <ContactFAQ />
      <ContactCTA />
    </div>
  );
}
