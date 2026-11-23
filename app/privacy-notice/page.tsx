import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Building2,
  CircleCheck,
  Clock,
  EyeOff,
  FileCheck,
  FileText,
  Flag,
  Globe,
  ListChecks,
  Lock,
  Scale,
  SlidersHorizontal,
  Users,
  X,
} from "lucide-react";
import Hero from "@/components/privacy-notice/Hero";
import Topics from "@/components/privacy-notice/Topics";
import PrivacyFAQ from "@/components/privacy-notice/PrivacyFAQ";
import Escalation from "@/components/terms-of-use/Escalation";
import PrintTile from "@/components/terms-of-use/PrintTile";
import ImageCTA from "@/components/for-partners/ImageCTA";
import { GuideSection, ImageTopGrid, TilesBesidePhoto, pnImg } from "@/components/privacy-notice/shared";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "Understand how Zoiko Surplus handles personal information: version and scope, what the notice will cover, cookies and preferences, privacy requests and change history.",
};

// Full-width cream band behind one or more sections; the extra padding keeps content clear of the band's edges.
function Band({ children }: { children: ReactNode }) {
  return <div className="bg-[#fffaf6] py-8 md:py-12">{children}</div>;
}

const threeCols = {
  aspect: "aspect-[401/180]",
  cols: "md:grid-cols-3",
  sizes: "(min-width: 1024px) 401px, (min-width: 768px) 33vw, 100vw",
};

