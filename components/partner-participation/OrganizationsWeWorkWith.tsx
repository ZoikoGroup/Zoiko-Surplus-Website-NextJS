import React from "react";
import { Truck, Recycle, Heart } from "lucide-react";

interface OrganizationCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ORGANIZATION_CARDS: readonly OrganizationCard[] = [
  {
    id: "logistics-providers",
    icon: <Truck className="w-5 h-5 text-[#10B981]" />,
    title: "Logistics providers",
    description:
      "Carriers and 3PLs with capability relevant to surplus movement and handover.",
  },
  {
    id: "recovery-operators",
    icon: <Recycle className="w-5 h-5 text-[#10B981]" />,
    title: "Recovery & recycling operators",
    description:
      "Licensed material-recovery, refurbishment or recycling organizations.",
  },
  {
    id: "charities-recipients",
    icon: <Heart className="w-5 h-5 text-[#10B981]" />,
    title: "Charities & recipients",
    description:
      "Eligible organizations that can receive and account for donated goods.",
  },
] as const;

export default function OrganizationsWeWorkWith() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              03
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              WHO MAY EXPRESS INTEREST
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            The kinds of organizations we may work with.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            Qualified third parties with genuine operational capability in a
            relevant service area. Expressing interest is the first step, not an
            approval.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {ORGANIZATION_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-8 flex flex-col space-y-4 transition-all duration-200 hover:shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-[#E6F4F1] flex items-center justify-center shrink-0">
                {card.icon}
              </div>

              <div className="flex flex-col space-y-2 pt-1">
                <h3 className="text-lg font-bold text-[#1E2126]">
                  {card.title}
                </h3>
                <p className="text-[#4F647A] text-sm leading-relaxed font-normal">
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
