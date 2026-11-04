import React from "react";
import Image from "next/image";
import { Truck, ClipboardCheck, Recycle, Heart } from "lucide-react";

interface PathwayCard {
  id: string;
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PATHWAY_CARDS: readonly PathwayCard[] = [
  {
    id: "logistics",
    imageSrc: "/images/part/2.png",
    imageAlt: "Logistics & transport handover",
    icon: <Truck className="w-4 h-4 text-[#1E2126]" />,
    title: "Logistics & transport",
    description:
      "Coordinate collection, transport and handover where a route needs movement.",
  },
  {
    id: "inspection",
    imageSrc: "/images/part/3.png",
    imageAlt: "Inspection & grading in warehouse",
    icon: <ClipboardCheck className="w-4 h-4 text-[#1E2126]" />,
    title: "Inspection & grading",
    description:
      "Provide independent inspection or grading that a route may require.",
  },
  {
    id: "recovery",
    imageSrc: "/images/part/4.png",
    imageAlt: "Recovery & recycling bin",
    icon: <Recycle className="w-4 h-4 text-[#1E2126]" />,
    title: "Recovery & recycling",
    description: "Operate permitted material-recovery or recycling services.",
  },
  {
    id: "donation",
    imageSrc: "/images/part/5.png",
    imageAlt: "Donation & redistribution box handover",
    icon: <Heart className="w-4 h-4 text-[#1E2126]" />,
    title: "Donation & redistribution",
    description:
      "Receive or redistribute eligible goods as an approved recipient.",
  },
] as const;

export default function PartnerPathways() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              02
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              ILLUSTRATIVE PARTNER PATHWAYS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            Services a partner might provide.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            Illustrative service classes only — each is permitted,
            market-dependent and contracted. Nothing here confirms an active
            need, volume or assignment.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {PATHWAY_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:shadow-sm"
            >
              {/* Image Container with Floating Icon */}
              <div className="relative w-full h-48 bg-gray-100">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Floating Icon Badge */}
                <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white shadow-md flex items-center justify-center border border-gray-100">
                  {card.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col space-y-2 flex-grow justify-start">
                <h3 className="text-base font-bold text-[#1E2126]">
                  {card.title}
                </h3>
                <p className="text-[#4F647A] text-xs leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
