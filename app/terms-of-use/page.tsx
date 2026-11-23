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
  Truck,
  Users,
  X,
} from "lucide-react";
import Hero from "@/components/terms-of-use/Hero";
import Topics from "@/components/terms-of-use/Topics";
import Escalation from "@/components/terms-of-use/Escalation";
import PrintTile from "@/components/terms-of-use/PrintTile";
import TermsFAQ from "@/components/terms-of-use/TermsFAQ";
import ImageCTA from "@/components/for-partners/ImageCTA";
import { GuideSection, ImageTopGrid, TilesBesidePhoto, touImg } from "@/components/terms-of-use/shared";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Find and read the terms that apply to using Zoiko Surplus: version and scope, what the terms will cover, acceptance, contact routes and change history.",
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

export default function TermsOfUsePage() {
  return (
    // `print-page` scopes the print rule in globals.css that hides the site header and footer.
    <div className="print-page flex flex-col bg-white">
      <Hero />
      <TilesBesidePhoto
        id="version"
        num="01"
        label="Version, dates and scope"
        title="Which terms apply to you?"
        lead="Version, effective date and scope come from approved records. None exist on this preview."
        imageFirst
        aspect="aspect-[527/476]"
        image={touImg("version-infographic.webp")}
        alt="Laptop showing an infographic with a line chart"
        intro={
          <div className="flex flex-col gap-2">
            <label htmlFor="tou-applicability" className="text-sm font-semibold text-[#0f1f3a]">
              Applicability
            </label>
            <select
              id="tou-applicability"
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
          { icon: Globe, tone: "sand", title: "Scope", body: "Stated by the terms themselves." },
        ]}
      />
      <Band>
        <GuideSection
          id="summary"
          num="02"
          label="At-a-glance summary"
          title="Summary and other agreements."
          lead="Nothing is summarized here, because no terms text exists yet."
        >
          <ImageTopGrid
            {...threeCols}
            items={[
              {
                icon: ListChecks,
                title: "Plain summary",
                body: "A short summary, if Legal approves one. It never replaces the full terms.",
                image: touImg("summary-plain.webp"),
                alt: "Hands sorting printed reports and charts on a desk",
              },
              {
                icon: FileCheck,
                title: "Other agreements",
                body: "Separate agreements may apply. They are not summarized here.",
                image: touImg("summary-other-agreements.webp"),
                alt: "One person handing a folder to another across a desk",
              },
              {
                icon: Users,
                title: "Open to read",
                body: "No sign-in is needed to read.",
                image: touImg("summary-open-to-read.webp"),
                alt: "Hands flipping through clipped paper files",
              },
            ]}
          />
        </GuideSection>
      </Band>
      <Topics />
      <Band>
        <TilesBesidePhoto
          id="acceptance"
          num="04"
          label="Acceptance"
          title="Reading is not accepting."
          lead="A page visit, scroll, download or locale choice is not acceptance, and it is not permission to trade."
          image={touImg("acceptance-reading.webp")}
          alt="Person in a blue shirt reading printed pages at a desk"
          tag="Illustrative imagery"
          tiles={[
            { icon: EyeOff, tone: "mint", title: "Visit", body: "Not acceptance." },
            { icon: FileText, tone: "sand", title: "Download", body: "Not acceptance." },
            { icon: Globe, tone: "mint", title: "Locale choice", body: "Not permission to trade." },
            { icon: Lock, tone: "sand", title: "Real acceptance", body: "Only through an approved flow, not here." },
          ]}
        />
      </Band>
      <TilesBesidePhoto
        id="contact"
        num="05"
        label="Contact and reporting"
        title={
          <>
            Questions and concerns go to
            <br className="hidden md:block" /> approved routes.
          </>
        }
        lead="This page has no form, upload or case lookup. It points to approved routes only."
        imageFirst
        image={touImg("contact-laptop.webp")}
        alt="Person pointing at a tablet beside a laptop and notebooks"
        tiles={[
          { icon: Users, tone: "mint", title: "Contact Support", body: "Pending approved route." },
          { icon: Flag, tone: "sand", title: "Report a Concern", body: "For concerns, not terms disputes." },
          { icon: EyeOff, tone: "mint", title: "No private data", body: "Do not send sensitive details." },
          { icon: X, tone: "sand", title: "No promises", body: "No response time is stated." },
        ]}
      />
      <Band>
        <GuideSection
          id="agreements"
          num="06"
          label="Separate agreements"
          title="Other agreements may apply."
          lead="These terms do not replace them."
        >
          <ImageTopGrid
            {...threeCols}
            items={[
              {
                icon: Building2,
                title: "Seller agreements",
                body: "Separate agreements may apply. Not summarized.",
                image: touImg("agreement-seller.webp"),
                alt: "Two business people shaking hands",
              },
              {
                icon: Users,
                title: "Buyer terms",
                body: "Separate terms may apply. Not summarized.",
                image: touImg("agreement-buyer.webp"),
                alt: "Two women reviewing a clipboard in a stockroom of parcels",
              },
              {
                icon: Truck,
                title: "Partner agreements",
                body: "Contract and scope govern. Not summarized.",
                image: touImg("agreement-partner.webp"),
                alt: "Businessman with a clipboard greeting a man outside a building",
              },
            ]}
          />
        </GuideSection>
      </Band>
      <Escalation
        title={
          <>
            Notice and contact
            <br className="hidden sm:block" /> details are not published.
          </>
        }
        lead="Contact and notice routes appear only when Legal approves them."
        primary={{ label: "Questions about terms", href: "#faq" }}
        image={touImg("escalation-final-notice.webp")}
        alt="Envelope stamped Final Notice on a desk beside a pen and laptop"
      />
      <TilesBesidePhoto
        id="history"
        num="07"
        label="Change history, print and download"
        title="Past versions and a printable copy."
        lead="Archive links are ordered newest first once approved. Print works from your browser."
        image={touImg("history-printer.webp")}
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
            aspect="aspect-[303/130]"
            items={[
              {
                icon: Lock,
                title: "Privacy Notice",
                body: "Personal information.",
                image: touImg("related-privacy-notice.webp"),
                alt: "Hand holding a pen over a printed page",
              },
              {
                icon: ListChecks,
                title: "Cookie Policy",
                body: "Cookies and similar tools.",
                image: touImg("related-cookie-policy.webp"),
                alt: "Person signing a document on a clipboard",
              },
              {
                icon: Scale,
                title: "Legal Center",
                body: "Index of legal documents.",
                image: touImg("related-legal-center.webp"),
                alt: "Business people reviewing a document together at a table",
              },
              {
                icon: Users,
                title: "Help Center",
                body: "Public guidance and routes.",
                image: touImg("related-help-center.webp"),
                alt: "Smiling support agent wearing a headset",
              },
            ]}
          />
        </GuideSection>
      </Band>
      <TermsFAQ />
      <ImageCTA
        id="tou-cta-heading"
        image={touImg("cta-bg.webp")}
        title="Terms, once approved."
        primary={{ label: "See what the terms will cover", href: "#topics" }}
        secondary={{ label: "Read the FAQ", href: "#faq" }}
      />
    </div>
  );
}
