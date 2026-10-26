import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import PrinciplesRibbon from "@/components/home/PrinciplesRibbon";
import Capabilities from "@/components/home/Capabilities";
import HowItWorks from "@/components/home/HowItWorks";
import SevenStages from "@/components/home/SevenStages";
import SellerPathway from "@/components/home/SellerPathway";
import SellerControl from "@/components/home/SellerControl";
import BuyerPathway from "@/components/home/BuyerPathway";
import Categories from "@/components/home/Categories";
import Trust from "@/components/home/Trust";
import PrivateAccess from "@/components/home/PrivateAccess";
import Global from "@/components/home/Global";
import Lifecycle from "@/components/home/Lifecycle";
import Reporting from "@/components/home/Reporting";
import Resources from "@/components/home/Resources";
import Faq from "@/components/home/Faq";
import ConversionForm from "@/components/home/ConversionForm";
import ClosingCta from "@/components/home/ClosingCta";

export const metadata: Metadata = { title: "Home" };

// The mobile and desktop designs stack a few sections in a different order (Capabilities before
// the principles ribbon, Lifecycle before Private access, the form before the FAQ, ...), so the
// page is a flex column and each section takes its place with `order` (mobile, then md:desktop).
const sections = [
  { key: "hero", Section: Hero, order: "order-1 md:order-1" },
  { key: "principles-ribbon", Section: PrinciplesRibbon, order: "order-2 md:order-3" },
  { key: "capabilities", Section: Capabilities, order: "order-3 md:order-2" },
  { key: "how-it-works", Section: HowItWorks, order: "order-4 md:order-4" },
  { key: "seven-stages", Section: SevenStages, order: "order-5 md:order-5" },
  { key: "seller-pathway", Section: SellerPathway, order: "order-6 md:order-6" },
  { key: "seller-control", Section: SellerControl, order: "order-7 md:order-7" },
  { key: "buyer-pathway", Section: BuyerPathway, order: "order-8 md:order-8" },
  { key: "categories", Section: Categories, order: "order-9 md:order-9" },
  { key: "trust", Section: Trust, order: "order-10 md:order-10" },
  { key: "private-access", Section: PrivateAccess, order: "order-11 md:order-12" },
  { key: "global", Section: Global, order: "order-12 md:order-14" },
  { key: "lifecycle", Section: Lifecycle, order: "order-13 md:order-11" },
  { key: "reporting", Section: Reporting, order: "order-14 md:order-13" },
  { key: "resources", Section: Resources, order: "order-15 md:order-15" },
  { key: "faq", Section: Faq, order: "order-16 md:order-17" },
  { key: "conversion-form", Section: ConversionForm, order: "order-17 md:order-16" },
  { key: "closing-cta", Section: ClosingCta, order: "order-18 md:order-18" },
];

export default function HomePage() {
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
