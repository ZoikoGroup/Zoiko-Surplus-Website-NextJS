import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Building2,
  EyeOff,
  FileCheck,
  FileText,
  Globe,
  ListChecks,
  Lock,
  Scale,
  Shield,
  Users,
} from "lucide-react";
import Hero from "@/components/legal-center/Hero";
import DocumentIndex from "@/components/legal-center/DocumentIndex";
import Statuses from "@/components/legal-center/Statuses";
import LegalFAQ from "@/components/legal-center/LegalFAQ";
import ImageCTA from "@/components/for-partners/ImageCTA";
import { GuideSection, ImageTopGrid, PhotoCardGrid, TilesWithPhoto, lcImg } from "@/components/legal-center/shared";

export const metadata: Metadata = {
  title: "Legal Center",
  description:
    "Find legal documents and policy information for Zoiko Surplus: the document index, which document applies, versions and status, and how documents are published.",
};

// Full-width cream band behind one or more sections; the extra padding keeps content clear of the band's edges.
function Band({ children }: { children: ReactNode }) {
  return <div className="bg-[#fffaf6] py-8 md:py-12">{children}</div>;
}

export default function LegalCenterPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <DocumentIndex />
      <Band>
        <GuideSection
          id="which-document"
          num="02"
          label="Which document applies?"
          title="Three steps to the right document."
          lead="Applicability depends on the document's stated scope and terms. A market or language filter does not decide it."
        >
          <ImageTopGrid
            eyebrow="Step"
            aspect="aspect-[401/180]"
            cols="md:grid-cols-3"
            sizes="(min-width: 1024px) 401px, (min-width: 768px) 33vw, 100vw"
            items={[
              {
                icon: FileText,
                title: "Look at the scope",
                body: "Each document states who and what it covers.",
                image: lcImg("applies-scope.webp"),
                alt: "Colleagues reviewing a contract agreement beside a gavel",
              },
              {
                icon: ListChecks,
                title: "Check the version",
                body: "Version, effective date and status matter.",
                image: lcImg("applies-version.webp"),
                alt: "Person using a laptop beside law books and scales of justice",
              },
              {
                icon: Users,
                title: "Ask if unsure",
                body: "Use the help routes. This page gives no legal advice.",
                image: lcImg("applies-ask.webp"),
                alt: "Person holding a pen over a clipboard beside a gavel",
              },
            ]}
          />
        </GuideSection>
      </Band>
      <Statuses />
      <Band>
        <TilesWithPhoto
          id="entities"
          num="04"
          label="Responsible legal entities"
          title={
            <>
              Entities are named by Corporate
              <br className="hidden md:block" /> Information.
            </>
          }
          lead="No entity, address or registration number is shown here until it is confirmed."
          image={lcImg("entities-team.webp")}
          alt="Three colleagues in business attire reading a folder outside an office tower"
          tiles={[
            { icon: Building2, tone: "mint", title: "Entity mapping", body: "Read from the shared registry." },
            { icon: EyeOff, tone: "sand", title: "Nothing unverified", body: "No names or addresses here." },
            { icon: FileCheck, tone: "mint", title: "Per document", body: "Each states its responsible party." },
            { icon: Scale, tone: "sand", title: "Not legal advice", body: "This page only points the way." },
          ]}
        />
      </Band>
      <GuideSection
        id="publishing"
        num="05"
        label="How documents are published"
        title={
          <>
            Four controls before a document
            <br className="hidden md:block" /> appears.
          </>
        }
        lead="Nothing is published without legal approval."
      >
        <PhotoCardGrid
          eyebrow="Step"
          items={[
            {
              icon: Users,
              title: "Draft",
              body: "Written by the owner.",
              image: lcImg("publish-draft.webp"),
              alt: "Hands typing on a laptop beside printed papers",
            },
            {
              icon: Globe,
              title: "Legal approval",
              body: "Counsel signs off.",
              image: lcImg("publish-legal-approval.webp"),
              alt: "Hand stamping an approval seal on a signed document",
            },
            {
              icon: FileCheck,
              title: "Published",
              body: "Version and dates shown.",
              image: lcImg("publish-published.webp"),
              alt: "Man working on a laptop in a wood-panelled office",
            },
            {
              icon: FileText,
              title: "Archived",
              body: "Kept as a previous version.",
              image: lcImg("publish-archived.webp"),
              alt: "Man in glasses working on a laptop in a bright office",
            },
          ]}
        />
      </GuideSection>
      <Band>
        <GuideSection
          id="related"
          num="06"
          label="Related information"
          title="Keep reading."
          lead="Links go live only when each destination is approved."
        >
          {/* Not linked yet: per the design, each link goes live only once its destination is approved. */}
          <ImageTopGrid
            pending
            aspect="aspect-[295/130]"
            items={[
              {
                icon: Lock,
                title: "Privacy Notice",
                body: "Personal information.",
                image: lcImg("related-privacy-notice.webp"),
                alt: "Hand signing a printed Privacy Policy on a clipboard",
              },
              {
                icon: FileText,
                title: "Terms of Use",
                body: "Website rules.",
                image: lcImg("related-terms-of-use.webp"),
                alt: "Pen resting on a document on a clipboard",
              },
              {
                icon: Shield,
                title: "Security & Trust",
                body: "Public security information.",
                image: lcImg("related-security-trust.webp"),
                alt: "Hands holding a contract and a pen over a clipboard",
              },
              {
                icon: Users,
                title: "Accessibility",
                body: "Statement and assistance.",
                image: lcImg("related-accessibility.webp"),
                alt: "Two people reading through the pages of a document",
              },
            ]}
          />
        </GuideSection>
      </Band>
      <LegalFAQ />
      <ImageCTA
        id="lc-cta-heading"
        image={lcImg("cta-bg.webp")}
        title="Find the document you need."
        primary={{ label: "Browse documents", href: "#documents" }}
        secondary={{ label: "Read the FAQ", href: "#faq" }}
      />
    </div>
  );
}
