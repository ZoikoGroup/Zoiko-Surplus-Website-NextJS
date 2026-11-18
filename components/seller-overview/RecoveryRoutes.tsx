import { CircleDollarSign, Clock, FileText, Flag, Leaf, Network, Truck } from "lucide-react";
import ImageWithTiles from "@/components/category-eligibility/ImageWithTiles";
import { GuideSection, ImageTopGrid, soImg, type PhotoCardItem, type TileCardItem } from "./shared";

const routes: PhotoCardItem[] = [
  {
    icon: CircleDollarSign,
    title: "Resale",
    body: "Private business buyers, where the market is active.",
    image: soImg("route-resale.webp"),
    alt: "Shop staff sorting clothing at a counter",
  },
  {
    icon: Network,
    title: "Redistribution",
    body: "To verified recipients, where permitted.",
    image: soImg("route-redistribution.webp"),
    alt: "Worker checking a clipboard beside parcels",
  },
  {
    icon: Leaf,
    title: "Donation or recovery",
    body: "Only where separately permitted. No outcome is promised.",
    image: soImg("route-donation.webp"),
    alt: "Two volunteers packing food into a donation box",
  },
];

const variables: TileCardItem[] = [
  { icon: CircleDollarSign, tone: "mint", title: "Net recovery", body: "What you could keep after costs. No figure is shown." },
  { icon: Clock, tone: "sand", title: "Time", body: "How long a route could take." },
  { icon: FileText, tone: "mint", title: "Fees", body: "What is charged, under contract." },
  { icon: Truck, tone: "sand", title: "Transport", body: "Who moves goods, by what mandate." },
  { icon: Flag, tone: "mint", title: "Failure and evidence", body: "What happens if it fails, and what is recorded." },
];

export default function RecoveryRoutes() {
  return (
    <GuideSection
      id="recovery-choices"
      num="08"
      label="Recovery choices and variables"
      title={
        <>
          Several routes. Compare
          <br className="hidden md:block" /> on variables, not promises.
        </>
      }
      lead="Only permitted routes are compared. No margin, return rate or recovery guarantee is stated."
    >
      <div className="flex flex-col gap-7">
        <ImageTopGrid
          eyebrow="Route"
          items={routes}
          aspect="aspect-[401/180]"
          cols="md:grid-cols-3"
          sizes="(min-width: 1024px) 401px, (min-width: 768px) 33vw, 100vw"
        />
        <ImageWithTiles
          imageSide="left"
          aspect="aspect-[555/505]"
          tiles={variables}
          image={soImg("recovery-variables.webp")}
          alt="Man writing notes beside his laptop"
        />
      </div>
    </GuideSection>
  );
}
