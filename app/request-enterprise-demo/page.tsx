import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CircleCheck, Clock, EyeOff, Lock, Scale, Users } from "lucide-react";
import Hero from "@/components/request-enterprise-demo/Hero";
import Reasons from "@/components/request-enterprise-demo/Reasons";
import Topics from "@/components/request-enterprise-demo/Topics";
import BeforeYouInquire from "@/components/request-enterprise-demo/BeforeYouInquire";
import InquiryForm from "@/components/request-enterprise-demo/InquiryForm";
import NextSteps from "@/components/request-enterprise-demo/NextSteps";
import AlternativePaths from "@/components/request-enterprise-demo/AlternativePaths";
import DemoFAQ from "@/components/request-enterprise-demo/DemoFAQ";
import GovernedModel from "@/components/how-the-model-works/GovernedModel";
import MarketActivation from "@/components/category-eligibility/MarketActivation";
import DarkRulesSection from "@/components/for-partners/DarkRulesSection";
import ImageCTA from "@/components/for-partners/ImageCTA";
import { redImg } from "@/components/request-enterprise-demo/shared";

export const metadata: Metadata = {
  title: "Request an Enterprise Demo",
  description:
    "Tell Zoiko Surplus about your organization and surplus challenge. A conversation covers seller governance, market fit and permitted disposition pathways; it is not an application, offer or approval.",
};

// Full-width cream band behind a section; the extra padding keeps content clear of the band's edges.
function Band({ children }: { children: ReactNode }) {
  return <div className="bg-[#fffaf6] py-8 md:py-12">{children}</div>;
}

export default function RequestEnterpriseDemoPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <Reasons />
      <Band>
        <Topics />
      </Band>
      <GovernedModel
        id="stages"
        num="03"
        label="Controlled operating model"
        title={
          <>
            Qualify. Govern. Match. Optimize.
            <br className="hidden md:block" /> Transact. Prove. Resolve.
          </>
        }
        lead="A proposed model, not every step in every market. Not every workflow is available in every market or category."
        imageOverrides={{
          qualify: { image: redImg("stage-qualify.webp"), alt: "Warehouse shelving stacked with labelled boxes" },
        }}
      />
      <Band>
        <BeforeYouInquire />
      </Band>
      <InquiryForm />
      <Band>
        <MarketActivation
          id="availability"
          num="06"
          label="Conditional availability"
          title={
            <>
              Global by architecture.
              <br className="hidden md:block" /> Local by activation.
            </>
          }
          lead="Enterprise availability is not universal. A market choice is informational and never activates one."
          picker={false}
          gates={[
            {
              icon: CircleCheck,
              tone: "mint",
              title: "UK domestic apparel and footwear",
              body: "A proposed initial configuration, not active trading.",
            },
            { icon: Clock, tone: "sand", title: "Other markets", body: "Opened market by market after approval." },
            { icon: Lock, tone: "slate", title: "Food", body: "Needs safety and market approval first." },
          ]}
        />
      </Band>
      <NextSteps />
      <DarkRulesSection
        id="trust-privacy"
        label="Trust and privacy"
        title={
          <>
            Collect little. Use
            <br className="hidden md:block" /> it only to respond.
          </>
        }
        lead="Data uses and role boundaries follow the approved privacy notice, once published."
        rules={[
          { icon: EyeOff, title: "Minimal data", body: "Only fields needed to respond." },
          { icon: Lock, title: "Protected handling", body: "Server checks and limited access." },
          { icon: Users, title: "Need to know", body: "Only a triage team sees it." },
          { icon: Clock, title: "Retention rules", body: "Kept and deleted under approved policy." },
          { icon: Scale, title: "Separate consent", body: "Marketing is never bundled." },
        ]}
        image={redImg("privacy.webp")}
        alt="Person carrying a box while placing goods on stockroom shelving"
      />
      <Band>
        <AlternativePaths />
      </Band>
      <DemoFAQ />
      <ImageCTA
        id="red-cta-heading"
        image={redImg("cta-bg.webp")}
        title="Ready to start a conversation?"
        primary={{ label: "Request Enterprise Demo", href: "#inquiry" }}
      />
    </div>
  );
}