export default function PrivacyNoticePage() {
  return (
    // `print-page` scopes the print rule in globals.css that hides the site header and footer.
    <div className="print-page flex flex-col bg-white">
      <Hero />
      <TilesBesidePhoto
        id="version"
        num="01"
        label="Version, dates and scope"
        title="Which notice applies to you?"
        lead="Version, effective date and scope come from approved records. None exist on this preview."
        imageFirst
        imageCol="lg:grid-cols-[minmax(0,596px)_minmax(0,1fr)] lg:gap-14"
        aspect="aspect-[596/539]"
        image={pnImg("version-laptop-card.webp")}
        alt="Person holding a payment card while typing on a laptop"
        intro={
          <div className="flex flex-col gap-2">
            <label htmlFor="pn-applicability" className="text-sm font-semibold text-[#0f1f3a]">
              Applicability
            </label>
            <select
              id="pn-applicability"
              disabled
              className="h-[52px] w-full cursor-not-allowed rounded-lg border border-[#e6e9ef] bg-[#f5f5f6] px-4 text-base text-[#556987]"
            >
              <option>No approved scopes</option>
            </select>
          </div>
        }
        tiles={[
          { icon: FileText, tone: "mint", title: "Version", body: "Pending approval." },
          { icon: Clock, tone: "sand", title: "Effective date", body: "Not published." },
          { icon: Building2, tone: "mint", title: "Responsible entity", body: "Named by Corporate Information." },
          { icon: Globe, tone: "sand", title: "Scope", body: "Stated by the notice itself." },
        ]}
      />
      <Band>
        <GuideSection
          id="summary"
          num="02"
          label="At-a-glance summary"
          title="A short summary, once approved."
          lead="Nothing is summarized here, because no notice text exists yet."
        >
          <ImageTopGrid
            {...threeCols}
            items={[
              {
                icon: ListChecks,
                title: "Plain summary",
                body: "A short summary, if Legal approves one.",
                image: pnImg("summary-plain.webp"),
                alt: "Person typing on a laptop while holding a printed report",
              },
              {
                icon: Scale,
                title: "Not a substitute",
                body: "A summary never replaces the full notice.",
                image: pnImg("summary-not-substitute.webp"),
                alt: "Hand writing on sticky notes beside a laptop and earphones",
              },
              {
                icon: Users,
                title: "Readable by all",
                body: "No sign-in or consent is needed to read.",
                image: pnImg("summary-readable.webp"),
                alt: "Person pointing a pen at charts on a laptop beside a calculator",
              },
            ]}
          />
        </GuideSection>
      </Band>
      <Topics />
      <Band>
        <TilesBesidePhoto
          id="cookies"
          num="04"
          label="Cookies and preferences"
          title="Choices live in their own control."
          lead="The notice explains. Cookie Preferences is a separate control. The notice itself never records consent."
          image={pnImg("cookies-laptop.webp")}
          alt="Hands typing on a laptop showing a monthly budget dashboard"
          tiles={[
            { icon: FileText, tone: "mint", title: "The notice", body: "Explains, never collects." },
            { icon: SlidersHorizontal, tone: "sand", title: "Cookie Preferences", body: "A separate approved control." },
            { icon: X, tone: "mint", title: "No consent here", body: "Reading needs no choice." },
            { icon: Clock, tone: "sand", title: "Pending", body: "Preference surface not connected." },
          ]}
        />
      </Band>
      <TilesBesidePhoto
        id="requests"
        num="05"
        label="Rights and request handoff"
        title={
          <>
            Privacy questions go to the approved
            <br className="hidden md:block" /> route.
          </>
        }
        lead="A descriptive link to the approved handler. No form, upload or case lookup is on this page."
        imageFirst
        imageCol="lg:grid-cols-[minmax(0,555px)_minmax(0,1fr)]"
        image={pnImg("rights-laptop.webp")}
        alt="Man holding a phone while typing on a laptop"
        tiles={[
          { icon: Users, tone: "mint", title: "Rights", body: "Stated by approved notice copy." },
          { icon: FileCheck, tone: "sand", title: "Request route", body: "Pending an approved handler." },
          { icon: EyeOff, tone: "mint", title: "No ID here", body: "Never send identity documents." },
          { icon: X, tone: "sand", title: "No promises", body: "No response time is stated." },
        ]}
      />
      <Band>
        <GuideSection
          id="context"
          num="06"
          label="Account and business context"
          title="Related, but separate."
          lead="Each is a different document or surface."
        >
          <ImageTopGrid
            {...threeCols}
            items={[
              {
                icon: Lock,
                title: "Account context",
                body: "Signed-in privacy settings are separate from this notice.",
                image: pnImg("context-account.webp"),
                alt: "Hands using a laptop while holding a payment card",
              },
              {
                icon: Building2,
                title: "Business context",
                body: "Business and partner terms may add detail. They are not summarized.",
                image: pnImg("context-business.webp"),
                alt: "Hand reaching toward a laptop showing an analytics dashboard",
              },
              {
                icon: Flag,
                title: "Additional disclosures",
                body: "Place for approved regional disclosures. Pending.",
                image: pnImg("context-disclosures.webp"),
                alt: "Laptop showing a financial planning chart beside sticky notes",
              },
            ]}
          />
        </GuideSection>
      </Band>
      <Escalation
        title={
          <>
            Privacy contact details
            <br className="hidden sm:block" /> are not published.
          </>
        }
        lead="Contact and escalation routes appear only when Legal and Privacy approve them."
        primary={{ label: "Privacy questions", href: "#faq" }}
        image={pnImg("escalation-laptop.webp")}
        alt="Woman drinking from a mug while reading on a laptop"
      />
      <TilesBesidePhoto
        id="history"
        num="07"
        label="Change history, print and download"
        title="Past versions and a printable copy."
        lead="Archive links are ordered newest first once approved. Print works from your browser."
        image={pnImg("history-printer.webp")}
        alt="Printer with a sheet of paper in its output tray"
        tiles={[
          { icon: Clock, tone: "mint", title: "Change history", body: "No versions published." },
          { icon: FileText, tone: "sand", title: "Download", body: "Only a version-bound file." },
          <PrintTile key="print" />,
          { icon: CircleCheck, tone: "sand", title: "Accessible", body: "Plain headings and reading order." },
        ]}
      />
      <Band>
        <GuideSection
          id="related"
          num="08"
          label="Related policies and support"
          title="Keep reading."
          lead="Links go live only when each destination is approved."
        >
          {/* Not linked yet: per the design, each link goes live only once its destination is approved. */}
          <ImageTopGrid
            pending
            aspect="aspect-[295/130]"
            items={[
              {
                icon: FileText,
                title: "Terms of Use",
                body: "Website rules.",
                image: pnImg("related-terms-of-use.webp"),
                alt: "Hand holding a pen over a printed page",
              },
              {
                icon: ListChecks,
                title: "Cookie Policy",
                body: "Cookies and similar tools.",
                image: pnImg("related-cookie-policy.webp"),
                alt: "Person signing a document on a clipboard",
              },
              {
                icon: Scale,
                title: "Legal Center",
                body: "Index of legal documents.",
                image: pnImg("related-legal-center.webp"),
                alt: "Business people reviewing a document together at a table",
              },
              {
                icon: Users,
                title: "Help Center",
                body: "Public guidance and routes.",
                image: pnImg("related-help-center.webp"),
                alt: "Smiling support agent wearing a headset",
              },
            ]}
          />
        </GuideSection>
      </Band>
      <PrivacyFAQ />
      <ImageCTA
        id="pn-cta-heading"
        image={pnImg("cta-bg.webp")}
        title={
          <>
            Privacy information,
            <br /> once approved.
          </>
        }
        primary={{ label: "See what the notice will cover", href: "#topics" }}
        secondary={{ label: "Read the FAQ", href: "#faq" }}
      />
    </div>
  );
}
