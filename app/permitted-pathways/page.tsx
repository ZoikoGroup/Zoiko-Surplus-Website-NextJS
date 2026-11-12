import type { Metadata } from "next";
import Hero from "@/components/permitted-pathways/Hero";
import AvailabilityNote from "@/components/permitted-pathways/AvailabilityNote";
import PathwaySelector from "@/components/permitted-pathways/PathwaySelector";
import PathwayDetails from "@/components/permitted-pathways/PathwayDetails";
import CategoryMatrix from "@/components/permitted-pathways/CategoryMatrix";
import SellerAuthorization from "@/components/permitted-pathways/SellerAuthorization";
import RoleMatrix from "@/components/permitted-pathways/RoleMatrix";
import EvidenceLedger from "@/components/permitted-pathways/EvidenceLedger";
import PermittedFirst from "@/components/permitted-pathways/PermittedFirst";
import Exceptions from "@/components/permitted-pathways/Exceptions";
import Related from "@/components/permitted-pathways/Related";
import PathwaysFAQ from "@/components/permitted-pathways/PathwaysFAQ";
import FinalCTA from "@/components/permitted-pathways/FinalCTA";

export const metadata: Metadata = {
  title: "Permitted Pathways",
  description:
    "Permitted pathways coordinate eligible third-party routes under seller authorization and applicable category, market and policy controls. Participation is reviewed, not guaranteed.",
};

export default function PermittedPathwaysPage() {
  return (
    <div className="flex flex-col bg-[#fafbfd]">
      <Hero />
      <AvailabilityNote />
      <PathwaySelector />
      <PathwayDetails />
      <CategoryMatrix />
      <SellerAuthorization />
      <RoleMatrix />
      <EvidenceLedger />
      <PermittedFirst />
      <Exceptions />
      <Related />
      <PathwaysFAQ />
      <FinalCTA />
    </div>
  );
}
