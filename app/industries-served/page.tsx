import type { Metadata } from "next";
import Hero from "@/components/industries-served/Hero";
import IndustryCoverageMeaning from "@/components/industries-served/IndustryCoverageMeaning";
import SectorOverview from "@/components/industries-served/SectorOverview";
import SectorApparel from "@/components/industries-served/SectorApparel";
import SectorFood from "@/components/industries-served/SectorFood";
import SectorElectronics from "@/components/industries-served/SectorElectronics";
import SectorHome from "@/components/industries-served/SectorHome";
import SectorIndustrial from "@/components/industries-served/SectorIndustrial";
import CrossSectorQualification from "@/components/industries-served/CrossSectorQualification";
import SevenStages from "@/components/industries-served/SevenStages";
import GeographicControls from "@/components/industries-served/GeographicControls";
import ProofDiscipline from "@/components/industries-served/ProofDiscipline";
import NextSteps from "@/components/industries-served/NextSteps";
import IndustriesFAQ from "@/components/industries-served/IndustriesFAQ";
import IndustriesCTA from "@/components/industries-served/IndustriesCTA";

export const metadata: Metadata = {
  title: "Industries Served · Zoiko Surplus",
  description:
    "Explore how surplus disposition needs differ across product sectors, from apparel and household goods to specialized business inventory.",
};

export default function IndustriesServedPage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <IndustryCoverageMeaning />
      <SectorOverview />
      <SectorApparel />
      <SectorFood />
      <SectorElectronics />
      <SectorHome />
      <SectorIndustrial />
      <CrossSectorQualification />
      <SevenStages />
      <GeographicControls />
      <ProofDiscipline />
      <NextSteps />
      <IndustriesFAQ />
      <IndustriesCTA />
    </div>
  );
}
