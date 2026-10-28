import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Industries from "@/components/about/Industries";
import WhyWeExist from "@/components/about/WhyWeExist";
import WhoWeAre from "@/components/about/WhoWeAre";
import Principles from "@/components/about/Principles";
import Friction from "@/components/about/Friction";
import Platform from "@/components/about/Platform";
import EnterpriseSellers from "@/components/about/EnterpriseSellers";
import SellerControl from "@/components/about/SellerControl";
import SevenStages from "@/components/about/SevenStages";
import Differentiators from "@/components/about/Differentiators";
import CategoryCoverage from "@/components/about/CategoryCoverage";
import TrustSafety from "@/components/about/TrustSafety";
import Outcomes from "@/components/about/Outcomes";
import AboutFaq from "@/components/about/AboutFaq";
import AboutCta from "@/components/about/AboutCta";

export const metadata: Metadata = { title: "About" };

// The desktop and mobile designs differ in two places: "Why we exist" and "Who we are" swap places,
// and "The friction" exists only on mobile. The page is a flex column and sections take their place
// with `order` (mobile, then md:desktop).
const sections = [
  { key: "hero", Section: AboutHero, order: "order-1 md:order-1" },
  { key: "industries", Section: Industries, order: "order-2 md:order-2" },
  { key: "who-we-are", Section: WhoWeAre, order: "order-3 md:order-4" },
  { key: "why-we-exist", Section: WhyWeExist, order: "order-4 md:order-3" },
  { key: "principles", Section: Principles, order: "order-5 md:order-5" },
  { key: "friction", Section: Friction, order: "order-6 md:order-6" },
  { key: "platform", Section: Platform, order: "order-7 md:order-7" },
  { key: "enterprise-sellers", Section: EnterpriseSellers, order: "order-8 md:order-8" },
  { key: "seller-control", Section: SellerControl, order: "order-9 md:order-9" },
  { key: "seven-stages", Section: SevenStages, order: "order-10 md:order-10" },
  { key: "differentiators", Section: Differentiators, order: "order-11 md:order-11" },
  { key: "category-coverage", Section: CategoryCoverage, order: "order-12 md:order-12" },
  { key: "trust-safety", Section: TrustSafety, order: "order-13 md:order-13" },
  { key: "outcomes", Section: Outcomes, order: "order-14 md:order-14" },
  { key: "faq", Section: AboutFaq, order: "order-15 md:order-15" },
  { key: "cta", Section: AboutCta, order: "order-16 md:order-16" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {sections.map(({ key, Section, order }) => (
        <div key={key} className={order}>
          <Section />
        </div>
      ))}
    </div>
  );
}
