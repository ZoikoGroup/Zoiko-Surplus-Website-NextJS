import type { Metadata } from "next";
import {
  Hero,
  ThreeMeanings,
  GeographicScope,
  InitialConfiguration,
  CorporateOffices,
  HowMarketsActivate,
  CategoryScope,
  WhereToGoFromHere,
  RoutesNotCountries,
  ContractualBoundaries,
  QuestionsAnsweredPlainly,
  CheckYourMarketBanner,
} from "@/components/where-we-operate";

export const metadata: Metadata = {
  title: "Where We Operate · Zoiko Surplus",
  description:
    "Zoiko Surplus is designed for global use. Actual services are activated market by market, subject to approved categories, corridors and participating organizations.",
};

export default function WhereWeOperatePage() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <ThreeMeanings />
      <GeographicScope />
      <InitialConfiguration />
      <CorporateOffices />
      <HowMarketsActivate />
      <CategoryScope />
      <WhereToGoFromHere />
      <RoutesNotCountries />
      <ContractualBoundaries />
      <QuestionsAnsweredPlainly />
      <CheckYourMarketBanner />
    </div>
  );
}
