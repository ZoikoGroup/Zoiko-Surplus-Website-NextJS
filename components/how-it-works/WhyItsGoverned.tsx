import React from "react";
import { Network, ShieldCheck, FolderCheck } from "lucide-react";

interface GovernedCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GOVERNED_CARDS: readonly GovernedCard[] = [
  {
    id: "connected-sequence",
    icon: <Network className="w-5 h-5 text-[#10B981]" />,
    title: "A connected sequence",
    description:
      "Qualification, demand and disposition share one backbone — the output of one stage becomes the trusted input of the next.",
  },
  {
    id: "governed-not-open",
    icon: <ShieldCheck className="w-5 h-5 text-[#10B981]" />,
    title: "Governed, not open",
    description:
      "Policy, safety and eligibility gate every step. Nothing is listed publicly, and permitted routes are shaped before anything is ranked.",
  },
  {
    id: "evidenced-not-assumed",
    icon: <FolderCheck className="w-5 h-5 text-[#10B981]" />,
    title: "Evidenced, not assumed",
    description:
      "Decisions and outcomes are recorded, with defined routes when something changes or goes wrong.",
  },
] as const;

export default function WhyItsGoverned() {
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
              WHY IT'S GOVERNED
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            A connected sequence — not a public classifieds wall.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            The whole point of the path is governance: connected stages,
            controls before matching, and evidence throughout.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {GOVERNED_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-8 flex flex-col space-y-4 transition-all duration-200 hover:shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E6F4F1] flex items-center justify-center shrink-0">
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
