import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Clock,
  EyeOff,
  FileCheck,
  FileText,
  Globe,
  ListChecks,
  Lock,
  Scale,
  Search,
  Users,
} from "lucide-react";
import Hero from "@/components/report-a-concern/Hero";
import ConcernType from "@/components/report-a-concern/ConcernType";
import Routes from "@/components/report-a-concern/Routes";
import FormPreview from "@/components/report-a-concern/FormPreview";
import Outcomes from "@/components/report-a-concern/Outcomes";
import ConcernFAQ from "@/components/report-a-concern/ConcernFAQ";
import RelatedHelp from "@/components/report-a-concern/RelatedHelp";
import DarkRulesSection from "@/components/for-partners/DarkRulesSection";
import ImageCTA from "@/components/for-partners/ImageCTA";
import { GuideSection, PhotoCardGrid, TilesWithPhoto, racImg } from "@/components/report-a-concern/shared";

export const metadata: Metadata = {
  title: "Report a Concern",
  description:
    "Find the appropriate way to raise a concern with Zoiko Surplus: safety, brand or misuse, privacy, accessibility, or routine account help. Guidance only; reporting is currently unavailable.",
};

// Full-width cream band behind one or more sections; the extra padding keeps content clear of the band's edges.
function Band({ children }: { children: ReactNode }) {
  return <div className="bg-[#fffaf6] py-8 md:py-12">{children}</div>;
}

export default function ReportAConcernPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <ConcernType />
      <Band>
        <Routes />
      </Band>
      <TilesWithPhoto
        id="intake-readiness"
        num="03"
        label="Intake readiness"
        title="Reporting is currently unavailable."
        lead="Intake appears only when a staffed channel is verified. Until then, this page guides you to approved routes."
        imageFirst
        image={racImg("intake-readiness.webp")}
        alt="Woman frowning thoughtfully at her laptop"
        tiles={[
          { icon: Clock, tone: "sand", title: "Not live", body: "No concern handler is confirmed." },
          { icon: Users, tone: "mint", title: "Staffed channel", body: "Needed before intake opens." },
          { icon: EyeOff, tone: "sand", title: "No anonymity", body: "None is promised." },
          { icon: Scale, tone: "mint", title: "No legal protection", body: "None is implied." },
        ]}
      />
      <Band>
        <FormPreview />
        <GuideSection
          id="what-we-ask"
          num="05"
          label="What we would ask"
          title="Only what is needed to route it."
          lead="Four short items, none of them sensitive."
        >
          <PhotoCardGrid
            eyebrow="Item"
            items={[
              {
                icon: Users,
                title: "Relationship",
                body: "Optional context.",
                image: racImg("ask-relationship.webp"),
                alt: "Two smiling businessmen shaking hands",
              },
              {
                icon: Globe,
                title: "Market",
                body: "Optional, if relevant.",
                image: racImg("ask-market.webp"),
                alt: "Shopper clapping at a fruit stall in a street market",
              },
              {
                icon: FileText,
                title: "Summary",
                body: "One short line.",
                image: racImg("ask-summary.webp"),
                alt: "Person typing on a laptop beside printed charts",
              },
              {
                icon: ListChecks,
                title: "Description",
                body: "What happened, in plain facts.",
                image: racImg("ask-description.webp"),
                alt: "Hand writing notes beside a laptop showing a budget report",
              },
            ]}
          />
        </GuideSection>
      </Band>
      <DarkRulesSection
        id="privacy-boundary"
        label="Privacy boundary"
        title="Describe it. Do not attach it."
        lead="Do not send passwords, payment details, identity files, private listings or confidential screenshots."
        rules={[
          { icon: FileText, title: "Do share", body: "What happened and why you are concerned." },
          { icon: Globe, title: "Do share", body: "The market involved, if relevant." },
          { icon: Lock, title: "Do not send", body: "Passwords or payment details." },
          { icon: EyeOff, title: "Do not send", body: "Private lots, prices or screenshots." },
          { icon: Users, title: "Do not send", body: "Identity files or personal data." },
        ]}
      />
      <Outcomes />
      <Band>
        <TilesWithPhoto
          id="secure-follow-up"
          num="07"
          label="Secure follow-up"
          title={
            <>
              Further details by approved
              <br className="hidden md:block" /> secure channel.
            </>
          }
          lead="Further details may be requested through an approved secure channel. A reference is not a public lookup."
          image={racImg("followup-approved.webp")}
          alt="Hand signing a document beside an Approved stamp"
          tiles={[
            { icon: Lock, tone: "mint", title: "Secure channel", body: "For any further details." },
            { icon: Search, tone: "sand", title: "No public lookup", body: "A reference is not a credential." },
            { icon: FileCheck, tone: "mint", title: "No attachments", body: "None through this page." },
            { icon: Clock, tone: "sand", title: "No timeline", body: "Unless approved policy states one." },
          ]}
        />
      </Band>
      <ConcernFAQ />
      <Band>
        <RelatedHelp />
      </Band>
      <ImageCTA
        id="rac-cta-heading"
        image={racImg("cta-bg.webp")}
        title="Not sure where to start?"
        primary={{ label: "Choose a concern type", href: "#concern-type" }}
        secondary={{ label: "Read the FAQ", href: "#faq" }}
      />
    </div>
  );
}
