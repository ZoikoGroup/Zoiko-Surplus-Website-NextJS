import React from "react";
import { CheckCircle2, Sliders, X } from "lucide-react";

interface ParticipationCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PARTICIPATION_CARDS: readonly ParticipationCard[] = [
  {
    id: "invitation",
    icon: <CheckCircle2 className="w-5 h-5 text-[#10B981]" />,
    title: "An invitation to qualify",
    description:
      "Participation is a governed relationship you may apply for — not an open sign-up, and not automatic once you apply.",
  },
  {
    id: "scoped",
    icon: <Sliders className="w-5 h-5 text-[#10B981]" />,
    title: "Scoped by approval",
    description:
      "A partner operates only within the services, markets and categories they've been verified and contracted for.",
  },
  {
    id: "not-ownership",
    icon: <X className="w-5 h-5 text-[#10B981]" />,
    title: "Not ownership or custody",
    description:
      "A partner performs authorized services; it does not gain title to the goods or a claim on inventory by participating.",
  },
] as const;

export default function WhatParticipationMeans() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              01
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              WHAT PARTICIPATION MEANS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            Participation is a qualified, scoped relationship.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            It’s a governed way for authorized service organizations to support
            seller-approved routes — within clear limits, and only after
            approval.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {PARTICIPATION_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-8 flex flex-col space-y-4 transition-all duration-200 hover:shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-[#E6F4F1] flex items-center justify-center shrink-0">
                {card.icon}
              </div>

              <div className="flex flex-col space-y-2 pt-1">
                <h3 className="text-lg font-bold text-[#0D1F38]">
                  {card.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed font-normal">
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
