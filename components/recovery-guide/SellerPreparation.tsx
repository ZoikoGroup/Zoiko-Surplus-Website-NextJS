import Image from "next/image";
import {
  ClipboardCheck,
  Clock,
  FileCheck,
  Globe,
  ListChecks,
  MapPin,
  Package,
  Search,
  TriangleAlert,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { Container, SectionHeading, SandTile, hanken, img } from "./shared";

const things: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: ListChecks, title: "Category and description", body: "Precise, from a controlled taxonomy." },
  { icon: Package, title: "Quantity and units", body: "Unit, reconciliation method, uncertainty." },
  { icon: Search, title: "Condition and defects", body: "Structured grade with records." },
  { icon: MapPin, title: "Location", body: "Country and site type. Detail stays private." },
  { icon: FileCheck, title: "Ownership and rights", body: "Entitlement and brand limits." },
  { icon: TriangleAlert, title: "Safety and recalls", body: "Known hazards and documents." },
  { icon: Clock, title: "Shelf life and storage", body: "Only where relevant." },
  { icon: Truck, title: "Packaging and handling", body: "Dimensions and palletization." },
  { icon: Globe, title: "Market and corridor", body: "Approved destination, not the locale selector." },
  { icon: ClipboardCheck, title: "Evidence readiness", body: "Source documents and custody records." },
];

export default function SellerPreparation() {
  return (
    <section id="preparation" aria-labelledby="preparation-heading" className={`${hanken} scroll-mt-28 py-8 md:py-12`}>
      <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-10">
          <SectionHeading
            id="preparation-heading"
            num="04"
            label="Seller preparation"
            title="Know these ten things about your stock."
            lead="This checklist is educational. Nothing is submitted here, and private details stay in approved private workflows."
          />
          <div className="relative aspect-[596/449] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={img("preparation.webp")}
              alt="Wide warehouse with tall racking"
              fill
              sizes="(min-width: 1024px) 596px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2 lg:mt-24">
          {things.map((t) => (
            <li
              key={t.title}
              className="flex items-start gap-3 rounded-xl border border-[#e6e9ef] bg-white p-4 shadow-[0_6px_20px_-14px_rgba(12,33,64,0.25)]"
            >
              <SandTile icon={t.icon} size="sm" />
              <div className="flex flex-col gap-0.5">
                <h3 className="text-base font-semibold text-[#0f1f3a]">{t.title}</h3>
                <p className="text-sm leading-6 text-[#556987]">{t.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
