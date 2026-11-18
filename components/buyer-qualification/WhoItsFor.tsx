import { Building, Globe, Lock, Network, Users } from "lucide-react";
import { AudienceGrid, GuideSection, img, type AudienceItem } from "./shared";

const audiences: AudienceItem[] = [
  {
    icon: Building,
    title: "Prospective buyer",
    body: "An organization deciding whether it should apply.",
    image: img("audience-prospective-buyer.webp"),
    alt: "Colleagues organizing boxes on stockroom shelves",
  },
  {
    icon: Lock,
    title: "Enterprise seller",
    body: "Wants to know if approved buyers see goods automatically. They do not.",
    image: img("audience-enterprise-seller.webp"),
    alt: "Two colleagues reviewing a laptop in a warehouse",
  },
  {
    icon: Network,
    title: "Partnership team",
    body: "Needs to explain staged participation to counterparties.",
    image: img("audience-partnership.webp"),
    alt: "Courier checking a delivery against a clipboard",
  },
  {
    icon: Globe,
    title: "International visitor",
    body: "Language or region choice does not activate eligibility.",
    image: img("audience-international.webp"),
    alt: "Three colleagues reviewing stock on warehouse shelving",
  },
  {
    icon: Users,
    title: "Needs help",
    body: "Accessible support routes exist if the process is hard to complete.",
    image: img("audience-needs-help.webp"),
    alt: "Hands typing on a laptop",
  },
];

export default function WhoItsFor() {
  return (
    <GuideSection
      id="who"
      num="02"
      label="Who this guide is for"
      title={
        <>
          Organizations, not individual
          <br className="hidden md:block" /> shoppers.
        </>
      }
      lead="Qualification is for business buyers. This is not a consumer shop."
    >
      <AudienceGrid items={audiences} />
    </GuideSection>
  );
}
