import Image from "next/image";
import { ReceiptText, Shield, Truck, Users } from "lucide-react";
import { CornerIcon, GuideSection, fvbImg, sora, type PhotoCardItem } from "./shared";

const parties: PhotoCardItem[] = [
  {
    icon: Users,
    title: "Buyer",
    body: "Verified, eligible, invited and authorized for each action.",
    image: fvbImg("party-buyer.webp"),
    alt: "Shop worker sorting clothes at a busy store counter",
  },
  {
    icon: ReceiptText,
    title: "Seller",
    body: "Decides audience, route and terms for its own goods.",
    image: fvbImg("party-seller.webp"),
    alt: "Two colleagues reviewing paperwork at an office desk",
  },
  {
    icon: Shield,
    title: "Platform",
    body: "Coordinates controls. Not the seller, carrier or bank by default.",
    image: fvbImg("party-platform.webp"),
    alt: "Large warehouse hall with racking",
  },
  {
    icon: Truck,
    title: "Partner and payment provider",
    body: "Act only under approved mandates and contracts.",
    image: fvbImg("party-partner.webp"),
    alt: "Cars parked in a vehicle showroom",
  },
];

export default function Parties() {
  return (
    <GuideSection
      id="parties"
      num="09"
      label="Rights and responsibilities"
      title="Four parties. Distinct legal roles."
      lead="Roles come from signed contracts and approved terms, not from this page."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {parties.map((p, i) => (
          <li key={p.title} className="flex flex-col overflow-hidden rounded-2xl bg-[#0d2040]">
            <div className="relative aspect-[302/190] w-full bg-[#16263f]">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 302px, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <CornerIcon icon={p.icon} />
            </div>
            <div className="flex flex-1 flex-col gap-1 p-4 pb-6">
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#5fd0ad]">Party {i + 1}</span>
              <h3 className={`${sora} text-xl font-semibold leading-6 text-white`}>{p.title}</h3>
              <p className="text-sm leading-6 text-[#d5dceb]">{p.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
